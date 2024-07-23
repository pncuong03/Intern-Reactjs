import { useColorScheme } from '@mui/material'
import { useTranslation } from 'react-i18next'

const FriendProfile = () => {
  const { t } = useTranslation()
  const { mode } = useColorScheme()
  return (
    <div className={`flex flex-col gap-4 rounded-l p-3 ${mode === 'light' ? 'bg-white' : 'bg-neutral-800'}`}>
      <div className='flex justify-between'>
        <div>
          <p className='text-xl font-bold '> {t('home.friend')}</p>
          <p className='text-sm text-gray-400'>528 {t('home.friend')}</p>
        </div>
        <a className='cursor-pointer text-sm text-primary hover:underline'>{t('home.seeallfriend')}</a>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <div>
          <img className='w-full rounded-md' alt='photo' src='https://random.imagecdn.app/125/125' />
          <p className='mt-2 text-sm text-black dark:text-gray-200'>Friend 1</p>
        </div>
        <div>
          <img className='w-full rounded-md' alt='photo' src='https://random.imagecdn.app/125/126' />
          <p className='mt-2 text-sm text-black dark:text-gray-200'>Friend 2</p>
        </div>
        <div>
          <img className='w-full rounded-md' alt='photo' src='https://random.imagecdn.app/125/127' />
          <p className='mt-2 text-sm text-black dark:text-gray-200'>Friend 3</p>
        </div>
      </div>
    </div>
  )
}

export default FriendProfile
