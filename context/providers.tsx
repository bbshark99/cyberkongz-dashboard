import React from 'react'
import type { PropsWithChildren } from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import { getLibrary } from 'utils/web3'

import { ConnectorProvider } from './connector'
import { UserProvider } from './user'

export interface ProvidersProps extends PropsWithChildren {}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ConnectorProvider>
        <UserProvider>{children}</UserProvider>
      </ConnectorProvider>
    </Web3ReactProvider>
  )
}
