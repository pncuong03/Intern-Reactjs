import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import { useColorScheme } from '@mui/material/styles'

const MainLayout: React.FC = () => {
  const { mode } = useColorScheme()

  return (
    <div className={`min-h-screen pb-10 ${mode === 'dark' ? 'bg-dark' : 'bg-light'}`}>
      <Header />
      <main className='mx-auto max-w-[1920px]'>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
