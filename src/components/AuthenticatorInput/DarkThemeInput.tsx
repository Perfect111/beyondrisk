import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'

const DarkThemeInputs = styled(TextField)({
  '& label.Mui-focused': {
    color: '#fff',
    padding: '0 !important',
    textAlign: 'center'
  },
  '& .MuiOutlinedInput-input': {
    padding: '0 !important',
    textAlign: 'center'
  },
  '& .MuiOutlinedInput-root': {
    outlineStyle: 'none',
    '& fieldset': {
      borderRadius: 8,
      borderColor: 'rgba(255, 255, 255, 0.1)',
      padding: '0 !important'
    },

    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.1)'
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgba(255, 255, 255, 1)',
      borderWidth: '1px'
    }
  }
})

export default DarkThemeInputs
