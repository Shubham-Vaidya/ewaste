# E-Waste Management Portfolio Dashboard

Academic portfolio dashboard for **E-Waste Management** — Shubham Vaidya (24102A0059, CMPN A).

## 🚀 Local Development

```bash
cd dashboard
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## 🏗️ Production Build

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
ewaste/
├── documents/              ← Original academic files (unchanged)
│   ├── *.pdf
│   ├── *.xlsx
│   ├── *.pptx
│   ├── *.docx
│   ├── *.png / *.jpg
│   └── ewaste_project_links.txt
│
└── dashboard/              ← React app
    ├── public/
    │   └── resources/      ← Copies of academic files for public access
    │       ├── pdfs/
    │       ├── spreadsheets/
    │       ├── presentations/
    │       ├── docs/
    │       └── images/
    ├── src/
    │   ├── components/     ← Layout, ResourceCard, ProjectCard, FileTypeBadge
    │   ├── data/           ← projects.ts, experiments.ts, resources.ts, student.ts
    │   ├── pages/          ← Overview, Projects, Experiments, Documents, Presentations, About
    │   └── types/          ← index.ts (TypeScript interfaces)
    ├── vercel.json         ← SPA routing for Vercel
    └── README.md
```

## ➕ Adding New Resources

1. Add the original file to `documents/` (preserve original filename).
2. Copy it into the appropriate `public/resources/<type>/` folder.
3. Add an entry in `src/data/resources.ts` with the correct `filePath` and `downloadUrl`.
4. Optionally link it to a project (`projectId`) or experiment (`experimentId`).

## ➕ Adding New Projects

Edit `src/data/projects.ts` — each project needs at minimum `id`, `title`, `description`, `liveUrl`, and `resourceIds`.

## 🚢 Deploy to Vercel

### Option A — Vercel CLI

```bash
npm i -g vercel
vercel --cwd dashboard
```

### Option B — GitHub + Vercel Dashboard

1. Push the `ewaste` folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → New Project → Import Repository.
3. Set **Root Directory** to `dashboard`.
4. Set **Build Command** to `npm run build`.
5. Set **Output Directory** to `dist`.
6. Click Deploy.

The `vercel.json` inside `dashboard/` handles SPA client-side routing automatically.

## 🛠️ Tech Stack

- React 18 + TypeScript
- Vite 6
- Tailwind CSS v4 (@tailwindcss/vite)
- React Router v7
- Lucide React icons
