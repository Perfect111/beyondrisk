import React from 'react'
import { LogoIcon } from './LogoIcon'
import LogoTypes from '../LogoIcon.types'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

export default {
  title: 'Components/Icons/Logo Icon',
  component: LogoIcon,
  argTypes: {
    logoType: {
      options: Object.keys(LogoTypes),
      control: { type: 'select' }
    },
    fontSize: {
      control: { type: 'number', min: 10, max: 50, step: 1 }
    }
  },
  parameters: {
    backgrounds: {
      default: 'twitter',
      values: [{ name: 'twitter', value: '#00aced' }]
    },
    layout: 'centered'
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any): JSX.Element => <LogoIcon {...args} />

export const Default: any = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  logoType: 'BEYONDRISK',
  fontSize: 24
}
