import React from 'react'
import Box from '@mui/material/Box'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { Typography } from '@mui/material'
import { Formik, Form } from 'formik'

// The purpose of this component is to display the login form and allow the user to authenticate.
const ChangePasswordForm = () => {
  return (
    <Formik
      initialValues={{
        originalPassword: '',
        newPassword: '',
        confirmPassword: ''
      }}
      validate={(values) => {
        const errors:
        | {
          originalPassword?: string
          newPassword?: string
          confirmPassword?: string
        }
        | undefined = {}

        errors.originalPassword = !values.originalPassword
          ? 'Required'
          : undefined

        errors.newPassword = !values.newPassword
          ? 'Required'
          : values.newPassword.length < 10
            ? 'Minimum length is 10'
            : undefined

        errors.confirmPassword = !values.confirmPassword
          ? 'Required'
          : values.confirmPassword !== values.newPassword
            ? 'Passwords are not the same. Please try again.'
            : undefined

        return errors.originalPassword !== undefined ||
          errors.newPassword !== undefined ||
          errors.confirmPassword !== undefined
          ? errors
          : undefined
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        // todo: make fetch call here and handle response
        setTimeout(() => {
          console.log(values)
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
            <Box
              sx={{
                '> *:not(:first-child)': { paddingTop: '10px' }
              }}
            >
              <Input
                fullWidth
                type='password'
                placeholder='Enter your password...'
                name='originalPassword'
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.originalPassword && !!touched.originalPassword}
                helperText={
                  !!errors.originalPassword &&
                  !!touched.originalPassword &&
                  errors.originalPassword
                }
                value={values.originalPassword}
              />
              <Input
                fullWidth
                type='password'
                placeholder='Enter your new password...'
                name='newPassword'
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.newPassword && !!touched.newPassword}
                helperText={
                  !!errors.newPassword &&
                  !!touched.newPassword &&
                  errors.newPassword
                }
                value={values.newPassword}
              />
              <Input
                fullWidth
                type='password'
                placeholder='Confirm your new password...'
                name='confirmPassword'
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.confirmPassword && !!touched.confirmPassword}
                helperText={
                  !!errors.confirmPassword &&
                  !!touched.confirmPassword &&
                  errors.confirmPassword
                }
                value={values.confirmPassword}
              />
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

export default ChangePasswordForm
