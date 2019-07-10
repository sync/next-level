import React from 'react';
import { render } from '../../utils/testUtils';
import Index from '../../../pages/index';

describe('Index', () => {
  it('renders a welcome text', async () => {
    const { getByText } = render(<Index welcome={{ name: 'world' }} />);

    expect(getByText('Hello world!')).toBeTruthy();
  });
});
