import { pwa } from "./configs/pwa";
import { i18n } from "./configs/i18n";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",

  modules: [
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
    "@vite-pwa/nuxt",
    "nuxt-simple-sitemap",
    "radix-vue/nuxt",
    "shadcn-nuxt"
  ],

  css: [
    "@unocss/reset/tailwind.css",
    "katex/dist/katex.min.css",
    "~/assets/css/index.css"
  ],

  i18n,

  shadcn: {
    prefix: "Ui",
    componentDir: "./src/components/ui"
  },

  runtimeConfig: {
    public: {
      googleFontsKey: ""
    }
  },

  colorMode: {
    classSuffix: ""
  },

  app: {
    baseURL: '/oh-my-cv/site/', // Ensure the app is aware of the subpath
    head: {
      viewport: "width=device-width,initial-scale=1",
      link: [
        { rel: "apple-touch-icon", href: "/oh-my-cv/site/apple-touch-icon.png" },  // Updated path for GitHub Pages
        { rel: "mask-icon", href: "/oh-my-cv/site/safari-pinned-tab.svg", color: "#222" }  // Updated path for GitHub Pages
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "application-name", content: "Oh My CV!" },
        { name: "apple-mobile-web-app-title", content: "Oh My CV!" },
        { name: "msapplication-TileColor", content: "#fff" },
        { property: "og:url", content: "https://S1l3ntC0nquer.github.io/oh-my-cv/site/" },  // Corrected to use the GitHub Pages URL
        { property: "og:type", content: "website" }
      ]
    }
  },

  site: {
    url: "https://S1l3ntC0nquer.github.io/oh-my-cv/site/"  // Corrected to use the GitHub Pages URL
  },

  pwa: {
    ...pwa,  // Ensure pwa settings are used here
    manifest: {
      ...pwa.manifest,
      start_url: "/oh-my-cv/site/",  // Updated to use the GitHub Pages subpath
    },
    workbox: {
      navigateFallback: "/oh-my-cv/site/index.html",  // Updated to use the GitHub Pages subpath
    },
  }
});
