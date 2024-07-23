import clsx from 'clsx'
import React, { InputHTMLAttributes } from 'react'
// import { CopyIcon } from "../Icons/CopyIcon";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  classNameContainer?: string
  className?: string
  label?: string
  showIconCopy?: boolean
}

const Input: React.FC<InputProps> = ({ classNameContainer, className, label, showIconCopy, ...props }) => {
  return (
    <div className={clsx('flex flex-col gap-3', classNameContainer)}>
      {label && (
        <label className='block text-lg font-semibold' htmlFor={label}>
          {label}
        </label>
      )}

      <div className='relative w-full'>
        <input
          id={label}
          type='text'
          {...props}
          className={clsx('w-full bg-gray-100 py-[9px] px-5 text-lg text-black outline-none', className)}
        />

        {/* {showIconCopy && (
          <CopyIcon
            text={props?.value?.toString()}
            className='absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer'
          />
        )} */}
      </div>
    </div>
  )
}

export default Input
