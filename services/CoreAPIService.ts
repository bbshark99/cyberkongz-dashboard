import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

const responseData = <T extends AxiosResponse<any, any>>(response: T) => response.data

const handleError = (error: AxiosError) => {
  throw error
}

class CoreAPIService {
  baseURL: string

  constructor(url: string) {
    this.baseURL = url
  }

  get = async <R>(url: string, params: AnyObject = {}) =>
    axios
      .request<R>({
        method: 'get',
        url: `${this.baseURL}/${url}`,
        params,
      })
      .then<R>(responseData)
      .catch(handleError)

  post = async <R>(url: string, data: AnyObject = {}, { headers: headers_, ...config }: AxiosRequestConfig = {}) =>
    axios
      .request<R>({
        method: 'post',
        url: `${this.baseURL}/${url}`,
        data,
        ...config,
      })
      .then<R>(responseData)
      .catch(handleError)

  put = async <R>(url: string, data: AnyObject) =>
    axios
      .request<R>({
        method: 'put',
        url: `${this.baseURL}/${url}`,
        data,
      })
      .then<R>(responseData)
      .catch(handleError)

  patch = async <R>(url: string, data: AnyObject = {}) =>
    axios
      .request<R>({
        method: 'patch',
        url: `${this.baseURL}/${url}`,
        data,
      })
      .then<R>(responseData)
      .catch(handleError)

  delete = async <R>(url: string, data: AnyObject = {}) =>
    axios
      .request<R>({
        method: 'delete',
        url: `${this.baseURL}/${url}`,
        data,
      })
      .then<R>(responseData)
      .catch(handleError)
}

export default CoreAPIService
