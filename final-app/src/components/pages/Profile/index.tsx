import React, { useEffect, useState } from 'react'
import Feeds from '../../organisms/Feeds/Feeds'
import EditBackground from '../../organisms/Profile/Header/EditBackground'
import Header from '../../organisms/Profile/Header/HeaderProfile'
import Intro from '../../organisms/Profile/Footer/Intro'
import Album from '../../organisms/Profile/Footer/Album'
import FriendProfile from '~/components/organisms/Profile/Footer/Friend'
import { useColorScheme } from '@mui/material'
import CreatePostBox from '~/components/organisms/Post/CreatePost'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '~/app/appHooks'
import { fetchInfoUser } from '~/apis/user/userThunk'
import { fetchPostOfMe } from '~/apis/post/postThunk'
import ShareCard from '~/components/organisms/Post/ShareCard'

const ProfilePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { mode } = useColorScheme()
  const data = useSelector((state: RootState) => state.post.postOfMe)

  useEffect(() => {
    dispatch(fetchPostOfMe())
  }, [])

  useEffect(() => {
    dispatch(fetchInfoUser())
  }, [dispatch])

  return (
    <div>
      <div className={`h-auto w-full shadow ${mode === 'light' ? 'bg-white' : 'bg-neutral-800'}`}>
        <div className={`mx-auto h-full max-w-6xl rounded-md ${mode === 'light' ? 'bg-white' : 'bg-neutral-800'}`}>
          <EditBackground />
          <Header />
        </div>
      </div>

      <div className='mx-auto w-full lg:grid grid-cols-3 gap-4 h-full mt-6 px-3 md:px-6 lg:px-14 2xl:px-96'>
        <div className='grid gap-4 mb-4 col-span-1 h-fit'>
          <Intro />
          <Album />
          <FriendProfile />
        </div>
        <div className='grid gap-2 col-span-2'>
          <CreatePostBox isOpen={true} closeModal={() => {}} />
          {/* <Feeds data={data} /> */}
          <ShareCard />
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
