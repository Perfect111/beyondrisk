import AuthenticatorInputForm from './AuthenticatorInputForm'

export default {
  title: 'Widgets/Authenticator',
  component: AuthenticatorInputForm
}

const Template = (args: any): JSX.Element => (
  <AuthenticatorInputForm {...args} />
)

export const InputForm: any = Template.bind({})
