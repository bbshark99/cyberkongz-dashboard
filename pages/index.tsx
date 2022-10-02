import type { NextPage } from 'next'
import { SaleCardList, getSingleSaleCard } from 'design-systems'
import useSales from 'hooks/useSales'
import { CYBERKONGZ_MAX_LIMIT, CYBERKONGZ_ADDRESS } from 'utils/constants'

const Home: NextPage = () => {
  const { loading: loadingCyberkongz, sales: cyberkongzSales } = useSales({
    limit: CYBERKONGZ_MAX_LIMIT,
    collection: CYBERKONGZ_ADDRESS,
    includeTokenMetadata: true,
  })

  return (
    <div className='w-full'>
      <SaleCardList
        loading={loadingCyberkongz}
        title='Cyberkongz Latest Sales'
        sales={getSingleSaleCard(cyberkongzSales)}
      />
    </div>
  )
}

export default Home
