import React from 'react'
import Advertis from './Advertise'
import Contacts from './Contacts'
import { SearchIcon } from '~/components/atoms/Icons/SearchIcon'
import { Elipsis } from '~/components/atoms/Icons/Elipsis'
import Button from '~/components/atoms/Button'
import { useTranslation } from 'react-i18next'

const RightSidebar: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className=' h-[calc(100vh-56px)] hover:overflow-y-auto  lg:w-64 mt-14 py-3 pr-2 lg:flex flex-col hidden'>
      <Advertis />
      <div className=''>
        <div className='flex items-center justify-between'>
          <p className='font-semibold text-black dark:text-gray-200'>{t('home.contact')}</p>
          <div className='flex items-center space-x-3S'>
            <Button className='rounded-full'>
              <SearchIcon />
            </Button>
            <Button className='rounded-full'>
              <Elipsis />
            </Button>
          </div>
        </div>
        <div className='-ml-1'>
          <Contacts />
        </div>
      </div>
    </div>
  )
}

export default RightSidebar
