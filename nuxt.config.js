export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-starter-kontent-lumen',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
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
    previewApiKey: "ew0KICAiYWxnIjogIkhTMjU2IiwNCiAgInR5cCI6ICJKV1QiDQp9.ew0KICAianRpIjogImMwNmQwODE4YzI3NTQxZmM5YmNkM2Q5Y2E5MTY2NWUzIiwNCiAgImlhdCI6ICIxNjEzMDU0MDIzIiwNCiAgImV4cCI6ICIxOTU4NjU0MDIzIiwNCiAgInByb2plY3RfaWQiOiAiZjFkNDI0MGVkZmE3MDE0ZmVhYjVhMjkwMTBkODVhZWIiLA0KICAidmVyIjogIjEuMC4wIiwNCiAgImF1ZCI6ICJwcmV2aWV3LmRlbGl2ZXIua2VudGljb2Nsb3VkLmNvbSINCn0.OGvjC3uqHtlxBUDoE9YONpQIFeMLqcjpab97Gfbli78",
    enablePreviewMode: false
  },
  env: {
    KONTENT_PROJECT_ID: process.env.KONTENT_PROJECT_ID
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
