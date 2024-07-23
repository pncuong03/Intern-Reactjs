import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from '~/app/store'

interface PublicRouteProps {
  element: React.ReactElement
}

const PublicRoute: React.FC<PublicRouteProps> = ({ element }) => {
  const loginStatus = useSelector((state: RootState) => state.auth.loginStatus)
  const accessToken = useSelector((state: RootState) => state.auth.accessToken)

  return loginStatus === 'succeeded' && accessToken ? <Navigate to='/' /> : element
}

export default PublicRoute
