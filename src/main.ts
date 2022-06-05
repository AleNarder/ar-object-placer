import { createApp, App as AppVue } from 'vue'
import './registerServiceWorker'

/**
 * Plugins
 * @see loadPlugins
 */
import gun from '@/plugins/gun'
import mitt from '@/plugins/mitt'
import router from './router'

/**
 * App
 * @see main
 */
import App from '@/App.vue'

function loadPlugins (app: AppVue) {
  app.use(gun)
  app.use(mitt)
  app.use(router)
}

function main () {
  const app = createApp(App)
  loadPlugins(app)
  app.mount('#app')
}

main()
