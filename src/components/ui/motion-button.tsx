'use client'

import React, { FC } from 'react'
import { ArrowRight } from 'lucide-react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}

export interface MotionButtonProps {
  label: string
  variant?: 'primary' | 'secondary'
  classes?: string
  className?: string
  animate?: boolean
  delay?: number
  icon?: React.ReactNode
  onClick?: () => void
  shape?: 'rounded' | 'angular'
}

const MotionButton: FC<MotionButtonProps> = ({ 
  label, 
  classes, 
  className,
  variant = 'primary',
  icon,
  onClick,
  shape = 'angular'
}) => {
  const isAngular = shape === 'angular'

  return (
    <button
      onClick={onClick}
      className={cn(
        'group/btn bg-background relative h-auto w-50 cursor-pointer border border-white/20 p-1 outline-none transition-colors duration-300 select-none overflow-hidden',
        isAngular ? 'rounded-none' : 'rounded-full',
        classes,
        className
      )}
    >
      <span
        className={cn(
          'circle bg-primary m-0 block h-12 w-12 overflow-hidden duration-500 ease-out group-hover/btn:w-full',
          isAngular ? 'rounded-none' : 'rounded-full'
        )}
        aria-hidden='true'
      />
      <div className='icon absolute top-1/2 left-4 translate-x-0 -translate-y-1/2 duration-500 ease-out group-hover/btn:translate-x-[0.35rem] flex items-center justify-center pointer-events-none'>
        {icon || <ArrowRight className='text-background size-6' />}
      </div>
      <span className='button-text text-foreground group-hover/btn:text-background font-manrope absolute top-2/4 left-2/4 ml-4 -translate-x-2/4 -translate-y-2/4 text-center text-base sm:text-lg font-medium tracking-tight whitespace-nowrap duration-500 ease-out pointer-events-none'>
        {label}
      </span>
    </button>
  )
}

export default MotionButton
export { MotionButton }
