import { launchBrowser } from "./scrape";

async function main() {
  const browser = await launchBrowser();

  let page = await browser.newPage();

  await page.goto("https://www.google.com/");

  const result = await page.title();

  console.log(result);

  await browser.close();
}

main();
