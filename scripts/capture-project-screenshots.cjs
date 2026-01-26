/**
 * Capture screenshots of Walmart.com, Sixt.com, Lowes.com
 * for Featured Projects section. Saves to apps/host/public/assets/images/projects/
 */
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const OUT = path.join(__dirname, '../apps/host/public/assets/images/projects');

const SITES = [
  { url: 'https://www.walmart.com', name: 'walmart' },
  { url: 'https://www.sixt.com', name: 'sixt' },
  { url: 'https://www.lowes.com', name: 'lowes' },
];

const VIEWPORT = { width: 1280, height: 800 };

async function main() {
  if (!fs.existsSync(OUT)) {
    fs.mkdirSync(OUT, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const { url, name } of SITES) {
    const page = await browser.newPage();
    try {
      await page.setViewport(VIEWPORT);
      await page.goto(url, { waitUntil: 'load', timeout: 30000 });
      await new Promise((r) => setTimeout(r, 2500));
      const filePath = path.join(OUT, `${name}.png`);
      await page.screenshot({ path: filePath });
      console.log(`Saved ${name}.png`);
    } catch (err) {
      console.error(`Failed ${name}:`, err.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
}

main();
