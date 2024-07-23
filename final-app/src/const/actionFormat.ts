export const formatNoti = (notify: string, t: (key: string) => string) => {
  switch (notify) {
    case 'ACCEPT_FRIEND_REQUEST':
      return t('acceptfriend')
    case 'FRIEND_REQUEST':
      return t('friendrequest')
    case 'COMMENT':
      return t('commentactivity')
    case 'LIKE':
      return t('likeactivity')
    case 'SHARE':
      return t('shareactivity')
    default:
      return notify
  }
}
