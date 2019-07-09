import config from '../jest-puppeteer.config';

const timeout = 300000;

const openPage = (pageUrl = '/') =>
  global.page.goto(`http://localhost:${config.server.port}${pageUrl}`);

describe('Basic integration', () => {
  beforeEach(async () => {
    await openPage();
  }, timeout);

  it(
    'displays a welcome text',
    async () => {
      await expect(global.page).toMatch('HELLO');
    },
    timeout,
  );
});
