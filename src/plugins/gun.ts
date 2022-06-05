import Gun from 'gun'
import { App, Plugin } from 'vue'

const gun = Gun()

export default {
  install (app: App) {
    app.config.globalProperties.$gun = gun
  }
} as Plugin
