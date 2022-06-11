import { createApp as createVueApp, App as AppVue } from 'vue'
import { pipe } from './lib/functions'
import App from '@/App.vue'
import './registerServiceWorker'

/**
 * Layouts
 * @see loadLayouts
 */
import DefaultLayout from '@/layouts/default.vue'

/**
 * Plugins
 * @see loadPlugins
 */
import gun from '@/plugins/gun'
import mitt from '@/plugins/mitt'
import router from './router'

function loadLayouts (app: AppVue) {
  app.component('default-layout', DefaultLayout)
  return app
}

function loadPlugins (app: AppVue) {
  app.use(gun)
  app.use(mitt)
  app.use(router)
  return app
}

function mountApp (app: AppVue) {
  app.mount('#app')
  return app
}

pipe(
  loadPlugins,
  loadLayouts,
  mountApp
)(createVueApp(App))
