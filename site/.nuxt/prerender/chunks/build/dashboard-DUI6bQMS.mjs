import { c as cn, _ as _sfc_main$8, a as _sfc_main$g } from './Header-CVL2gF3u.mjs';
import { r as readFile, s as storageService, u as useShortcuts, _ as _sfc_main$1$1, a as _sfc_main$9, b as useFileDialog, i as isInteger, c as _sfc_main$2$1, d as useConstant } from './Skeleton-DmysgnrS.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, ref, shallowRef, toRef, getCurrentInstance, onServerPrefetch, createTextVNode, toDisplayString, computed, renderSlot } from 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/vue@3.4.31_typescript@5.5.3/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderSlot, ssrRenderAttr } from 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/vue@3.4.31_typescript@5.5.3/node_modules/vue/server-renderer/index.mjs';
import { ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaRoot, ScrollAreaViewport, ScrollAreaCorner } from 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/radix-vue@1.9.0_vue@3.4.31_typescript@5.5.3_/node_modules/radix-vue/dist/index.js';
import { a as useNuxtApp, b as asyncDataDefaults, d as useRouter, e as useLocalePath, c as createError } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-C2wghSqn.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/class-variance-authority@0.7.0/node_modules/class-variance-authority/dist/index.mjs';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/tailwind-merge@2.3.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/lucide-vue-next@0.400.0_vue@3.4.31_typescript@5.5.3_/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/vue-sonner@1.1.3/node_modules/vue-sonner/lib/vue-sonner.js';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/localforage@1.10.0/node_modules/localforage/dist/localforage.js';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/markdown-it@14.1.0/node_modules/markdown-it/index.mjs';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/markdown-it-deflist@3.0.0/node_modules/markdown-it-deflist/index.mjs';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/markdown-it-link-attributes@4.0.1/node_modules/markdown-it-link-attributes/index.js';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/katex@0.16.11/node_modules/katex/dist/katex.mjs';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/js-yaml@4.1.0/node_modules/js-yaml/dist/js-yaml.mjs';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/ofetch@1.3.4/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/vue-bundle-renderer@2.1.0/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/h3@1.12.0/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/devalue@5.0.0/node_modules/devalue/index.js';
import '../runtime.mjs';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/destr@2.0.3/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/unenv@1.9.0/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/ohash@1.1.3/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.4.1/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.4.1/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/nuxt@3.12.3_@parcel+watcher@2.4.1_@types+node@20.14.10_eslint@9.6.0_ioredis@5.4.1_magicast@0._zbg4noxekcn2dah5lk5lam6gna/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.4.1/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/@unhead+ssr@1.9.15/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/unhead@1.9.15/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/@unhead+shared@1.9.15/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/unctx@2.3.1/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/vue-router@4.4.0_vue@3.4.31_typescript@5.5.3_/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/vue-devtools-stub@0.1.0/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/cookie-es@1.1.0/node_modules/cookie-es/dist/index.mjs';

