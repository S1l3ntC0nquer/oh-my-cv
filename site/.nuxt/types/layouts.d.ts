import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = string
declare module "../../../node_modules/.pnpm/nuxt@3.12.3_@parcel+watcher@2.4.1_@types+node@20.14.10_eslint@9.6.0_ioredis@5.4.1_magicast@0._zbg4noxekcn2dah5lk5lam6gna/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}