import React from 'react'
import { render, screen } from '@testing-library/react'
import { expect, test } from '@jest/globals'

import ChangePasswordForm from './ChangePassword'

test('renders a login form component', () => {
  // arrange
  render(<ChangePasswordForm />)

  // setup

  // asert
  let el = screen.getAllByPlaceholderText('Enter your password...')
  expect(el).toBeTruthy()
  el = screen.getAllByPlaceholderText('Enter your new password...')
  expect(el).toBeTruthy()
  el = screen.getAllByPlaceholderText('Confirm your new password...')
  expect(el).toBeTruthy()
})
