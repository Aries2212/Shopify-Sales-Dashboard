import fs from 'node:fs';import{parse}from'csv-parse';import admin from'firebase-admin';
const CSV_PATH=process.env.CSV_PATH||'./sales.csv',key=process.env.GOOGLE_APPLICATION_CREDENTIALS;
if(!key)throw Error('Set GOOGLE_APPLICATION_CREDENTIALS to your service-account JSON path.');if(!fs.existsSync(CSV_PATH))throw Error(`CSV not found: ${CSV_PATH}`);
admin.initializeApp({credential:admin.credential.cert(JSON.parse(fs.readFileSync(key,'utf8'))),projectId:'shopify-sales-dashboard-292e7'});const db=admin.firestore(),parser=fs.createReadStream(CSV_PATH).pipe(parse({columns:true,skip_empty_lines:true,bom:true,trim:true}));let batch=db.batch(),pending=0,total=0;
for await(const row of parser){batch.set(db.collection('sales_orders').doc(),row);pending++;total++;if(pending===400){await batch.commit();console.log(`Uploaded ${total}`);batch=db.batch();pending=0}}if(pending)await batch.commit();console.log(`Complete: ${total} records uploaded.`);
