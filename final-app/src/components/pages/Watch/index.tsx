import React from 'react'
import { useTranslation } from 'react-i18next'

export default function WATCH() {
  const { t } = useTranslation()

  return <div>{t('home.watch')}</div>
}
