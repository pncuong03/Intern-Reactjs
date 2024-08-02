import { useColorScheme } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '~/app/appHooks'
import { GamingIcon } from '~/components/atoms/Icons/GamingIcon'
import { GroupIcon } from '~/components/atoms/Icons/GroupIcon'
import { UsersIcon } from '~/components/atoms/Icons/UsersIcon'
import routesName from '~/routes/enum.routes'

const Leftbar = () => {
  const { t } = useTranslation()
  const { mode } = useColorScheme()
  const data = useSelector((state: RootState) => state.user.user)

  const MENU_ITEMS = [
    { name: 'Friends', path: routesName.FRIEND, icon: UsersIcon, title: t('home.friend') },
    { name: 'Groups', path: routesName.GROUP, icon: GroupIcon, title: t('home.group') },
    { name: 'Gmaing', path: routesName.GAMING, icon: GamingIcon, title: t('home.gaming') }
  ]

  return (
    <div className={`grid gap-4 space-x-2  ${mode === 'light' ? 'bg-white' : 'bg-black-300'}`}>
      <Link to='/profile'>
        <div
          className={`h-16 flex items-center space-x-4 px-2.5 rounded-lg ${mode === 'light' ? 'hover:bg-gray-200' : 'hover:bg-neutral-800'}`}
        >
          <div className='h-14 w-14'>
            <img src={data?.imageUrl} className='h-full w-full rounded-full' alt='dp' />
          </div>
          <div className='flex'>
            <p className='text-lg font-semibold '>{data?.fullName}</p>
          </div>
        </div>
      </Link>
      {MENU_ITEMS.map((item, index) => (
        <div key={index} className={`${mode === 'light' ? 'hover:bg-gray-200' : 'hover:bg-neutral-800'} rounded-lg`}>
          <Link to={item.path}>
            <div className='flex gap-4 h-16 w-full cursor-pointer items-center rounded-lg '>
              <div className='relative flex h-auto w-14 items-center justify-center'>{item.icon && <item.icon />}</div>
              <div className='font-semibold text-lg'>{item.title}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Leftbar
