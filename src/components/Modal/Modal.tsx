import React from 'react'
import MuiModal, { ModalProps } from '@mui/material/Modal'

// This is a simple modal component that will be used to render modal forms
const Modal = (props: ModalProps) => {
  return <MuiModal {...props} />
}

export default Modal
