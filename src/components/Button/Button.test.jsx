import React from 'react'
import { render, screen } from '@testing-library/react'
import { expect, test } from '@jest/globals'

import Button from './Button'

test('renders a button component', () => {
  // arrange
  const id = 'test-id'
  render(<Button buttonProps={{ 'data-testid': id }} />)

  // setup

  // asert
  const el = screen.getByTestId(id)
  expect(el).toBeInTheDocument()
  expect(el).toBeVisible()
})
