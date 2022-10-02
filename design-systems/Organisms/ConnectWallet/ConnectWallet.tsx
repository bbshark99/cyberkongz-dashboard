import React, { useMemo } from 'react'
import { useWeb3React } from '@web3-react/core'

import { Button } from 'design-systems'
import { useConnector, useUser } from 'context'

import { WALLET_CONNECTOR_NAMES, DEFAULT_CHAIN_ID } from 'utils/web3'
import { toShortString } from 'utils/string'

import CoreChainService from 'services/CoreChainService'

export interface ConnectWalletProps {}

export const ConnectWallet: React.FC<ConnectWalletProps> = () => {
  const { account, library } = useWeb3React()
  const { isWrongNetwork, onChangeNetwork, onDisconnectWallet, onConnectWallet } = useConnector()
  const { balance } = useUser()

  const handleClick = () => {
    console.info('Connecting wallet...')
    if (account) {
      onDisconnectWallet?.()
      return
    }
    if (isWrongNetwork) {
      onChangeNetwork?.(DEFAULT_CHAIN_ID, WALLET_CONNECTOR_NAMES.injected)
      return
    }
    onConnectWallet?.(WALLET_CONNECTOR_NAMES.injected)
  }

  return (
    <Button onClick={handleClick}>
      {isWrongNetwork
        ? 'Switch Network'
        : account
        ? `${balance.slice(0, 5)} ETH  - ${toShortString(account)}`
        : 'Connect Wallet'}
    </Button>
  )
}
