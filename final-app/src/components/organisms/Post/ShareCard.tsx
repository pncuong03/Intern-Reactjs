import TimeComparison from '~/const/dateFormat'
import PostCard from './PostCard'
import { IPost } from '~/types/post'
import { useSelector } from 'react-redux'
import { RootState } from '~/app/appHooks'
import { useColorScheme } from '@mui/material'

// interface IProps {
//   data: IPost
// }

const ShareCard: React.FC = () => {
  const posts = useSelector((state: RootState) => state.post.postOfMe)
  const { mode } = useColorScheme()

  return (
    <div className='flex flex-col gap-3'>
      {posts?.map((item) => (
        <div key={item.id}>
          {item.sharePost ? (
            <div
              className={`h-auto w-full flex flex-col  rounded-md ${mode === 'light' ? 'bg-white' : 'bg-black-700'} `}
            >
              {/* <div className='p-4 flex flex-col gap-2 '> */}
              <div className='flex items-center space-x-2 p-2.5 px-4'>
                <div className='h-11 w-12'>
                  <img src={item.imageUrl} className='h-full w-full rounded-full' alt='dp' />
                </div>
                <div className='flex flex-grow flex-col'>
                  <p className='text-lg font-semibold text-black'>{item.fullName}</p>
                  <span className='text-xs font-thin text-gray-400'>
                    <TimeComparison time={item.createdAt} />
                  </span>
                </div>
              </div>
              {item.content ? (
                <div className='mb-1'>
                  <p className='max-h-10 truncate px-3 text-md'>{item.content}</p>
                </div>
              ) : null}
              <div className='p-4 rounded-lg'>
                <PostCard post={item.sharePost} />
              </div>
            </div>
          ) : (
            <PostCard post={item} />
          )}
        </div>
      ))}
    </div>
  )
}

export default ShareCard
