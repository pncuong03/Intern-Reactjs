// import React, { useState } from 'react'
// import { IPost } from '~/types/post'
// import { HeartIcon } from '../../atoms/Icons/HeartIcon'
// import { LikeIcon } from '../../atoms/Icons/LikeIcon'
// import { CommentIcon } from '../../atoms/Icons/CommentIcon'
// import Button from '~/components/atoms/Button'
// import { useTranslation } from 'react-i18next'
// import { ShareIcon } from '~/components/atoms/Icons/ShareIcon'
// import { useColorScheme } from '@mui/material'
// import GetLikeModal from './GetLikeModal'
// import TimeComparison from '~/const/dateFormat'
// import { toast } from 'react-toastify'
// import { AppDispatch, RootState } from '~/app/appHooks'
// import { useDispatch, useSelector } from 'react-redux'
// import { likePost, unLikePost } from '~/apis/post/postThunk'
// import { access } from 'fs/promises'
// import clsx from 'clsx'
// import GetShareModal from './GetShareModal'

// interface IProps {
//   post: IPost
// }

// const PostCard: React.FC<IProps> = ({ post }) => {
//   const { t } = useTranslation()
//   const dispatch = useDispatch<AppDispatch>()
//   const { mode } = useColorScheme()
//   const [isOpenLiked, setIsOpenLiked] = useState(false)
//   const [isOpenShared, setIsOpenShared] = useState(false)

//   const likeHandler = () => {
//     if (post.hasLike === true) {
//       dispatch(unLikePost(post?.id))
//       toast.success('Unliked sucess')
//     } else {
//       dispatch(likePost(post?.id))
//       toast.success('Liked sucess')
//     }
//   }

//   return (
//     <div className={`h-auto w-full rounded-md ${mode === 'light' ? 'bg-white' : 'bg-black-700'} `}>
//       <div className='flex items-center space-x-2 p-2.5 px-4'>
//         <div className='h-11 w-12'>
//           <img src={post.imageUrl} className='h-full w-full rounded-full' alt='dp' />
//         </div>
//         <div className='flex flex-grow flex-col'>
//           <p className='text-lg font-semibold text-black'>{post.fullName}</p>
//           <span className='text-xs font-thin text-gray-400'>
//             <TimeComparison time={post.createdAt} />
//           </span>
//         </div>
//       </div>
//       {post.content ? (
//         <div className='mb-1'>
//           <p className='max-h-10 truncate px-3 text-md'>{post.content}</p>
//         </div>
//       ) : null}
//       {post.imageUrl ? (
//         <div className='h-76 max-h-100 w-full'>
//           <img src={post.imageUrl} alt='postImage' className='max-h-100 w-full object-cover' />
//         </div>
//       ) : null}

//       <div className='flex w-full flex-col space-y-2 p-2 px-4'>
//         <div
//           className={`flex items-center justify-between ${mode === 'light' ? 'border-gray-200' : 'border-gray-600'} border-b-[1px] pb-2 text-sm`}
//         >
//           <div className='flex items-center'>
//             <div className='flex items-center'>
//               <span className='flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 '>
//                 <HeartIcon />
//               </span>

//               <button className='ml-1' onClick={() => setIsOpenLiked(true)}>
//                 <p className='text-gray-400 font-inherit'>
//                   {post.likeCount} {t('home.like')}
//                 </p>
//               </button>
//             </div>
//           </div>
//           <div className='flex items-center space-x-2 text-sm'>
//             <button className='text-gray-400 font-inherit'>
//               {post.commentCount} {t('home.comment')}
//             </button>
//             <button className='text-gray-400 font-inherit'>
//               {post.shareCount} {t('home.share')}
//             </button>
//           </div>
//         </div>
//         <div className='flex space-x-3 text-sm font-semibold  '>
//           <Button
//             className={clsx('rounded-md', {
//               'text-primary': post.hasLike
//             })}
//             onClick={likeHandler}
//           >
//             <LikeIcon liked={post.hasLike} />
//             {t('home.like')}
//           </Button>
//           <Button className='rounded-md'>
//             <CommentIcon />
//             {t('home.comment')}
//           </Button>

//           <Button className='rounded-md' onClick={() => setIsOpenShared(true)}>
//             <ShareIcon />
//             {t('home.share')}
//           </Button>
//         </div>
//       </div>

//       <GetLikeModal isOpen={isOpenLiked} closeModal={() => setIsOpenLiked(false)} postId={post.id} />
//       <GetShareModal isOpen={isOpenShared} closeModal={() => setIsOpenShared(false)} shareId={post.id} />
//     </div>
//   )
// }

// export default PostCard
