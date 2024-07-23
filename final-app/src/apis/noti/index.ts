import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '~/utilities/services/initRequest'

export const fetchListNoti = createAsyncThunk('post/fetchListNoti', async (thunkAPI) => {
  try {
    const accessToken = localStorage.getItem('ACCESS_TOKEN') || ''
    const auth = {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
    const data = await axiosInstance.get('/notification', auth)
    return data.data.content
  } catch (error) {}
})
