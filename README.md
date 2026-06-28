# The Chosen Man — Dating Funnel

A complete, ready-to-launch dating-advice funnel for the "successful men seeking a quality relationship" niche — modeled on the same Reel → Quiz → Product structure as the reference funnel.

```
Reel  →  Quiz landing page (.com)  →  Email capture  →  $29 product (Lava Top)
```

Everything here is finished and editable. Swap in your name, your links, and your domain, and you're live.

---

## What's in this repo

| Path | What it is |
|------|------------|
| **`site/index.html`** | The lead-magnet **quiz funnel** — a self-contained 3-minute test ("Why Are You Still Single? Find Your #1 Invisible Dealbreaker"). Scores the visitor across 7 patterns, captures their email, reveals a personalized diagnosis, and sells the product. One file, no build step. |
| **`product/The-Chosen-Man.pdf`** | The **paid product** — a 36-page, genuinely useful system (the 7 patterns, frame, the first-date system, texting, qualification, a 30-day plan, and field-tool appendices). This is what buyers download. |
| **`product/the-chosen-man.html`** | Editable source for the PDF. Change the text, re-render (below). |
| **`sales/cover-1160x464.png`** | **Lava Top cover image**, exactly 1160×464 px. (`...@2x.png` is a hi-res spare.) |
| **`sales/cover.html`** | Editable source for the cover. |
| **`sales/lavatop-sales-page.md`** | Copy-paste **sales-page text** for Lava Top (title, description, bullets), price $29. |
| **`build/render.js`** | Regenerates the PDF and the cover from their HTML sources. |

---

## Launch in 3 steps

### 1. Put the quiz online (the `.com`)
`site/index.html` is a single static file — host it anywhere:
- **Netlify / Vercel / Cloudflare Pages:** drag-and-drop the `site/` folder, or connect this repo.
- **GitHub Pages:** serve the `site/` folder.
- Point your domain at it (e.g. `whyareyoustillsingle.com` or a quiz subdomain), just like the reference `datingquizby….` page.

**Before you deploy, edit the two lines at the top of the `<script>` in `site/index.html`:**
```js
const CONFIG = {
  buyUrl: "https://lava.top/your-product",   // ← your Lava Top product URL
  emailEndpoint: ""                          // ← optional: a Formspree/webhook URL to collect emails
};
```
- `buyUrl` — where the "Get The Chosen Man" button sends people.
- `emailEndpoint` — paste a [Formspree](https://formspree.io) (or similar) endpoint to collect leads. Leave it `""` and emails are still saved in the visitor's browser (`localStorage` key `cm_leads`) and the result still works — nothing breaks.

### 2. Put the product on Lava Top
1. Create a new digital product.
2. Upload **`product/The-Chosen-Man.pdf`** as the file.
3. Upload **`sales/cover-1160x464.png`** as the cover.
4. Paste the title, description, and bullets from **`sales/lavatop-sales-page.md`**.
5. Set the price to **$29 USD**. Publish, copy the product URL, and paste it into `buyUrl` above.

### 3. Drive traffic
Run your reels. The funnel does the rest: reel → quiz → email → result → buy.

---

## Editing & re-rendering

The PDF and cover are generated from HTML with the pre-installed Chromium.

```bash
# from the repo root
NODE_PATH=/path/to/node_modules node build/render.js
```
This rewrites `product/The-Chosen-Man.pdf` and `sales/cover-1160x464.png`.
(`build/render.js` uses Playwright + the bundled Chromium; see the script for the executable path.)

To personalize:
- **Your name / brand:** the product leads with the *product* name, not a person, so it's safe to ship as-is. Add your byline on the Lava page and in the quiz footer (`site/index.html`, search for "The Chosen Man · Dating").
- **Product name:** search-and-replace "The Chosen Man" across `product/the-chosen-man.html`, `sales/cover.html`, and `site/index.html`, then re-render.

---

## How the quiz scores

12 questions, each answer weighted toward one or more of **7 patterns**: the Over-Pursuer, the Weak Frame, the Avoider, the Performer, the Drifter, the Settler, and the Ghost. The highest-scoring pattern becomes the visitor's diagnosis — which names the problem (the free value) and frames the product as the fix (the paid solution). All of it is data-driven in the `PATTERNS` and `QUESTIONS` objects in `site/index.html`; edit the text there to tune it.

---

*For educational and personal-development purposes. Treat everyone you meet with honesty and respect — it's the most attractive frame there is.*
