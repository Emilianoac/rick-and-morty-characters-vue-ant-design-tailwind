import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Components from "unplugin-vue-components/vite"
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers"

// https://vitejs.dev/config/
export default defineConfig({
  base: '/rick-and-morty-characters-vue-ant-design-tailwind',
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver({
        importStyle: false
      })]
    }) 
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
