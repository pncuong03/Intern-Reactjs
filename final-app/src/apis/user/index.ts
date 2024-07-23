// import { IUser } from '~/types/user'
// import httpRequest from '~/utilities/services/httpRequest'
// import { axiosInstance } from '~/utilities/services/initRequest'

// interface UserResponse {
//   data: IUser
// }

// export interface UserUpdateInput {
//   new_user_info: string
//   image: string
//   image_background: string
// }

// export function apiInfoUser(accessToken: string) {
//   return httpRequest.get<UserResponse>(`/user`, {
//     headers: {
//       Authorization: `Bearer ${accessToken}`
//     }
//   })
// }

// // export function apiEditUser(formData: any, accessToken: string) {
// //   return axiosInstance.post('/user/change-user-information', formData, {
// //     headers: {
// //       Authorization: `Bearer ${accessToken}`
// //     }
// //   })
// // }
