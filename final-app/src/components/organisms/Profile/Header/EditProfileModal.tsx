import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Modal from '~/components/atoms/Modal'
import Button from '~/components/atoms/Button'
import { AppDispatch, RootState } from '~/app/appHooks'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEditUser, fetchInfoUser } from '~/apis/user/userThunk'
import Input from '~/components/atoms/Input'
import { toast } from 'react-toastify'
import { IUser } from '~/types/user'

type Props = {
  isOpen: boolean
  closeModal: () => void
}

const EditProfileModal: React.FC<Props> = ({ isOpen, closeModal }) => {
  const { t } = useTranslation()
  const dispatch = useDispatch<AppDispatch>()
  const data = useSelector((state: RootState) => state.user.user)

  const [info, setInfo] = useState({
    fullName: '',
    gender: '',
    description: ''
  })

  useEffect(() => {
    if (data) {
      setInfo({
        fullName: data.fullName || '',
        gender: data.gender || '',
        description: data.description || ''
      })
      setAvatar(data.imageUrl || null)
      setBackground(data.backgroundUrl || null)
    }
  }, [data])

  const [avatar, setAvatar] = useState<File | string | null>(data?.imageUrl)
  const [background, setBackground] = useState<File | string | null>(data?.backgroundUrl)

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAvatar(e.target.files[0])
    }
  }

  const handleBackgroundChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setBackground(e.target.files[0])
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setInfo({
      ...info,
      [name]: value
    })
  }

  const handleUpdate = async () => {
    const formData = new FormData()
    formData.append('new_user_info', JSON.stringify(info))

    if (avatar) {
      formData.append('image', avatar)
    }

    if (background) {
      formData.append('image_background', background)
    }

    await dispatch(fetchEditUser(formData))
    toast.success(t('home.updateprofile'))

    closeModal()
  }

  return (
    <Modal
      title={t('home.editprofile')}
      closeModal={closeModal}
      bgColor='bg-white'
      isOpen={isOpen}
      className='!top-1/2 !left-1/2 w-[700px] -translate-x-1/2 -translate-y-1/2 lg:ml-14'
    >
      <div className='p-6 space-y-3 max-h-96 xl:max-h-[710px] overflow-y-auto'>
        <Input
          name='fullName'
          label={t('home.fullname')}
          className='w-full p-3 outline-none bor border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-400'
          value={info.fullName}
          onChange={handleChange}
        />

        <div className='w-full'>
          <Input
            type='file'
            label={t('home.avatar')}
            name='avatar'
            className='hidden'
            accept='image/*'
            onChange={handleAvatarChange}
          />
          <label
            htmlFor={t('home.avatar')}
            className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer'
          >
            {t('home.upload')}
          </label>
          {avatar && (
            <img
              src={typeof avatar === 'string' ? avatar : URL.createObjectURL(avatar)}
              alt='Avatar Preview'
              className='mt-4 h-44 w-44 mx-auto rounded-full border border-gray-300'
            />
          )}
        </div>

        <div className='w-full'>
          <Input
            type='file'
            label={t('home.background')}
            name='background'
            className='hidden'
            accept='image/*'
            onChange={handleBackgroundChange}
          />
          <label
            htmlFor={t('home.background')}
            className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer'
          >
            {t('home.upload')}
          </label>
          {background && (
            <img
              src={typeof background === 'string' ? background : URL.createObjectURL(background)}
              alt='Background Preview'
              className='mt-4 h-52 w-full mx-auto rounded-md border border-gray-300'
            />
          )}
        </div>

        <div className='font-semibold text-lg'>{t('home.gender')}</div>
        <select
          name='gender'
          className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
          value={info.gender}
          onChange={handleChange}
        >
          <option value=''>{t('home.select')}</option>
          <option value='Male'>{t('home.male')}</option>
          <option value='Female'>{t('home.female')}</option>
          <option value='Other'>{t('home.other')}</option>
        </select>

        <Input
          label={t('home.description')}
          name='description'
          className='w-full p-3 outline-none bor border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-400'
          value={info.description}
          onChange={handleChange}
        />

        <div className='mt-4 flex justify-end'>
          <Button
            onClick={handleUpdate}
            className='px-6 py-2 bg-neutral-300 rounded-md hover:bg-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-600'
          >
            {t('home.update')}
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default EditProfileModal
