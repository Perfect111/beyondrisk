import Box from '@mui/material/Box'

import React from 'react'
import { grayCicrcle, greenCircle, waves } from '../../../public/assets'

export interface BrLayoutProps {
  authenticationLayout: boolean
  children: JSX.Element
}

// This Component is the main (base) layout page wrapper.

const BrLayout = ({ authenticationLayout, children }: BrLayoutProps) => {
  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          zIndex: 1,
          width: '100vh',
          height: '100vh',
          top: '-25%',
          right: '-4%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundImage: `url(${waves.src ?? waves})`
        }}
      />
      {authenticationLayout && (
        <>
          <Box
            sx={{
              position: 'fixed',
              zIndex: 1,
              width: '40vw',
              height: '100vh',
              top: 0,
              left: 0,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              backgroundImage: `url(${greenCircle.src ?? greenCircle})`
            }}
          />

          <Box
            sx={{
              position: 'fixed',
              zIndex: 1,
              width: '100vh',
              height: '56vh',
              bottom: 0,
              left: 0,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundImage: `url(${grayCicrcle.src ?? grayCicrcle})`
            }}
          />
        </>
      )}

      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
          zIndex: 10,
          position: 'relative'
        }}
      >
        {children}
      </Box>
    </>
  )
}

export default BrLayout
