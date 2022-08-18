import Button, { ButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button
}

const Template = (args: ButtonProps): JSX.Element => <Button {...args} />

export const SaveButton: any = Template.bind({})
SaveButton.args = {
  text: 'Save',
  loadingText: 'Saving...'
}

export const LoadingButton: any = Template.bind({})
LoadingButton.args = {
  text: 'Save',
  loadingText: 'Saving...',
  buttonProps: { loading: true }
}
