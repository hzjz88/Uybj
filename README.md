# The Chosen Man — Dating Funnel

A complete, ready-to-deploy funnel for the niche **"successful men seeking a quality
woman for a relationship."** Built to the exact structure your reference materials
describe — and modelled on your mentor's `datingquizbytim.created.app` quiz lead magnet.

> **What you asked for:** "an awesome product + lead magnet (like my mentor's)."
> This repo contains both, finished and tested in a real browser.

---

## The funnel, mapped to your framework

Your notes describe the chain: **Reel → Description → Trigger → Opener → (Account/Payment)**,
and stress that 90% of experts are missing the **Trigger** — the landing point that turns
attention into a payment in 30–60 seconds. Here's how the pieces in this repo map onto it:

| Link | Your framework | In this repo |
|------|----------------|--------------|
| **Reel** | The targeted short video (your 12 topics / scripts) | Your content — drives traffic to the link in bio |
| **Description** | The caption + "comment WORD" call to action | Your content — sends them to the link |
| **Trigger** | The 30–60s landing point that converts attention → action | **`index.html`** — the scored quiz lead magnet |
| **Opener / Lead magnet** | One free, valuable thing that warms them to buy | The quiz **result + email capture** |
| **Product ($10–60)** | The paid product where the core value is revealed | **`product/the-chosen-man-protocol.html`** |
| **Account / scale** | Legend-Trigger-Opener-Account bundle | Duplicate per cluster (see *Scaling* below) |

**One Trigger = one Opener = one action.** The quiz is the single trigger; its one action
is *"comment the WORD / tap the link → take the 3-minute test."*

---

## What's in the repo

```
index.html                              ← THE LEAD MAGNET (the quiz / "Trigger")
product/
  the-chosen-man-protocol.html          ← THE PRODUCT (sales page + full guide, printable to PDF)
  the-chosen-man-protocol.md            ← The product's source text (edit here, easy to repurpose)
README.md                               ← this file
```

### 1. The lead magnet — `index.html`

An interactive, scored **"Why Are You Still Single? Find Your #1 Invisible Dealbreaker"**
quiz. Self-contained single HTML file (no build, no dependencies) — exactly the kind of
file you copy into **Manus.ai / Anything.com** to publish with a domain, the way you
published your mentor's example.

- 12 questions, ~3 minutes, mobile-first dark/gold design.
- Diagnoses the dominant pattern out of **7 invisible dealbreakers**:
  The Over-Pursuer · The Performer · The Approval-Seeker · The Passive Waiter ·
  The Weak Frame · The Optimized Ghost · The Pushover.
- **Email gate** before the result (this is the lead capture — the whole point of a lead magnet).
- Result page **gives the diagnosis but withholds the fix** — then sends them to the product.
  This is the same "GIVES / WITHHOLDS" mechanic from your mentor's Free Offer Generator.

### 2. The product — `product/the-chosen-man-protocol.html`

**The Chosen Man Protocol** — an 8-week method that *fixes* the pattern the quiz only
named. This is the $10–60 tier where the core value is delivered: a daily floor, a
chapter per pattern (loop → why it costs you → reframe → protocol → first move → trap),
an 8-week integration arc, and four field tools (First-15-Minutes, texting principles,
the Ideal-Woman worksheet, the 12-point readiness audit).

The page opens as a **sales page** (offer box, price, CTA, guarantee) and then contains the
**full product** below it — so it works whether you gate it behind payment or give it as a
value-first read. **Print → Save as PDF** for a downloadable version.

> The content is deliberately grounded and non-manipulative: real confidence, self-respect,
> leading, standards, and authenticity — not tricks. That makes it a product people thank you
> for, refund less, and refer.

---

## Setup — 2 values to change

Open **`index.html`** and edit the two constants at the top of the `<script>`:

```js
const PRODUCT_URL  = "product/the-chosen-man-protocol.html"; // → your checkout or product page
const LEAD_WEBHOOK = "";  // → a Make/Zapier/CRM webhook URL to capture emails. Empty = local only.
```

- **`PRODUCT_URL`** — keep as-is to link to the included product page, or point it at your
  Stripe/Gumroad checkout once you're charging.
- **`LEAD_WEBHOOK`** — paste a webhook (Make.com, Zapier, or your email tool's inbound URL).
  Submitted emails POST there as JSON: `{ email, pattern, patternName, scores, ts }`.
  Leave empty during testing — leads still save to the browser's `localStorage` so nothing breaks.

In **`product/the-chosen-man-protocol.html`**, point the `Get instant access` button at your
checkout (or leave it as a free read).

---

## Deploy (pick one)

- **Manus.ai / Anything.com** (your usual route): upload `index.html`, then the `product/`
  folder, and it gives you a live domain — same as your mentor's `datingquizbytim.created.app`.
- **Netlify / Cloudflare Pages / GitHub Pages:** drag-and-drop the repo; it's pure static HTML.
- **Local check:** just open `index.html` in any browser.

Keep the folder structure so the quiz's link to `product/the-chosen-man-protocol.html` resolves.

---

## Scaling (Legend-Trigger-Opener-Account)

To run this across clusters the way your notes describe, duplicate and re-skin:

1. **One account = one hypothesis.** Account A: your face + this exact quiz. Account B:
   Pinterest-style aesthetic reels → a re-skinned copy of the quiz testing a different angle.
2. **Re-use the Trigger, swap the Legend.** Copy `index.html`, change the headline/eyebrow and
   the lead-magnet framing for each persona; keep the proven 7-pattern engine.
3. **Ladder the product.** This $27 product is rung one. Your reference ladder is
   `$10–50 → up to $1,000 → $2,000–5,000 + %`. The product's closing section already plants the
   high-ticket upsell (the written guarantee from your $100M-offer notes) so the next rung has a
   natural on-ramp.

---

## Tested

Both pages were run end-to-end in a real (Chromium) browser: the quiz completes all 12
questions, gates on email, scores correctly, and the result CTA resolves to the product;
the product page renders fully. No JavaScript errors.

---

*For educational and self-development purposes. This is dating/self-development coaching content,
not therapy or professional advice.*
