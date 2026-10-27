# E-Waste Management — Academic Portfolio & Digital Hub

Academic portfolio for **E-Waste Management** by **Shubham Vaidya** (Roll No: `24102A0059`, Branch: `CMPN A`).

A centralized digital repository that brings together live web applications, laboratory practicals, research papers, compliance trackers, presentation decks, and institutional document archives.

---

## 🌐 Live Projects Featured

1. **Assam E-Waste Watch**: State-level e-waste generation, collection, recycling infrastructure, and district monitoring intelligence platform.
2. **E-Waste Compliance & Tracker (Project 2)**: Interactive analytics and compliance tracker.
3. **E-Waste Analytics Platform**: In-depth environmental metrics, material recovery statistics, and interactive charts.
4. **E-Waste Resource & Circularity Portal (Project 4)**: Circular economy, EPR policies, and electronics recycling portal.

---

## 📂 Repository Structure

- `dashboard/`: React + Vite + TailwindCSS application containing the full portfolio website.
- `documents/`: Original academic source files (PDFs, DOCX reports, XLSX trackers, PPTX decks, posters).
- `dashboard/public/resources/`: Publicly downloadable and viewable versions of all academic materials.

---

## 🚀 Local Development

```bash
cd dashboard
npm install
npm run dev
```

The application will be live at `http://localhost:5173/`.

---

## ☁️ Deploying to Vercel

### Option 1 (Automatic via Root):
- Import this GitHub repository into Vercel.
- The root `vercel.json` and `package.json` will automatically build the `dashboard/` directory.

### Option 2 (Vercel Root Directory Setting):
- If preferred, in the Vercel project settings, set **Root Directory** to `dashboard`.
- Build Command: `npm run build`
- Output Directory: `dist`
