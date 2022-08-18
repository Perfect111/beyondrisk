import React from 'react'
import LoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton'
import { styled } from '@mui/material/styles'

// The purpose of this component is to display a button for submitting forms and any other action.
// You may pass a variant (property in interface) which will use the color as specified in design system.
const ColorButton = styled(LoadingButton)((props) => ({
  fontFamily: 'Alliance-TextBold',
  weight: 700,
  fontSize: 15,
  color: '#0C0C0C',
  backgroundColor: '#FFFFFF',
  borderRadius: 8,
  height: 46,
  minWidth: 200,
  '&:hover': {
    backgroundColor: '#FFFFFF'
  },
  ...props
}))

export interface ButtonProps {
  text: string
  variant?: 'white' | 'orange' | 'green' | 'purple'
  loadingText?: string
  buttonProps?: LoadingButtonProps
}

const Button = ({ text, loadingText, buttonProps, variant }: ButtonProps) => {
  let palot
  switch (variant) {
    case 'orange':
      palot = {
        color: '#FFFFFF',
        backgroundColor: '#FF9900',
        '&:hover': {
          backgroundColor: '#FF9900'
        }
      }
      break
    case 'green':
      palot = {
        color: '#FFFFFF',
        backgroundColor: '#22D376',
        '&:hover': {
          backgroundColor: '#22D376'
        }
      }
      break
    case 'purple':
      palot = {
        color: '#FFFFFF',
        backgroundColor: '#C7B5F3',
        '&:hover': {
          backgroundColor: '#C7B5F3'
        }
      }
      break
    default:
      palot = {
        color: '#0C0C0C',
        backgroundColor: '#FFFFFF',
        '&:hover': {
          backgroundColor: '#FFFFFF'
        }
      }
      break
  }

  return (
    <ColorButton loadingPosition='end' sx={{ ...palot }} {...buttonProps}>
      {buttonProps?.loading && loadingText ? loadingText : text}
    </ColorButton>
  )
}

export default Button
