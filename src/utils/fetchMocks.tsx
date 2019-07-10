import { GlobalWithFetchMock } from 'jest-fetch-mock';
import welcomeFixture from './fixtures/welcomeFixture';

const customGlobal: GlobalWithFetchMock = global as GlobalWithFetchMock;

type Welcome = typeof welcomeFixture;

export function mockFetchWelcomeOnce({
  delay = 0,
  welcome = welcomeFixture,
}: { delay?: number; welcome?: Welcome | null } = {}) {
  customGlobal.fetch.mockResponseOnce(
    () =>
      new Promise(resolve =>
        setTimeout(
          () =>
            resolve({
              body: JSON.stringify({
                data: {
                  welcome,
                },
              }),
            }),
          delay,
        ),
      ),
  );

  return welcome;
}

export function mockFetchErrorResponseOnce(message = 'fake error message') {
  customGlobal.fetch.mockRejectOnce(new Error(message));

  return message;
}