const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _a2, _b2, _c, _d, _e, _f, _g, _h, _i;
  var _a, _b;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, _handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  const handler = !((_a = nuxtApp.ssrContext) == null ? void 0 : _a._sharedPrerenderCache) ? _handler : () => {
    const value = nuxtApp.ssrContext._sharedPrerenderCache.get(key);
    if (value) {
      return value;
    }
    const promise = Promise.resolve().then(() => nuxtApp.runWithContext(_handler));
    nuxtApp.ssrContext._sharedPrerenderCache.set(key, promise);
    return promise;
  };
  const getDefault = () => asyncDataDefaults.value;
  const getDefaultCachedData = () => nuxtApp.isHydrating ? nuxtApp.payload.data[key] : nuxtApp.static.data[key];
  options.server = (_a2 = options.server) != null ? _a2 : true;
  options.default = (_b2 = options.default) != null ? _b2 : getDefault;
  options.getCachedData = (_c = options.getCachedData) != null ? _c : getDefaultCachedData;
  options.lazy = (_d = options.lazy) != null ? _d : false;
  options.immediate = (_e = options.immediate) != null ? _e : true;
  options.deep = (_f = options.deep) != null ? _f : asyncDataDefaults.deep;
  options.dedupe = (_g = options.dedupe) != null ? _g : "cancel";
  const hasCachedData = () => options.getCachedData(key, nuxtApp) != null;
  if (!nuxtApp._asyncData[key] || !options.immediate) {
    (_h = (_b = nuxtApp.payload._errors)[key]) != null ? _h : _b[key] = asyncDataDefaults.errorValue;
    const _ref = options.deep ? ref : shallowRef;
    nuxtApp._asyncData[key] = {
      data: _ref((_i = options.getCachedData(key, nuxtApp)) != null ? _i : options.default()),
      pending: ref(!hasCachedData()),
      error: toRef(nuxtApp.payload._errors, key),
      status: ref("idle"),
      _default: options.default
    };
  }
  const asyncData = { ...nuxtApp._asyncData[key] };
  delete asyncData._default;
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    var _a3;
    if (nuxtApp._asyncDataPromises[key]) {
      if (isDefer((_a3 = opts.dedupe) != null ? _a3 : options.dedupe)) {
        return nuxtApp._asyncDataPromises[key];
      }
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    if ((opts._initial || nuxtApp.isHydrating && opts._initial !== false) && hasCachedData()) {
      return Promise.resolve(options.getCachedData(key, nuxtApp));
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxtApp));
        } catch (err) {
          reject(err);
        }
      }
    ).then(async (_result) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = await options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxtApp.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = asyncDataDefaults.errorValue;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxtApp._asyncDataPromises[key];
    });
    nuxtApp._asyncDataPromises[key] = promise;
    return nuxtApp._asyncDataPromises[key];
  };
  asyncData.clear = () => clearNuxtDataByKey(nuxtApp, key);
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = asyncDataDefaults.errorValue;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = void 0;
    nuxtApp._asyncData[key].error.value = asyncDataDefaults.errorValue;
    nuxtApp._asyncData[key].pending.value = false;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    if (nuxtApp._asyncDataPromises[key]) {
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "File",
  __ssrInlineRender: true,
  emits: ["update"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const { open, onChange } = useFileDialog();
    onChange(async (file) => {
      const content = await readFile(file);
      await storageService.importFromJson(content);
      emits("update");
    });
    const exportToJSON = () => storageService.exportToJSON();
    useShortcuts("shift+ctrl+s", exportToJSON);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = _sfc_main$g;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-2" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UiButton, { onClick: exportToJSON }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span i-ic:baseline-save-as size-4 mr-1${_scopeId}></span> ${ssrInterpolate(_ctx.$t("dashboard.saveas"))}`);
          } else {
            return [
              createVNode("span", {
                "i-ic:baseline-save-as": "",
                "size-4": "",
                "mr-1": ""
              }),
              createTextVNode(" " + toDisplayString(_ctx.$t("dashboard.saveas")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiButton, {
        class: "bg-neutral-800 hover:bg-neutral-800/90 hover:ring-neutral-800/40 dark:bg-secondary dark:hover:bg-background dark:hover:ring-secondary/40",
        onClick: unref(open)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span i-ic:round-upload-file size-4 mr-1${_scopeId}></span> ${ssrInterpolate(_ctx.$t("dashboard.import"))}`);
          } else {
            return [
              createVNode("span", {
                "i-ic:round-upload-file": "",
                "size-4": "",
                "mr-1": ""
              }),
              createTextVNode(" " + toDisplayString(_ctx.$t("dashboard.import")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/File.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ScrollBar",
  __ssrInlineRender: true,
  props: {
    orientation: { default: "vertical" },
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ScrollAreaScrollbar), mergeProps(delegatedProps.value, {
        class: unref(cn)(
          "flex touch-none select-none transition-colors",
          _ctx.orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-px",
          _ctx.orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-px",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ScrollAreaThumb), { class: "relative flex-1 rounded-full bg-border" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ScrollAreaThumb), { class: "relative flex-1 rounded-full bg-border" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/scroll-area/ScrollBar.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ScrollArea",
  __ssrInlineRender: true,
  props: {
    type: {},
    dir: {},
    scrollHideDelay: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ScrollAreaRoot), mergeProps(delegatedProps.value, {
        class: unref(cn)("relative overflow-hidden", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ScrollAreaViewport), { class: "h-full w-full rounded-[inherit]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ScrollAreaCorner), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ScrollAreaViewport), { class: "h-full w-full rounded-[inherit]" }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }),
              createVNode(_sfc_main$6),
              createVNode(unref(ScrollAreaCorner))
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/scroll-area/ScrollArea.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "NewResume",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-56 h-80" }, _attrs))}><button class="resume-card group w-[210px] h-[299px] flex-center bg-secondary hover:bg-background ring-when-focus"${ssrRenderAttr("aria-label", _ctx.$t("dashboard.new"))}><span i-ic:round-plus text="5xl muted-foreground group-hover:primary"></span></button></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/NewResume.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ResumeOptions",
  __ssrInlineRender: true,
  props: {
    resume: {}
  },
  emits: ["update"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const duplicate = async () => {
      await storageService.duplicateResume(props.resume.id);
      emit("update");
    };
    const remove = async () => {
      await storageService.deleteResume(props.resume.id);
      emit("update");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = _sfc_main$g;
      _push(`<div${ssrRenderAttrs(mergeProps({
        flex: "~ col gap-y-2",
        "items-end": ""
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UiButton, {
        size: "round",
        class: "group/btn gap-x-1 transition-all bg-gray-500/90 hover:bg-gray-500 hover:ring-none hover:w-auto hover:px-2 focus-visible:w-auto focus-visible:px-2",
        onClick: duplicate,
        "aria-label": _ctx.$t("dashboard.duplicate")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span i-ion:duplicate${_scopeId}></span><span class="hidden text-xs group-hover/btn:inline group-focus-visible/btn:inline"${_scopeId}>${ssrInterpolate(_ctx.$t("dashboard.duplicate"))}</span>`);
          } else {
            return [
              createVNode("span", { "i-ion:duplicate": "" }),
              createVNode("span", { class: "hidden text-xs group-hover/btn:inline group-focus-visible/btn:inline" }, toDisplayString(_ctx.$t("dashboard.duplicate")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiButton, {
        size: "round",
        variant: "destructive",
        class: "group/btn gap-x-1 transition-all bg-destructive/90 hover:bg-destructive hover:w-auto hover:px-2 focus-visible:w-auto focus-visible:px-2",
        onClick: remove,
        "aria-label": _ctx.$t("dashboard.delete")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span i-material-symbols:delete-outline-rounded${_scopeId}></span><span class="hidden text-xs group-hover/btn:inline group-focus-visible/btn:inline"${_scopeId}>${ssrInterpolate(_ctx.$t("dashboard.delete"))}</span>`);
          } else {
            return [
              createVNode("span", { "i-material-symbols:delete-outline-rounded": "" }),
              createVNode("span", { class: "hidden text-xs group-hover/btn:inline group-focus-visible/btn:inline" }, toDisplayString(_ctx.$t("dashboard.delete")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/ResumeOptions.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ResumeInfo",
  __ssrInlineRender: true,
  props: {
    resume: {}
  },
  setup(__props) {
    const props = __props;
    const rename = async (text) => {
      if (!text)
        return;
      await storageService.updateResume(
        {
          id: props.resume.id,
          name: text
        },
        false
      );
    };
    const formatDate = (date) => date && isInteger(date, { allowString: true }) && new Date(parseInt(date)).toISOString().substring(0, 19).replace("T", " ").replaceAll("-", "/");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedUiEditable = _sfc_main$2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SharedUiEditable, {
        class: "w-53 mx-auto",
        "default-value": _ctx.resume.name,
        "submit-mode": "enter",
        "auto-resize": "",
        onSubmit: (text) => rename(text)
      }, null, _parent));
      _push(`<div text="xs muted-foreground" mt-1.5>${ssrInterpolate(_ctx.$t("dashboard.updated"))}${ssrInterpolate(formatDate(_ctx.resume.updated_at))}</div><div text="xs muted-foreground" mt-0.5>${ssrInterpolate(_ctx.$t("dashboard.created"))}${ssrInterpolate(formatDate(_ctx.resume.created_at))}</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/ResumeInfo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ResumeItem",
  __ssrInlineRender: true,
  props: {
    resume: {}
  },
  emits: ["update"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { PAPER } = useConstant();
    const size = PAPER.SIZES[props.resume.styles.paper];
    const renderRef = ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_DashboardResumeOptions = _sfc_main$3;
      const _component_DashboardResumeInfo = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ "w-56": "" }, _attrs))} data-v-0302e048><div h-80 data-v-0302e048><div class="resume-card group/card size-fit" data-v-0302e048>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: _ctx.$nuxt.$localePath(`/editor/${props.resume.id}`),
        class: "block border overflow-hidden rounded-md ring-when-focus peer",
        style: {
          width: `${unref(size).w}px`,
          height: `${unref(size).h}px`
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$1$1), {
              id: _ctx.resume.id,
              ref_key: "renderRef",
              ref: renderRef,
              markdown: _ctx.resume.markdown,
              styles: _ctx.resume.styles,
              class: "origin-top-left",
              style: {
                transform: `scale(${1 / unref(PAPER).MM_TO_PX})`
              }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$1$1), {
                id: _ctx.resume.id,
                ref_key: "renderRef",
                ref: renderRef,
                markdown: _ctx.resume.markdown,
                styles: _ctx.resume.styles,
                class: "origin-top-left",
                style: {
                  transform: `scale(${1 / unref(PAPER).MM_TO_PX})`
                }
              }, null, 8, ["id", "markdown", "styles", "style"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_DashboardResumeOptions, {
        class: "opacity-0 group-hover/card:opacity-100 peer-focus-within:opacity-100 focus-within:opacity-100",
        pos: "absolute right-3 top-3",
        resume: _ctx.resume,
        onUpdate: ($event) => emit("update")
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_DashboardResumeInfo, { resume: _ctx.resume }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/ResumeItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0302e048"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      data: resumes,
      refresh,
      status
    } = useAsyncData("resume-list", () => storageService.getResumes(), {
      server: false,
      immediate: false,
      default: () => []
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedHeader = _sfc_main$8;
      const _component_DashboardFile = _sfc_main$7;
      const _component_UiScrollArea = _sfc_main$5;
      const _component_DashboardNewResume = _sfc_main$4;
      const _component_DashboardResumeItem = __nuxt_component_4;
      const _component_UiSkeleton = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "dashboard-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SharedHeader, null, null, _parent));
      _push(`<div class="workspace max-w-310 mx-auto" flex="~ col" p="x-4 y-8"><div class="px-2 space-y-2" md="hstack justify-between"><h1 font-bold text-3xl>${ssrInterpolate(_ctx.$t("dashboard.my_resumes"))}</h1>`);
      _push(ssrRenderComponent(_component_DashboardFile, { onUpdate: unref(refresh) }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UiScrollArea, { class: "flex-1 mt-4 px-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="gap-x-4 gap-y-8 pt-4" flex="~ wrap"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_DashboardNewResume, null, null, _parent2, _scopeId));
            if (unref(status) === "success") {
              _push2(`<!--[-->`);
              ssrRenderList(unref(resumes), (resume) => {
                _push2(ssrRenderComponent(_component_DashboardResumeItem, {
                  key: resume.id,
                  resume,
                  onUpdate: unref(refresh)
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<!--[-->`);
              ssrRenderList(4, (i) => {
                _push2(`<div class="w-56 h-80"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UiSkeleton, { class: "w-[210px] h-[299px] bg-secondary mx-auto" }, null, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]-->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: "gap-x-4 gap-y-8 pt-4",
                flex: "~ wrap"
              }, [
                createVNode(_component_DashboardNewResume),
                unref(status) === "success" ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(resumes), (resume) => {
                  return openBlock(), createBlock(_component_DashboardResumeItem, {
                    key: resume.id,
                    resume,
                    onUpdate: unref(refresh)
                  }, null, 8, ["resume", "onUpdate"]);
                }), 128)) : (openBlock(), createBlock(Fragment, { key: 1 }, renderList(4, (i) => {
                  return createVNode("div", {
                    key: i,
                    class: "w-56 h-80"
                  }, [
                    createVNode(_component_UiSkeleton, { class: "w-[210px] h-[299px] bg-secondary mx-auto" })
                  ]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dashboard-DUI6bQMS.mjs.map
