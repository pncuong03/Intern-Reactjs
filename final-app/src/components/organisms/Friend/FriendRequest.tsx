import React from 'react'
import FriendCard from './FriendCard'
import { useTranslation } from 'react-i18next'

interface IProps {
  data: any
}

const FriendRequest: React.FC<IProps> = ({ data }) => {
  const { t } = useTranslation()
  console.log(data)

  return (
    <div className='h-full w-full pt-20'>
      <p className='font-semibold text-xl py-3'>{t('home.request')}</p>

      <div className='grid grid-cols-7 gap-3'>
        {data.length > 0 ? (
          data.map((friend: any) => <FriendCard key={friend.id} data={friend} />)
        ) : (
          <p>No friends yet!</p>
        )}
      </div>
    </div>
  )
}

export default FriendRequest
