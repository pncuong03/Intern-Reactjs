import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '~/components/atoms/Button'
import EditProfileModal from './EditProfileModal'
import { IUser } from '~/types/user'

interface IntroProps {
  data: IUser
}
const Info: React.FC<IntroProps> = ({ data }) => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenUnFriend, setIsOpenUnFriend] = useState(false)
  const handleUnfriend = () => {
    setIsOpenUnFriend(true)
  }

  return (
    <div className='flex flex-col lg:flex-row items-center lg:justify-between pb-5 '>
      <div className='flex flex-col lg:flex-row lg:gap-4 items-center mx-auto lg:mx-8'>
        <div className='z-0 -mt-20 lg:-mt-8 h-[12rem] w-[12rem]'>
          <img className='h-full w-full rounded-full border-4 border-primary' src={data?.imageUrl} alt='dp' />
        </div>
        <div className='flex flex-col items-center lg:items-start'>
          <p className='text-[2rem] font-bold '>{data?.fullName}</p>
          <a className='cursor-pointer text-sm font-semibold text-gray-400 '>528 {t('home.friend')}</a>
        </div>
      </div>
      {data?.state ? (
        <div className='p-3 md:mx-auto lg:mx-6'>
          <Button className='w-full rounded-md px-3 font-semibold bg-neutral-400  ' onClick={handleUnfriend}>
            <p className='text-lg'>{t('home.friend')}</p>
          </Button>
        </div>
      ) : (
        <div className='p-3 md:mx-auto lg:mx-6'>
          <Button className='w-full rounded-md px-3 font-semibold bg-neutral-400 ' onClick={() => setIsOpen(true)}>
            <p className='text-lg'>{t('home.editprofile')}</p>
          </Button>
        </div>
      )}

      <EditProfileModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </div>
  )
}

export default Info
