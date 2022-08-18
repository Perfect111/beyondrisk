import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'

const DarkThemeInput = styled(TextField)({
  '& label.Mui-focused': {
    color: '#fff'
  },
  '& .MuiOutlinedInput-root': {
    outlineStyle: 'none',
    '& fieldset': {
      borderRadius: 8,
      borderColor: 'rgba(255, 255, 255, 0.1)'
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

export default DarkThemeInput
