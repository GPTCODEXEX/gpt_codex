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
