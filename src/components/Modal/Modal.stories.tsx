import Modal from './Modal'
import { ModalProps } from '@mui/material/Modal'
import LoginForm from '../../widgets/LoginForm/LoginForm'

export default {
  title: 'Components/Modal',
  component: Modal
}

const Template = (args: ModalProps): JSX.Element => (
  <Modal
    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    {...args}
  >
    <LoginForm />
  </Modal>
)

export const SaveButton: any = Template.bind({})
const asd: Omit<ModalProps, 'children'> = {
  open: true
}
SaveButton.args = asd
