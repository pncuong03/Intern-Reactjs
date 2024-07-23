import React, { useEffect } from 'react'
import moment from 'moment'

interface TimeComparisonProps {
  time: string
}

const TimeComparison: React.FC<TimeComparisonProps> = ({ time }) => {
  useEffect(() => {
    const interval = setInterval(() => {}, 1000)

    return () => clearInterval(interval)
  }, [])

  const getTimeDifferenceText = () => {
    const diff = moment().diff(moment(time))

    if (diff < 60000) {
      return 'Just now'
    } else if (diff < 3600000) {
      const minutes = moment().diff(moment(time), 'minutes')
      return minutes > 1 ? `${minutes} minutes ago` : '1 minute ago'
    } else if (diff < 86400000) {
      const hours = moment().diff(moment(time), 'hours')
      return hours > 1 ? `${hours} hours ago` : '1 hour ago'
    } else if (diff < 30 * 24 * 3600000) {
      const days = moment().diff(moment(time), 'days')
      return days > 1 ? `${days} days ago` : '1 day ago'
    } else {
      return moment(time).format('YYYY-MM-DD')
    }
  }

  return React.createElement('div', null, getTimeDifferenceText())
}

export default TimeComparison
