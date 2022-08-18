import React from 'react'
import { render, screen } from '@testing-library/react'
import { expect, test } from '@jest/globals'

import BrLayout from './BrLayout'

test('renders a BrLayout component', () => {
  // arrange
  const id = 'test-id'
  render(
    <div data-testid={id}>
      <BrLayout authenticationLayout={false} children={undefined} />
    </div>
  )

  // setup

  // asert
  const el = screen.getByTestId(id)
  expect(el).toBeInTheDocument()
  expect(el).toBeVisible()
})
