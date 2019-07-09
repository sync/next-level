import React from 'react';
import { render } from '../../utils/testUtils';
import Index from '../../../pages/index';

describe('Index', () => {
  it('renders a welcome text', async () => {
    const { getByText } = render(<Index />);

    expect(getByText('HELLO')).toBeTruthy();
  });
});
