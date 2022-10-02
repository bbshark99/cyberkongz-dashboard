import React, { useState, useEffect } from 'react'
import useShallowState from './useShallowState'
import ReservoirService from 'services/ReservoirService'

interface InitialState extends SalesResponse {
  loading: boolean
}

export default function useSales(params: SalesQuery) {
  const [state, setState] = useShallowState<InitialState>({
    loading: false,
    sales: [],
  })

  useEffect(() => {
    setState({ loading: true })
    ReservoirService.getLatestSales(params)
      .then(({ sales }) => {
        setState({ sales, loading: false })
      })
      .catch((error: AnyObject) => {
        console.error('Loading sales data error: ', error)
      })
      .finally(() => {
        setState({ loading: false })
      })
  }, [])

  return state
}
