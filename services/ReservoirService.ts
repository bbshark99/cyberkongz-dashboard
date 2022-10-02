import { getQuery } from 'utils/string'
import CoreAPIService from './CoreAPIService'

const RESERVOIR_API_ENDPOINT = 'https://api.reservoir.tools'

class ReservoirService extends CoreAPIService {
  constructor() {
    super(RESERVOIR_API_ENDPOINT)
  }

  async getLatestSales(query: SalesQuery): Promise<SalesResponse> {
    const params = getQuery(query)
    return this.get(`sales/v4`, query)
  }
}

export default new ReservoirService()
