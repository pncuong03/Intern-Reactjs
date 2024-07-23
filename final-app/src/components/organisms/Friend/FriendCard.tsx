import { useTranslation } from 'react-i18next'
import Button from '~/components/atoms/Button'
import { IFriend } from '~/types/friend'

interface IProps {
  data: IFriend
}
const FriendCard: React.FC<IProps> = ({ data }) => {
  const { t } = useTranslation()
  return (
    <div
      className='rounded-2xl border border-gray-600 w-60 flex flex-col
      '
    >
      <div>
        <img src={data.imageUrl} className='rounded-2xl w-full' />
      </div>
      <div className='pl-3 pt-2 '>
        <a href='' className='font-semibold text-lg'>
          {data.fullName}
        </a>
        <p className='font-thin text-neutral-200'>26 bạn chung</p>
      </div>
      <div className='p-3 flex flex-col gap-1'>
        <Button className='bg-blue-600 text-white w-full rounded-lg'>{t('home.accept')}</Button>
        <Button className='bg-neutral-200 text-white w-full rounded-lg'>{t('home.delete')}</Button>
      </div>
    </div>
  )
}

export default FriendCard
