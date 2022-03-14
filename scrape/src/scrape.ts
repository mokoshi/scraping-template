import chromium from "chrome-aws-lambda";

export async function launchBrowser() {
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    // headless: chromium.headless,
    headless: true,
    ignoreHTTPSErrors: true,
  });
  return browser;
}
