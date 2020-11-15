import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Filters } from '../components/Filters/Filters';

render(<Filters filtyer="all" setFilter={() => null} />);

describe('Testing Button component', () => {
  test('show custom text in button', async () => {
    expect(await screen.findByText('All')).toBeVisible();
    expect(await screen.findByText('Completed')).toBeVisible();
    expect(await screen.findByText('Uncompleted')).toBeVisible();
  });
});