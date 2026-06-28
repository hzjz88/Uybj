// Renders the product PDF and the Lava Top cover image using the
// pre-installed Chromium (via Playwright). Run: node build/render.js
const { chromium } = require('playwright');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const EXES = [
  '/opt/pw-browsers/chromium/chrome-linux/chrome',
  '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
];
const fs = require('fs');
const executablePath = EXES.find(p => fs.existsSync(p));

async function waitFonts(page){
  try { await page.evaluate(() => document.fonts && document.fonts.ready); } catch(e){}
  await page.waitForTimeout(600);
}

(async () => {
  const browser = await chromium.launch({ executablePath, args: ['--no-sandbox','--font-render-hinting=none'] });

  // 1) PRODUCT PDF
  {
    const page = await browser.newPage();
    await page.goto('file://' + path.join(ROOT, 'product', 'the-chosen-man.html'), { waitUntil: 'networkidle' });
    await waitFonts(page);
    await page.pdf({
      path: path.join(ROOT, 'product', 'The-Chosen-Man.pdf'),
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
    });
    await page.close();
    console.log('✓ product/The-Chosen-Man.pdf');
  }

  // 2) COVER IMAGE 1160x464
  {
    const page = await browser.newPage({ viewport: { width: 1160, height: 464 }, deviceScaleFactor: 2 });
    await page.goto('file://' + path.join(ROOT, 'sales', 'cover.html'), { waitUntil: 'networkidle' });
    await waitFonts(page);
    const el = await page.$('.cover');
    await el.screenshot({ path: path.join(ROOT, 'sales', 'cover-1160x464.png') });
    await page.close();
    console.log('✓ sales/cover-1160x464.png (2x)');
  }

  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
