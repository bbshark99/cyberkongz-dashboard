import { createContext, useContext, useEffect } from 'react'
import type { PropsWithChildren } from 'react'
import { useWeb3React } from '@web3-react/core'
import { BigNumber } from '@ethersproject/bignumber'

import useShallowState from 'hooks/useShallowState'
import CoreChainService from 'services/CoreChainService'
import { toShort18 } from 'utils/string'

export interface UserStateProps {
  balance: string
  loading: boolean
}

export interface UserProviderProps extends PropsWithChildren {}

export const UserState: UserStateProps = {
  balance: '0',
  loading: false,
}

export const UserContext = createContext(UserState)

export const useUser = () => useContext(UserContext)

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const { library, account } = useWeb3React()
  const [state, setState] = useShallowState<UserStateProps>(UserState)

  const initialize = async () => {
    setState({ loading: true })
    const chainService = new CoreChainService(library)
    const balance = await chainService.getBalance(account!)
    setState({ loading: false, balance: toShort18(BigNumber.from(balance)) })
  }

  useEffect(() => {
    if (!library || !account) return
    initialize()
  }, [library, account])

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>
}
