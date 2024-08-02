import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import routesName from '~/routes/enum.routes'
import Modal from 'react-modal'
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
import { logOut } from '~/slices/auth/authSlice'
import { toast } from 'react-toastify'
import { changeLanguage } from 'i18next'
import DrawerLanguage from '~/components/atoms/Drawer/DrawerLanguage'
import SearchUser from '~/components/organisms/Search/SearchUser'
import Notification from '~/components/organisms/Notification/GetNoti'
import { deleteEventNoti, fetchEventNoti } from '~/apis/noti/notiThunk'
import { Badge } from '@mui/material'
import { IEventNoti } from '~/types/noti'
import { addMessageReceived } from '~/slices/message/messageSlice'
import { deleteMessageNoti } from '~/slices/noti/notiSlice'

const MENU_ITEMS = [
  { name: 'Home', path: routesName.HOME, icon: HomeIcon },
  { name: 'Watch', path: routesName.WATCH, icon: WatchIcon },
  { name: 'GROUP', path: routesName.GROUP, icon: GroupIcon }
]

const languages = [
  { text: 'Vietnamese', onClick: () => changeLanguage('vi') },
  { text: 'English', onClick: () => changeLanguage('en') }
]

const Header: React.FC = () => {
  const { pathname } = useLocation()
  const [showMenuSp, setShowMenuSp] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const { mode, setMode } = useColorScheme()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const data = useSelector((state: RootState) => state.user.user)
  const noti = useSelector((state: RootState) => state.noti.notiEvent)
  const [isOpenNotification, setIsOpenNotification] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const ToggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
    } else {
      setMode('dark')
    }
  }

  const handleLogout = () => {
    dispatch(logOut())
    toast.success(t('home.logout'))
    navigate('/login')
  }

  // useEffect(() => {
  //   const fetchNoti = async () => {
  //     try {
  //       await dispatch(fetchEventNoti())
  //     } catch (error) {
  //     } finally {
  //       // if (noti.messages.length) {
  //       // dispatch(addMessageReceived(noti.messages))
  //       // }
  //       timeoutRef.current = setTimeout(fetchNoti, 5000)
  //     }
  //   }

  //   fetchNoti()

  //   // Cleanup function to clear the timeout on unmount
  //   return () => {
  //     if (timeoutRef.current) {
  //       clearTimeout(timeoutRef.current)
  //     }
  //   }
  // }, [dispatch])

  const handleDeleteEvent = () => {
    dispatch(deleteMessageNoti())
  }
  return (
    <header
      className={`fixed z-10 flex h-[75px] w-full items-center justify-between px-2 ${mode === 'light' ? 'bg-white' : 'bg-black-300'} shadow-md`}
    >
      <div className='col-span-2 flex items-center'>
        <div className='ml-2 flex gap-2 items-center'>
          <div className=''>
            <Link to='/'>
              <img src='/img/fb-icon.png' className='h-[50px] w-[50px] rounded-full' alt='dp' />
            </Link>
          </div>
          <SearchUser />
        </div>
      </div>
      <nav className='hidden lg:gap-10  md:flex '>
        {MENU_ITEMS.map((item, index) => (
          <div key={index}>
            <Link
              className={clsx('leading-14 relative block text-lg font-medium text-neutral-200 hover:text-primary', {
                "!font-bold !text-primary after:mx-auto after:block  after:h-2 after:w-full after:rounded-full after:bg-primary after:content-[''] ":
                  `/${pathname.split('/')[1]}` === item.path
              })}
              to={item.path}
            >
              <div className='flex h-16 w-24 cursor-pointer items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700'>
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
          <DrawerLanguage menuItems={languages} />

          <MaterialUISwitch
            onClick={ToggleMode}
            sx={{ my: 0 }}
            size='medium'
            checked={mode === 'light' ? true : false}
          />

          <Button
            onClick={handleLogout}
            className={`rounded-full w-12  ${mode === 'light' ? 'bg-gray-200' : 'bg-neutral-500'} border-none`}
          >
            <PlusIcon />
          </Button>
          <Link to='/message'>
            <Badge badgeContent={noti?.messageCount} color='primary'>
              <Button
                className={`rounded-full w-12  ${mode === 'light' ? 'bg-gray-200' : 'bg-neutral-500'} border-none`}
                onClick={() => handleDeleteEvent()}
              >
                <MessageIcon />
              </Button>
            </Badge>
          </Link>
          <Badge badgeContent={noti?.informCount} color='primary'>
            <Button
              className={`rounded-full w-12 ${mode === 'light' ? 'bg-gray-200' : 'bg-neutral-500'} border-none`}
              onClick={() => setIsOpenNotification(!isOpenNotification)}
            >
              <BellIcon />
            </Button>
          </Badge>

          <Notification isOpen={isOpenNotification} />

          <Button className='rounded-full h-12 w-12'>
            <img src={data?.imageUrl} className='h-12 w-12 rounded-full' alt='avatar' />{' '}
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
