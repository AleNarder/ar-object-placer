import Gun from 'gun'
import { App, Plugin } from 'vue'

export default {
  install (app: App) {
    const gun = Gun()
    app.config.globalProperties.$gun = gun
  }
} as Plugin
