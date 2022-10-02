import { InjectedConnector } from '@web3-react/injected-connector'
import { ExternalProvider, JsonRpcFetchFunc, Web3Provider } from '@ethersproject/providers'

export const CHAIN_IDS = {
  mainnet: 1,
} as const

export const CHAIN_NAMES = {
  [CHAIN_IDS.mainnet]: 'ETH Mainnet',
} as const

export const DEFAULT_CHAIN_ID = CHAIN_IDS.mainnet
export const DEFAULT_CHAIN_NAME = CHAIN_NAMES[CHAIN_IDS.mainnet]

export const SUPPORTED_CHAIN_IDS = [CHAIN_IDS.mainnet]
export const SUPPORTED_CHAIN_NAMES = SUPPORTED_CHAIN_IDS.map((id) => CHAIN_NAMES[id])

export const WALLET_CONNECTOR_NAMES = {
  injected: 'injected',
} as const

export const WALLET_CONNECTORS = {
  [WALLET_CONNECTOR_NAMES.injected]: new InjectedConnector({
    supportedChainIds: SUPPORTED_CHAIN_IDS,
  }),
} as const

export const getLibrary = (provider: ExternalProvider | JsonRpcFetchFunc) => {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

declare global {
  type ChainIds = keyof typeof CHAIN_NAMES
  type ChainNames = keyof typeof CHAIN_IDS
  type SupportedChainIds = typeof SUPPORTED_CHAIN_IDS[number]
  type SupportedChainNames = typeof SUPPORTED_CHAIN_NAMES[number]
  type WalletConnectorNames = keyof typeof WALLET_CONNECTOR_NAMES
}
