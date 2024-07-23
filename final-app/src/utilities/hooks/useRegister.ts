import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userRegister } from '~/apis/auth/authThunk'
import { AppDispatch } from '~/app/appHooks'

export const useRegister = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const onRegister = useCallback(
    async (fullname: string, username: string, password: string) => {
      await dispatch(userRegister({ fullname, username, password }))
      navigate('/')
    },
    [dispatch]
  )

  return { onRegister }
}
