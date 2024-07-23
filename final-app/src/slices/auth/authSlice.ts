import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { userLogin, userRegister } from '~/apis/auth/authThunk'
import { FetchStatus } from '~/types/user'

export interface AuthState {
  loginStatus: FetchStatus
  accessToken: string | null
}

const initialState: AuthState = {
  loginStatus: FetchStatus.idle,
  accessToken: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: () => initialState
    // logOut: () => {
    //   authService.logout();
    //   return {
    //     loginStatus: FetchStatus.idle,
    //     accessToken: null,
    //   };
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loginStatus = FetchStatus.pending
      })
      .addCase(userLogin.fulfilled, (state, action: PayloadAction<string>) => {
        toast.success('Login successful')
        state.accessToken = action.payload
        state.loginStatus = FetchStatus.succeeded
      })
      .addCase(userLogin.rejected, (state) => {
        toast.error('Username or password is incorrect')
        state.loginStatus = FetchStatus.failed
        state.accessToken = null
      })

      .addCase(userRegister.pending, (state) => {
        state.loginStatus = FetchStatus.pending
      })
      .addCase(userRegister.fulfilled, (state, action: PayloadAction<string>) => {
        toast.success('Register successful')
        state.accessToken = action.payload
        state.loginStatus = FetchStatus.succeeded
      })
      .addCase(userRegister.rejected, (state) => {
        toast.error('Username already exists')
        state.loginStatus = FetchStatus.failed
        state.accessToken = null
      })
  }
})

export const { reset } = authSlice.actions

export default authSlice.reducer
