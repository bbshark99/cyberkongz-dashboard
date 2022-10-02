import React from 'react'
import type { PropsWithChildren } from 'react'

export type ButtonVariants = 'primary' | 'secondary'

export interface ButtonProps extends PropsWithChildren {
  variant?: ButtonVariants
  disabled?: boolean
  onClick?: () => void
}

const getButtonVariant = (variant: ButtonVariants, disabled: boolean) => {
  switch (variant) {
    case 'primary':
      return `bg-button-primary-default ${disabled ? '' : 'hover:bg-button-primary-hover'} text-white`
    case 'secondary':
      return 'bg-button-secondary-default'
  }
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', disabled = false, children, onClick }) => {
  const className = [
    // size
    'w-full',
    // padding
    'px-[25px] py-[11px]',
    // border-radius
    'rounded-lg overflow-hidden',
    // display
    'flex items-center justify-center',
    // variant
    getButtonVariant(variant, disabled),
    disabled ? '' : 'cursor-pointer',
  ].join(' ')

  const handleClick = () => {
    !disabled && onClick?.()
  }

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
}
