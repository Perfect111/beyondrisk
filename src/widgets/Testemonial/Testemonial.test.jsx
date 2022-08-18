import React from 'react'
import { render, screen } from '@testing-library/react'
import { expect, test } from '@jest/globals'

import Testemonial from './Testemonial'

describe('Testemonial', () => {
  test('renders a component', () => {
    // arrange
    const id = 'test-id'
    render(
      <Testemonial
        data-testid={id}
        testemonial={{
          text: 'BeyondRisk is helping cybersecurity and IT risk professionals solve two, long-standing problems: accurately assessing and quantifying enterprise risk.',
          image: 'https://mui.com/static/images/avatar/1.jpg',
          fullName: 'Elias Oxendine IV',
          title: 'CISO',
          companyName: 'Yum! Brands'
        }}
      />
    )

    // asert
    const el = screen.getByTestId(id)

    const textMatch = screen.getByText(
      'BeyondRisk is helping cybersecurity and IT risk professionals solve two, long-standing problems: accurately assessing and quantifying enterprise risk.'
    )
    const fullNameMatch = screen.getByText('Elias Oxendine IV')
    const titleMatch = screen.getByText('CISO')
    const companyNameMatch = screen.getByText('Yum! Brands')

    expect(el).toBeInTheDocument()
    expect(el).toBeVisible()

    expect(textMatch).toBeInTheDocument()
    expect(fullNameMatch).toBeInTheDocument()
    expect(titleMatch).toBeInTheDocument()
    expect(companyNameMatch).toBeInTheDocument()

    expect(textMatch).toBeVisible()
    expect(fullNameMatch).toBeVisible()
    expect(titleMatch).toBeVisible()
    expect(companyNameMatch).toBeVisible()
  })

  test('renders a skeleton', () => {
    // arrange
    const id = 'test-id'
    render(<Testemonial data-testid={id} loading />)

    // asert
    const el = screen.getByTestId(id)

    expect(el).toBeInTheDocument()
    expect(el).toBeVisible()
  })
})
