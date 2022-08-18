import React from 'react'
import DarkThemeInput from './DarkThemeInput'
import { TextFieldProps } from '@mui/material/TextField'

export type InputProps = TextFieldProps

// The input component will render a text field, number field, password field or text area field for use in forms.
const Input = (props: InputProps): JSX.Element => {
  return (
    <DarkThemeInput
      variant='outlined'
      InputProps={{
        disableUnderline: true,
        sx: {
          fontFamily: 'Alliance-TextLight',
          fontWeight: 400,
          fontSize: '1em',
          color: 'rgba(255, 255, 255, 1)',
          letterSpacing: '1px'
        }
      }}
      {...props}
    />
  )
}

export default Input
