import { createSlice } from '@reduxjs/toolkit'

interface UserInterface {
  theme?: 'dark' | 'light'
}

const initialState: UserInterface = {
  theme: 'dark'
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
})

export default userSlice.reducer

export const selectTheme = (state: any): any => state.theme
