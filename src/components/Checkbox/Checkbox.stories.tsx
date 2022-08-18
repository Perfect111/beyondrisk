import Checkbox, { CheckboxProps } from './Checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox
}

const Template = (args: CheckboxProps): JSX.Element => <Checkbox {...args} />
export const Primary: any = Template.bind({})
Primary.args = {
  labelProps: { label: 'Please check me...' }
}
