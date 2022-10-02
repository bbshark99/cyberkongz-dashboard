import { JsonRpcProvider, Web3Provider, StaticJsonRpcProvider } from '@ethersproject/providers'

class CoreChainService {
  provider: JsonRpcProvider | Web3Provider | StaticJsonRpcProvider

  constructor(library: JsonRpcProvider | Web3Provider | StaticJsonRpcProvider) {
    this.provider = library
  }

  async getBalance(address: string): Promise<BigNumberish> {
    return this.provider.getBalance(address)
  }
}

export default CoreChainService
