import AuthenticatorQR from './AuthenticatorQR'

export default {
  title: 'Widgets/Authenticator',
  component: AuthenticatorQR
}

const Template = (args: any): JSX.Element => <AuthenticatorQR {...args} />

export const QRImage: any = Template.bind({})
QRImage.args = {}
