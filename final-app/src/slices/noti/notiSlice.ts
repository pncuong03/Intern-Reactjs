import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchListNoti } from '~/apis/noti'
import { INoti } from '~/types/noti'
import { IPost } from '~/types/post'
import { FetchStatus } from '~/types/user'

export interface NotiState {
  notiStatus: FetchStatus
  notification: INoti[]
}

const initialPost: IPost = {
  id: '',
  userId: '',
  state: '',
  fullName: '',
  imageUrl: '',
  createdAt: '',
  content: '',
  imageUrls: [],
  shareId: '',
  sharePost: {} as IPost,
  likeCount: 0,
  commentCount: 0,
  shareCount: 0,
  comments: [] || null,
  hasLike: false,
  type: ''
}

const initialState: NotiState = {
  notiStatus: FetchStatus.idle,
  notification: []
}

export const notiSlice = createSlice({
  name: 'noti',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListNoti.pending, (state) => {
        state.notiStatus = FetchStatus.pending
      })
      .addCase(fetchListNoti.fulfilled, (state, action: PayloadAction<INoti[]>) => {
        state.notiStatus = FetchStatus.succeeded
        state.notification = action.payload
      })
      .addCase(fetchListNoti.rejected, (state) => {
        state.notiStatus = FetchStatus.failed
      })
  }
})

export default notiSlice.reducer
