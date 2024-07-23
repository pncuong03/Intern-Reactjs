import { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RootState } from '~/app/appHooks'
import Button from '~/components/atoms/Button'
import { CameraIcon } from '~/components/atoms/Icons/CameraIcon'

const EditBackground = () => {
  const { t } = useTranslation()
  const data = useSelector((state: RootState) => state.user.user)

  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const formData = new FormData()
      // formData.append('new_user_info', JSON.stringify(''))
      formData.append('image_background', file)
    }
  }

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <div
      className='relative h-[15rem] xl:h-[30rem] max-h-[28.75rem] w-full rounded-lg bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage: data?.backgroundUrl
          ? `url(${data?.backgroundUrl})`
          : 'linear-gradient(to right, #e5e5e5, #f9f9f9)'
      }}
    >
      <div className='absolute flex w-full items-center justify-center -bottom-4'>
        <div className='absolute bottom-[30px] right-[30px]'>
          <Button className='bg-neutral-400 rounded-md px-1 text-neutral-100' onClick={handleButtonClick}>
            <CameraIcon />
            <p className='hidden lg:flex'>{t('home.editphoto')}</p>
          </Button>
        </div>
      </div>
      <input type='file' accept='image/*' ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
    </div>
  )
}

export default EditBackground
