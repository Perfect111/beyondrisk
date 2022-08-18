import React from 'react'
import { render, screen } from '@testing-library/react'
import { expect, test } from '@jest/globals'

import AuthenticatorInput from './AuthenticatorInput'

test('renders a AuthenticatorInput with 6 fields', () => {
  render(
    <AuthenticatorInput
      numOfFields={6}
      isProcessingAuthentication={false}
      hasAuthenticationError={false}
    />
  )

  // asert
  const el = screen.getByTestId('test-id')
  expect(el).toBeInTheDocument()
  expect(el).toBeVisible()
})
