// Generated by @vite-pwa/nuxt
import { defineNuxtPlugin } from '#imports'
import { pwaAssetsIcons } from 'virtual:pwa-assets/icons'
import type { PWAAssetIcon, PWAIcons } from '#build/pwa-icons/pwa-icons'

export default defineNuxtPlugin(() => {
  const pwaIcons = {
    transparent: {},
    maskable: {},
    favicon: {},
    apple: {},
    appleSplashScreen: {}
  } satisfies PWAIcons
  configureEntries(pwaIcons, 'transparent')
  configureEntries(pwaIcons, 'maskable')
  configureEntries(pwaIcons, 'favicon')
  configureEntries(pwaIcons, 'apple')
  configureEntries(pwaIcons, 'appleSplashScreen')
  return {
    provide: {
      pwaIcons
    }
  }
})

function configureEntries(pwaIcons: PWAIcons, key: keyof PWAIcons) {
  pwaIcons[key] = Object.values(pwaAssetsIcons[key] ?? {}).reduce((acc, icon) => {
    const entry: PWAAssetIcon<any> = {
      ...icon,
      asImage: {
        src: icon.url,
        key: `${key}-${icon.name}`
      }
    }
    if (icon.width && icon.height) {
      entry.asImage.width = icon.width
      entry.asImage.height = icon.height
    }
    acc[icon.name] = entry
    return acc
  }, {})
}
