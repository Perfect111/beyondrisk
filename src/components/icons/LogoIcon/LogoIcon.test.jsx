import React from 'react'
import { render, screen } from '@testing-library/react'
import { expect, test } from '@jest/globals'

import { LogoIcon } from './LogoIcon'
import LogoTypes from '../LogoIcon.types'

test('renders LogoIcon element', () => {
  // arrange
  const id = 'test-id'
  render(
    <div data-testid={id}>
      <LogoIcon logoType='CLOUDFLARE' fontSize={25} />
    </div>
  )

  const el = screen.getByTestId(id)

  expect(el).toBeInTheDocument()
  expect(el).toBeVisible()
  expect(el.hasChildNodes).toBeTruthy()
  expect(el.childElementCount).toBe(1)
  // expect(el.firstElementChild.tagName).toBe('SPAN')
  // expect(el.firstElementChild.className).toBe(LogoTypes.CLOUDFLARE)
})
