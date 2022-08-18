import React from 'react'
import { render, screen } from '@testing-library/react'
import { expect, test } from '@jest/globals'

import ActionIcon from './ActionIcon'
import IconTypes from '../ActionIcon.types'

test('renders ActionIcon element', () => {
  // arrange
  const id = 'test-id'
  render(
    <div data-testid={id}>
      <ActionIcon iconType='ADAPTERS' color='black' fontSize={25} />
    </div>
  )

  const el = screen.getByTestId(id)

  expect(el).toBeInTheDocument()
  expect(el).toBeVisible()
  expect(el.hasChildNodes).toBeTruthy()
  expect(el.childElementCount).toBe(1)
  // expect(el.firstElementChild.tagName).toBe('SPAN')
  // expect(el.firstElementChild.className).toBe(IconTypes.ADAPTERS)
})
