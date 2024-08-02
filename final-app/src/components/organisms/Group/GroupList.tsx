import React from 'react'
import GroupCard from './GroupCard'

const postData = [
  {
    id: 1,
    fullName: 'Cường',
    createdAt: '2024-08-01T12:34:56Z',
    content: 'Nội dung bài viết của Cường',
    imageUrl: 'https://picsum.photos/100?random=1',
    imageUrls: 'https://picsum.photos/800?random=1',
    likeCount: 10,
    commentCount: 5,
    shareCount: 2
  },
  {
    id: 2,
    fullName: 'Hà Anh',
    createdAt: '2024-08-01T10:22:33Z',
    content: 'Nội dung bài viết của Hà Anh',
    imageUrl: 'https://picsum.photos/100?random=2',
    imageUrls: 'https://picsum.photos/800?random=2',
    likeCount: 20,
    commentCount: 10,
    shareCount: 5
  },
  {
    id: 3,
    fullName: 'Tuyết',
    createdAt: '2024-08-01T08:11:22Z',
    content: 'Nội dung bài viết của Tuyết',
    imageUrl: 'https://picsum.photos/100?random=3',
    imageUrls: 'https://picsum.photos/800?random=3',
    likeCount: 15,
    commentCount: 7,
    shareCount: 3
  },
  {
    id: 4,
    fullName: 'Hải',
    createdAt: '2024-08-01T06:00:00Z',
    content: 'Nội dung bài viết của Hải',
    imageUrl: 'https://picsum.photos/100?random=4',
    imageUrls: 'https://picsum.photos/800?random=4',
    likeCount: 25,
    commentCount: 12,
    shareCount: 6
  }
]

const GroupList = () => {
  return (
    <div className='h-full w-full pt-16 pl-[700px] pr-[300px]'>
      <GroupCard data={postData} />
    </div>
  )
}

export default GroupList
