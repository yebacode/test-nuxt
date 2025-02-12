export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/ui"],
  future: {
    compatibilityVersion: 4,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
});
