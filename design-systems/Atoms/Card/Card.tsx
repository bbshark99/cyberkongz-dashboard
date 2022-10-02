import React from 'react'
import type { PropsWithChildren } from 'react'

type CardSizes = 'sm' | 'md' | 'lg'

const getSize = (size: CardSizes) => {
  switch (size) {
    case 'sm':
      return 'p-[11px]'
    case 'md':
      return 'p-[18px]'
    case 'lg':
      return 'p-[25px]'
  }
}
export interface CardProps extends PropsWithChildren {
  size?: CardSizes
}

export const Card: React.FC<CardProps> = ({ size = 'lg', children }) => {
  const className = [
    // border
    'rounded-[15px] border border-card-default',
    // padding
    getSize(size),
  ].join(' ')

  return <div className={className}>{children}</div>
}
