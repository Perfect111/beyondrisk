import React, { useEffect, useState } from 'react'

import Box from '@mui/material/Box'
import Testemonial, { ITestemonial } from '../Testemonial/Testemonial'

import { Fade, IconButton, Slide } from '@mui/material'
import { arrowLeft, arrowRight, widget } from '../../../public/assets'

// The Gallery component will render testemonials
// on the authentication pages

export interface TestemonialGalleryProps {
  testemonials?: ITestemonial[]
  loading?: boolean
  animated?: boolean
}

const TestemonialGallery = ({
  testemonials = [],
  loading,
  animated,
  ...prop
}: TestemonialGalleryProps): JSX.Element => {
  const [activeIndex, setActive] = useState(0)
  const [direction, setDirection] = useState(0)
  const [lockTimer, setTimerLock] = useState(false)
  const [fadeOutQuotes, setQuotesFadeState] = useState(true)
  const [timer, setTimer] = useState<
  string | number | NodeJS.Timeout | undefined
  >(undefined)

  const handleActive = (isPrev: boolean) => {
    setQuotesFadeState(false)
    if (isPrev) {
      const focusIndex = activeIndex - 1
      const prevIndex = focusIndex < 0 ? testemonials.length - 1 : focusIndex
      setActive(prevIndex)
      setDirection(0)
    } else {
      const focusIndex = activeIndex + 1
      const nextIndex = focusIndex >= testemonials.length ? 0 : focusIndex
      setActive(nextIndex)
      setDirection(1)
    }
  }

  const clearTimer = () => {
    clearTimeout(timer)
    setTimer(undefined)
  }

  const startAnimation = () => {
    const newTimer = setTimeout(() => {
      console.log('A OVDE')
      handleActive(false)
      clearTimer()
    }, 4000)

    setTimer(newTimer)
  }

  useEffect(() => {
    if (
      animated &&
      !timer &&
      fadeOutQuotes &&
      !lockTimer &&
      testemonials.length > 0
    ) {
      startAnimation()
    }
  }, [testemonials, animated, fadeOutQuotes, timer, lockTimer])

  useEffect(() => {
    // "timer" will be undefined again after the next re-render
    return () => clearTimer()
  }, [])

  const endingInProgress = () => {
    setQuotesFadeState(true)
  }

  return (
    <Box
      sx={{
        padding: '70px 0 0 30px',
        maxWidth: 652,
        width: '100%',
        overflow: 'hidden'
      }}
      onMouseEnter={() => {
        clearTimer()
        setTimerLock(true)
      }}
      onMouseLeave={() => {
        setTimerLock(false)
      }}
    >
      <Fade in={fadeOutQuotes}>
        <span>
          <Box
            sx={{
              backgroundImage: `url(${widget.src || widget})`,
              width: '109px',
              height: '96px',
              position: 'relative',
              marginTop: '-60px',
              marginLeft: '-20px',
              zIndex: 1,
              marginBottom: '-37px',
              display: 'block'
            }}
          />
        </span>
      </Fade>
      <Box
        sx={{
          minWidth: 420,
          maxWidth: 642,
          width: '100%',
          display: 'flex',
          flexFlow: 'row',
          zIndex: 5
        }}
        {...prop}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            zIndex: 5
          }}
          {...prop}
        >
          {(loading || testemonials.length === 0) && <Testemonial loading />}
          {!loading &&
            testemonials.length &&
            testemonials.map((testemonial, index) => {
              return (
                <Slide
                  key={`slide-${index}`}
                  onEntered={endingInProgress}
                  direction={direction ? 'left' : 'right'}
                  mountOnEnter
                  unmountOnExit
                  appear={false}
                  exit={false}
                  in={index === activeIndex}
                  timeout={{
                    appear: 500,
                    enter: 300,
                    exit: 100
                  }}
                >
                  <div style={{ zIndex: 5 }}>
                    <Testemonial testemonial={testemonial} />
                  </div>
                </Slide>
              )
            })}
        </Box>
      </Box>

      {testemonials.length > 1 && (
        <Box
          sx={{
            display: 'flex',
            flexFlow: 'row',
            justifyContent: 'flex-end',
            paddingTop: '20px'
          }}
        >
          <IconButton
            color='primary'
            aria-label='previous slide'
            component='span'
            disabled={!fadeOutQuotes}
            onClick={() => {
              if (fadeOutQuotes) {
                setTimerLock(true)
                handleActive(true)
              }
            }}
          >
            <Box
              sx={{
                width: 36,
                height: 36,
                backgroundImage: `url(${arrowLeft.src || arrowLeft})`
              }}
            />
          </IconButton>
          <IconButton
            color='primary'
            aria-label='previous slide'
            component='span'
            disabled={!fadeOutQuotes}
            onClick={() => {
              if (fadeOutQuotes) {
                setTimerLock(true)
                handleActive(false)
              }
            }}
          >
            <Box
              sx={{
                width: 36,
                height: 36,
                backgroundImage: `url(${arrowRight.src || arrowRight})`
              }}
            />
          </IconButton>
        </Box>
      )}
    </Box>
  )
}

export default TestemonialGallery
