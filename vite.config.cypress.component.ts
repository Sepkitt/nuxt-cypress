// `vite.config.cypress.component.ts`
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vuetify from "vite-plugin-vuetify";

export default defineConfig({
  //@ts-ignore
  test: {
    globals: true,
    environment: 'jsdom',
    deps: {
      inline: ['vuetify'],
    },
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.includes('-'),
        },
      },
    }),
],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`
    }
  },

})