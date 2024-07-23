import React, { useEffect, useState } from 'react'
import Feeds from '../../organisms/Feeds/Feeds'
import { TPostView } from '~/types/post'
import EditBackground from '../../organisms/Profile/Header/EditBackground'
import Header from '../../organisms/Profile/Header/HeaderProfile'
import Intro from '../../organisms/Profile/Footer/Intro'
import Album from '../../organisms/Profile/Footer/Album'
import FriendProfile from '~/components/organisms/Profile/Footer/Friend'
import { useColorScheme } from '@mui/material'

const UserProfile: React.FC = () => {
  const { mode } = useColorScheme()
  //   const { data } = useGetPostOfFriendQuery()

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
        <div className='grid gap-2 col-span-2 '>
          <div className='h-full w-full'>
            {/* <div className='grid gap-2 grid-cols-1'>
              {data?.content ? (
                data.content.map((post, idx) => <PostCard key={idx} post={post} />)
              ) : (
                <p>No posts yet!</p>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
