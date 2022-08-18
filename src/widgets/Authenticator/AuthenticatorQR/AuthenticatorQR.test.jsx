import React from 'react'
import { render, screen } from '@testing-library/react'
import { expect, test } from '@jest/globals'

import AuthenticatorQR from './AuthenticatorQR'

test('renders a AuthenticatorQR form component', () => {
  render(<AuthenticatorQR />)

  const el = screen.getByText('First time logging in')
  expect(el).toBeTruthy()
})
