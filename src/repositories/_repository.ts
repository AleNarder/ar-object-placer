interface IRepository<T> {
  getOne (...args: any[]): Promise<Wrapped<T>>
  getMany (...args: any[]): Promise<Wrapped<T[]>>
}

abstract class Repository<T> implements IRepository<T> {
  async getOne (...args: any[]): Promise<Wrapped<T, any>> {
    return {
      data: null,
      err: {
        message: 'Not available'
      }
    }
  }

  async getMany (...args: any[]): Promise<Wrapped<T[], any>> {
    return {
      data: null,
      err: {
        message: 'Not available'
      }
    }
  }
}

export {
  IRepository,
  Repository
}
