import React, { useEffect } from 'react'
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ISearchUser } from '~/types/user'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '~/app/appHooks'
import { fetchListFriend } from '~/apis/friend/friendThunk'
import FriendCard from '~/components/organisms/Friend/FriendCard'
import { useTranslation } from 'react-i18next'
import WatchCard from './WatchCard'
import { fetchPostPublicOfFriend } from '~/apis/post/postThunk'

const WatchList = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const dispatch = useDispatch<AppDispatch>()
  const postPublic = useSelector((state: RootState) => state.post.postPublic)

  useEffect(() => {
    dispatch(fetchPostPublicOfFriend())
  }, [])

  return (
    <div className='h-full w-full pt-16 pl-[700px] pr-[300px]'>
      <WatchCard />
    </div>
  )
}

export default WatchList
