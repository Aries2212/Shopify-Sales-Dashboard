import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'REPLACE_WITH_FIREBASE_WEB_API_KEY',
  authDomain: 'shopify-sales-dashboard-292e7.firebaseapp.com',
  projectId: 'shopify-sales-dashboard-292e7',
  storageBucket: 'shopify-sales-dashboard-292e7.appspot.com',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '',
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
