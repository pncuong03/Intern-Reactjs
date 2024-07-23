import clsx from 'clsx'
import React, { ButtonHTMLAttributes } from 'react'

interface ConnectButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  color?: 'primary' | 'green'
  loading?: boolean
}

const Button: React.FC<ConnectButtonProps> = ({ children, className, color = 'primary', loading, ...props }) => {
  return (
    <button
      className={clsx('flex items-center justify-center flex-1 py-2 font-semibold ', className, {
        'cursor-not-allowed border-[1px] bg-black-700': props.disabled
        // '!text-primary': props.disabled && color === 'primary',
        // '!text-green-500': props.disabled && color === 'green'
      })}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
