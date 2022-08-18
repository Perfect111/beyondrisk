import { Box } from '@mui/material'
import AuthenticatorQR from 'widgets/Authenticator/AuthenticatorQR/AuthenticatorQR'
import TestemonialGallery from 'widgets/TestemonialGallery/TestemonialGallery'

const AuthenticatorQRPage = (): any => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'row',
        height: 'auto',
        justifyContent: 'space-between',
        wrap: 'no-wrap',
        alignItems: 'center',
        margin: 'auto',
        width: '100%',
        maxWidth: 1200
      }}
    >
      <AuthenticatorQR />

      <TestemonialGallery
        testemonials={[
          {
            text: 'BeyondRisk is helping cybersecurity and IT risk professionals solve two.',
            image: 'https://mui.com/static/images/avatar/1.jpg',
            fullName: 'Darth Vader',
            title: 'CISO',
            companyName: 'Yum! Brands'
          },
          {
            text: 'BeyondRisk is helping cybersecurity and IT risk professionals solve two, long-standing problems: accurately assessing and quantifying enterprise risk.',
            image: 'https://mui.com/static/images/avatar/2.jpg',
            fullName: 'King Arthur',
            title: 'CISO',
            companyName: 'Yum! Brands'
          },
          {
            text: 'BeyondRisk is helping cybersecurity and IT risk professionals solve two, long-standing problems: accurately assessing and quantifying enterprise risk. BeyondRisk is helping cybersecurity and IT risk professionals solve two.',
            image: 'https://mui.com/static/images/avatar/3.jpg',
            fullName: 'Elias Oxendine',
            title: 'CISO',
            companyName: 'Yum! Brands'
          }
        ]}
        animated
      />
    </Box>
  )
}

export default AuthenticatorQRPage
