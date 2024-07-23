import { useColorScheme } from '@mui/material'
import { useTranslation } from 'react-i18next'

const Advertis = () => {
  const { t } = useTranslation()
  const { mode } = useColorScheme()
  return (
    <div className={`mb-2 border-b-[1px] pb-4  ${mode === 'light' ? 'border-gray-400' : 'border-neutral-600'}`}>
      <p className='mb-2 font-semibold text-black'>{t('home.advertisment')}</p>
      <div className='flex flex-col gap-3 font-medium text-black dark:text-gray-200'>
        <div className='flex gap-4 items-center '>
          <img
            className='md:h-28 w-[100px] object-cover rounded-md'
            src='https://random.imagecdn.app/600/200'
            alt='advertisment'
          />
          <div className='font-inherit text-sm'>
            <p>PLAY FOR FREE</p>
            <a className='text-gray-400' href='https://www.xfarm.shop/'>
              xfarm.shop
            </a>
          </div>
        </div>

        <div className='flex gap-4 items-center'>
          <img
            className='md:h-28 w-[100px] object-cover rounded-md'
            src='https://random.imagecdn.app/600/200'
            alt='advertisment'
          />
          <div className='font-inherit text-sm'>
            <p>PLAY FOR FREE</p>
            <a className='text-gray-400' href='https://www.xfarm.shop/'>
              xfarm.shop
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advertis
