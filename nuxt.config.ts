// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/image", "@nuxthub/core", "@nuxt/ui"],
  ssr: true,
  css: ["~/assets/css.css"],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
      autoSubfolderIndex: false,
    },
  },

  // image: {
  //   provider: "ipxStatic",
  // },

  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  compatibilityDate: "2025-03-01",
  hub: {
    workers: true,
  },
});
