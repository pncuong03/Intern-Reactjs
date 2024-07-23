import clsx from 'clsx'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import routesName from '~/routes/enum.routes'
import Modal from 'react-modal'

import { MoonIcon } from '../../atoms/Icons/MoonIcon'
import { SunIcon } from '../../atoms/Icons/SunIcon'
import { HomeIcon } from '~/components/atoms/Icons/HomeIcon'
import { WatchIcon } from '~/components/atoms/Icons/WatchIcon'
import { GroupIcon } from '~/components/atoms/Icons/GroupIcon'
import { BarsIcon } from '~/components/atoms/Icons/BarsIcon'
import { PlusIcon } from '~/components/atoms/Icons/PlusIcon'
import { MessageIcon } from '~/components/atoms/Icons/MessageIcon'
import { BellIcon } from '~/components/atoms/Icons/BellIcon'
import Button from '~/components/atoms/Button'
import { useTranslation } from 'react-i18next'
import { useColorScheme } from '@mui/material/styles'
import MaterialUISwitch from '~/components/atoms/SwitchDarkMode/SwitchDarkMode'
import { AppDispatch, RootState } from '~/app/appHooks'
import { useDispatch, useSelector } from 'react-redux'
import GetCommnetModal from '~/components/organisms/Post/GetCommentModal'
import GetNotificationModal from '~/components/organisms/Notification/GetNotificationModal'
import Input from '~/components/atoms/Input'
import { fetchSearchUser } from '~/apis/user/userThunk'
import { setSearchQuery } from '~/slices/user/userSlice'
import { debounce } from '@mui/material'

const MENU_ITEMS = [
  { name: 'Home', path: routesName.HOME, icon: HomeIcon },
  { name: 'Watch', path: routesName.WATCH, icon: WatchIcon },

  { name: 'GROUP', path: routesName.GROUP, icon: GroupIcon }
]

const Header: React.FC = () => {
  const { pathname } = useLocation()
  const [showMenuSp, setShowMenuSp] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const { mode, setMode } = useColorScheme()
  const { t, i18n } = useTranslation()
  const data = useSelector((state: RootState) => state.user.user)
  // const searchs = useSelector((state: RootState) => state.user.searchUser)
  const [search, setSearch] = useState('')
  const [listUser, setListUser] = useState([])
  const [isOpenNotification, setIsOpenNotification] = useState(false)

  const changeLanguageHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue)
    console.log(languageValue)
  }

  const ToggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
    } else {
      setMode('dark')
    }
  }
  useEffect(() => {
    const handler = setTimeout(async () => {
      if (search) {
        const data = await fetchSearchUser(search)
        setListUser(data)
      } else {
        setListUser([])
      }
    }, 500)

    return () => {
      clearTimeout(handler)
    }
  }, [search, dispatch])

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value
  //   setSearch(value)
  // }

  return (
    <header
      className={`fixed z-10 flex h-14 w-full items-center justify-between px-2 ${mode === 'light' ? 'bg-white' : 'bg-black-300'} shadow-md`}
    >
      <div className='col-span-2 flex items-center'>
        <div className='ml-2 flex gap-2 items-center'>
          <div className='h-10 '>
            <Link to='/'>
              <img src='./img/fb-icon.png' className='h-10 w-10 rounded-full' alt='dp' />
            </Link>
          </div>

          <div className=' hidden xl:flex'>
            <Input
              // value={hash}
              placeholder={t('home.search')}
              className='rounded-full '
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <ul>
            {listUser.map((result: any, index) => (
              <li key={index}>{result?.fullName}</li>
            ))}
          </ul>
        </div>
      </div>
      <nav className='hidden lg:gap-10  md:flex '>
        {MENU_ITEMS.map((item, index) => (
          <div key={index}>
            <Link
              className={clsx('leading-12 relative block text-lg font-medium text-neutral-200 hover:text-primary', {
                "!font-bold !text-primary  after:mx-auto after:block after:h-1.5 after:w-full after:rounded-full after:bg-primary after:content-[''] ":
                  `/${pathname.split('/')[1]}` === item.path
              })}
              to={item.path}
            >
              <div className='flex h-12 w-24 cursor-pointer items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700'>
                <div className='relative flex h-auto w-14 items-center justify-center'>
                  {item.icon && <item.icon />}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </nav>
      <Modal
        isOpen={showMenuSp}
        onRequestClose={() => setShowMenuSp(!showMenuSp)}
        shouldCloseOnOverlayClick={true}
        portalClassName='relative z-10'
        className={clsx(
          'fixed top-1 z-10 block h-full w-full bg-neutral-400 py-6 outline-none duration-300 xl:hidden',
          showMenuSp ? 'translate-x-0' : 'translate-x-[calc(-100%-16px)]'
        )}
        overlayClassName={clsx(
          'transition-all fixed cursor-pointer block xl:hidden z-10 top-0 left-0 right-0 bottom-0 ',
          showMenuSp ? 'bg-[rgb(0,0,0,0.5)]' : 'pointer-events-none'
        )}
      >
        {showMenuSp && (
          <div className='flex h-full flex-col justify-between'>
            <div className='flex flex-col justify-between gap-2 px-6'>
              {MENU_ITEMS.map((item, index) => (
                <div key={index}>
                  <Link
                    className={clsx(
                      'leading-12 relative block text-lg font-medium text-neutral-200 hover:text-primary',
                      {
                        '!font-bold !text-primary': `/${pathname.split('/')[1]}` === item.path
                      }
                    )}
                    to={item.path}
                    onClick={() => setShowMenuSp(false)}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </Modal>

      <BarsIcon
        onClick={() => setShowMenuSp(!showMenuSp)}
        className='md:h-10 md:w-10 w-7 h-7 pl-2 cursor-pointer text-neutral-200 xl:hidden'
      />

      <div className='col-span-2 flex items-center justify-end'>
        <div className='flex h-10 w-auto items-center space-x-2 pr-2'>
          <div className='flex gap-2 items-center'>
            <select onChange={changeLanguageHandler}>
              <option value='vi'>VN</option> <option value='en'>EN</option>
            </select>
          </div>

          <MaterialUISwitch
            onClick={ToggleMode}
            sx={{ my: 0 }}
            size='medium'
            checked={mode === 'light' ? true : false}
          />

          <Button className={`rounded-full mx-y ${mode === 'light' ? 'bg-gray-200' : 'bg-neutral-500'} border-none`}>
            <PlusIcon />
          </Button>
          <Button className={`rounded-full mx-y ${mode === 'light' ? 'bg-gray-200' : 'bg-neutral-500'} border-none`}>
            <MessageIcon />
          </Button>
          <Button
            className={`rounded-full mx-y ${mode === 'light' ? 'bg-gray-200' : 'bg-neutral-500'} border-none`}
            onClick={() => setIsOpenNotification(true)}
          >
            <BellIcon className='' />
          </Button>
          <Button className='rounded-full h-10 w-10'>
            <img src={data?.imageUrl} className='h-10 w-10 rounded-full' alt='avatar' />{' '}
          </Button>
        </div>
      </div>
      <GetNotificationModal bgColor='' isOpen={isOpenNotification} closeModal={() => setIsOpenNotification(false)} />
    </header>
  )
}

export default Header
