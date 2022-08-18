import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import userSlice from './user-preference/interfaceSlice'

const store = configureStore({
  reducer: {
    user: userSlice
  },
  middleware: [thunk]
})

export default store
