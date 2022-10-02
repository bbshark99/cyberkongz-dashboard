import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { List, ListItemProps, Avatar } from 'design-systems'
import { SIDEBAR_MENU } from 'utils/routes'
import LogoImage from 'assets/images/logo.png'

export interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = () => {
  const className = [
    // size
    'w-full h-full',
    // background color
    'bg-primary',
    // position
    'fixed top-0 left-0',
  ].join(' ')
  const router = useRouter()
  const [activeMenuId, setActiveMenuId] = useState<string | number>()

  const menus = SIDEBAR_MENU.map(
    (menu) =>
      ({
        id: menu.id,
        label: menu.title,
      } as ListItemProps)
  )

  const handleClick = (id: string | number) => {
    const menu = SIDEBAR_MENU.find((m) => m.id === id)
    setActiveMenuId(id)
    menu && router.push(menu.route)
  }

  return (
    <div className={className}>
      <div className='py-[60px] px-[22px] w-[250px] h-full'>
        <div className='mb-[30px] flex items-center justify-center'>
          <Avatar alt='logo' src={LogoImage.src} width={180} height={50} />
        </div>
        <List items={menus} clickable={true} activeItemId={activeMenuId} onClick={handleClick} />
      </div>
    </div>
  )
}
