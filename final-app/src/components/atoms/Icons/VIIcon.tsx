import React from 'react'

export function VIIcon(props: React.SVGAttributes<unknown>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='40'
      height='40'
      viewBox='0 0 64 64'
      aria-hidden='true'
      role='img'
      preserveAspectRatio='xMidYMid meet'
      {...props}
    >
      <circle cx='32' cy='32' r='30' fill='#f42f4c' />
      <path fill='#ffe62e' d='M32 39l9.9 7l-3.7-11.4l9.8-7.4H35.8L32 16l-3.7 11.2H16l9.8 7.4L22.1 46z' />
    </svg>
  )
}
