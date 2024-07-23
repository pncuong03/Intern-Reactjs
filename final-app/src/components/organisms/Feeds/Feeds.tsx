import React from 'react'
import PostCard from '../Post/PostCard'

interface IProps {
  data?: any
}

const Feeds: React.FC<IProps> = ({ data }) => {
  return (
    <div className='h-full w-full'>
      <div className='grid gap-2 grid-cols-1'>
        {data.map((post: any, idx: string) => (
          <PostCard key={idx} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Feeds
