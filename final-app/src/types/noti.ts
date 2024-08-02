import { IFriend } from './friend'
import { IPost } from './post'

export interface INoti {
  id: string
  type: string
  userId: string
  interactId: string
  groupId: string
  interactType: string
  postId: string
  hasSeen: boolean
  createdAt: string
  interact: IFriend
  //   group: {
  //     id: 0
  //     name: 'string'
  //   }
  post: IPost
}

export interface IMessage {
  chatId: string
  userId: string
  fullName: string
  imageUrl: string
  message: string
  isMe: boolean
  createdAt: string
}

export interface IEventNoti {
  messageCount: number
  informCount: number
  messages: IMessage[]
}
