import React, { useEffect, useState } from 'react'
import DarkThemeInputs from './DarkThemeInput'
import Grid from '@mui/material/Grid'
import { TextFieldProps } from '@mui/material/TextField'

export enum InputValidation {
  NUMERIC = 'numeric',
  ALPHABETICAL = 'alphabetical',
  ALPHANUMERIC = 'alphanumeric'
}

export const InputValidators = {
  [InputValidation.NUMERIC]: /^[0-9]$/,
  [InputValidation.ALPHABETICAL]: /^[a-zA-Z]$/,
  [InputValidation.ALPHANUMERIC]: /^[a-zA-Z0-9]$/
}

export type AuthenticatorInputProps = {
  numOfFields: number
  isProcessingAuthentication: boolean
  hasAuthenticationError?: boolean
  inputType?: InputValidation
} & TextFieldProps

interface ISingleAuthInputOptions {
  value: string
  focus: boolean
}

type SingleAuthInput = Record<string, ISingleAuthInputOptions>

// The input component will render a text field, number field, password field or text area field for use in forms.
const AuthenticatorInput = ({
  numOfFields = 6,
  isProcessingAuthentication,
  hasAuthenticationError = false,
  inputType = InputValidation.NUMERIC,
  ...props
}: AuthenticatorInputProps): JSX.Element => {
  const [authInputs, setAuthInputs] = useState<SingleAuthInput>({})
  const [isPasted, setIsPasted] = useState<boolean>(false)
  const [isDeleted, setIsDeleted] = useState<boolean>(false)

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    inputKey: string
  ) => {
    if (isPasted) {
      return
    }
    if (isDeleted) {
      setIsDeleted(false)
      return
    }

    const inputs = Array.from(Array(numOfFields)).reduce(
      (acc, __, currentIndex) => {
        if (currentIndex === parseInt(inputKey)) {
          acc[currentIndex] = {
            value: e.target.value.split('').pop(),
            focus: false
          }
        } else {
          acc[currentIndex] = {
            value: authInputs[currentIndex].value,
            focus: parseInt(inputKey) + 1 === currentIndex
          }
        }

        return acc
      },
      {}
    )

    setAuthInputs(inputs)
  }

  const handleOnFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
    inputKey: string
  ) => {}

  const handleOnPaste = (e: ClipboardEvent) => {
    setIsPasted(true)
    e.clipboardData?.items[0].getAsString((authString) => {
      const modifiedRegExp = InputValidators.numeric
        .toString()
        .replace('$/', `{${numOfFields}}$`)
        .replace('/^', '^')

      if (!new RegExp(modifiedRegExp).test(authString)) {
        setIsPasted(false)
        return
      }
      const authArray = authString.slice(0, numOfFields).split('')
      const inputs = Array.from(Array(numOfFields)).reduce(
        (acc, __, currentIndex) => {
          acc[currentIndex] = {
            value: authArray[currentIndex],
            focus: false
          }
          return acc
        },
        {}
      )
      console.log('handleOnPaste', inputs)
      setAuthInputs(inputs)
      setIsPasted(false)
    })
  }

  const handleOnDelete = (e: KeyboardEvent, inputKey: string) => {
    console.log('DELETE', inputKey)
    setIsDeleted(true)
    const inputs = Array.from(Array(numOfFields)).reduce(
      (acc, __, currentIndex) => {
        acc[currentIndex] = {
          value:
            parseInt(inputKey) === currentIndex
              ? ''
              : authInputs[currentIndex].value,
          focus:
            parseInt(inputKey) - 1 >= 0 &&
            parseInt(inputKey) - 1 === currentIndex
        }

        return acc
      },
      {}
    )
    setAuthInputs(inputs)
  }

  const handleKeyDown = (e: KeyboardEvent, inputKey: string) => {
    // If backspace or delete - call onDelete
    if (e.key === 'Backspace' || e.key === 'Delete') {
      handleOnDelete(e, inputKey)
    } else if (!e.ctrlKey && !InputValidators[inputType].test(e.key)) {
      e.preventDefault()
    } else {
      setIsDeleted(false)
    }
  }

  useEffect(() => {
    const inputs = Array.from(Array(numOfFields)).reduce(
      (acc, __, currentIndex) => {
        if (currentIndex === 0) {
          acc[currentIndex] = { value: '', focus: true }
        } else {
          acc[currentIndex] = { value: '', focus: false }
        }
        return acc
      },
      {}
    )
    setAuthInputs(inputs)
  }, [])

  useEffect(() => {
    const inputs = document.getElementsByTagName(
      'input'
    ) as HTMLCollectionOf<HTMLElement>

    const inputToValue = Object.entries(authInputs).map(
      (authInput) => authInput[1].value
    )
    const fullValue = inputToValue.join('')
    const inputToFocus = Object.entries(authInputs).find(
      (authInput) => authInput[1].focus
    )
    const indexForFocus = inputToFocus?.length
      ? parseInt(inputToFocus[0])
      : fullValue.length === 0
        ? 0
        : fullValue.length < inputs.length
          ? fullValue.length
          : inputs.length - 1

    // console.log('parseInt(inputToFocus[0])', inputToFocus)
    // console.log('indexForFocus', indexForFocus)
    // console.log('fullValue.length === 0', fullValue.length)
    inputs.length && inputs[indexForFocus].focus()
  }, [authInputs])

  return (
    <Grid
      container
      spacing={1}
      wrap='nowrap'
      maxWidth={350}
      onPaste={(e: any) => handleOnPaste(e)}
      {...{ 'data-testid': 'test-id' }}
    >
      {Object.entries(authInputs).map(([key, input]) => (
        <Grid key={key} item>
          <DarkThemeInputs
            key={key}
            variant='outlined'
            onChange={(e) => {
              handleOnChange(e, key)
            }}
            onFocus={(e) => {
              handleOnFocus(e, key)
            }}
            onKeyDown={(e: any) => handleKeyDown(e, key)}
            InputProps={{
              disableUnderline: true,
              placeholder: '',
              value: input.value,
              sx: {
                fontFamily: 'Alliance-TextLight',
                fontWeight: 300,
                fontSize: '48px',
                color: 'rgba(255, 255, 255, 1)',
                letterSpacing: '1px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                width: '100%',
                minWidth: '100%',
                height: '100px',
                lineHeight: '69px',
                padding: '0 !important',
                textAlign: 'center'
              }
            }}
            {...props}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default AuthenticatorInput
