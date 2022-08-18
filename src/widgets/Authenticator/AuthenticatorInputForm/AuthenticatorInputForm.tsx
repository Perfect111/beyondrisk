import React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { Formik, Form } from 'formik'
import Button from '../../../components/Button/Button'
import AuthenticatorInput from '../../../components/AuthenticatorInput/AuthenticatorInput'

// The purpose of this component is to display the login form and allow the user to authenticate.
const AuthenticatorInputForm = () => {
  return (
    <Formik
      initialValues={{ authenticator: '' }}
      validate={(values) => {
        const errors: { authenticator?: string } | undefined = {}
        errors.authenticator = !values.authenticator
          ? 'Required'
          : values.authenticator.length != 6
            ? 'Please add all field numbers'
            : undefined

        return errors.authenticator !== undefined ? errors : undefined
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        // todo: make fetch call here and handle response
        setTimeout(() => {
          setSubmitting(false)
        }, 5000)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        submitForm
      }) => (
        <Form onSubmit={handleSubmit}>
          <Box sx={{ maxWidth: '350px' }}>
            <Box>
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
                  marginBottom: '13px'
                }}
              >
                Great! Now let’s set up two factor authentication
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Alliance-TextRegular',
                  fontWeight: 500,
                  fontSize: '15px',
                  lineHeight: '22px',
                  textAlign: 'center',
                  color: '#FFFFFF',
                  marginBottom: '24px'
                }}
              >
                Enter the code generated by your two factor authentication
                application
              </Typography>
              <AuthenticatorInput
                numOfFields={6}
                isProcessingAuthentication={false}
                hasAuthenticationError={false}
              />
              {/* <Input
                fullWidth
                type='text'
                placeholder='Enter your username...'
                name='username'
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.username && !!touched.username}
                helperText={
                  !!errors.username && !!touched.username && errors.username
                }
                value={values.username}
              /> */}
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

export default AuthenticatorInputForm