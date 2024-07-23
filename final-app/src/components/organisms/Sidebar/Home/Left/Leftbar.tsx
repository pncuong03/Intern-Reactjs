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
    { name: 'Groups', path: routesName.LOGIN, icon: GroupIcon, title: t('home.group') },
    { name: 'Gmaing', path: routesName.REGISTER, icon: GamingIcon, title: t('home.gaming') }
  ]

  return (
    <div className={`mb-4 grid border-b-[1px] pb-3 ${mode === 'light' ? 'border-gray-400' : 'border-neutral-600'}`}>
      <Link to='/profile'>
        <div
          className={`h-12 flex items-center space-x-3 px-2.5 rounded-lg ${mode === 'light' ? 'hover:bg-gray-200' : 'hover:bg-neutral-800'}`}
        >
          <div className='h-8 w-9'>
            <img src={data?.imageUrl} className='h-full w-full rounded-full' alt='dp' />
          </div>
          <div className='flex'>
            {' '}
            <p className='text-md font-normal '>{data?.fullName}</p>
          </div>
        </div>
      </Link>
      {MENU_ITEMS.map((item, index) => (
        <div key={index} className={`${mode === 'light' ? 'hover:bg-gray-200' : 'hover:bg-neutral-800'} rounded-lg`}>
          <Link to={item.path}>
            <div className='flex h-12 w-full cursor-pointer items-center rounded-lg '>
              <div className='relative flex h-auto w-14 items-center justify-center'>{item.icon && <item.icon />}</div>
              <div className='font-normal'>{item.title}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Leftbar
