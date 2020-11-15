import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Button } from '../components/Button/Button';

render(<Button text="Jest" />);

describe('Testing Button component', () => {
  test('show custom text in button', async () => {
    expect(await screen.findByText('Jest')).toBeVisible();
  });
});