import { wrapAsync } from '@/lib/functions'
import ky, { Options } from 'ky'
import { KyInstance } from 'ky/distribution/types/ky'

interface IHttpService {
  get (...args: any[]): PromiseLike<any>
  put (...args: any[]): PromiseLike<any>
  post (...args: any[]): PromiseLike<any>
  delete (...args: any[]): PromiseLike<any>
}

abstract class HttpService implements IHttpService {
  abstract get<T> (url: string, options?: Options | undefined): Promise<Wrapped<T>>
  abstract put<T> (url: string, options?: Options | undefined): Promise<Wrapped<T>>
  abstract post<T> (url: string, options?: Options | undefined): Promise<Wrapped<T>>
  abstract delete<T> (url: string, options?: Options | undefined): Promise<Wrapped<T>>

  getAuthorizationHeaders (): Record<string, string> {
    return {}
  }
}

class KyHttpService extends HttpService implements IHttpService {
  private readonly http: KyInstance

  constructor () {
    super()
    this.http = ky.create({})
  }

  async get<T> (url: string, options?: Options): Promise<Wrapped<T, any>> {
    return wrapAsync((url, options) => this.http.get(url, options).json<T>())(url, options)
  }

  async put<T> (url: string, options?: Options): Promise<Wrapped<T, any>> {
    return wrapAsync((url, options) => this.http.put(url, options).json<T>())(url, options)
  }

  async post<T> (url: string, options?: Options): Promise<Wrapped<T, any>> {
    return wrapAsync((url, options) => this.http.post(url, options).json<T>())(url, options)
  }

  async delete<T> (url: string, options?: Options): Promise<Wrapped<T, any>> {
    return wrapAsync((url, options) => this.http.delete(url, options).json<T>())(url, options)
  }
}

const httpService = new KyHttpService()

export {
  HttpService,
  httpService
}
