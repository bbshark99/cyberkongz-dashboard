import React, { createContext, useContext, useCallback, useEffect } from 'react'
import type { PropsWithChildren } from 'react'
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { AbstractConnector } from '@web3-react/abstract-connector'

import { CONNECTOR_LOCAL_KEY } from 'utils/constants'
import { WALLET_CONNECTORS, WALLET_CONNECTOR_NAMES, CHAIN_IDS } from '../utils/web3'
import { toHexString } from '../utils/string'

export interface ConnectorStateProps {
  isWrongNetwork: boolean
  onConnectWallet?: (connectorName: WalletConnectorNames) => Promise<void>
  onChangeNetwork?: (chainId: SupportedChainIds, connectorName: WalletConnectorNames) => Promise<void>
  onDisconnectWallet?: () => void
}

export interface ConnectorProviderProps extends PropsWithChildren {}

export const ConnectorState: ConnectorStateProps = {
  isWrongNetwork: false,
}

export const ConnectorContext = createContext(ConnectorState)

export const useConnector = () => useContext(ConnectorContext)

export const ConnectorProvider: React.FC<ConnectorProviderProps> = ({ children }) => {
  const { activate, deactivate, error } = useWeb3React()

  const isWrongNetwork = !!(error && error instanceof UnsupportedChainIdError)

  const handleChangeNetwork = useCallback(async (chainId: SupportedChainIds, connectorName: WalletConnectorNames) => {
    switch (connectorName) {
      case WALLET_CONNECTOR_NAMES.injected:
        await (window as any)?.ethereum.request?.({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: toHexString(chainId) }],
        })
        return
      default:
        console.error('Unsupported wallet')
        return
    }
  }, [])

  const handleActivateNetwork = useCallback(
    async (connector: AbstractConnector, connectorName: WalletConnectorNames) => {
      await activate(connector)
        .then(() => {
          localStorage.setItem(CONNECTOR_LOCAL_KEY, connectorName)
        })
        .catch((error) => {
          console.error('Connecting wallet error: ', error)
        })
        .finally(() => {
          console.info(`${connectorName} wallet is connected`)
        })
    },
    []
  )

  const handleConnectNetwork = useCallback(async (connectorName: WalletConnectorNames) => {
    switch (connectorName) {
      case WALLET_CONNECTOR_NAMES.injected:
        handleActivateNetwork(WALLET_CONNECTORS[WALLET_CONNECTOR_NAMES.injected], WALLET_CONNECTOR_NAMES.injected)
        return
      default:
        console.error('Unsupported wallet')
        return
    }
  }, [])

  const handleDisconnectWallet = useCallback(() => {
    deactivate()
    localStorage.removeItem(CONNECTOR_LOCAL_KEY)
  }, [])

  useEffect(() => {
    const connector = localStorage.getItem(CONNECTOR_LOCAL_KEY)
    connector && handleConnectNetwork(connector as WalletConnectorNames)
  }, [])

  useEffect(() => {
    const connector = localStorage.getItem(CONNECTOR_LOCAL_KEY)
    if (isWrongNetwork && connector) {
      handleChangeNetwork(CHAIN_IDS.mainnet, connector as WalletConnectorNames)
    }
  }, [isWrongNetwork])

  return (
    <ConnectorContext.Provider
      value={{
        isWrongNetwork,
        onChangeNetwork: handleChangeNetwork,
        onConnectWallet: handleConnectNetwork,
        onDisconnectWallet: handleDisconnectWallet,
      }}
    >
      {children}
    </ConnectorContext.Provider>
  )
}
