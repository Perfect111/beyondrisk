import LoginForm from './LoginForm'

export default {
  title: 'Widgets/LoginForm',
  component: LoginForm
}

const Template = (args: any): JSX.Element => <LoginForm {...args} />

export const Primary: any = Template.bind({})
Primary.args = {}
