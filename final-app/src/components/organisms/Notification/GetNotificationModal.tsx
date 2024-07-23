import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { fetchListNoti } from '~/apis/noti'
import { AppDispatch, RootState } from '~/app/appHooks'
import Modal from '~/components/atoms/Modal'
import { formatNoti } from '~/const/actionFormat'
import TimeComparison from '~/const/dateFormat'

type Props = {
  isOpen: boolean
  closeModal: () => void
  bgColor: string
}

const GetNotificationModal: React.FC<Props> = ({ isOpen, closeModal, bgColor }) => {
  const { t } = useTranslation()
  const dispatch = useDispatch<AppDispatch>()
  const notifications = useSelector((state: RootState) => state.noti.notification)

  useEffect(() => {
    if (isOpen) {
      dispatch(fetchListNoti())
    }
  }, [isOpen, dispatch])

  return (
    <Modal
      title={t('home.noti')}
      closeModal={closeModal}
      isOpen={isOpen}
      bgColor='bg-white'
      className='!left-[90%] !top-[90px] w-[360px] -translate-x-1/2 -translate-y-9 rounded-lg border shadow-sm border-gray-300'
      overlayClassName='fixed top-0 left-0 right-0 bottom-0 z-[10]'
    >
      <div className='space-y-3 max-h-96 md:max-h-[450px] xl:max-h-[600px] overflow-y-auto'>
        {notifications.map((notification) => (
          <div key={notification.id} className='flex gap-4 p-2'>
            <div className='h-11 w-12'>
              <img src={notification.interact.imageUrl} className='h-full w-full rounded-full' alt='dp' />
            </div>
            <div className='flex flex-grow flex-col'>
              <p className='text-lg font-semibold text-black max-w-[280px] break-words'>
                {notification.interact.fullName} {formatNoti(notification.interactType, t)}
              </p>

              <span className='text-xs font-thin text-gray-400'>
                <TimeComparison time={notification.createdAt} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  )
}

export default GetNotificationModal
