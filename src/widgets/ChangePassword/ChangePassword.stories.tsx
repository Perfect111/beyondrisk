import ChangePasswordForm from './ChangePassword'

export default {
  title: 'Widgets/ChangePasswordForm',
  component: ChangePasswordForm
}

const Template = (args: any): JSX.Element => <ChangePasswordForm {...args} />

export const Primary: any = Template.bind({})
Primary.args = {}
