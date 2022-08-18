import React from 'react'
import FormGroup, { FormGroupProps } from '@mui/material/FormGroup'
import FormControlLabel, {
  FormControlLabelProps
} from '@mui/material/FormControlLabel'
import MuiCheckbox, {
  CheckboxProps as MuiCheckboxProps
} from '@mui/material/Checkbox'

export interface CheckboxProps {
  checkboxProps?: MuiCheckboxProps
  labelProps: Omit<FormControlLabelProps, 'control'>
  formGroupProps?: FormGroupProps
}

// The checkbox component will render a checkbox with it's accommodating label to be used in forms.
const Checkbox = ({
  checkboxProps,
  labelProps,
  formGroupProps
}: CheckboxProps): JSX.Element => {
  return (
    <FormGroup {...formGroupProps}>
      <FormControlLabel
        control={
          <MuiCheckbox
            sx={{
              color: 'white',
              '&.Mui-checked': {
                color: 'rgba(34, 211, 118, 1)'
              }
            }}
            {...checkboxProps}
          />
        }
        sx={{
          color: 'rgba(118, 115, 115, 1)',
          fontWeight: 600,
          fontSize: '1em',
          fontFamily: 'Alliance-TextLight'
        }}
        {...labelProps}
      />
    </FormGroup>
  )
}

export default Checkbox
