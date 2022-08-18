import React from 'react'
import ActionIconsList from './ActionIconsList'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Icons/Action Icon',
  component: ActionIconsList,
  argTypes: {
    color: { control: { type: 'color', presetColors: ['red', 'green'] } },
    fontSize: {
      control: { type: 'number', min: 10, max: 50, step: 1, default: 24 }
    }
  },
  parameters: {
    backgrounds: {
      default: 'twitter',
      values: [{ name: 'twitter', value: '#00aced' }]
    }
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ActionIconsList {...args} />

export const PreviewAll = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PreviewAll.args = {
  color: 'black',
  fontSize: 24
}
