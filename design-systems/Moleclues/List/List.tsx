import React from 'react'
import { ListItemProps, ListItem } from 'design-systems'

export interface ListProps {
  items: ListItemProps[]
  activeItemId?: string | number
  clickable?: boolean
  onClick: (id: string | number) => void
}

export const List: React.FC<ListProps> = ({ items, activeItemId, clickable = false, onClick }) => {
  const className = [].join(' ')

  return (
    <ul className={className}>
      {items.map((item) => (
        <ListItem
          key={item.id}
          id={item.id}
          label={item.label}
          icon={item.icon}
          clickable={clickable}
          active={activeItemId === item.id}
          onClick={onClick}
        />
      ))}
    </ul>
  )
}
