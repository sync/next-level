import React from 'react';
import { GlobalWithFetchMock } from 'jest-fetch-mock';
import { render, waitForElement } from '../../utils/testUtils';
import Index from '../../../pages/index';
import { mockFetchWelcomeOnce } from '../../utils/fetchMocks';

const customGlobal: GlobalWithFetchMock = global as GlobalWithFetchMock;

describe('Index', () => {
  beforeEach(() => {
    // eslint-disable-next-line global-require
    customGlobal.fetch = require('jest-fetch-mock');
    customGlobal.fetchMock = customGlobal.fetch;
  });

  afterEach(() => {
    customGlobal.fetch.resetMocks();
  });

  it('renders a welcome text', async () => {
    const welcome = mockFetchWelcomeOnce()!;

    const { getByText } = render(<Index />);

    await waitForElement(() => getByText(`Hello ${welcome.name}!`));
  });
});
