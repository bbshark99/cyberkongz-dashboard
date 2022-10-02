import React from 'react'
import type { PropsWithChildren } from 'react'

type TypographyVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p'

type TypographyWeight = 'bold' | 'semibold' | 'regular' | 'light'

export interface TypographyProps extends PropsWithChildren {
  variant?: TypographyVariants
  weight?: TypographyWeight
  className?: string
}

const getVariant = (variant: TypographyVariants) => {
  switch (variant) {
    case 'h1':
      return 'text-h1 leading-h1'
    case 'h2':
      return 'text-h2 leading-h2'
    case 'h3':
      return 'text-h3 leading-h3'
    case 'h4':
      return 'text-h4 leading-h4'
    case 'h5':
      return 'text-h5 leading-h5'
    case 'p':
      return 'text-p leading-p'
  }
}

const getWeight = (size: TypographyWeight) => {
  switch (size) {
    case 'bold':
      return 'font-bold'
    case 'semibold':
      return 'font-semibold'
    case 'light':
      return 'font-light'
    default:
      return 'font-regular'
  }
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'p',
  weight = 'regular',
  className: _className = '',
  children,
}) => {
  const className = [
    // size
    'w-full',
    // font-size
    getVariant(variant),
    // font-weight
    getWeight(weight),
    // external classname
    _className,
  ].join(' ')
  return <div className={className}>{children}</div>
}
