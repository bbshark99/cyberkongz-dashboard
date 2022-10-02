import type { NextPage } from 'next'
import { SaleCardList, getSingleSaleCard } from 'design-systems'
import useSales from 'hooks/useSales'
import { CYBERKONGZ_MAX_LIMIT, CYBERKONGZ_VX_ADDRESSES } from 'utils/constants'

const CyberkongzVX: NextPage = () => {
  const { loading: loadingCyberkongzVX, sales: cyberkongzVXSales } = useSales({
    limit: CYBERKONGZ_MAX_LIMIT,
    collection: CYBERKONGZ_VX_ADDRESSES,
    includeTokenMetadata: true,
  })
  return (
    <div className='w-full'>
      <SaleCardList
        loading={loadingCyberkongzVX}
        title='Cyberkongz VX Latest Sales'
        sales={getSingleSaleCard(cyberkongzVXSales)}
      />
    </div>
  )
}

export default CyberkongzVX
