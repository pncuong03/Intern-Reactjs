import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Modal from '~/components/atoms/Modal'
import Button from '~/components/atoms/Button'
import { Box, CircularProgress } from '@mui/material'

type Props = {
  isOpen: boolean
  closeModal: () => void
}

const EditBackgroundModal: React.FC<Props> = ({ isOpen, closeModal }) => {
  const { t } = useTranslation()

  const [background, setBackground] = useState<File | null>(null)

  const handleBackgroundChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setBackground(e.target.files[0])
    }
  }

  const handleUpdate = async () => {
    const form = new FormData()
    form.append('image_background', background ? background : '')

    closeModal()
  }

  return (
    <Modal
      title={t('home.editprofile')}
      closeModal={closeModal}
      bgColor='bg-white'
      isOpen={isOpen}
      className='!top-1/2 !left-1/2 w-[400px] -translate-x-1/2 -translate-y-1/2 lg:ml-14 '
    >
      <div className='p-6 space-y-3 max-h-96 xl:max-h-[500px] overflow-y-auto'>
        <div className='font-semibold text-lg'>{t('home.background')}</div>
        <input
          type='file'
          name='background'
          className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
          accept='image/*'
          onChange={handleBackgroundChange}
        />
        {background && (
          <img
            src={URL.createObjectURL(background)}
            alt='Background Preview'
            className='mt-4 h-40 w-full mx-auto rounded-md border border-gray-300'
          />
        )}

        <div className='mt-4 flex justify-end'>
          <Button
            onClick={handleUpdate}
            className='px-6 py-2 bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600'
          >
            {/* {isLoading ? (
              <Box sx={{ display: 'flex' }}>
                <CircularProgress />
              </Box>
            ) : (
              t('home.update')
            )} */}
            t('home.update')
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default EditBackgroundModal
