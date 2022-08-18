import React from 'react'
import BrLayout, { BrLayoutProps } from './BrLayout'

export default {
  title: 'Page/Layout',
  component: BrLayout,
  argTypes: {
    authenticationLayout: {
      control: { type: 'boolean' }
    }
  },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0C0C0C' }]
    }
  }
}

const Template = (args: BrLayoutProps): JSX.Element => <BrLayout {...args} />

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Auth: any = Template.bind({})
Auth.args = {
  authenticationLayout: true
}

export const Dashboard: any = Template.bind({})
Dashboard.args = {
  authenticationLayout: false
}
