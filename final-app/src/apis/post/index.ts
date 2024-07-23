// import { IPost, LikeData } from '~/types/post'
// import httpRequest from '~/utilities/services/httpRequest'
// import { axiosInstance } from '~/utilities/services/initRequest'

// export interface PostResponse {
//   data: {
//     content: IPost[]
//   }
// }

// export interface LikeResponse {
//   data: {
//     content: LikeData[]
//   }
// }

// export interface CreatePostInput {
//   createPostInputString: string
//   images: string[]
// }

// export interface SharePostInput {
//   content: string
//   state: string
//   imageUrls: string[]
// }

// export function apiPostPublicOfFriend(accessToken: string) {
//   return httpRequest.get<PostResponse>(`/post/list/friends`, {
//     headers: {
//       Authorization: `Bearer ${accessToken}`
//     }
//   })
// }

// export function apiPostUser(accessToken: string, userId: string) {
//   return httpRequest.get<PostResponse>(`/post/list/post-user?userId=${userId}`, {
//     headers: {
//       Authorization: `Bearer ${accessToken}`
//     }
//   })
// }

// export function apiPostOfFriend(accessToken: string, userId: string) {
//   return httpRequest.get<PostResponse>(`/post/list/post-friend?userId=${userId}`, {
//     headers: {
//       Authorization: `Bearer ${accessToken}`
//     }
//   })
// }

// export function apiPostOfMe(accessToken: string) {
//   return httpRequest.get<PostResponse>(`/post/list/me`, {
//     headers: {
//       Authorization: `Bearer ${accessToken}`
//     }
//   })
// }

// export function apiListLikePost(postId: string) {
//   return httpRequest.get<LikeResponse>(`/user/post/interaction/like/list?postId=${postId}`)
// }

// export function apiCreatePost({ createPostInputString, images }: CreatePostInput, accessToken: string) {
//   return httpRequest.post('/post/post', {
//     data: { createPostInputString, images },
//     headers: {
//       Authorization: `Bearer ${accessToken}`
//     }
//   })
// }

// export function apiUpdatePost({ createPostInputString, images }: CreatePostInput, accessToken: string, postId: string) {
//   return httpRequest.put(`/post/update?postId=${postId}`, {
//     data: { createPostInputString, images },
//     headers: {
//       Authorization: `Bearer ${accessToken}`
//     }
//   })
// }

// export function apiSharePost({ content, state, imageUrls }: SharePostInput, accessToken: string, shareId: string) {
//   return httpRequest.post(`/post/share?shareId=${shareId}`, {
//     data: { content, state, imageUrls },
//     headers: {
//       Authorization: `Bearer ${accessToken}`
//     }
//   })
// }

// export function apiDeletePost(accessToken: string, postId: string) {
//   return httpRequest.delete(`/post/delete?postId=${postId}`, {
//     headers: {
//       Authorization: `Bearer ${accessToken}`
//     }
//   })
// }

// // export function apiLikePost(postId: string) {
// //   const accessToken = localStorage.getItem('ACCESS_TOKEN') || ''
// //   // console.log(accessToken)

// //   return httpRequest.post(`/post/interaction/like?postId=${postId}`, {
// //     headers: {
// //       Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjoyLCJ1c2VybmFtZSI6InR1eWV0Iiwic3ViIjoidHV5ZXQiLCJpYXQiOjE3MjE1MDUyNDAsImV4cCI6MTcyMjM2OTI0MH0.NK9w-v4tv-DlLdgs1SOGhvCSY6oXreuwd-KPtYmh4DHimvIMuhBEHjV4cz6NUjqbJl48SCrwW4UZBIUvOdaiew
// // `
// //     }
// //   })
// // }
