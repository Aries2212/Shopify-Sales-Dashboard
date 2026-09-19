# Shopify Sales Intelligence Dashboard

React 18, Vite 5, Tailwind CSS 3 and Firebase Firestore.

## Setup

1. Copy `.env.example` to `.env`; add Firebase web app values from Project settings.
2. Replace the placeholder in `public/config.json` if Gemini is needed. Browser keys are public; use a server proxy in production.
3. Run `npm install` and `npm run dev`.
4. Run `firebase deploy --only firestore:rules` to publish the included public-read/write-denied rules.

## CSV upload

Never commit the CSV or service-account key. Run `GOOGLE_APPLICATION_CREDENTIALS=/absolute/path/service-account.json npm run upload`. Set `CSV_PATH=/path/file.csv` for another filename. Rows stream into `sales_orders` in batches of 400.

## GitHub Pages

Push to `main`, then choose Settings → Pages → Source → GitHub Actions. The workflow uses Node 20, `npm install`, builds `dist`, and deploys it.

## Behavior and security

- Firestore is limited to 10,000 documents and demo data renders during loading.
- Filters affect KPIs, charts, the 12-row paginated table, and Gemini context.
- Public Firestore is read-only. Browser add/edit/delete is session-local; persistent writes use the Admin uploader.
- Gemini sees filtered KPIs, top SKUs, cities, filters, and matching count only.
