interface SaleTokenCollectionResponse {
  id: null | string
  name: null | string
}

interface SaleTokenResponse {
  contract: string
  tokenId: string
  name: string
  image: string
  collection: SaleTokenCollectionResponse
}

interface SalePriceCurrency {
  contract: string
  name: string
  symbol: string
  decimals: number
}

interface SaleAmount {
  raw: string
  decimal: number
  usd: number
  native: number
}

interface SalePrice {
  currency: SalePriceCurrency
  amount: SaleAmount
}

interface SingleSaleResponse {
  id: string
  saleId: string
  token: SaleTokenResponse
  orderId: string
  orderSource: string
  orderSide: string
  orderKind: string
  from: string
  to: string
  amount: string
  fillSource: string
  block: number
  txHash: string
  logIndex: number
  batchIndex: number
  timestamp: number
  price: SalePrice
  washTradingScore: number
}

interface SalesResponse {
  sales: SingleSaleResponse[]
}

interface SalesQuery {
  limit: number
  collection: string
  includeTokenMetadata: boolean
}
