import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import routesName from './enum.routes'
import MainLayout from '~/components/layouts/MainLayout'
import HomePage from '~/components/pages/Home'
import WATCH from '~/components/pages/Watch'
import Marketpalce from '~/components/pages/Marketplace'
import Gaming from '~/components/pages/Gaming'
import GroupPage from '~/components/pages/Group'
import ProfilePage from '~/components/pages/Profile'
import FriendPage from '~/components/pages/Friend'
import Login from '~/components/pages/Login'
import Register from '~/components/pages/Register'
import PrivateRoute from '~/components/auth/privateRoute'
import PublicRoute from '~/components/auth/publicRoute'

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/404'
          element={
            <div className='flex h-[100vh] w-full items-center justify-center'>
              <p className='text-50px text-primary font-bold'>404</p>
            </div>
          }
        />

        <Route path={routesName.LOGIN} element={<PublicRoute element={<Login />} />} />
        <Route path={routesName.REGISTER} element={<PublicRoute element={<Register />} />} />

        <Route path='/' element={<PrivateRoute element={<MainLayout />} />}>
          <Route index element={<HomePage />} />
          <Route path={routesName.WATCH} element={<WATCH />} />
          <Route path={routesName.MARKETPLACE} element={<Marketpalce />} />
          <Route path={routesName.GAMING} element={<Gaming />} />
          <Route path={routesName.GROUP} element={<GroupPage />} />
          <Route path={routesName.PROFILE} element={<ProfilePage />} />
          <Route path={routesName.FRIEND} element={<FriendPage />} />
        </Route>

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
