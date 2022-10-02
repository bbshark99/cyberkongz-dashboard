import React, { ChangeEvent, useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { ConnectWallet } from '../ConnectWallet'
import { SIDEBAR_MENU } from 'utils/routes'
import { FormSearch, Typography } from 'design-systems/Atoms'

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const router = useRouter()
  const pageTitle = SIDEBAR_MENU.find((menu) => menu.route === router.pathname)?.title
  const [search, setSearch] = useState<string>('')

  const handleChange = useCallback((element: ChangeEvent<HTMLInputElement>) => {
    setSearch(element.target.value)
  }, [])

  return (
    <div className='w-full flex items-center gap-4'>
      <div className='w-full flex items-center justify-between'>
        <Typography variant='h4' weight='bold'>
          {pageTitle}
        </Typography>
        <div className='w-full flex items-center gap-6'>
          <FormSearch value={search} onChange={handleChange} />
          <div className='min-w-[230px]'>
            <ConnectWallet />
          </div>
        </div>
      </div>
    </div>
  )
}
