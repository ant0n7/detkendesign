export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Detken Design - Webdesign für Anwaltskanzleien',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Wir helfen Anwaltskanzleien dabei, ihre Mandantengewinnung durch eine moderne Webseite zu verbessern. Mit unseren durchdachten Techniken verhindern wir, dass potenzielle Mandanten und Mitarbeiter zum Konkurrenten abspringen und hilft beim Vertrauensaufbau von Interessenten. aus Zürich spezialisiert auf Anwaltskanzleien.',
      },
      {
        name: 'keywords',
        content:
          'Detken Design, Webdesign, Anwalt, Anwaltskanzlei, Webdesign für Anwaltskanzleien, Website, Webdesign Zürich, Webdesign Agentur',
      },
      { name: 'author', content: 'Detken Design' },
      { name: 'robots', content: 'index, follow' },
      { name: 'revisit-after', content: '1 days' },
      { name: 'language', content: 'de-DE' },
      {
        name: 'og:title',
        content: 'Detken Design - Webdesign für Anwaltskanzleien',
      },
      {
        name: 'og:description',
        content:
          'Wir helfen Anwaltskanzleien dabei, ihre Mandantengewinnung durch eine moderne Webseite zu verbessern. Mit unseren durchdachten Techniken verhindern wir, dass potenzielle Mandanten und Mitarbeiter zum Konkurrenten abspringen und hilft beim Vertrauensaufbau von Interessenten. aus Zürich spezialisiert auf Anwaltskanzleien.',
      },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://www.detkendesign.com' },
      {
        name: 'og:image',
        content: 'https://www.detkendesign.com/logo_d_white.png',
      },
      { name: 'og:image:width', content: '1200' },
      { name: 'og:image:height', content: '630' },
      { name: 'og:image:alt', content: 'Detken Design' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    // Bootstrap JS bundle
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
        body: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@/assets/css/futura.css',
    '@/assets/css/main.scss',
    '@/assets/css/navbar.scss',
    '@/assets/css/home.scss',
    '@/assets/css/footer.scss',
    '@/assets/css/gallery.scss',
    '@/assets/css/about.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Register middleware globally
  router: {
    middleware: ['redirect'],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
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
