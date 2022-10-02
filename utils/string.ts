import { formatEther } from '@ethersproject/units'

export const toHexString = (chainId: number | string): string => {
  return `0x${chainId.toString(16)}`
}

export const toShortString = (str: string, num: number = 3): string => {
  return `${str.slice(0, num + 1)}...${str.slice(-num)}`
}

export const toShort18 = (bigNumber: BigNumberish) => formatEther(bigNumber.toString())

export const getQuery = <T extends AnyObject>(params: T = {} as T): string => {
  return Object.entries(params)
    .filter(([, value]) => value != null)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')
}
