import React from 'react'
import Box from '@mui/material/Box'
import Input from '../../components/Input/Input'
import Checkbox from '../../components/Checkbox/Checkbox'
import Button from '../../components/Button/Button'
import Link from '../../components/Link/Link'
import { Typography } from '@mui/material'
import { Formik, Form } from 'formik'
import { useRouter } from 'next/router'
import { LogoIcon } from 'components/icons/LogoIcon/LogoIcon'

// The purpose of this component is to display the login form and allow the user to authenticate.
const LoginForm = () => {
  const router = useRouter()

  return (
    <Formik
      initialValues={{ username: '', password: '', rememberMe: false }}
      validate={(values) => {
        const errors: { username?: string, password?: string } | undefined = {}
        errors.username = !values.username
          ? 'Required'
          : values.username.length < 10
            ? 'Minimum length is 10'
            : undefined
        errors.password = !values.password ? 'Required' : undefined
        return errors.username !== undefined || errors.password !== undefined
          ? errors
          : undefined
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        // todo: make fetch call here and handle response
        setTimeout(() => {
          router.push('/authenticate-code')
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
                margin: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '35px'
              }}
            >
              <LogoIcon fontSize={47} logoType='BEYONDRISK' />
            </Box>
            <Box
              sx={{
                '> *:not(:first-child)': { paddingTop: '10px' }
              }}
            >
              <Input
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
              />
              <Input
                fullWidth
                type='password'
                placeholder='Enter your password...'
                name='password'
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.password && !!touched.password}
                helperText={
                  !!errors.password && !!touched.password && errors.password
                }
                value={values.password}
              />
            </Box>
            <Box
              sx={{
                marginTop: '23px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Checkbox
                labelProps={{
                  label: 'Remember me'
                }}
                checkboxProps={{
                  name: 'rememberMe',
                  onChange: handleChange,
                  onBlur: handleBlur,
                  checked: values.rememberMe
                }}
              />
              <Link
                linkProps={{ href: '/change-password' }}
                text='Trouble connecting?'
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

export default LoginForm
