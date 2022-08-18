import React from 'react'
import { render, screen } from '@testing-library/react'
import { expect, test } from '@jest/globals'

import Checkbox from './Checkbox'

test('renders a checkbox component', () => {
  // arrange
  const id = 'CheckBoxOutlineBlankIcon'
  render(<Checkbox label='text box' required />)

  // asert
  const el = screen.getByTestId(id)
  expect(el).toBeInTheDocument()
  expect(el).toBeVisible()
})
