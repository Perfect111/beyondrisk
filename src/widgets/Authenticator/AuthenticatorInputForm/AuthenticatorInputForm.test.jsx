import React from 'react'
import { render, screen } from '@testing-library/react'
import { expect, test } from '@jest/globals'

import AuthenticatorInputForm from './AuthenticatorInputForm'

test('renders a AuthenticatorInputForm form component', () => {
  render(<AuthenticatorInputForm />)

  const el = screen.getByText('First time logging in')
  expect(el).toBeTruthy()
})
