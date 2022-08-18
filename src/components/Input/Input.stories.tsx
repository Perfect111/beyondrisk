import Input, { InputProps } from './Input'

export default {
  title: 'Components/TextField',
  component: Input
}

const commonArgs = {}

const Template = (args: InputProps): JSX.Element => <Input {...args} />
export const Text: any = Template.bind({})
Text.args = {
  ...commonArgs,
  placeholder: 'Please enter some text...'
}

export const Number: any = Template.bind({})
Number.args = {
  ...commonArgs,
  placeholder: 'Please enter some numbers...',
  type: 'number'
}

export const Password: any = Template.bind({})
Password.args = {
  ...commonArgs,
  placeholder: 'Please enter a password...',
  type: 'password'
}
