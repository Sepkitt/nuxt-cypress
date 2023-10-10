import { createVuetify } from 'vuetify';
import { mount } from "cypress/vue";
import { VApp } from 'vuetify/components';
import { h } from 'vue';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';
import './commands'
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
const vuetify = createVuetify({
  components,
  directives
});

Cypress.Commands.add('mount', (component: any, options = {}) => {
  options = options || {};
  options.global = options.global || {};
  options.global.stubs = options.global.stubs || {};
  options.global.stubs['transition'] = false;
  options.global.components = options.global.components || {};
  options.global.plugins = options.global.plugins || [];
  options.global.plugins.push({
    install(app) {
      app.use(vuetify);
    }
  });

  // Define a function slot for the component
  const slot = {
    default: () => h(component, options),
  };

  return mount(VApp, { slots: slot, global: options.global });
});
