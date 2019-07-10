import fetch from 'isomorphic-fetch';
import config from '../jest-puppeteer.config';

const timeout = 300000;

const url = `http://localhost:${config.server.port}`;

const openPage = (pageUrl = '/') => global.page.goto(`${url}${pageUrl}`);

describe('Basic integration', () => {
  let welcome;

  beforeEach(async () => {
    const response = await fetch(`${url}/api/welcome`);
    welcome = await response.json();
    await openPage();
  }, timeout);

  it(
    'displays a welcome text',
    async () => {
      await expect(global.page).toMatch(`Hello ${welcome.name}!`);
    },
    timeout,
  );
});
