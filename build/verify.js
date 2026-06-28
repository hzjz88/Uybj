// Visual QA: screenshot the quiz funnel (hero + a result) for review.
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const ROOT = path.resolve(__dirname, '..');
const EXES = ['/opt/pw-browsers/chromium/chrome-linux/chrome','/opt/pw-browsers/chromium-1194/chrome-linux/chrome'];
const executablePath = EXES.find(p => fs.existsSync(p));
const OUT = path.join(ROOT, 'build', 'qa');
fs.mkdirSync(OUT, { recursive: true });

(async () => {
  const browser = await chromium.launch({ executablePath, args:['--no-sandbox'] });
  const page = await browser.newPage({ viewport:{width:430,height:900}, deviceScaleFactor:2 });
  const errors = [];
  page.on('console', m => { if (m.type()==='error') errors.push(m.text()); });
  page.on('pageerror', e => errors.push('PAGEERROR: '+e.message));

  await page.goto('file://' + path.join(ROOT,'site','index.html'), { waitUntil:'networkidle' });
  await page.waitForTimeout(700);
  await page.screenshot({ path: path.join(OUT,'1-hero.png') });

  // start quiz, answer all 12 — drive Over-Pursuer by always picking the first option
  await page.evaluate(() => Quiz.start());
  for (let i=0;i<12;i++){
    await page.waitForSelector('#options .opt', { state:'visible' });
    await page.waitForTimeout(120);
    await page.$$eval('#options .opt', els => els[0].click());
    await page.waitForTimeout(300); // selection delay + render
  }
  await page.waitForSelector('#gate.active', { timeout: 3000 });
  await page.screenshot({ path: path.join(OUT,'2-gate.png') });
  await page.evaluate(() => Quiz.showResult());
  await page.waitForTimeout(500);
  const pattern = await page.textContent('#rName');
  console.log('Result pattern shown:', pattern.trim());
  await page.screenshot({ path: path.join(OUT,'3-result.png'), fullPage:true });

  console.log('JS errors:', errors.length ? errors : 'none');
  await browser.close();
})().catch(e=>{console.error(e);process.exit(1);});
