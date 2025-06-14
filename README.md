# Simple Shop Website

This repository contains a simple shopping cart example. The original static implementation using plain HTML, CSS and JavaScript is kept for reference, while a modern React + Vite version lives in the `frontend` directory.

## Running Locally (React)

To start the React development server run:

```bash
cd frontend
npm install
npm run dev
```

Open the URL printed in the terminal (usually <http://localhost:5173>) to view the shop.

## Legacy Static Files

If you prefer the old static version you can still open `index.html` directly or serve it with:

```bash
python3 -m http.server
```

Then navigate to `http://localhost:8000`.

## Deploying to GitHub Pages

This repository contains a GitHub Actions workflow that automatically builds the React app and publishes it to **GitHub Pages** whenever changes are pushed to the `main` branch. After merging your changes, enable Pages in the repository settings and select the `GitHub Actions` option to host the site.

