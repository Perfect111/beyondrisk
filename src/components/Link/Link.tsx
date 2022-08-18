import React from 'react'
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link'

// The Link component will render an anchor tag which will be used for both navigation and opening modals.

export interface LinkProps {
  text: string
  linkProps?: MuiLinkProps
}

const Link = ({ text, linkProps }: LinkProps): JSX.Element => {
  return (
    <MuiLink
      underline='none'
      sx={{
        fontFamily: 'Alliance-TextMedium',
        fontWeight: 500,
        color: '#FFF',
        fontSize: '16px',
        cursor: 'pointer'
      }}
      {...linkProps}
    >
      {text}
    </MuiLink>
  )
}

export default Link
