import React from 'react'
import Box from '@mui/material/Box'

import { Typography } from '@mui/material'
import { Formik, Form } from 'formik'
import Button from '../../../components/Button/Button'
import { exampleQr } from '../../../../public/assets'

// The purpose of this component is to display the login form and allow the user to authenticate.
const AuthenticatorQR = () => {
  return (
    <Formik
      initialValues={{ qrNumber: '' }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        // todo: make fetch call here and handle response
        setTimeout(() => {
          setSubmitting(false)
        }, 5000)
      }}
    >
      {({ submitForm, handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <Box sx={{ maxWidth: '350px' }}>
            <Box
              sx={{
                '> *:not(:first-child)': { paddingTop: '10px' }
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Alliance-TextRegular',
                  background:
                    'linear-gradient(264.68deg, #C7B5F3 8.65%, #22D376 91.42%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '21px',
                  lineHeight: '30px',
                  textAlign: 'center',
                  marginBottom: '12px'
                }}
              >
                First time logging in
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Alliance-TextRegular',
                  fontWeight: 300,
                  fontSize: '28px',
                  lineHeight: '41px',
                  textAlign: 'center',
                  color: '#FFFFFF',
                  marginBottom: '23px'
                }}
              >
                Great! Now let’s set up two factor authentication
              </Typography>

              <Box
                sx={{
                  display: 'block',
                  margin: 'auto',
                  width: '170px',
                  height: '170px',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  backgroundImage: `url(${exampleQr.src || exampleQr})`,
                  marginBottom: 0
                }}
              />

              <Typography
                sx={{
                  fontFamily: 'Alliance-TextRegular',
                  fontWeight: 500,
                  fontSize: '15px',
                  lineHeight: '22px',
                  textAlign: 'center',
                  color: '#FFFFFF'
                }}
              >
                Scan the QR code using your two factor authentication
                application
              </Typography>
            </Box>

            <Box sx={{ marginTop: '23px' }}>
              <Button
                buttonProps={{
                  fullWidth: true,
                  loading: isSubmitting,
                  disabled: isSubmitting,
                  type: 'submit',
                  onClick: submitForm
                }}
                text='Continue'
                loadingText='Loggin in...'
              />
            </Box>
            <Box sx={{ marginTop: '30px' }}>
              <Typography
                fontFamily='Alliance-TextMedium'
                fontSize='14px'
                fontWeight='500'
                lineHeight='21px'
                textAlign='center'
                color='rgba(255, 255, 255, 0.45)'
              >
                © Copyright BeyondRisk 2022 -- All rights reserved
              </Typography>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  )
}

export default AuthenticatorQR
