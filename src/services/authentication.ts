import gun, { IGunInstance } from 'gun'

interface IAuthenticator {
    signIn (...args: any[]): Promise<Wrapped<boolean>>
    signUp (...args: any[]): Promise<Wrapped<boolean>>
}

abstract class Authenticator implements IAuthenticator {
    abstract signIn(...args: any[]): Promise<Wrapped<boolean, any>>
    abstract signUp(...args: any[]): Promise<Wrapped<boolean, any>>
}

class GunAuthenticator extends Authenticator implements Authenticator {
    private readonly gun: IGunInstance

    constructor () {
      super()
      this.gun = gun()
    }

    async signIn (...args: any[]): Promise<Wrapped<boolean, any>> {
      return {
        data: true,
        err: null
      }
    }

    async signUp (username: string, password: string): Promise<Wrapped<boolean, any>> {
      return {
        data: true,
        err: null
      }
    }
}
