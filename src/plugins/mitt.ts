import mitt from 'mitt'
import { App, Plugin } from 'vue'

export default {
  install (app: App) {
    app.config.globalProperties.$mitt = mitt
  }
} as Plugin
