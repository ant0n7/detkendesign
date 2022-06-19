export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Detken Design - Webdesign aus Zürich',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description', 
        name: 'description', 
        content: 'Detken Design ist eine Webdesign Agentur aus Zürich spezialisiert auf Anwaltskanzleien.' 
      },
      { name: 'keywords', content: 'Detken Design, Webdesign, Webdesign Zürich, Webdesign aus Zürich, Webdesign Agentur, Webdesign Agentur Zürich, Webdesign Agentur aus Zürich, Webdesign Agentur aus Zürich' },
      { name: 'author', content: 'Detken Design' },
      { name: 'robots', content: 'index, follow' },
      { name: 'revisit-after', content: '1 days' },
      { name: 'language', content: 'de-DE' },
      { name: 'og:title', content: 'Detken Design - Webdesign aus Zürich' },
      { name: 'og:description', content: 'Detken Design ist eine Webdesign Agentur aus Zürich spezialisiert auf Anwaltskanzleien.' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://detkendesign.com' },
      { name: 'og:image', content: 'https://detkendesign.com/static/logo.png' },
      { name: 'og:image:width', content: '1200' },
      { name: 'og:image:height', content: '630' },
      { name: 'og:image:alt', content: 'Detken Design' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Detken Design - Webdesign aus Zürich' },
      { name: 'twitter:description', content: 'Detken Design ist eine Webdesign Agentur aus Zürich spezialisiert auf Anwaltskanzleien.' },
      { name: 'twitter:image', content: 'https://detkendesign.com/static/logo.png' },
      { name: 'twitter:image:alt', content: 'Detken Design' },
      { name: 'twitter:creator', content: '@antondetken' },
      { name: 'twitter:site', content: '@antondetken' },
      { name: 'twitter:domain', content: 'https://detkendesign.com' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@/assets/css/futura.css',
    '@/assets/css/main.scss',
    '@/assets/css/navbar.scss',
    '@/assets/css/home.scss'
  ],

  // script: [
  //   // popper.js local import 
  //   'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js',
  //   'bootstrap/dist/js/bootstrap.bundle.min.js'
  // ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxt/image',
    // 'bootstrap'
    // '@popperjs/core'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // "popperjs/core",
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',


    // '@nuxt/image'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
