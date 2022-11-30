// import dependencies
import React from 'react'
import { render, fireEvent } from 'test-utils';
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
// the component to test
import { Saludo } from './Saludo';

test('loads and displays greeting', async () => {
  render(<Saludo />)
  expect(screen.getByRole("heading")).toHaveTextContent("Saludo")
})