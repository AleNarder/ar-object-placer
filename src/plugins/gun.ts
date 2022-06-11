import { App, Plugin } from 'vue'

const lazyGun = async () => {
  const module = await import(/* webpackChunkName: "gun" */'gun')
  return module.default()
}

const gun = {

  async instance () {
    return lazyGun()
  },

  async user () {
    const gun = await lazyGun()
    return gun.user
  }
}

export default {
  install (app: App) {
    app.config.globalProperties.$gun = gun
  }
} as Plugin
