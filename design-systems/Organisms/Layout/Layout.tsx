import React from 'react'
import type { PropsWithChildren } from 'react'

import { Sidebar, Header } from 'design-systems'

export interface LayoutProps extends PropsWithChildren {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='w-screen h-screen overflow-hidden p-0 m-0'>
      <Sidebar />
      <div className='w-[calc(100%-250px)] h-full overflow-hidden fixed top-0 left-[250px] bg-white p-[30px] rounded-l-[30px]'>
        <div className='mb-8'>
          <Header />
        </div>
        <div className='w-full h-[calc(100%-70px)] overflow-x-hidden overflow-y-auto'>{children}</div>
      </div>
    </div>
  )
}
