import React from 'react'
import { Card, Typography, Avatar } from 'design-systems'

export interface SingleSaleCardProps {
  id: string | number
  tokenId: string | number
  image: string
  txHash: string
  ethPrice: string | number
  usdPrice: string | number
}

export interface SaleCardListProps {
  loading: boolean
  title: string
  sales: SingleSaleCardProps[]
}

export const getSingleSaleCard = (sales: SingleSaleResponse[] = []): SingleSaleCardProps[] => {
  return sales.map((sale) => ({
    id: sale.id,
    tokenId: sale.token.tokenId,
    image: sale.token.image,
    txHash: sale.txHash,
    ethPrice: sale.price.amount.native,
    usdPrice: sale.price.amount.usd,
  }))
}

export const SaleCardList: React.FC<SaleCardListProps> = ({ loading, title, sales }) => {
  return (
    <div className='w-full flex flex-col gap-2'>
      <Typography variant='h5' weight='semibold'>
        {title}
      </Typography>
      {sales?.map((sale) => (
        <Card key={sale.id} size='sm'>
          <div className='w-full flex items-center gap-4'>
            <div className='min-w-[100px] min-h-[40px] w-100px h-[40px] flex items-center justify-center'>
              <Avatar
                className='w-full h-full rounded-full'
                src={sale.image}
                width={40}
                height={40}
                alt='cyberkongz-image'
              />
            </div>
            <Typography>{sale.tokenId}</Typography>
            <Typography weight='bold'>{sale.ethPrice} ETH</Typography>
            <Typography weight='bold'>$ {sale.usdPrice}</Typography>
          </div>
        </Card>
      ))}
    </div>
  )
}
