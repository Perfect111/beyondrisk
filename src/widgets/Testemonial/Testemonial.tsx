import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

// The Component will render single testemonial block
// on the authentication screens

export interface ITestemonial {
  text: string
  image: string
  fullName: string
  title: string
  companyName: string
}

export interface TestemonialProps {
  testemonial?: ITestemonial
  loading?: boolean
}

const Testemonial = ({
  testemonial,
  loading,
  ...prop
}: TestemonialProps): JSX.Element => {
  return (
    <Box
      sx={{
        fontFamily: 'Alliance-TextRegular',
        minWidth: 450,
        maxWidth: 642,
        width: '100%',
        background:
          'linear-gradient(225deg, rgba(199, 181, 243, 0.25) 0%, rgba(215, 207, 232, 0.1) 100%)',
        borderRadius: '12px',
        backdropFilter: 'blur(20px)',
        zIndex: 5
      }}
      {...prop}
    >
      {loading || testemonial == null || !testemonial.text
        ? (
          <Stack padding='30px 35px'>
            <Stack spacing={0}>
              <Skeleton variant='text' sx={{ padding: '16px 0 0' }} />
              <Skeleton variant='text' sx={{ padding: '16px 0 0' }} />
              <Skeleton variant='text' sx={{ padding: '16px 0 0' }} />
            </Stack>
            <Stack flexDirection='row' paddingTop='25px'>
              <Skeleton variant='circular' width={59} height={59} />
              <Skeleton
                variant='rectangular'
                width={150}
                height={59}
                sx={{ marginLeft: '25px' }}
              />
            </Stack>
          </Stack>
          )
        : (
          <>
            <Typography
              sx={{
                fontFamily: 'Alliance-TextRegular',
                padding: '30px 35px',
                display: 'flex',
                flexGrow: 1,
                fontSize: '20px',
                fontWeight: 600,
                lineHeight: '29px',
                color: 'white'
              }}
              variant='h5'
              component='div'
            >
              {testemonial.text}
            </Typography>

            <Box
              sx={{
                padding: '0 32px 30px',
                display: 'flex',
                flexFlow: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
            >
              <Avatar
                sx={{ width: 60, height: 60 }}
                alt={testemonial.fullName}
                src={testemonial.image}
              />
              <Box
                sx={{
                  padding: '0 25px',
                  display: 'flex',
                  flexFlow: 'column',
                  alignItems: 'self-start',
                  justifyContent: 'flex-start'
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
                    fontWeight: 600,
                    fontSize: '15px',
                    lineHeight: '145%'
                  }}
                  variant='subtitle1'
                  component='div'
                >
                  {testemonial.fullName}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Alliance-TextRegular',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '15px',
                    lineHeight: '19px',
                    color: 'rgba(255, 255, 255, 0.6)'
                  }}
                  variant='subtitle1'
                  component='div'
                >
                  {testemonial.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Alliance-TextRegular',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '15px',
                    lineHeight: '19px',
                    color: 'rgba(255, 255, 255, 0.6)'
                  }}
                  variant='subtitle1'
                  component='div'
                >
                  {testemonial.companyName}
                </Typography>
              </Box>
            </Box>
          </>
          )}
    </Box>
  )
}

export default Testemonial
