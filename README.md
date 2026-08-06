# Supply & Demand Chapter Prototype

Vite + React + TypeScript mock of a digital textbook chapter — **Chapter 3: Demand and Supply**.

Layout: sticky **chapter menu (TOC)** on the left (~1/3) and a **book reading pane** on the right (~2/3).

## Run locally

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

```bash
npm run build    # production build
npm run preview  # preview the build
```

## Structure

| Path | Role |
|------|------|
| `src/App.tsx` | Shell: TOC + book pane |
| `src/data/chapter.ts` | Chapter copy, outline, TOC, model slots |
| `src/components/` | Opener, objectives, intro, outline, models |
| `src/assets/avo.jpg` | Chapter hero image (800×526) |
| `src/index.css` | Design tokens + base styles |

## Design notes

- Typography: **Sora** (UI) + **Newsreader** (body)
- Palette: textbook blue, teal title, crimson objective accents
- Hero stays inside the book pane so it is not full-viewport stretched
- Model slots are placeholders only — no live graph engines yet

## Out of scope (this proto)

- Working supply/demand interactives
- Multi-chapter routing / CMS
