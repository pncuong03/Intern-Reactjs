import { useColorScheme } from '@mui/material'
import { useTranslation } from 'react-i18next'

const Album = () => {
  const { t } = useTranslation()
  const { mode } = useColorScheme()
  return (
    <div className={`flex flex-col gap-4 rounded-lg p-3 shadow  ${mode === 'light' ? 'bg-white' : 'bg-neutral-800'}`}>
      <div className='flex items-center justify-between'>
        <p className='text-xl font-bold '>{t('home.image')}</p>
        <a className='cursor-pointer text-sm text-primary hover:underline'>{t('home.seeallphoto')}</a>
      </div>
      <div className='grid grid-cols-3 gap-1 overflow-hidden rounded-md'>
        <img className='w-full' alt='photo' src='https://random.imagecdn.app/125/125' />
        <img className='w-full' alt='photo' src='https://random.imagecdn.app/125/124' />
        <img className='w-full' alt='photo' src='https://random.imagecdn.app/125/123' />
        <img className='w-full' alt='photo' src='https://random.imagecdn.app/125/122' />
        <img className='w-full' alt='photo' src='https://random.imagecdn.app/125/121' />
        <img className='w-full' alt='photo' src='https://random.imagecdn.app/125/120' />
        <img className='w-full' alt='photo' src='https://random.imagecdn.app/125/119' />
        <img className='w-full' alt='photo' src='https://random.imagecdn.app/125/118' />
        <img className='w-full' alt='photo' src='https://random.imagecdn.app/125/117' />
      </div>
    </div>
  )
}

export default Album
