// OtherFile.js
import { mount } from 'cypress/vue'
import createCustomVuetify from './plugins/vuetify'; // Import the custom Vuetify configuration object

type MountParams = Parameters<typeof mount>
type OptionsParam = MountParams[1]

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Helper mount function for Vue Components
       * @param component Vue Component or JSX Element to mount
       * @param options Options passed to Vue Test Utils
       */
      mount(component: any, options?: OptionsParam): Chainable<any>
    }
  }
}
Cypress.Commands.add('mount', (component, options = {}) => {
  // Setup options object
  options.global = options.global || {}
  options.global.plugins = options.global.plugins || []


  // Add router plugin
  options.global.plugins.push({
    install(app) {
      app.use(createCustomVuetify)
    },
  })

  return mount(component, options)
})