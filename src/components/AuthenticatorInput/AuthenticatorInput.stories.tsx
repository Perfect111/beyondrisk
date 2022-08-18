import AuthenticatorInput, {
  AuthenticatorInputProps,
  InputValidation
} from './AuthenticatorInput'

export default {
  title: 'Components/AuthenticatorInputs',
  component: AuthenticatorInput,
  argTypes: {
    inputType: {
      options: InputValidation,
      control: { type: 'select' }
    },
    isProcessingAuthentication: {
      control: { type: 'boolean' }
    },
    hasAuthenticationError: {
      control: { type: 'boolean' }
    },
    numOfFields: {
      control: { type: 'number', min: 2, max: 10, step: 1 }
    }
  }
}

const Template = (args: AuthenticatorInputProps): JSX.Element => (
  <AuthenticatorInput {...args} />
)
export const Default: any = Template.bind({})
Default.args = {
  numOfFields: 6,
  isProcessingAuthentication: false,
  hasAuthenticationError: false,
  inputType: InputValidation.NUMERIC
}
