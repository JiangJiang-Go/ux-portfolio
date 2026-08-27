export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Dawood H. — Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Creative designer specializing in UI/UX, branding, web graphics, and video ads.' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://api.fontshare.com/v2/css?f[]=satoshi@500,700&f[]=general-sans@500,400&display=swap' },
      ],
    },
    pageTransition: { name: 'fade', mode: 'out-in' },
  },

  css: ['~/assets/css/main.css'],

  modules: [],

  compatibilityDate: '2024-11-01',
})
