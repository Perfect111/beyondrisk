import React from 'react'
import IconTypes from '../ActionIcon.types'
import ActionIcon from './ActionIcon'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

export default {
  title: 'Components/Icons/Action Icon',
  component: ActionIcon,
  argTypes: {
    iconType: {
      options: Object.keys(IconTypes),
      control: { type: 'select' }
    },
    color: { control: { type: 'color', presetColors: ['red', 'green'] } },
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
const Template = (args: any): JSX.Element => <ActionIcon {...args} />

export const Default: any = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  iconType: 'ADAPTERS',
  color: 'black',
  fontSize: 24
}
