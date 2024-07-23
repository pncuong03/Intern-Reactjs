export interface IAuth {
  data: {
    accessToken: string
  }
}

export interface IUser {
  fullName: string
  imageUrl: string
  backgroundUrl: string
  birthday: string
  gender: string
  description: string
}

export interface ISearchUser {
  fullName: string
  imageUrl: string
  isFriend: string
  hadSendFriendRequest: string
  hadReceiverFriendRequest: string
}

export enum FetchStatus {
  idle = 'idle',
  pending = 'pending',
  succeeded = 'succeeded',
  failed = 'failed'
}
