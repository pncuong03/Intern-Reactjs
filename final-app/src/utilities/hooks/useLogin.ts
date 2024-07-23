import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userLogin } from '~/apis/auth/authThunk'
import { AppDispatch } from '~/app/appHooks'

export const useLogin = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const onLogin = useCallback(
    async (username: string, password: string) => {
      await dispatch(userLogin({ username, password }))
      navigate('/')
    },
    [dispatch]
  )

  return { onLogin }
}
