import { IAuth } from '~/types/user'
import LocalStorage, { LocalStorageKey } from '~/utilities/local-storage/localStorage'
import httpRequest from '~/utilities/services/httpRequest'

export function authLogin(params: { username: string; password: string }) {
  return httpRequest.post<IAuth>('/user/log-in', params).then((data: IAuth) => {
    localStorage.setItem(LocalStorageKey.ACCESS_TOKEN, data.data.accessToken)

    return data
  })
}

export function authRegister(params: { fullname: string; username: string; password: string }) {
  return httpRequest.post<IAuth>('/user/sign-up', params).then((data: IAuth) => {
    localStorage.setItem(LocalStorageKey.ACCESS_TOKEN, data.data.accessToken)

    return data
  })
}

export const logout = () => {
  LocalStorage.remove(LocalStorageKey.ACCESS_TOKEN)
}
