export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt starter for Kontent',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'This is starter for Nuxt.js and Kontent headless CMS' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/scss/init.scss',
    '~/static/fonts/fontello-771c82e0/css/fontello.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/kenticokontentNuxtModule'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'kentico-kontent-nuxt-module'
  ],
  kenticokontent: {
    projectId: process.env.KONTENT_PROJECT_ID,
    enableAdvancedLogging: false,
    previewApiKey: process.env.KONTENT_PREVIEW_TOKEN,
    enablePreviewMode: !(!process.env.KONTENT_PREVIEW_TOKEN),
  },
  env: {
    KONTENT_PROJECT_ID: process.env.KONTENT_PROJECT_ID
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  generate: {
    fallback: '404.html'
  }
}
