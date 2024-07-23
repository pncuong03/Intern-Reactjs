import React from 'react'
import Leftbar from './Leftbar'
import ShortCut from './Shortcut'

const LeftSidebar: React.FC = () => {
  return (
    <div className=' h-[calc(100vh-56px)] mt-14 w-[22.5rem] hover:overflow-y-auto px-2 py-3 xl:flex flex-col hidden'>
      <Leftbar />
      <ShortCut />
    </div>
  )
}

export default LeftSidebar
