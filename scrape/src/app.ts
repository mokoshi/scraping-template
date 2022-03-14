import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { launchBrowser } from "./scrape";

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  let response: APIGatewayProxyResult;

  const browser = await launchBrowser();

  const page = await browser.newPage();

  await page.goto("https://www.google.com/");

  const result = await page.title();

  await browser.close();

  return {
    statusCode: 500,
    body: JSON.stringify({
      message: `result: ${result}`,
    }),
  };
};
