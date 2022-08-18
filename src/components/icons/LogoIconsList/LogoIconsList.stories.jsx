import React from 'react'
import { LogoIconsList } from './LogoIconsList'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Icons/Logo Icon',
  component: LogoIconsList,
  argTypes: {
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
const Template = (args) => <LogoIconsList {...args} />

export const PreviewAll = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PreviewAll.args = {
  fontSize: 24
}
