import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

const API = '';

const headers = () => ({ Authorization: 'Bearer ' })

const responseData = <T extends AxiosResponse<any, any>>(response: T) => response.data

const handleError = (error: AxiosError) => {
  const status = error.response!.status

  if (status == 401 || status == 403) {
    console.error('Please connect again, your session has expired.')
  }

  throw error
}

class CoreAPIService {
  get = async <R>(url: string, params: AnyObject = {}) =>
    axios
      .request<R>({
        method: 'get',
        url: `${API}/${url}`,
        headers: headers(),
        params,
      })
      .then<R>(responseData)
      .catch(handleError)

  post = async <R>(url: string, data: AnyObject = {}, { headers: headers_, ...config }: AxiosRequestConfig = {}) =>
    axios
      .request<R>({
        method: 'post',
        url: `${API}/${url}`,
        headers: { ...headers(), ...headers_ },
        data,
        ...config,
      })
      .then<R>(responseData)
      .catch(handleError)

  put = async <R>(url: string, data: AnyObject) =>
    axios
      .request<R>({
        method: 'put',
        url: `${API}/${url}`,
        headers: headers(),
        data,
      })
      .then<R>(responseData)
      .catch(handleError)

  patch = async <R>(url: string, data: AnyObject = {}) =>
    axios
      .request<R>({
        method: 'patch',
        url: `${API}/${url}`,
        headers: headers(),
        data,
      })
      .then<R>(responseData)
      .catch(handleError)

  delete = async <R>(url: string, data: AnyObject = {}) =>
    axios
      .request<R>({
        method: 'delete',
        url: `${API}/${url}`,
        headers: headers(),
        data,
      })
      .then<R>(responseData)
      .catch(handleError)
}

export default new CoreAPIService()
