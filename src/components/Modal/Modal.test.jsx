import { render, screen } from '@testing-library/react'
import { expect, test } from '@jest/globals'

import Modal from './Modal'

test('renders a modal component', () => {
  // arrange
  const open = true
  render(
    <Modal open={open}>
      <div>hello</div>
    </Modal>
  )

  // setup

  // assert
  const el = screen.getByText('hello')
  expect(el).toBeVisible()
})
