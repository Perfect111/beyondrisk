import React from 'react'
import { render, screen } from '@testing-library/react'
import { expect, test } from '@jest/globals'

import Input from './Input'

test('renders a text input with text', () => {
  // arrange
  const id = 'test-id'
  render(
    <Input
      data-testid={id}
      defaultValue='this is a text box'
      label='text box'
      required
    />
  )

  // setup

  // asert
  const el = screen.getByTestId(id)
  expect(el).toBeInTheDocument()
  expect(el).toBeVisible()
})
