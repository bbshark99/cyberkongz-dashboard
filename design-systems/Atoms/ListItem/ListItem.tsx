import React from 'react'
import { Typography } from 'design-systems'

export interface ListItemProps {
  id: string | number
  icon?: React.ReactNode
  label: string
  clickable?: boolean
  active?: boolean
  onClick: (id: string | number) => void
}

export const ListItem: React.FC<ListItemProps> = ({ id, icon, label, clickable = false, active = false, onClick }) => {
  const className = [
    // size
    'w-full',
    // padding
    'px-[24px] py-[10px]',
    // round
    'rounded-lg overflow-hidden',
    // display
    'flex items-center justify-between',
    // pointer
    clickable && 'cursor-pointer hover:bg-white hover:text-primary',

    active ? 'bg-white text-primary' : 'bg-transparent text-white',
  ].join(' ')

  const handleClick = () => {
    onClick?.(id)
  }

  return (
    <li className={className} onClick={handleClick}>
      {icon}
      <Typography weight='bold'>{label}</Typography>
    </li>
  )
}
