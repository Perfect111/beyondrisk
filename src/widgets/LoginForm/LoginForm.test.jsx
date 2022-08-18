import React from 'react'
import { render, screen } from '@testing-library/react'
import { expect, test } from '@jest/globals'

import LoginForm from './LoginForm'

test('renders a login form component', () => {
  // arrange
  const id = 'CheckBoxOutlineBlankIcon'
  render(<LoginForm />)

  // asert
  const el = screen.getByTestId(id)
  expect(el).toBeInTheDocument()
  expect(el).toBeVisible()
})
