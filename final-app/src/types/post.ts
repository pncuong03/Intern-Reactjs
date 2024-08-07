export type TPostView = 'gridView' | 'listView'

export interface IComment {
  id: number
  postId: number
  userId: number
  fullName: string
  imageUrl: string
  comment: string
  createdAt: string
  canDelete: boolean
}

export interface IPost {
  id: string
  userId: string
  state: string
  fullName: string
  imageUrl: string
  createdAt: string
  content: string
  imageUrls: string[]
  shareId: string
  sharePost: IPost
  likeCount: number
  commentCount: number
  shareCount: number
  comments: IComment[]
  hasLike: boolean
  type: string
}

export interface LikeData {
  id: string
  fullName: string
  imageUrl: string
}
