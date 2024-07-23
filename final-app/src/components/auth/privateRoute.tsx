import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from '~/app/store'

interface PrivateRouteProps {
  element: React.ReactElement
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const loginStatus = useSelector((state: RootState) => state.auth.loginStatus)
  const accessToken = useSelector((state: RootState) => state.auth.accessToken)

  return loginStatus === 'succeeded' && accessToken ? element : <Navigate to='/login' />
}

export default PrivateRoute
