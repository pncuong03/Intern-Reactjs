import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchListRequest } from '~/apis/friend'
import { IFriend } from '~/types/friend'
import { FetchStatus } from '~/types/user'

export interface FriendState {
  friendStatus: FetchStatus
  friend: IFriend
}

const initialState: FriendState = {
  friendStatus: FetchStatus.idle,
  friend: {
    fullName: '',
    imageUrl: ''
  }
}

export const friendSlice = createSlice({
  name: 'friend',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListRequest.pending, (state) => {
        state.friendStatus = FetchStatus.pending
      })
      .addCase(fetchListRequest.fulfilled, (state, action: PayloadAction<IFriend>) => {
        state.friendStatus = FetchStatus.succeeded
        state.friend = action.payload
      })
      .addCase(fetchListRequest.rejected, (state) => {
        state.friendStatus = FetchStatus.failed
      })
  }
})

export default friendSlice.reducer
