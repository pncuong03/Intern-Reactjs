import { useColorScheme } from '@mui/material'
import { useTranslation } from 'react-i18next'
import Button from '~/components/atoms/Button'
import { IUser } from '~/types/user'

interface IntroProps {
  data: IUser
}
const Intro: React.FC<IntroProps> = ({ data }) => {
  const { t } = useTranslation()
  const { mode } = useColorScheme()
  return (
    <div className={`flex flex-col gap-4 rounded-lg  p-3 shadow ${mode === 'light' ? 'bg-white' : 'bg-neutral-800'}`}>
      <p className='text-xl font-bold '>{t('home.intro')}</p>
      <div className='flex justify-center'>
        <p className='text-sm'>{data?.description}</p>{' '}
      </div>
      <div className='flex flex-col space-y-4 text-sm'>
        <div className='flex items-center space-x-2'>
          <span>
            <i className='fas fa-briefcase text-[1.25rem] text-gray-400'></i>
          </span>
          <p>Software Engineer</p>
        </div>

        <div className='flex items-center space-x-2'>
          <span>
            <i className='fab fa-instagram text-[1.25rem] text-gray-400'></i>
          </span>
          <a
            className='cursor-pointer hover:underline'
            target='_blank'
            rel='noopener noreferrer'
            href={'https://instagram.com/_shiha6'}
          >
            <p>_shiha6</p>
          </a>
        </div>

        <Button
          className={`w-full rounded-md px-3 text-sm font-semibold  ${mode === 'light' ? 'bg-neutral-400' : 'bg-neutral-600'}`}
        >
          {t('home.editbio')}
        </Button>
      </div>
    </div>
  )
}

export default Intro
