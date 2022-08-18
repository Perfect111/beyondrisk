import React from 'react'
import { render, screen } from '@testing-library/react'
import { expect, test } from '@jest/globals'

import TestemonialGallery from './TestemonialGallery'

describe('Testemonials Gallery', () => {
  test('renders component', () => {
    // arrange
    const id = 'gallery-test-id'
    render(
      <div data-testid={id}>
        <TestemonialGallery
          testemonials={[
            {
              text: 'BeyondRisk is helping cybersecurity and IT risk professionals solve two, long-standing problems: accurately assessing and quantifying enterprise risk.',
              image: 'https://mui.com/static/images/avatar/1.jpg',
              fullName: 'Elias Oxendine IV',
              title: 'CISO',
              companyName: 'Yum! Brands'
            }
          ]}
        />
      </div>
    )

    // asert
    const el = screen.getByTestId(id)

    expect(el).toBeInTheDocument()
    expect(el).toBeVisible()
  })
})
