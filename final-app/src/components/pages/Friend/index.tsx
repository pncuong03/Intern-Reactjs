import { use } from 'i18next'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchListRequest } from '~/apis/friend'
import { AppDispatch, RootState } from '~/app/appHooks'
import FriendRequest from '~/components/organisms/Friend/FriendRequest'
import FriendSidebar from '~/components/organisms/Friend/FriendSidebar'

export default function Friend() {
  const dispatch = useDispatch<AppDispatch>()
  const data = useSelector((state: RootState) => state.friend.friend)

  useEffect(() => {
    dispatch(fetchListRequest())
  }, [])

  return (
    <div className='flex gap-3'>
      <FriendSidebar />
      <FriendRequest data={data} />
    </div>
  )
}
