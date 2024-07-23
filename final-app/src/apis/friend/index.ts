import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '~/utilities/services/initRequest'

export const fetchListFriend = createAsyncThunk('post/fetchListFriend', async (thunkAPI) => {
  try {
    const accessToken = localStorage.getItem('ACCESS_TOKEN') || ''
    const auth = {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
    const data = await axiosInstance.get('/friend/list', auth)
    return data.data.content
  } catch (error) {}
})

export const fetchListRequest = createAsyncThunk('post/fetchListRequest', async (thunkAPI) => {
  try {
    const accessToken = localStorage.getItem('ACCESS_TOKEN') || ''
    const auth = {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
    const data = await axiosInstance.get('/friend/request/list', auth)
    return data.data.content
  } catch (error) {}
})

export const fetchInfoFriend = createAsyncThunk('post/fetchInfoFriend', async (friendId: string, thunkAPI) => {
  try {
    const accessToken = localStorage.getItem('ACCESS_TOKEN') || ''
    const auth = {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
    const data = await axiosInstance.get(`/friend/friend-information?checkId=${friendId}`, auth)
    return data.data.content
  } catch (error) {}
})

export const sendRequest = createAsyncThunk('post/sendRequest', async (id: string, thunkAPI) => {
  try {
    const accessToken = localStorage.getItem('ACCESS_TOKEN') || ''
    const auth = {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
    await axiosInstance.post(`/friend/add?id=${id}`, auth)
  } catch (error) {}
})

export const acceptRequest = createAsyncThunk('post/acceptRequest', async (id: string, thunkAPI) => {
  try {
    const accessToken = localStorage.getItem('ACCESS_TOKEN') || ''
    const auth = {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
    await axiosInstance.post(`/friend/accept?id=${id}`, auth)
  } catch (error) {}
})

export const rejectRequest = createAsyncThunk('post/rejectRequest', async (senderId: string, thunkAPI) => {
  try {
    const accessToken = localStorage.getItem('ACCESS_TOKEN') || ''
    const auth = {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
    await axiosInstance.delete(`/friend/reject?senderId=${senderId}`, auth)
  } catch (error) {}
})

export const deleteFriend = createAsyncThunk('post/deleteFriend', async (friendId: string, thunkAPI) => {
  try {
    const accessToken = localStorage.getItem('ACCESS_TOKEN') || ''
    const auth = {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
    await axiosInstance.delete(`/friend/delete?friendId=${friendId}`, auth)
  } catch (error) {}
})

export const deleteRequestFriend = createAsyncThunk(
  'post/deleteRequestFriend',
  async (receiverId: string, thunkAPI) => {
    try {
      const accessToken = localStorage.getItem('ACCESS_TOKEN') || ''
      const auth = {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
      await axiosInstance.delete(`/friend/delete-request/user?receiverId=${receiverId}`, auth)
    } catch (error) {}
  }
)
