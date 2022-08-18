import React from 'react'
import { render, screen } from '@testing-library/react'
import { expect, test } from '@jest/globals'

import Link from './Link'

test('renders a link component', () => {
  // arrange
  const id = 'test-id'
  render(
    <Link linkProps={{ 'data-testid': id }} text='This is a link for testing' />
  )

  // setup

  // asert
  const el = screen.getByTestId(id)
  expect(el).toBeInTheDocument()
  expect(el).toBeVisible()
})
