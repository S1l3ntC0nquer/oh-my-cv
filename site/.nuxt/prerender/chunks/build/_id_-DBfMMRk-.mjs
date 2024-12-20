import { c as cn, _ as _sfc_main$D, a as _sfc_main$g$1 } from './Header-CVL2gF3u.mjs';
import { Separator, useForwardPropsEmits, TooltipRoot, TooltipPortal, TooltipContent, TooltipTrigger, TooltipProvider, DialogRoot, DialogClose, DialogTrigger, useForwardProps, DialogTitle, DialogDescription, DialogPortal, DialogOverlay, DialogContent, SplitterGroup, SplitterPanel, SplitterResizeHandle, TabsRoot, TabsList, TabsIndicator, TabsTrigger, SliderRoot, SliderTrack, SliderRange, SliderThumb } from 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/radix-vue@1.9.0_vue@3.4.31_typescript@5.5.3_/node_modules/radix-vue/dist/index.js';
import { useSSRContext, defineComponent, ref, computed, h, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, createTextVNode, watch, renderSlot, toDisplayString, isRef, createCommentVNode, withKeys, Fragment, renderList, withDirectives, vShow, resolveDynamicComponent, toRaw } from 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/vue@3.4.31_typescript@5.5.3/node_modules/vue/index.mjs';
import { e as useDataStore, f as useMonaco, g as useStyleStore, u as useShortcuts, h as useToast, a as _sfc_main$E, _ as _sfc_main$1$1, s as storageService, c as _sfc_main$2$1, j as downloadFile, k as fetchFile, d as useConstant } from './Skeleton-DmysgnrS.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrGetDynamicModelProps, ssrRenderList, ssrRenderStyle, ssrRenderVNode } from 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/vue@3.4.31_typescript@5.5.3/node_modules/vue/server-renderer/index.mjs';
import { f as useElementSize, i as useRoute, j as useWindowSize, g as useVModel, h as useI18n } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { cva } from 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/class-variance-authority@0.7.0/node_modules/class-variance-authority/dist/index.mjs';
import { X } from 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/lucide-vue-next@0.400.0_vue@3.4.31_typescript@5.5.3_/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import * as fileUpload from 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/@zag-js+file-upload@0.60.0/node_modules/@zag-js/file-upload/dist/index.mjs';
import { useMachine, normalizeProps } from 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/@zag-js+vue@0.60.0_vue@3.4.31_typescript@5.5.3_/node_modules/@zag-js/vue/dist/index.mjs';
import * as combobox from 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/@zag-js+combobox@0.60.0/node_modules/@zag-js/combobox/dist/index.mjs';
import * as colorPicker from 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/@zag-js+color-picker@0.60.0/node_modules/@zag-js/color-picker/dist/index.mjs';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs';
import 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/tailwind-merge@2.3.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
import './nuxt-link-C2wghSqn.mjs';
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

const _sfc_main$C = /* @__PURE__ */ defineComponent({
  __name: "Code",
  __ssrInlineRender: true,
  setup(__props) {
    const editor = ref();
    const { setup, activateModel, dispose, loading } = useMonaco();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TabsRoot = TabsRoot;
      const _component_TabsList = TabsList;
      const _component_TabsIndicator = TabsIndicator;
      const _component_TabsTrigger = TabsTrigger;
      _push(ssrRenderComponent(_component_TabsRoot, mergeProps({
        class: "pane-container overflow-hidden bg-background",
        flex: "~ col",
        "default-value": "markdown",
        "onUpdate:modelValue": (payload) => unref(activateModel)(payload)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TabsList, {
              class: "relative shrink-0 hstack w-full text-sm h-9 border-b px-4",
              md: "text-base h-10"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TabsIndicator, { class: "absolute left-0 bottom-0 h-0.5 bg-primary rounded-full w-[--radix-tabs-indicator-size] translate-x-[--radix-tabs-indicator-position] transition-[width,transform] duration-300" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TabsTrigger, {
                    value: "markdown",
                    p: "x-2",
                    disabled: unref(loading)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Markdown`);
                      } else {
                        return [
                          createTextVNode("Markdown")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TabsTrigger, {
                    value: "css",
                    p: "x-4",
                    disabled: unref(loading)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`CSS`);
                      } else {
                        return [
                          createTextVNode("CSS")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TabsIndicator, { class: "absolute left-0 bottom-0 h-0.5 bg-primary rounded-full w-[--radix-tabs-indicator-size] translate-x-[--radix-tabs-indicator-position] transition-[width,transform] duration-300" }),
                    createVNode(_component_TabsTrigger, {
                      value: "markdown",
                      p: "x-2",
                      disabled: unref(loading)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Markdown")
                      ]),
                      _: 1
                    }, 8, ["disabled"]),
                    createVNode(_component_TabsTrigger, {
                      value: "css",
                      p: "x-4",
                      disabled: unref(loading)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("CSS")
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div flex-1${_scopeId}></div>`);
          } else {
            return [
              createVNode(_component_TabsList, {
                class: "relative shrink-0 hstack w-full text-sm h-9 border-b px-4",
                md: "text-base h-10"
              }, {
                default: withCtx(() => [
                  createVNode(_component_TabsIndicator, { class: "absolute left-0 bottom-0 h-0.5 bg-primary rounded-full w-[--radix-tabs-indicator-size] translate-x-[--radix-tabs-indicator-position] transition-[width,transform] duration-300" }),
                  createVNode(_component_TabsTrigger, {
                    value: "markdown",
                    p: "x-2",
                    disabled: unref(loading)
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Markdown")
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  createVNode(_component_TabsTrigger, {
                    value: "css",
                    p: "x-4",
                    disabled: unref(loading)
                  }, {
                    default: withCtx(() => [
                      createTextVNode("CSS")
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                _: 1
              }),
              createVNode("div", {
                ref_key: "editor",
                ref: editor,
                "flex-1": ""
              }, null, 512)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/editor/Code.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
var src_default = defineComponent({
  name: "Zoom",
  props: {
    scale: {
      type: Number,
      required: true
    }
  },
  setup(props, { slots }) {
    const container = ref();
    const zoom = ref();
    const sizeC = useElementSize(container);
    const sizeZ = useElementSize(zoom);
    const left = computed(
      () => Math.max(0, (sizeC.width.value - props.scale * sizeZ.width.value) / 2)
    );
    return () => h(
      "div",
      {
        class: "vue-zoom-container",
        ref: container,
        style: {
          height: "100%"
        }
      },
      [
        h(
          "div",
          {
            class: "vue-zoom",
            ref: zoom,
            style: {
              width: "fit-content",
              transformOrigin: "top left",
              transform: `scale(${props.scale})`,
              marginLeft: `${left.value}px`
            }
          },
          [slots.default()]
        )
      ]
    );
  }
});
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "Preview",
  __ssrInlineRender: true,
  setup(__props) {
    const scale = ref(1);
    const zoom = ref();
    const { width, height } = useElementSize(zoom);
    const { styles } = useStyleStore();
    const { data } = useDataStore();
    const { PAPER } = useConstant();
    const fitWidth = () => {
      scale.value = width.value / PAPER.sizeToPx(styles.paper, "w");
    };
    watch(width, fitWidth);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedResumeRender = _sfc_main$1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "pane-container overflow-scroll hide-scrollbar bg-secondary",
        border: "4 secondary"
      }, _attrs))} data-v-43c7015f>`);
      _push(ssrRenderComponent(unref(src_default), {
        ref_key: "zoom",
        ref: zoom,
        scale: unref(scale)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SharedResumeRender, {
              id: "preview",
              markdown: unref(data).markdown,
              css: unref(data).css,
              styles: unref(styles)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SharedResumeRender, {
                id: "preview",
                markdown: unref(data).markdown,
                css: unref(data).css,
                styles: unref(styles)
              }, null, 8, ["markdown", "css", "styles"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div id="zoom-bar" class="hstack fixed bottom-4 ml-2 shadow-c rounded-full overflow-hidden text-primary-foreground bg-blue-500" lg="bottom-auto top-15 opacity-0 hover:opacity-100 focus-within:opacity-100" data-v-43c7015f><button aria-label="Zoom in" data-v-43c7015f><span i-lucide:zoom-in data-v-43c7015f></span></button><button aria-label="Zoom out" data-v-43c7015f><span i-lucide:zoom-out data-v-43c7015f></span></button><button aria-label="Fit width" data-v-43c7015f><span i-fluent:arrow-autofit-width-20-filled data-v-43c7015f></span></button><button aria-label="Fit height" data-v-43c7015f><span i-fluent:arrow-autofit-height-20-filled data-v-43c7015f></span></button></div></div>`);
    };
  }
});
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/editor/Preview.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__scopeId", "data-v-43c7015f"]]);
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "Separator",
  __ssrInlineRender: true,
  props: {
    orientation: {},
    decorative: { type: Boolean },
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
      _push(ssrRenderComponent(unref(Separator), mergeProps(delegatedProps.value, {
        class: unref(cn)(
          "shrink-0 bg-border",
          props.orientation === "vertical" ? "w-px h-full" : "h-px w-full",
          props.class
        )
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/separator/Separator.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "Tooltip",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    delayDuration: {},
    disableHoverableContent: { type: Boolean },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipRoot), mergeProps(unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tooltip/Tooltip.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "TooltipContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: {},
    sideOffset: { default: 4 },
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(TooltipContent), mergeProps({ ...unref(forwarded), ..._ctx.$attrs }, {
              class: unref(cn)(
                "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                props.class
              )
            }), {
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
          } else {
            return [
              createVNode(unref(TooltipContent), mergeProps({ ...unref(forwarded), ..._ctx.$attrs }, {
                class: unref(cn)(
                  "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tooltip/TooltipContent.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "TooltipTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipTrigger), mergeProps(props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tooltip/TooltipTrigger.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "TooltipProvider",
  __ssrInlineRender: true,
  props: {
    delayDuration: {},
    skipDelayDuration: {},
    disableHoverableContent: { type: Boolean },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipProvider), mergeProps(props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tooltip/TooltipProvider.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "Box",
  __ssrInlineRender: true,
  props: {
    text: {},
    icon: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("px-4 py-6 text-sm", props.class)
      }, _attrs))}><div hstack gap-x-2 mb-4 text-base>`);
      if (_ctx.icon) {
        _push(`<span class="${ssrRenderClass(_ctx.icon)}"></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(_ctx.text)}</div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/editor/toolbar/Box.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "Save",
  __ssrInlineRender: true,
  setup(__props) {
    const { data } = useDataStore();
    const { styles } = useStyleStore();
    const save = async () => {
      if (!data.resumeId)
        return;
      await storageService.updateResume({
        id: data.resumeId,
        name: data.resumeName,
        markdown: data.markdown,
        css: data.css,
        styles: toRaw(styles)
      });
    };
    useShortcuts("ctrl+s", save);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = _sfc_main$g$1;
      _push(ssrRenderComponent(_component_UiButton, mergeProps({
        class: "gap-x-1.5 w-full h-8 justify-start",
        variant: "ghost",
        size: "sm",
        onClick: save
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span i-ic:baseline-save text-base${_scopeId}></span> ${ssrInterpolate(_ctx.$t("toolbar.file.save"))} <span class="flex-1 tracking-widest" text="xs right muted-foreground"${_scopeId}>\u2318 S</span>`);
          } else {
            return [
              createVNode("span", {
                "i-ic:baseline-save": "",
                "text-base": ""
              }),
              createTextVNode(" " + toDisplayString(_ctx.$t("toolbar.file.save")) + " ", 1),
              createVNode("span", {
                class: "flex-1 tracking-widest",
                text: "xs right muted-foreground"
              }, "\u2318 S")
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/editor/toolbar/file/Save.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "Rename",
  __ssrInlineRender: true,
  setup(__props) {
    const { data } = useDataStore();
    const rename = async (text) => {
      if (!text || !data.resumeId)
        return;
      data.resumeName = text;
      await storageService.updateResume(
        {
          id: data.resumeId,
          name: text
        },
        false
      );
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedUiEditable = _sfc_main$2$1;
      _push(`<!--[--><div class="hstack gap-x-1.5 px-3 w-full h-8"><span i-material-symbols:edit-square-outline-rounded text-base></span> ${ssrInterpolate(_ctx.$t("toolbar.file.rename"))} <span class="flex-1 tracking-widest" text="xs right muted-foreground">\u21B5</span></div>`);
      _push(ssrRenderComponent(_component_SharedUiEditable, {
        class: "text-sm ml-8.5 mt-1",
        "default-value": unref(data).resumeName,
        "submit-mode": "enter",
        "auto-resize": "",
        onSubmit: (text) => rename(text)
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/editor/toolbar/file/Rename.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "Alert",
  __ssrInlineRender: true,
  props: {
    class: {},
    variant: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)(unref(alertVariants)({ variant: _ctx.variant }), props.class),
        role: "alert"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/alert/Alert.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "AlertTitle",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h5${ssrRenderAttrs(mergeProps({
        class: unref(cn)("mb-1 font-bold leading-none tracking-tight", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</h5>`);
    };
  }
});
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/alert/AlertTitle.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "AlertDescription",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("text-sm [&_p]:leading-relaxed", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/alert/AlertDescription.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const alertVariants = cva(
  "relative w-full rounded-md border p-3 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-accent/30 text-foreground",
        destructive: "border-destructive/60 bg-destructive/5 [&>h5]:text-destructive [&>svg]:text-destructive",
        success: "border-success/60 bg-success/5 [&>h5]:text-success [&>svg]:text-success",
        info: "border-info/60 bg-info/5 [&>h5]:text-info [&>svg]:text-info"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "IssueLink",
  __ssrInlineRender: true,
  props: {
    issue: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: unref(cn)("hover:underline", props.class),
        href: `https://github.com/Renovamen/oh-my-cv/issues/${_ctx.issue}`,
        target: "_blank",
        rel: "nofollow noopener"
      }, _attrs))}>#${ssrInterpolate(_ctx.issue)}</a>`);
    };
  }
});
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/IssueLink.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "Export",
  __ssrInlineRender: true,
  setup(__props) {
    const { data } = useDataStore();
    const saveName = computed(() => data.resumeName.trim().replace(/\s+/g, "_"));
    const exportPDF = () => {
      const title = (void 0).title;
      (void 0).title = saveName.value;
      (void 0).print();
      (void 0).title = title;
    };
    const exportMd = () => {
      downloadFile(`${saveName.value}.md`, data.markdown);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiTooltipProvider = _sfc_main$w;
      const _component_UiTooltip = _sfc_main$z;
      const _component_UiTooltipTrigger = _sfc_main$x;
      const _component_UiButton = _sfc_main$g$1;
      const _component_UiTooltipContent = _sfc_main$y;
      const _component_UiAlert = _sfc_main$s;
      const _component_UiAlertTitle = _sfc_main$r;
      const _component_SharedIssueLink = _sfc_main$p;
      const _component_UiAlertDescription = _sfc_main$q;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UiTooltipProvider, { "delay-duration": 0 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiTooltip, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTooltipTrigger, { "as-child": "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiButton, {
                          class: "gap-x-1.5 w-full h-8 justify-start",
                          variant: "ghost",
                          size: "sm",
                          onClick: exportPDF
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span i-mdi:file-pdf text-base${_scopeId4}></span> ${ssrInterpolate(_ctx.$t("toolbar.file.export_pdf.title"))}`);
                            } else {
                              return [
                                createVNode("span", {
                                  "i-mdi:file-pdf": "",
                                  "text-base": ""
                                }),
                                createTextVNode(" " + toDisplayString(_ctx.$t("toolbar.file.export_pdf.title")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiButton, {
                            class: "gap-x-1.5 w-full h-8 justify-start",
                            variant: "ghost",
                            size: "sm",
                            onClick: exportPDF
                          }, {
                            default: withCtx(() => [
                              createVNode("span", {
                                "i-mdi:file-pdf": "",
                                "text-base": ""
                              }),
                              createTextVNode(" " + toDisplayString(_ctx.$t("toolbar.file.export_pdf.title")), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTooltipContent, {
                    side: "bottom",
                    class: "w-54 p-0 rounded border-destructive/60"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiAlert, {
                          variant: "destructive",
                          class: "border-none rounded-none"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiAlertTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(_ctx.$t("toolbar.file.export_pdf.alert.title"))} <span class="text-foreground font-normal text-xs"${_scopeId5}> (`);
                                    _push6(ssrRenderComponent(_component_SharedIssueLink, { issue: "13" }, null, _parent6, _scopeId5));
                                    _push6(`, `);
                                    _push6(ssrRenderComponent(_component_SharedIssueLink, { issue: "16" }, null, _parent6, _scopeId5));
                                    _push6(`) </span>`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(_ctx.$t("toolbar.file.export_pdf.alert.title")) + " ", 1),
                                      createVNode("span", { class: "text-foreground font-normal text-xs" }, [
                                        createTextVNode(" ("),
                                        createVNode(_component_SharedIssueLink, { issue: "13" }),
                                        createTextVNode(", "),
                                        createVNode(_component_SharedIssueLink, { issue: "16" }),
                                        createTextVNode(") ")
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiAlertDescription, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiAlertTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("toolbar.file.export_pdf.alert.title")) + " ", 1),
                                    createVNode("span", { class: "text-foreground font-normal text-xs" }, [
                                      createTextVNode(" ("),
                                      createVNode(_component_SharedIssueLink, { issue: "13" }),
                                      createTextVNode(", "),
                                      createVNode(_component_SharedIssueLink, { issue: "16" }),
                                      createTextVNode(") ")
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiAlertDescription, {
                                  innerHTML: _ctx.$t("toolbar.file.export_pdf.alert.content")
                                }, null, 8, ["innerHTML"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiAlert, {
                            variant: "destructive",
                            class: "border-none rounded-none"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiAlertTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("toolbar.file.export_pdf.alert.title")) + " ", 1),
                                  createVNode("span", { class: "text-foreground font-normal text-xs" }, [
                                    createTextVNode(" ("),
                                    createVNode(_component_SharedIssueLink, { issue: "13" }),
                                    createTextVNode(", "),
                                    createVNode(_component_SharedIssueLink, { issue: "16" }),
                                    createTextVNode(") ")
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiAlertDescription, {
                                innerHTML: _ctx.$t("toolbar.file.export_pdf.alert.content")
                              }, null, 8, ["innerHTML"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTooltipTrigger, { "as-child": "" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiButton, {
                          class: "gap-x-1.5 w-full h-8 justify-start",
                          variant: "ghost",
                          size: "sm",
                          onClick: exportPDF
                        }, {
                          default: withCtx(() => [
                            createVNode("span", {
                              "i-mdi:file-pdf": "",
                              "text-base": ""
                            }),
                            createTextVNode(" " + toDisplayString(_ctx.$t("toolbar.file.export_pdf.title")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTooltipContent, {
                      side: "bottom",
                      class: "w-54 p-0 rounded border-destructive/60"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UiAlert, {
                          variant: "destructive",
                          class: "border-none rounded-none"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiAlertTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("toolbar.file.export_pdf.alert.title")) + " ", 1),
                                createVNode("span", { class: "text-foreground font-normal text-xs" }, [
                                  createTextVNode(" ("),
                                  createVNode(_component_SharedIssueLink, { issue: "13" }),
                                  createTextVNode(", "),
                                  createVNode(_component_SharedIssueLink, { issue: "16" }),
                                  createTextVNode(") ")
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiAlertDescription, {
                              innerHTML: _ctx.$t("toolbar.file.export_pdf.alert.content")
                            }, null, 8, ["innerHTML"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiTooltip, null, {
                default: withCtx(() => [
                  createVNode(_component_UiTooltipTrigger, { "as-child": "" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiButton, {
                        class: "gap-x-1.5 w-full h-8 justify-start",
                        variant: "ghost",
                        size: "sm",
                        onClick: exportPDF
                      }, {
                        default: withCtx(() => [
                          createVNode("span", {
                            "i-mdi:file-pdf": "",
                            "text-base": ""
                          }),
                          createTextVNode(" " + toDisplayString(_ctx.$t("toolbar.file.export_pdf.title")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTooltipContent, {
                    side: "bottom",
                    class: "w-54 p-0 rounded border-destructive/60"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UiAlert, {
                        variant: "destructive",
                        class: "border-none rounded-none"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiAlertTitle, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("toolbar.file.export_pdf.alert.title")) + " ", 1),
                              createVNode("span", { class: "text-foreground font-normal text-xs" }, [
                                createTextVNode(" ("),
                                createVNode(_component_SharedIssueLink, { issue: "13" }),
                                createTextVNode(", "),
                                createVNode(_component_SharedIssueLink, { issue: "16" }),
                                createTextVNode(") ")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiAlertDescription, {
                            innerHTML: _ctx.$t("toolbar.file.export_pdf.alert.content")
                          }, null, 8, ["innerHTML"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiButton, {
        class: "gap-x-1.5 w-full h-8 justify-start",
        variant: "ghost",
        size: "sm",
        onClick: exportMd
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span i-ri:markdown-fill text-base${_scopeId}></span> ${ssrInterpolate(_ctx.$t("toolbar.file.export_md"))}`);
          } else {
            return [
              createVNode("span", {
                "i-ri:markdown-fill": "",
                "text-base": ""
              }),
              createTextVNode(" " + toDisplayString(_ctx.$t("toolbar.file.export_md")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/editor/toolbar/file/Export.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "Dialog",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogRoot), mergeProps(unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/Dialog.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "DialogClose",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogClose), mergeProps(props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/DialogClose.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "DialogTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogTrigger), mergeProps(props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/DialogTrigger.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "DialogHeader",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("flex flex-col gap-y-1.5 text-center sm:text-left", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/DialogHeader.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "DialogTitle",
  __ssrInlineRender: true,
  props: {
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
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogTitle), mergeProps(unref(forwardedProps), {
        class: unref(cn)("text-lg font-semibold leading-none tracking-tight", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/DialogTitle.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "DialogDescription",
  __ssrInlineRender: true,
  props: {
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
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogDescription), mergeProps(unref(forwardedProps), {
        class: unref(cn)("text-sm text-muted-foreground", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/DialogDescription.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "DialogContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DialogOverlay), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(DialogContent), mergeProps(unref(forwarded), {
              class: unref(cn)(
                "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                props.class
              )
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(ssrRenderComponent(unref(DialogClose), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent4, _scopeId3));
                        _push4(`<span class="sr-only"${_scopeId3}>Close</span>`);
                      } else {
                        return [
                          createVNode(unref(X), { class: "w-4 h-4" }),
                          createVNode("span", { class: "sr-only" }, "Close")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default"),
                    createVNode(unref(DialogClose), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" }, {
                      default: withCtx(() => [
                        createVNode(unref(X), { class: "w-4 h-4" }),
                        createVNode("span", { class: "sr-only" }, "Close")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(DialogOverlay), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
              createVNode(unref(DialogContent), mergeProps(unref(forwarded), {
                class: unref(cn)(
                  "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default"),
                  createVNode(unref(DialogClose), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" }, {
                    default: withCtx(() => [
                      createVNode(unref(X), { class: "w-4 h-4" }),
                      createVNode("span", { class: "sr-only" }, "Close")
                    ]),
                    _: 1
                  })
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/DialogContent.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "DialogScrollContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DialogOverlay), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(DialogContent), mergeProps({
                    class: unref(cn)(
                      "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                      props.class
                    )
                  }, unref(forwarded), {
                    onPointerDownOutside: (event) => {
                      const originalEvent = event.detail.originalEvent;
                      const target = originalEvent.target;
                      if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) {
                        event.preventDefault();
                      }
                    }
                  }), {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                        _push4(ssrRenderComponent(unref(DialogClose), { class: "absolute top-3 right-3 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent5, _scopeId4));
                              _push5(`<span class="sr-only"${_scopeId4}>Close</span>`);
                            } else {
                              return [
                                createVNode(unref(X), { class: "w-4 h-4" }),
                                createVNode("span", { class: "sr-only" }, "Close")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "default"),
                          createVNode(unref(DialogClose), { class: "absolute top-3 right-3 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                            default: withCtx(() => [
                              createVNode(unref(X), { class: "w-4 h-4" }),
                              createVNode("span", { class: "sr-only" }, "Close")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(DialogContent), mergeProps({
                      class: unref(cn)(
                        "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                        props.class
                      )
                    }, unref(forwarded), {
                      onPointerDownOutside: (event) => {
                        const originalEvent = event.detail.originalEvent;
                        const target = originalEvent.target;
                        if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) {
                          event.preventDefault();
                        }
                      }
                    }), {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default"),
                        createVNode(unref(DialogClose), { class: "absolute top-3 right-3 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                          default: withCtx(() => [
                            createVNode(unref(X), { class: "w-4 h-4" }),
                            createVNode("span", { class: "sr-only" }, "Close")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 3
                    }, 16, ["class", "onPointerDownOutside"])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(DialogOverlay), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
                default: withCtx(() => [
                  createVNode(unref(DialogContent), mergeProps({
                    class: unref(cn)(
                      "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                      props.class
                    )
                  }, unref(forwarded), {
                    onPointerDownOutside: (event) => {
                      const originalEvent = event.detail.originalEvent;
                      const target = originalEvent.target;
                      if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) {
                        event.preventDefault();
                      }
                    }
                  }), {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default"),
                      createVNode(unref(DialogClose), { class: "absolute top-3 right-3 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                        default: withCtx(() => [
                          createVNode(unref(X), { class: "w-4 h-4" }),
                          createVNode("span", { class: "sr-only" }, "Close")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 3
                  }, 16, ["class", "onPointerDownOutside"])
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/DialogScrollContent.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "DialogFooter",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/DialogFooter.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const modelValue = useVModel(props, "modelValue", emits, {
      passive: true,
      defaultValue: props.defaultValue
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        class: unref(cn)(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          props.class
        )
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(modelValue)))))}>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/input/Input.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "Import",
  __ssrInlineRender: true,
  setup(__props) {
    const { setAndSyncToMonaco } = useDataStore();
    const localFile = ref(null);
    const [state, send] = useMachine(
      fileUpload.machine({
        id: "import-dialog",
        accept: ".md",
        onFileAccept: ({ files }) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            const content = reader.result;
            setAndSyncToMonaco("markdown", content);
          };
          reader.readAsText(files[0]);
          localFile.value = files[0].name;
          pastedURL.value = "";
        }
      })
    );
    const api2 = computed(() => fileUpload.connect(state.value, send, normalizeProps));
    const pastedURL = ref("");
    const uploadFileFromURL = async () => {
      if (pastedURL.value.trim() === "")
        return;
      try {
        const content = await fetchFile(pastedURL.value);
        setAndSyncToMonaco("markdown", content);
        localFile.value = null;
        pastedURL.value = "";
      } catch (error) {
        console.error(error);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$n;
      const _component_UiDialogTrigger = _sfc_main$l;
      const _component_UiButton = _sfc_main$g$1;
      const _component_UiDialogContent = _sfc_main$h;
      const _component_UiDialogHeader = _sfc_main$k;
      const _component_UiDialogTitle = _sfc_main$j;
      const _component_UiSeparator = _sfc_main$A;
      const _component_UiInput = _sfc_main$e;
      _push(ssrRenderComponent(_component_UiDialog, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, {
                    class: "gap-x-1.5 w-full h-8 justify-start",
                    variant: "ghost",
                    size: "sm"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span i-mdi:upload text-base${_scopeId3}></span> ${ssrInterpolate(_ctx.$t("toolbar.file.import.trigger"))}`);
                      } else {
                        return [
                          createVNode("span", {
                            "i-mdi:upload": "",
                            "text-base": ""
                          }),
                          createTextVNode(" " + toDisplayString(_ctx.$t("toolbar.file.import.trigger")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, {
                      class: "gap-x-1.5 w-full h-8 justify-start",
                      variant: "ghost",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", {
                          "i-mdi:upload": "",
                          "text-base": ""
                        }),
                        createTextVNode(" " + toDisplayString(_ctx.$t("toolbar.file.import.trigger")), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "sm:max-w-110" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("toolbar.file.import.dialog.header"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("toolbar.file.import.dialog.header")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("toolbar.file.import.dialog.header")), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="pt-2 space-y-6 text-sm"${_scopeId2}><div${ssrRenderAttrs(unref(api2).getRootProps())}${_scopeId2}><div${ssrRenderAttrs(mergeProps(unref(api2).getDropzoneProps(), {
                    class: "py-14 cursor-pointer hover:bg-accent hover:text-accent-foreground",
                    border: "~ dashed rounded"
                  }))}${_scopeId2}><input${ssrRenderAttrs(unref(api2).getHiddenInputProps())}${_scopeId2}><div text-center${_scopeId2}>${ssrInterpolate(_ctx.$t("toolbar.file.import.dialog.from_local"))}</div></div>`);
                  if (unref(localFile)) {
                    _push3(`<div class="bg-muted text-muted-foreground rounded p-2 mt-2"${_scopeId2}>${ssrInterpolate(unref(localFile))}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><div hstack${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiSeparator, {
                    "flex-1": "",
                    bg: "primary/40"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div px-5 text-primary${_scopeId2}>OR</div>`);
                  _push3(ssrRenderComponent(_component_UiSeparator, {
                    "flex-1": "",
                    bg: "primary/40"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex gap-x-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(pastedURL),
                    "onUpdate:modelValue": ($event) => isRef(pastedURL) ? pastedURL.value = $event : null,
                    placeholder: _ctx.$t("toolbar.file.import.dialog.from_url"),
                    onKeyup: uploadFileFromURL
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiButton, {
                    type: "submit",
                    size: "icon",
                    class: "shrink-0",
                    onClick: uploadFileFromURL,
                    disabled: unref(pastedURL) === ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="sr-only"${_scopeId3}>Submit</span><span i-line-md:confirm size-4${_scopeId3}></span>`);
                      } else {
                        return [
                          createVNode("span", { class: "sr-only" }, "Submit"),
                          createVNode("span", {
                            "i-line-md:confirm": "",
                            "size-4": ""
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("toolbar.file.import.dialog.header")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "pt-2 space-y-6 text-sm" }, [
                      createVNode("div", unref(api2).getRootProps(), [
                        createVNode("div", mergeProps(unref(api2).getDropzoneProps(), {
                          class: "py-14 cursor-pointer hover:bg-accent hover:text-accent-foreground",
                          border: "~ dashed rounded"
                        }), [
                          createVNode("input", unref(api2).getHiddenInputProps(), null, 16),
                          createVNode("div", { "text-center": "" }, toDisplayString(_ctx.$t("toolbar.file.import.dialog.from_local")), 1)
                        ], 16),
                        unref(localFile) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "bg-muted text-muted-foreground rounded p-2 mt-2"
                        }, toDisplayString(unref(localFile)), 1)) : createCommentVNode("", true)
                      ], 16),
                      createVNode("div", { hstack: "" }, [
                        createVNode(_component_UiSeparator, {
                          "flex-1": "",
                          bg: "primary/40"
                        }),
                        createVNode("div", {
                          "px-5": "",
                          "text-primary": ""
                        }, "OR"),
                        createVNode(_component_UiSeparator, {
                          "flex-1": "",
                          bg: "primary/40"
                        })
                      ]),
                      createVNode("div", { class: "flex gap-x-2" }, [
                        createVNode(_component_UiInput, {
                          modelValue: unref(pastedURL),
                          "onUpdate:modelValue": ($event) => isRef(pastedURL) ? pastedURL.value = $event : null,
                          placeholder: _ctx.$t("toolbar.file.import.dialog.from_url"),
                          onKeyup: withKeys(uploadFileFromURL, ["enter"])
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                        createVNode(_component_UiButton, {
                          type: "submit",
                          size: "icon",
                          class: "shrink-0",
                          onClick: uploadFileFromURL,
                          disabled: unref(pastedURL) === ""
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "sr-only" }, "Submit"),
                            createVNode("span", {
                              "i-line-md:confirm": "",
                              "size-4": ""
                            })
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, {
                    class: "gap-x-1.5 w-full h-8 justify-start",
                    variant: "ghost",
                    size: "sm"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", {
                        "i-mdi:upload": "",
                        "text-base": ""
                      }),
                      createTextVNode(" " + toDisplayString(_ctx.$t("toolbar.file.import.trigger")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiDialogContent, { class: "sm:max-w-110" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("toolbar.file.import.dialog.header")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "pt-2 space-y-6 text-sm" }, [
                    createVNode("div", unref(api2).getRootProps(), [
                      createVNode("div", mergeProps(unref(api2).getDropzoneProps(), {
                        class: "py-14 cursor-pointer hover:bg-accent hover:text-accent-foreground",
                        border: "~ dashed rounded"
                      }), [
                        createVNode("input", unref(api2).getHiddenInputProps(), null, 16),
                        createVNode("div", { "text-center": "" }, toDisplayString(_ctx.$t("toolbar.file.import.dialog.from_local")), 1)
                      ], 16),
                      unref(localFile) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "bg-muted text-muted-foreground rounded p-2 mt-2"
                      }, toDisplayString(unref(localFile)), 1)) : createCommentVNode("", true)
                    ], 16),
                    createVNode("div", { hstack: "" }, [
                      createVNode(_component_UiSeparator, {
                        "flex-1": "",
                        bg: "primary/40"
                      }),
                      createVNode("div", {
                        "px-5": "",
                        "text-primary": ""
                      }, "OR"),
                      createVNode(_component_UiSeparator, {
                        "flex-1": "",
                        bg: "primary/40"
                      })
                    ]),
                    createVNode("div", { class: "flex gap-x-2" }, [
                      createVNode(_component_UiInput, {
                        modelValue: unref(pastedURL),
                        "onUpdate:modelValue": ($event) => isRef(pastedURL) ? pastedURL.value = $event : null,
                        placeholder: _ctx.$t("toolbar.file.import.dialog.from_url"),
                        onKeyup: withKeys(uploadFileFromURL, ["enter"])
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                      createVNode(_component_UiButton, {
                        type: "submit",
                        size: "icon",
                        class: "shrink-0",
                        onClick: uploadFileFromURL,
                        disabled: unref(pastedURL) === ""
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "sr-only" }, "Submit"),
                          createVNode("span", {
                            "i-line-md:confirm": "",
                            "size-4": ""
                          })
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/editor/toolbar/file/Import.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_EditorToolbarBox = _sfc_main$v;
  const _component_EditorToolbarFileSave = _sfc_main$u;
  const _component_EditorToolbarFileRename = _sfc_main$t;
  const _component_EditorToolbarFileExport = _sfc_main$o;
  const _component_EditorToolbarFileImport = _sfc_main$d;
  _push(ssrRenderComponent(_component_EditorToolbarBox, mergeProps({
    text: _ctx.$t("toolbar.file.title"),
    icon: "i-carbon:import-export"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_EditorToolbarFileSave, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_EditorToolbarFileRename, null, null, _parent2, _scopeId));
        _push2(`<hr border-dashed my-2${_scopeId}>`);
        _push2(ssrRenderComponent(_component_EditorToolbarFileExport, null, null, _parent2, _scopeId));
        _push2(`<hr border-dashed my-2${_scopeId}>`);
        _push2(ssrRenderComponent(_component_EditorToolbarFileImport, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_EditorToolbarFileSave),
          createVNode(_component_EditorToolbarFileRename),
          createVNode("hr", {
            "border-dashed": "",
            "my-2": ""
          }),
          createVNode(_component_EditorToolbarFileExport),
          createVNode("hr", {
            "border-dashed": "",
            "my-2": ""
          }),
          createVNode(_component_EditorToolbarFileImport)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/editor/toolbar/file/index.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const EditorToolbarFile = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Combobox",
  __ssrInlineRender: true,
  props: {
    id: {},
    items: {},
    defaultValue: {}
  },
  setup(__props) {
    const props = __props;
    const options = ref(props.items);
    const collectionRef = computed(
      () => combobox.collection({
        items: options.value,
        itemToValue: (item) => item.value,
        itemToString: (item) => item.label
      })
    );
    const [state, send] = useMachine(
      combobox.machine({
        id: props.id,
        collection: collectionRef.value,
        value: [props.defaultValue],
        openOnClick: true,
        closeOnSelect: false,
        onOpenChange: () => {
          options.value = props.items;
        },
        onInputValueChange: ({ inputValue }) => {
          const filtered = props.items.filter(
            (item) => item.label.toLowerCase().includes(inputValue.toLowerCase())
          );
          options.value = filtered.length > 0 ? filtered : props.items;
        },
        onValueChange: ({ value }) => {
          const item = props.items.find((i) => i.value === value[0]);
          item == null ? void 0 : item.onSelect();
        }
      }),
      {
        context: computed(() => ({
          collection: collectionRef.value
        }))
      }
    );
    const api2 = computed(() => combobox.connect(state.value, send, normalizeProps));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps(unref(api2).getRootProps(), { relative: "" }, _attrs))}><div${ssrRenderAttrs(mergeProps(unref(api2).getControlProps(), { class: "group hstack h-9 gap-x-2 px-2 py-1 rounded-md border-1.5 data-[focus]:border-primary" }))}><input${ssrRenderAttrs(mergeProps(unref(api2).getInputProps(), { class: "w-full outline-none bg-transparent capitalize" }))}><button${ssrRenderAttrs(mergeProps(unref(api2).getTriggerProps(), {
        "size-5": "",
        "flex-center": ""
      }))}><span class="text-lg i-ic:sharp-arrow-drop-down group-data-[focus]:i-ic:sharp-arrow-drop-up"></span></button></div><div${ssrRenderAttrs(unref(api2).getPositionerProps())}>`);
      if (unref(options).length > 0) {
        _push(`<ul${ssrRenderAttrs(mergeProps(unref(api2).getContentProps(), { class: "z-20 max-h-60 -mt-1 p-1 bg-background border rounded-md shadow-c overflow-y-scroll" }))}><!--[-->`);
        ssrRenderList(unref(options), (item) => {
          _push(`<li${ssrRenderAttrs(mergeProps({
            key: item.value,
            ref_for: true
          }, unref(api2).getItemProps({ item }), { class: "px-2 py-1.5 rounded-sm truncate cursor-pointer data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground" }))}>${ssrInterpolate(item.label)}</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/ui/Combobox.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Paper",
  __ssrInlineRender: true,
  setup(__props) {
    const { styles, setStyle } = useStyleStore();
    const { PAPER } = useConstant();
    const items = Object.keys(PAPER.SIZES).map((paper) => ({
      label: paper,
      value: paper,
      onSelect: () => setStyle("paper", paper)
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EditorToolbarBox = _sfc_main$v;
      const _component_SharedUiCombobox = _sfc_main$b;
      _push(ssrRenderComponent(_component_EditorToolbarBox, mergeProps({
        text: _ctx.$t("toolbar.paper_size"),
        icon: "i-majesticons:paper-fold-line"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SharedUiCombobox, {
              id: "paper-size",
              class: "capitalize",
              items: unref(items),
              "default-value": unref(styles).paper
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SharedUiCombobox, {
                id: "paper-size",
                class: "capitalize",
                items: unref(items),
                "default-value": unref(styles).paper
              }, null, 8, ["items", "default-value"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/editor/toolbar/Paper.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "ThemeColor",
  __ssrInlineRender: true,
  setup(__props) {
    const { styles, setStyle } = useStyleStore();
    const { COLOR } = useConstant();
    const [state, send] = useMachine(
      colorPicker.machine({
        id: "theme-color",
        value: colorPicker.parse(styles.themeColor),
        positioning: {
          gutter: 14
        },
        onValueChange: (details) => setStyle("themeColor", toHex(details.value))
      })
    );
    const api2 = computed(() => colorPicker.connect(state.value, send, normalizeProps));
    const toHex = (value) => "#" + value.toHexInt().toString(16).toUpperCase().padStart(6, "0");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EditorToolbarBox = _sfc_main$v;
      const _component_UiButton = _sfc_main$g$1;
      _push(ssrRenderComponent(_component_EditorToolbarBox, mergeProps({
        text: _ctx.$t("toolbar.theme_color"),
        icon: "i-material-symbols:palette-outline"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between mb-4"${_scopeId}><!--[-->`);
            ssrRenderList(unref(COLOR).PRESET, (color, i) => {
              _push2(`<button class="size-6 flex-center rounded text-white ring-when-focus" style="${ssrRenderStyle({ backgroundColor: color })}"${_scopeId}><span style="${ssrRenderStyle(toHex(unref(api2).value) === color.toUpperCase() ? null : { display: "none" })}" i-line-md:confirm${_scopeId}></span></button>`);
            });
            _push2(`<!--]--></div><div${ssrRenderAttrs(mergeProps(unref(api2).getRootProps(), {
              relative: "",
              "z-21": ""
            }))}${_scopeId}><div${ssrRenderAttrs(mergeProps(unref(api2).getControlProps(), {
              class: [
                "w-full hstack h-9 gap-x-2 px-2 py-1 rounded-md border-1.5 data-[focus]:border-primary",
                unref(api2).open && "border-primary"
              ]
            }))}${_scopeId}><button${ssrRenderAttrs(mergeProps(unref(api2).getTriggerProps(), { class: "size-4 rounded overflow-hidden ring-when-focus" }))}${_scopeId}><div${ssrRenderAttrs(mergeProps({ class: "size-full" }, unref(api2).getSwatchProps({ value: unref(api2).value })))}${_scopeId}></div></button><input${ssrRenderAttrs(mergeProps(unref(api2).getChannelInputProps({ channel: "hex" }), { class: "bg-transparent outline-none" }))}${_scopeId}></div><div${ssrRenderAttrs(mergeProps(unref(api2).getPositionerProps(), {
              "w-full": "",
              "ml-2": ""
            }))}${_scopeId}><div${ssrRenderAttrs(mergeProps(unref(api2).getContentProps(), {
              class: "bg-background overflow-hidden shadow-md",
              border: "~ rounded-md"
            }))}${_scopeId}><div${ssrRenderAttrs(unref(api2).getAreaProps())}${_scopeId}><div${ssrRenderAttrs(mergeProps(unref(api2).getAreaBackgroundProps(), { class: "w-full h-30" }))}${_scopeId}></div><div${ssrRenderAttrs(mergeProps(unref(api2).getAreaThumbProps(), { class: "size-4 rounded-full border-2 border-black ring-when-focus" }))}${_scopeId}><span absolute size-3 border="2 white rounded-full"${_scopeId}></span></div></div><div hstack my-3 px-3 gap-x-3${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UiButton, mergeProps(unref(api2).getEyeDropperTriggerProps(), {
              variant: "ghost",
              size: "icon",
              class: "size-7 rounded"
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span i-bx:bxs-eyedropper text-lg${_scopeId2}></span>`);
                } else {
                  return [
                    createVNode("span", {
                      "i-bx:bxs-eyedropper": "",
                      "text-lg": ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${ssrRenderAttrs(mergeProps(unref(api2).getChannelSliderProps({ channel: "hue" }), { "flex-1": "" }))}${_scopeId}><div${ssrRenderAttrs(mergeProps(unref(api2).getChannelSliderTrackProps({ channel: "hue" }), { class: "w-full h-2.5 rounded-full" }))}${_scopeId}></div><div${ssrRenderAttrs(mergeProps(unref(api2).getChannelSliderThumbProps({ channel: "hue" }), {
              class: "size-4.5 -mt-2 -ml-2 ring-when-focus",
              border: "2 black rounded-full"
            }))}${_scopeId}><span absolute size-3.5 border="2 white rounded-full"${_scopeId}></span></div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-between mb-4" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(COLOR).PRESET, (color, i) => {
                  return openBlock(), createBlock("button", {
                    key: `${i}-${color}`,
                    class: "size-6 flex-center rounded text-white ring-when-focus",
                    style: { backgroundColor: color },
                    onClick: ($event) => unref(api2).setValue(color)
                  }, [
                    withDirectives(createVNode("span", { "i-line-md:confirm": "" }, null, 512), [
                      [vShow, toHex(unref(api2).value) === color.toUpperCase()]
                    ])
                  ], 12, ["onClick"]);
                }), 128))
              ]),
              createVNode("div", mergeProps(unref(api2).getRootProps(), {
                relative: "",
                "z-21": ""
              }), [
                createVNode("div", mergeProps(unref(api2).getControlProps(), {
                  class: [
                    "w-full hstack h-9 gap-x-2 px-2 py-1 rounded-md border-1.5 data-[focus]:border-primary",
                    unref(api2).open && "border-primary"
                  ]
                }), [
                  createVNode("button", mergeProps(unref(api2).getTriggerProps(), { class: "size-4 rounded overflow-hidden ring-when-focus" }), [
                    createVNode("div", mergeProps({ class: "size-full" }, unref(api2).getSwatchProps({ value: unref(api2).value })), null, 16)
                  ], 16),
                  createVNode("input", mergeProps(unref(api2).getChannelInputProps({ channel: "hex" }), { class: "bg-transparent outline-none" }), null, 16)
                ], 16),
                createVNode("div", mergeProps(unref(api2).getPositionerProps(), {
                  "w-full": "",
                  "ml-2": ""
                }), [
                  createVNode("div", mergeProps(unref(api2).getContentProps(), {
                    class: "bg-background overflow-hidden shadow-md",
                    border: "~ rounded-md"
                  }), [
                    createVNode("div", unref(api2).getAreaProps(), [
                      createVNode("div", mergeProps(unref(api2).getAreaBackgroundProps(), { class: "w-full h-30" }), null, 16),
                      createVNode("div", mergeProps(unref(api2).getAreaThumbProps(), { class: "size-4 rounded-full border-2 border-black ring-when-focus" }), [
                        createVNode("span", {
                          absolute: "",
                          "size-3": "",
                          border: "2 white rounded-full"
                        })
                      ], 16)
                    ], 16),
                    createVNode("div", {
                      hstack: "",
                      "my-3": "",
                      "px-3": "",
                      "gap-x-3": ""
                    }, [
                      createVNode(_component_UiButton, mergeProps(unref(api2).getEyeDropperTriggerProps(), {
                        variant: "ghost",
                        size: "icon",
                        class: "size-7 rounded"
                      }), {
                        default: withCtx(() => [
                          createVNode("span", {
                            "i-bx:bxs-eyedropper": "",
                            "text-lg": ""
                          })
                        ]),
                        _: 1
                      }, 16),
                      createVNode("div", mergeProps(unref(api2).getChannelSliderProps({ channel: "hue" }), { "flex-1": "" }), [
                        createVNode("div", mergeProps(unref(api2).getChannelSliderTrackProps({ channel: "hue" }), { class: "w-full h-2.5 rounded-full" }), null, 16),
                        createVNode("div", mergeProps(unref(api2).getChannelSliderThumbProps({ channel: "hue" }), {
                          class: "size-4.5 -mt-2 -ml-2 ring-when-focus",
                          border: "2 black rounded-full"
                        }), [
                          createVNode("span", {
                            absolute: "",
                            "size-3.5": "",
                            border: "2 white rounded-full"
                          })
                        ], 16)
                      ], 16)
                    ])
                  ], 16)
                ], 16)
              ], 16)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/editor/toolbar/ThemeColor.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "FontFamily",
  __ssrInlineRender: true,
  setup(__props) {
    const { styles, setStyle } = useStyleStore();
    const { FONT } = useConstant();
    const localEn = FONT.LOCAL.EN.map((item) => {
      var _a;
      const family = ((_a = FONT.LOCAL.EN.find((font) => font.name === item.name)) == null ? void 0 : _a.fontFamily) || item.name;
      return {
        label: item.name,
        value: family,
        onSelect: () => setStyle("fontEN", { name: item.name, fontFamily: family })
      };
    });
    const localCjk = FONT.LOCAL.CJK.map((item) => {
      var _a;
      const family = ((_a = FONT.LOCAL.CJK.find((font) => font.name === item.name)) == null ? void 0 : _a.fontFamily) || item.name;
      return {
        label: item.name,
        value: family,
        onSelect: () => setStyle("fontCJK", { name: item.name, fontFamily: family })
      };
    });
    const loaded = ref(false);
    const gfEn = ref([]);
    const gfCjk = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EditorToolbarBox = _sfc_main$v;
      const _component_SharedUiCombobox = _sfc_main$b;
      const _component_UiSkeleton = _sfc_main$E;
      _push(ssrRenderComponent(_component_EditorToolbarBox, mergeProps({
        text: _ctx.$t("toolbar.font_family.title"),
        icon: "i-material-symbols:font-download-outline"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full hstack gap-x-2 mb-2"${_scopeId}>`);
            if (unref(loaded)) {
              _push2(ssrRenderComponent(_component_SharedUiCombobox, {
                id: "font-cjk",
                class: "flex-1",
                items: unref(localCjk).concat(unref(gfCjk)),
                "default-value": unref(styles).fontCJK.fontFamily || unref(styles).fontCJK.name
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_UiSkeleton, { class: "flex-1 h-9" }, null, _parent2, _scopeId));
            }
            _push2(`<span w-13${_scopeId}>${ssrInterpolate(_ctx.$t("toolbar.font_family.cjk"))}</span></div><div class="hstack gap-x-2 w-full"${_scopeId}>`);
            if (unref(loaded)) {
              _push2(ssrRenderComponent(_component_SharedUiCombobox, {
                id: "font-en",
                class: "flex-1",
                items: unref(localEn).concat(unref(gfEn)),
                "default-value": unref(styles).fontEN.fontFamily || unref(styles).fontEN.name
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_UiSkeleton, { class: "flex-1 h-9" }, null, _parent2, _scopeId));
            }
            _push2(`<span w-13${_scopeId}>${ssrInterpolate(_ctx.$t("toolbar.font_family.en"))}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full hstack gap-x-2 mb-2" }, [
                unref(loaded) ? (openBlock(), createBlock(_component_SharedUiCombobox, {
                  key: 0,
                  id: "font-cjk",
                  class: "flex-1",
                  items: unref(localCjk).concat(unref(gfCjk)),
                  "default-value": unref(styles).fontCJK.fontFamily || unref(styles).fontCJK.name
                }, null, 8, ["items", "default-value"])) : (openBlock(), createBlock(_component_UiSkeleton, {
                  key: 1,
                  class: "flex-1 h-9"
                })),
                createVNode("span", { "w-13": "" }, toDisplayString(_ctx.$t("toolbar.font_family.cjk")), 1)
              ]),
              createVNode("div", { class: "hstack gap-x-2 w-full" }, [
                unref(loaded) ? (openBlock(), createBlock(_component_SharedUiCombobox, {
                  key: 0,
                  id: "font-en",
                  class: "flex-1",
                  items: unref(localEn).concat(unref(gfEn)),
                  "default-value": unref(styles).fontEN.fontFamily || unref(styles).fontEN.name
                }, null, 8, ["items", "default-value"])) : (openBlock(), createBlock(_component_UiSkeleton, {
                  key: 1,
                  class: "flex-1 h-9"
                })),
                createVNode("span", { "w-13": "" }, toDisplayString(_ctx.$t("toolbar.font_family.en")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/editor/toolbar/FontFamily.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Slider",
  __ssrInlineRender: true,
  props: {
    name: {},
    defaultValue: {},
    modelValue: {},
    disabled: { type: Boolean },
    orientation: {},
    dir: {},
    inverted: { type: Boolean },
    min: {},
    max: {},
    step: {},
    minStepsBetweenThumbs: {},
    asChild: { type: Boolean },
    as: {},
    unit: {}
  },
  emits: ["update:modelValue", "valueCommit"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    const min = computed(() => props.min || 0);
    const max = computed(() => props.max || 100);
    const middle = computed(() => (min.value + max.value) / 2);
    const unit = computed(() => props.unit || "");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SliderRoot = SliderRoot;
      const _component_SliderTrack = SliderTrack;
      const _component_SliderRange = SliderRange;
      const _component_SliderThumb = SliderThumb;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_SliderRoot, mergeProps({ class: "relative flex w-full touch-none select-none items-center py-2" }, unref(forwarded)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SliderTrack, { class: "relative h-1 w-full grow overflow-hidden rounded-full bg-secondary" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SliderRange, { class: "absolute h-full bg-primary" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SliderRange, { class: "absolute h-full bg-primary" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.modelValue, (_2, key) => {
              _push2(ssrRenderComponent(_component_SliderThumb, {
                key,
                class: "group block size-4 rounded-full border-2.5 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              }, {
                default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                  var _a, _b;
                  if (_push3) {
                    _push3(`<span class="hidden group-hover:block group-focus-visible:block p-1 min-w-6 rounded bg-primary absolute -top-2 left-1/2 -translate-x-2/4 -translate-y-full after:absolute after:content-[&#39;&#39;] after:size-0 after:border-5 after:border-transparent after:border-t-primary after:top-full after:inset-x-0 after:mx-auto" text="white xs center"${_scopeId2}>${ssrInterpolate((_a = _ctx.modelValue) == null ? void 0 : _a.at(0))}</span>`);
                  } else {
                    return [
                      createVNode("span", {
                        class: "hidden group-hover:block group-focus-visible:block p-1 min-w-6 rounded bg-primary absolute -top-2 left-1/2 -translate-x-2/4 -translate-y-full after:absolute after:content-[''] after:size-0 after:border-5 after:border-transparent after:border-t-primary after:top-full after:inset-x-0 after:mx-auto",
                        text: "white xs center"
                      }, toDisplayString((_b = _ctx.modelValue) == null ? void 0 : _b.at(0)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode(_component_SliderTrack, { class: "relative h-1 w-full grow overflow-hidden rounded-full bg-secondary" }, {
                default: withCtx(() => [
                  createVNode(_component_SliderRange, { class: "absolute h-full bg-primary" })
                ]),
                _: 1
              }),
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.modelValue, (_2, key) => {
                return openBlock(), createBlock(_component_SliderThumb, {
                  key,
                  class: "group block size-4 rounded-full border-2.5 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                }, {
                  default: withCtx(() => {
                    var _a;
                    return [
                      createVNode("span", {
                        class: "hidden group-hover:block group-focus-visible:block p-1 min-w-6 rounded bg-primary absolute -top-2 left-1/2 -translate-x-2/4 -translate-y-full after:absolute after:content-[''] after:size-0 after:border-5 after:border-transparent after:border-t-primary after:top-full after:inset-x-0 after:mx-auto",
                        text: "white xs center"
                      }, toDisplayString((_a = _ctx.modelValue) == null ? void 0 : _a.at(0)), 1)
                    ];
                  }),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div flex justify-between text-muted-foreground><span>${ssrInterpolate(unref(min))}${ssrInterpolate(unref(unit))}</span><span>${ssrInterpolate(unref(middle))}${ssrInterpolate(unref(unit))}</span><span>${ssrInterpolate(unref(max))}${ssrInterpolate(unref(unit))}</span></div><!--]-->`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/ui/Slider.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "FontSize",
  __ssrInlineRender: true,
  setup(__props) {
    const { styles, setStyle } = useStyleStore();
    const modelValue = ref([styles.fontSize]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EditorToolbarBox = _sfc_main$v;
      const _component_SharedUiSlider = _sfc_main$7;
      _push(ssrRenderComponent(_component_EditorToolbarBox, mergeProps({
        text: _ctx.$t("toolbar.font_size"),
        icon: "i-ri:font-size-2"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SharedUiSlider, {
              unit: "px",
              "model-value": unref(modelValue),
              min: 12,
              max: 20,
              "onUpdate:modelValue": (value) => {
                modelValue.value = value;
                unref(setStyle)("fontSize", value.at(0));
              }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SharedUiSlider, {
                unit: "px",
                "model-value": unref(modelValue),
                min: 12,
                max: 20,
                "onUpdate:modelValue": (value) => {
                  modelValue.value = value;
                  unref(setStyle)("fontSize", value.at(0));
                }
              }, null, 8, ["model-value", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/editor/toolbar/FontSize.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Margins",
  __ssrInlineRender: true,
  setup(__props) {
    const { styles, setStyle } = useStyleStore();
    const vModelValue = ref([styles.marginV]);
    const hModelValue = ref([styles.marginH]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EditorToolbarBox = _sfc_main$v;
      const _component_SharedUiSlider = _sfc_main$7;
      _push(ssrRenderComponent(_component_EditorToolbarBox, mergeProps({
        text: _ctx.$t("toolbar.margins.title"),
        icon: "i-radix-icons:margin"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div hstack text-muted-foreground gap-x-1 justify-end${_scopeId}><span i-icon-park-outline:margin-one${_scopeId}></span> ${ssrInterpolate(_ctx.$t("toolbar.margins.vertical"))}</div>`);
            _push2(ssrRenderComponent(_component_SharedUiSlider, {
              unit: "px",
              "model-value": unref(vModelValue),
              "onUpdate:modelValue": (value) => {
                vModelValue.value = value;
                unref(setStyle)("marginV", value.at(0));
              }
            }, null, _parent2, _scopeId));
            _push2(`<div mt-4 hstack text-muted-foreground gap-x-1 justify-end${_scopeId}><span i-icon-park-outline:margin${_scopeId}></span> ${ssrInterpolate(_ctx.$t("toolbar.margins.horizontal"))}</div>`);
            _push2(ssrRenderComponent(_component_SharedUiSlider, {
              unit: "px",
              "model-value": unref(hModelValue),
              "onUpdate:modelValue": (value) => {
                hModelValue.value = value;
                unref(setStyle)("marginH", value.at(0));
              }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", {
                hstack: "",
                "text-muted-foreground": "",
                "gap-x-1": "",
                "justify-end": ""
              }, [
                createVNode("span", { "i-icon-park-outline:margin-one": "" }),
                createTextVNode(" " + toDisplayString(_ctx.$t("toolbar.margins.vertical")), 1)
              ]),
              createVNode(_component_SharedUiSlider, {
                unit: "px",
                "model-value": unref(vModelValue),
                "onUpdate:modelValue": (value) => {
                  vModelValue.value = value;
                  unref(setStyle)("marginV", value.at(0));
                }
              }, null, 8, ["model-value", "onUpdate:modelValue"]),
              createVNode("div", {
                "mt-4": "",
                hstack: "",
                "text-muted-foreground": "",
                "gap-x-1": "",
                "justify-end": ""
              }, [
                createVNode("span", { "i-icon-park-outline:margin": "" }),
                createTextVNode(" " + toDisplayString(_ctx.$t("toolbar.margins.horizontal")), 1)
              ]),
              createVNode(_component_SharedUiSlider, {
                unit: "px",
                "model-value": unref(hModelValue),
                "onUpdate:modelValue": (value) => {
                  hModelValue.value = value;
                  unref(setStyle)("marginH", value.at(0));
                }
              }, null, 8, ["model-value", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/editor/toolbar/Margins.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ParagraphSpace",
  __ssrInlineRender: true,
  setup(__props) {
    const { styles, setStyle } = useStyleStore();
    const modelValue = ref([styles.paragraphSpace]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EditorToolbarBox = _sfc_main$v;
      const _component_SharedUiSlider = _sfc_main$7;
      _push(ssrRenderComponent(_component_EditorToolbarBox, mergeProps({
        text: _ctx.$t("toolbar.paragraph_spacing"),
        icon: "i-icon-park-outline:paragraph-break-two"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SharedUiSlider, {
              unit: "px",
              "model-value": unref(modelValue),
              max: 50,
              "onUpdate:modelValue": (value) => {
                modelValue.value = value;
                unref(setStyle)("paragraphSpace", value.at(0));
              }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SharedUiSlider, {
                unit: "px",
                "model-value": unref(modelValue),
                max: 50,
                "onUpdate:modelValue": (value) => {
                  modelValue.value = value;
                  unref(setStyle)("paragraphSpace", value.at(0));
                }
              }, null, 8, ["model-value", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/editor/toolbar/ParagraphSpace.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "LineHeight",
  __ssrInlineRender: true,
  setup(__props) {
    const { styles, setStyle } = useStyleStore();
    const modelValue = ref([styles.lineHeight]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EditorToolbarBox = _sfc_main$v;
      const _component_SharedUiSlider = _sfc_main$7;
      _push(ssrRenderComponent(_component_EditorToolbarBox, mergeProps({
        text: _ctx.$t("toolbar.line_height"),
        icon: "i-ic:round-format-line-spacing"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SharedUiSlider, {
              "model-value": unref(modelValue),
              min: 1,
              max: 2,
              step: 0.05,
              "onUpdate:modelValue": (value) => {
                modelValue.value = value;
                unref(setStyle)("lineHeight", value.at(0));
              }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SharedUiSlider, {
                "model-value": unref(modelValue),
                min: 1,
                max: 2,
                step: 0.05,
                "onUpdate:modelValue": (value) => {
                  modelValue.value = value;
                  unref(setStyle)("lineHeight", value.at(0));
                }
              }, null, 8, ["model-value", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/editor/toolbar/LineHeight.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const abi = "ABI";
const amd = "AMD";
const api = "API";
const ast = "AST";
const bom = "BOM";
const bsd = "BSD";
const cdn = "CDN";
const cjs = "CJS";
const cli = "CLI";
const cncf = "CNCF";
const cors = "CORS";
const cpu = "CPU";
const crud = "CRUD";
const csrf = "CSRF";
const css = "CSS";
const csv = "CSV";
const db2 = "DB2";
const dns = "DNS";
const dom = "DOM";
const dos = "DOS";
const es6 = "ES6";
const esm = "ESM";
const fbi = "FBI";
const ftp = "FTP";
const ftps = "FTPS";
const gcc = "GCC";
const gcp = "GCP";
const glsl = "GLSL";
const gorm = "GORM";
const gpl = "GPL";
const gps = "GPS";
const gpu = "GPU";
const gre = "GRE";
const gui = "GUI";
const hdmi = "HDMI";
const hmr = "HMR";
const html = "HTML";
const http = "HTTP";
const https = "HTTPS";
const iife = "IIFE";
const ipc = "IPC";
const ipfs = "IPFS";
const ipmi = "IPMI";
const jdbc = "JDBC";
const jdk = "JDK";
const jit = "JIT";
const jpeg = "JPEG";
const jpg = "JPG";
const jre = "JRE";
const jsf = "JSF";
const json = "JSON";
const jsonp = "JSONP";
const jsp = "JSP";
const jwt = "JWT";
const kcp = "KCP";
const kde = "KDE";
const kpi = "KPI";
const lfu = "LFU";
const llvm = "LLVM";
const lru = "LRU";
const lts = "LTS";
const mdn = "MDN";
const mdx = "MDX";
const mvc = "MVC";
const mvp = "MVP";
const mvvm = "MVVM";
const nft = "NFT";
const odbc = "ODBC";
const ont = "ONT";
const orm = "ORM";
const oss = "OSS";
const pdf = "PDF";
const pdo = "PDO";
const posix = "POSIX";
const pwa = "PWA";
const qemu = "QEMU";
const qgis = "QGIS";
const quic = "QUIC";
const rfc = "RFC";
const rom = "ROM";
const rpc = "RPC";
const rss = "RSS";
const rss3 = "RSS3";
const sdk = "SDK";
const seo = "SEO";
const sip = "SIP";
const smtp = "SMTP";
const sql = "SQL";
const sre = "SRE";
const ssg = "SSG";
const ssh = "SSH";
const sso = "SSO";
const ssr = "SSR";
const stp = "STP";
const svg = "SVG";
const svn = "SVN";
const tcp = "TCP";
const tls = "TLS";
const toml = "TOML";
const tsc = "TSC";
const udp = "UDP";
const umd = "UMD";
const uri = "URI";
const url = "URL";
const usb = "USB";
const vlan = "VLAN";
const vnc = "VNC";
const vpn = "VPN";
const vps = "VPS";
const wgsl = "WGSL";
const wlan = "WLAN";
const wsa = "WSA";
const wsl = "WSL";
const xhtml = "XHTML";
const xml = "XML";
const xss = "XSS";
const yaml = "YAML";
const abbreviates = {
  abi,
  amd,
  api,
  ast,
  bom,
  bsd,
  cdn,
  cjs,
  cli,
  cncf,
  cors,
  cpu,
  crud,
  csrf,
  css,
  csv,
  db2,
  dns,
  dom,
  dos,
  es6,
  esm,
  fbi,
  ftp,
  ftps,
  gcc,
  gcp,
  glsl,
  gorm,
  gpl,
  gps,
  gpu,
  gre,
  gui,
  hdmi,
  hmr,
  html,
  http,
  https,
  iife,
  ipc,
  ipfs,
  ipmi,
  jdbc,
  jdk,
  jit,
  jpeg,
  jpg,
  jre,
  jsf,
  json,
  jsonp,
  jsp,
  jwt,
  kcp,
  kde,
  kpi,
  lfu,
  llvm,
  lru,
  lts,
  mdn,
  mdx,
  mvc,
  mvp,
  mvvm,
  nft,
  odbc,
  ont,
  orm,
  oss,
  pdf,
  pdo,
  posix,
  pwa,
  qemu,
  qgis,
  quic,
  rfc,
  rom,
  rpc,
  rss,
  rss3,
  sdk,
  seo,
  sip,
  smtp,
  sql,
  sre,
  ssg,
  ssh,
  sso,
  ssr,
  stp,
  svg,
  svn,
  tcp,
  tls,
  toml,
  tsc,
  udp,
  umd,
  uri,
  url,
  usb,
  vlan,
  vnc,
  vpn,
  vps,
  wgsl,
  wlan,
  wsa,
  wsl,
  xhtml,
  xml,
  xss,
  yaml
};
const airbnb = "Airbnb";
const alphago = "AlphaGo";
const bitbucket = "Bitbucket";
const bytedance = "ByteDance";
const circleci = "CircleCI";
const freecodecamp = "freeCodeCamp";
const gitea = "Gitea";
const gitee = "Gitee";
const github = "GitHub";
const gitlab = "GitLab";
const gitops = "GitOps";
const gitpod = "Gitpod";
const hp = "HP";
const ibm = "IBM";
const jsdelivr = "jsDelivr";
const kfc = "KFC";
const leetcode = "LeetCode";
const linkedin = "LinkedIn";
const mcdonald = "McDonald";
const nvidia = "NVIDIA";
const pagerduty = "PagerDuty";
const producthunt = "Product Hunt";
const stackblitz = "StackBlitz";
const stackit = "STACKIT";
const stackoverflow = "Stack Overflow";
const v2ex = "V2EX";
const youtube = "YouTube";
const brands = {
  airbnb,
  alphago,
  bitbucket,
  bytedance,
  circleci,
  freecodecamp,
  gitea,
  gitee,
  github,
  gitlab,
  gitops,
  gitpod,
  hp,
  ibm,
  jsdelivr,
  kfc,
  leetcode,
  linkedin,
  mcdonald,
  nvidia,
  pagerduty,
  producthunt,
  stackblitz,
  stackit,
  stackoverflow,
  v2ex,
  youtube
};
const aiaas = "AIaaS";
const baas = "BaaS";
const caas = "CaaS";
const daas = "DaaS";
const ddos = "DDoS";
const devops = "DevOps";
const devtools = "DevTools";
const esim = "eSIM";
const faas = "FaaS";
const iaas = "IaaS";
const ioc = "IoC";
const ipsec = "IPsec";
const mpaas = "mPaaS";
const paas = "PaaS";
const saas = "SaaS";
const wifi = "Wi-Fi";
const xaas = "XaaS";
const general = {
  aiaas,
  baas,
  caas,
  daas,
  ddos,
  devops,
  devtools,
  esim,
  faas,
  iaas,
  ioc,
  ipsec,
  mpaas,
  paas,
  saas,
  wifi,
  xaas
};
const airdrop = "AirDrop";
const airpods = "AirPods";
const airtag = "AirTag";
const homekit = "HomeKit";
const homepod = "HomePod";
const imac = "iMac";
const ipad = "iPad";
const iphone = "iPhone";
const ipod = "iPod";
const macbook = "MacBook";
const products = {
  airdrop,
  airpods,
  airtag,
  homekit,
  homepod,
  imac,
  ipad,
  iphone,
  ipod,
  macbook,
  "macbook air": "MacBook Air",
  "macbook pro": "MacBook Pro"
};
const actionscript = "ActionScript";
const adblock = "AdBlock";
const ajax = "AJAX";
const alipay = "Alipay";
const amap = "AMap";
const angularjs = "AngularJS";
const antd = "AntD";
const antdesign = "AntDesign";
const antdesignvue = "AntDesignVue";
const antv = "AntV";
const apifox = "Apifox";
const applescript = "AppleScript";
const appletalk = "AppleTalk";
const arangodb = "ArangoDB";
const arcgis = "ArcGIS";
const arcmap = "ArcMap";
const arcobjects = "ArcObjects";
const beego = "Beego";
const bittorrent = "BitTorrent";
const busybox = "BusyBox";
const centos = "CentOS";
const cesiumjs = "CesiumJS";
const chatgpt = "ChatGPT";
const citygml = "CityGML";
const cityjson = "CityJSON";
const ckeditor = "CKEditor";
const clashx = "ClashX";
const clickhouse = "ClickHouse";
const cmake = "CMake";
const cockroachdb = "CockroachDB";
const cocoapods = "CocoaPods";
const codepen = "CodePen";
const codesandbox = "CodeSandbox";
const coffeescript = "CoffeeScript";
const commonjs = "CommonJS";
const compositionapi = "CompositionAPI";
const coredns = "CoreDNS";
const dapr = "Dapr";
const datadog = "Datadog";
const datagrip = "DataGrip";
const dbase = "dBase";
const definitelytyped = "DefinitelyTyped";
const denodeploy = "DenoDeploy";
const digitalocean = "DigitalOcean";
const dingtalk = "DingTalk";
const directx = "DirectX";
const django = "Django";
const duckduckgo = "DuckDuckGo";
const dynamodb = "DynamoDB";
const echarts = "ECharts";
const ecmascript = "ECMAScript";
const edgedb = "EdgeDB";
const eggjs = "Egg.js";
const elasticsearch = "Elasticsearch";
const elementui = "ElementUI";
const esbuild = "esbuild";
const eslint = "ESLint";
const esxi = "ESXi";
const etcd = "etcd";
const facetime = "FaceTime";
const fastapi = "FastAPI";
const ffmpeg = "FFmpeg";
const filezilla = "FileZilla";
const firefox = "Firefox";
const freemarker = "FreeMarker";
const gdnative = "GDNative";
const gdscript = "GDScript";
const geforce = "GeForce";
const geojson = "GeoJSON";
const geopackage = "GeoPackage";
const geopandas = "GeoPandas";
const geoserver = "GeoServer";
const gitbook = "GitBook";
const gitkraken = "GitKraken";
const gltf = "glTF";
const gnome = "GNOME";
const gnu = "GNU";
const gnupg = "GnuPG";
const goland = "GoLand";
const graphql = "GraphQL";
const greensock = "GreenSock";
const grpc = "gRPC";
const hackernews = "Hacker News";
const hacpai = "HacPai";
const hbase = "HBase";
const hbuilderx = "HBuilderX";
const ibook = "iBook";
const icloud = "iCloud";
const idrac = "iDRAC";
const ilo = "iLO";
const imessage = "iMessage";
const imovie = "iMovie";
const imtoken = "imToken";
const influxdb = "InfluxDB";
const intellij = "IntelliJ";
const ios = "iOS";
const ipados = "iPadOS";
const iphoto = "iPhoto";
const iscsi = "iSCSI";
const iterm = "iTerm";
const itunes = "iTunes";
const iwork = "iWork";
const javascript = "JavaScript";
const jetbrains = "JetBrains";
const jquery = "jQuery";
const jsdoc = "JSDoc";
const jupyterlab = "JupyterLab";
const katex = "KaTeX";
const kubernetes = "Kubernetes";
const latex = "LaTeX";
const less = "Less";
const libreoffice = "LibreOffice";
const lineageos = "LineageOS";
const macos = "macOS";
const mariadb = "MariaDB";
const markdown = "Markdown";
const markdownlint = "MarkdownLint";
const mathieu = "MATHIEU";
const mathjax = "MathJax";
const mathml = "MathML";
const mathtype = "MathType";
const matlab = "MATLAB";
const mediawiki = "MediaWiki";
const memcached = "Memcached";
const messagepack = "MessagePack";
const metamask = "MetaMask";
const mkdocs = "MkDocs";
const mlaas = "MLaaS";
const mlops = "MLOps";
const mobx = "MobX";
const mongodb = "MongoDB";
const mongoose = "Mongoose";
const mybatis = "MyBatis";
const mysql = "MySQL";
const naiveui = "NaiveUI";
const neo4j = "Neo4j";
const nestjs = "NestJS";
const netbeans = "NetBeans";
const netbios = "NetBIOS";
const nextjs = "Next.js";
const nixos = "NixOS";
const nocodb = "NocoDB";
const nosql = "NoSQL";
const npm = "npm";
const numpy = "NumPy";
const nuxtjs = "NuxtJS";
const oauth = "OAuth";
const obs = "OBS";
const ocaml = "OCaml";
const onedrive = "OneDrive";
const onenote = "OneNote";
const openai = "OpenAI";
const openapi = "OpenAPI";
const opencv = "OpenCV";
const openfaas = "OpenFaaS";
const openflow = "OpenFlow";
const opengauss = "openGauss";
const opengl = "OpenGL";
const openjdk = "OpenJDK";
const openlayers = "OpenLayers";
const openpgp = "OpenPGP";
const opensea = "OpenSea";
const openssl = "OpenSSL";
const openstack = "OpenStack";
const openstreetmap = "OpenStreetMap";
const opensuse = "openSUSE";
const openvino = "OpenVINO";
const openwrt = "OpenWrt";
const opnsense = "OPNsense";
const pagp = "PAgP";
const paypal = "PayPal";
const photoshop = "Photoshop";
const php = "PHP";
const phpstorm = "PhpStorm";
const pihole = "Pi-hole";
const planetscale = "PlanetScale";
const postcss = "PostCSS";
const postgis = "PostGIS";
const postgresql = "PostgreSQL";
const potplayer = "PotPlayer";
const powerpoint = "PowerPoint";
const powershell = "PowerShell";
const primevue = "PrimeVue";
const protobuf = "Protobuf";
const pycharm = "PyCharm";
const pytorch = "PyTorch";
const qtscript = "QtScript";
const raii = "RAII";
const redhat = "RedHat";
const redisearch = "RediSearch";
const redisjson = "RedisJSON";
const rescript = "ReScript";
const restful = "RESTful";
const rethinkdb = "RethinkDB";
const rsshub = "RSSHub";
const rust = "Rust";
const rxdb = "RxDB";
const rxjs = "RxJS";
const sass = "Sass";
const scss = "SCSS";
const segmentfault = "SegmentFault";
const solarwinds = "SolarWinds";
const spatiallite = "SpatialLite";
const springboot = "SpringBoot";
const springcloud = "SpringCloud";
const springmvc = "SpringMVC";
const sqlite = "SQLite";
const sqlserver = "SQLServer";
const storybook = "Storybook";
const stylus = "Stylus";
const surrealdb = "SurrealDB";
const sveltekit = "SvelteKit";
const tailwindcss = "TailwindCSS";
const teamviewer = "TeamViewer";
const tensorflow = "TensorFlow";
const testflight = "TestFlight";
const tex = "TeX";
const threejs = "ThreeJS";
const tianocore = "TianoCore";
const tidb = "TiDB";
const tiflash = "TiFlash";
const tiktok = "TikTok";
const tikv = "TiKV";
const trpc = "tRPC";
const tsdoc = "TSDoc";
const tsdx = "TSdx";
const turbopack = "Turbopack";
const turborepo = "Turborepo";
const typeorm = "TypeORM";
const typescript = "TypeScript";
const uniapp = "uniapp";
const unifi = "UniFi";
const unix = "UNIX";
const unocss = "UnoCSS";
const upnp = "UPnP";
const vercel = "Vercel";
const videolan = "VideoLAN";
const vim = "VIM";
const virtualbox = "VirtualBox";
const vitepress = "VitePress";
const vividcortex = "VividCortex";
const vlc = "VLC";
const vmware = "VMware";
const voip = "VoIP";
const vscode = "VS Code";
const vscodium = "VSCodium";
const vuepress = "VuePress";
const vueuse = "VueUse";
const vulkan = "Vulkan";
const w3c = "W3C";
const wasm = "Wasm";
const watchos = "watchOS";
const webar = "WebAR";
const webassembly = "WebAssembly";
const webgl = "WebGL";
const webgpu = "WebGPU";
const webkit = "WebKit";
const webpack = "webpack";
const webrtc = "WebRTC";
const websocket = "WebSocket";
const webstorm = "WebStorm";
const webvr = "WebVR";
const webxr = "WebXR";
const wechat = "WeChat";
const whatsapp = "WhatsApp";
const windicss = "WindiCSS";
const wireguard = "WireGuard";
const wordpress = "WordPress";
const xmind = "XMind";
const xstate = "XState";
const yapi = "YApi";
const softwares = {
  "1password": "1Password",
  "3dtiles": "3DTiles",
  actionscript,
  adblock,
  ajax,
  alipay,
  amap,
  angularjs,
  "ant design": "Ant Design",
  "ant design vue": "Ant Design Vue",
  antd,
  antdesign,
  antdesignvue,
  antv,
  apifox,
  "app store": "App Store",
  "apple pay": "Apple Pay",
  applescript,
  appletalk,
  arangodb,
  arcgis,
  arcmap,
  arcobjects,
  beego,
  bittorrent,
  busybox,
  centos,
  cesiumjs,
  chatgpt,
  citygml,
  cityjson,
  ckeditor,
  clashx,
  clickhouse,
  cmake,
  cockroachdb,
  cocoapods,
  codepen,
  codesandbox,
  coffeescript,
  commonjs,
  "composition api": "Composition API",
  compositionapi,
  coredns,
  "css modules": "CSS Modules",
  dapr,
  datadog,
  datagrip,
  dbase,
  definitelytyped,
  denodeploy,
  "digital ocean": "DigitalOcean",
  digitalocean,
  dingtalk,
  directx,
  django,
  duckduckgo,
  dynamodb,
  echarts,
  ecmascript,
  edgedb,
  eggjs,
  elasticsearch,
  "element plus": "Element Plus",
  elementui,
  esbuild,
  eslint,
  esxi,
  etcd,
  facetime,
  fastapi,
  ffmpeg,
  filezilla,
  firefox,
  freemarker,
  gdnative,
  gdscript,
  geforce,
  geojson,
  geopackage,
  geopandas,
  geoserver,
  gitbook,
  gitkraken,
  gltf,
  gnome,
  gnu,
  gnupg,
  goland,
  "google pay": "Google Pay",
  graphql,
  greensock,
  grpc,
  hackernews,
  hacpai,
  hbase,
  hbuilderx,
  ibook,
  icloud,
  idrac,
  ilo,
  imessage,
  imovie,
  imtoken,
  influxdb,
  intellij,
  "intellij idea": "IntelliJ IDEA",
  ios,
  ipados,
  iphoto,
  iscsi,
  iterm,
  itunes,
  iwork,
  javascript,
  jetbrains,
  jquery,
  jsdoc,
  jupyterlab,
  katex,
  kubernetes,
  latex,
  less,
  libreoffice,
  "line pay": "LINE Pay",
  lineageos,
  macos,
  mariadb,
  markdown,
  markdownlint,
  mathieu,
  mathjax,
  mathml,
  mathtype,
  matlab,
  mediawiki,
  memcached,
  messagepack,
  metamask,
  mkdocs,
  mlaas,
  mlops,
  mobx,
  mongodb,
  mongoose,
  "ms-dos": "MS-DOS",
  mybatis,
  mysql,
  "naive ui": "Naive UI",
  naiveui,
  neo4j,
  nestjs,
  netbeans,
  netbios,
  nextjs,
  nixos,
  nocodb,
  "node.js": "Node.js",
  nosql,
  "notepad ++": "Notepad++",
  npm,
  numpy,
  nuxtjs,
  oauth,
  obs,
  ocaml,
  onedrive,
  onenote,
  openai,
  openapi,
  opencv,
  openfaas,
  openflow,
  opengauss,
  opengl,
  "opengl es": "OpenGL ES",
  openjdk,
  openlayers,
  openpgp,
  opensea,
  openssl,
  openstack,
  openstreetmap,
  opensuse,
  openvino,
  openwrt,
  opnsense,
  pagp,
  paypal,
  photoshop,
  php,
  phpstorm,
  pihole,
  planetscale,
  postcss,
  postgis,
  postgresql,
  potplayer,
  powerpoint,
  powershell,
  primevue,
  protobuf,
  pycharm,
  pytorch,
  qtscript,
  raii,
  "react native": "React Native",
  redhat,
  redisearch,
  redisjson,
  rescript,
  restful,
  rethinkdb,
  rsshub,
  rust,
  rxdb,
  rxjs,
  "samsung pay": "Samsung Pay",
  sass,
  scss,
  segmentfault,
  "socket.io": "Socket.IO",
  solarwinds,
  spatiallite,
  "spir-v": "SPIR-V",
  springboot,
  springcloud,
  springmvc,
  sqlite,
  sqlserver,
  storybook,
  stylus,
  "sublime text": "Sublime Text",
  surrealdb,
  sveltekit,
  "tailwind css": "Tailwind CSS",
  tailwindcss,
  teamviewer,
  tensorflow,
  testflight,
  tex,
  threejs,
  tianocore,
  tidb,
  tiflash,
  tiktok,
  tikv,
  "travis ci": "Travis CI",
  trpc,
  tsdoc,
  tsdx,
  turbopack,
  turborepo,
  typeorm,
  typescript,
  uniapp,
  unifi,
  unix,
  unocss,
  upnp,
  vercel,
  videolan,
  vim,
  virtualbox,
  "visual studio": "Visual Studio",
  "visual studio code": "Visual Studio Code",
  vitepress,
  vividcortex,
  vlc,
  vmware,
  voip,
  "vs code": "VS Code",
  "vs codium": "VSCodium",
  vscode,
  vscodium,
  "vue cli": "Vue CLI",
  vuepress,
  vueuse,
  vulkan,
  w3c,
  wasm,
  watchos,
  "web assembly": "WebAssembly",
  webar,
  webassembly,
  webgl,
  webgpu,
  webkit,
  webpack,
  webrtc,
  websocket,
  webstorm,
  webvr,
  webxr,
  wechat,
  "wechat pay": "WeChat Pay",
  whatsapp,
  "windi css": "Windi CSS",
  windicss,
  wireguard,
  wordpress,
  xmind,
  xstate,
  yapi
};
var DISABLE_KEY = "@case-police-disable";
var IGNORE_REGEX = /@case-police-ignore\s+([^\s]+)/g;
var UTF8_RANGE = "[\x80-\uFFFF]";
var AVALIABLE_PRESETS = {
  softwares,
  products,
  general,
  brands,
  abbreviates
};
function buildRegex(dictionary) {
  const keys = Object.keys(dictionary);
  const regex = new RegExp(`\\b(${keys.join("|").replace(/\+/g, "\\+")})\\b`, "gi");
  return regex;
}
function replaceCore(code, dict, ignore = [], output, regex) {
  regex = regex || buildRegex(dict);
  Array.from(code.matchAll(IGNORE_REGEX)).forEach((match) => {
    const [, key] = match;
    ignore.push(
      ...key.split(",").map((k) => k.trim().toLowerCase()).filter(Boolean)
    );
  });
  const changed = [];
  code = code.replace(regex, (_, from, index) => {
    if (containsUTF8(code, from, index))
      return _;
    if (!from.match(/[A-Z]/) || !from.match(/[a-z]/))
      return _;
    const lower = from.toLowerCase();
    if (ignore.includes(lower))
      return _;
    const to = dict[lower];
    if (!to || to === from)
      return _;
    changed.push({ from, to, index });
    return to;
  });
  if (changed.length)
    return { code, changed };
}
function containsUTF8(code, key, index) {
  const utf8Regex = new RegExp(`${UTF8_RANGE}`);
  const head = code.charAt(index - 1);
  const tail = code.charAt(index + key.length);
  return utf8Regex.test(head) || utf8Regex.test(tail);
}
function loadPresets(presets) {
  presets = presets != null ? presets : Object.keys(AVALIABLE_PRESETS);
  return presets.reduce(
    (dictionary, preset) => ({
      ...dictionary,
      ...AVALIABLE_PRESETS[preset]
    }),
    {}
  );
}
var replace = (code, options = {}) => {
  if (code.includes(DISABLE_KEY))
    return;
  const ignore = (options.ignore || []).map((i) => i.trim().toLowerCase());
  const dict = {
    ...loadPresets(options.presets),
    ...options.dict
  };
  return replaceCore(code, dict, ignore);
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CorrectCase",
  __ssrInlineRender: true,
  setup(__props) {
    const { data, setAndSyncToMonaco } = useDataStore();
    const toast = useToast();
    const correct = async () => {
      var _a;
      const md = data.markdown;
      const result = replace(md);
      setAndSyncToMonaco("markdown", (_a = result == null ? void 0 : result.code) != null ? _a : md);
      toast.correct(result == null ? void 0 : result.changed);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EditorToolbarBox = _sfc_main$v;
      const _component_UiAlert = _sfc_main$s;
      const _component_UiAlertTitle = _sfc_main$r;
      const _component_UiAlertDescription = _sfc_main$q;
      const _component_UiButton = _sfc_main$g$1;
      _push(ssrRenderComponent(_component_EditorToolbarBox, mergeProps({
        text: _ctx.$t("toolbar.correct_case.title"),
        icon: "i-icon-park-outline:check-correct"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiAlert, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiAlertTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("toolbar.correct_case.example.title"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("toolbar.correct_case.example.title")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiAlertDescription, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("toolbar.correct_case.example.content"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("toolbar.correct_case.example.content")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiAlertTitle, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("toolbar.correct_case.example.title")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiAlertDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("toolbar.correct_case.example.content")), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiAlert, {
              variant: "info",
              class: "mt-3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiAlertTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("toolbar.correct_case.note.title"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("toolbar.correct_case.note.title")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiAlertDescription, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("toolbar.correct_case.note.content"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("toolbar.correct_case.note.content")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiAlertTitle, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("toolbar.correct_case.note.title")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiAlertDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("toolbar.correct_case.note.content")), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-3 text-right"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UiButton, {
              onClick: correct,
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span i-carbon:rocket mr-1${_scopeId2}></span> ${ssrInterpolate(_ctx.$t("toolbar.correct_case.btn"))}`);
                } else {
                  return [
                    createVNode("span", {
                      "i-carbon:rocket": "",
                      "mr-1": ""
                    }),
                    createTextVNode(" " + toDisplayString(_ctx.$t("toolbar.correct_case.btn")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_UiAlert, null, {
                default: withCtx(() => [
                  createVNode(_component_UiAlertTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("toolbar.correct_case.example.title")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiAlertDescription, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("toolbar.correct_case.example.content")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiAlert, {
                variant: "info",
                class: "mt-3"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UiAlertTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("toolbar.correct_case.note.title")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiAlertDescription, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("toolbar.correct_case.note.content")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode("div", { class: "mt-3 text-right" }, [
                createVNode(_component_UiButton, {
                  onClick: correct,
                  size: "sm"
                }, {
                  default: withCtx(() => [
                    createVNode("span", {
                      "i-carbon:rocket": "",
                      "mr-1": ""
                    }),
                    createTextVNode(" " + toDisplayString(_ctx.$t("toolbar.correct_case.btn")), 1)
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/editor/toolbar/CorrectCase.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const tools = [
      {
        id: "file",
        icon: "i-carbon:import-export",
        component: EditorToolbarFile
      },
      {
        id: "paper_size",
        icon: "i-majesticons:paper-fold-line",
        component: _sfc_main$a
      },
      {
        id: "theme_color",
        icon: "i-material-symbols:palette-outline",
        component: _sfc_main$9
      },
      {
        id: "font_family",
        icon: "i-material-symbols:font-download-outline",
        component: _sfc_main$8
      },
      {
        id: "font_size",
        icon: "i-ri:font-size-2",
        component: _sfc_main$6
      },
      {
        id: "margins",
        icon: "i-radix-icons:margin",
        component: _sfc_main$5
      },
      {
        id: "paragraph_spacing",
        icon: "i-icon-park-outline:paragraph-break-two",
        component: _sfc_main$4
      },
      {
        id: "line_height",
        icon: "i-ic:round-format-line-spacing",
        component: _sfc_main$3
      },
      {
        id: "correct_case",
        icon: "i-icon-park-outline:check-correct",
        component: _sfc_main$2
      }
    ];
    const scrollTo = (id) => {
      const toolbar = (void 0).querySelector("#toolbar");
      const section = (void 0).querySelector(`#toolbar-${id}`);
      if (!toolbar || !section)
        return;
      toolbar.scrollTo({
        // offsetTop - header height
        top: section.offsetTop - 48,
        behavior: "smooth"
      });
    };
    const { t } = useI18n();
    const getTooltip = (id) => {
      const key = `toolbar.${id}`;
      return ["file", "correct_case", "font_family", "margins"].includes(id) ? t(`${key}.title`) : t(key);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiSeparator = _sfc_main$A;
      const _component_UiTooltipProvider = _sfc_main$w;
      const _component_UiTooltip = _sfc_main$z;
      const _component_UiTooltipTrigger = _sfc_main$x;
      const _component_UiButton = _sfc_main$g$1;
      const _component_UiTooltipContent = _sfc_main$y;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-72 h-full" }, _attrs))}><div id="toolbar" class="pane-container overflow-y-scroll hide-scrollbar bg-background" lt-lg="bg-accent rounded-none"><!--[-->`);
      ssrRenderList(tools, (tool, i) => {
        _push(`<!--[-->`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tool.component), {
          id: `toolbar-${tool.id}`
        }, null), _parent);
        if (i < tools.length - 1) {
          _push(ssrRenderComponent(_component_UiSeparator, { class: "w-[calc(100%-32px)] mx-auto" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div><div flex="center col none gap-1" border="l dashed lg:none" w-10 bg-accent><!--[-->`);
      ssrRenderList(tools, (tool) => {
        _push(ssrRenderComponent(_component_UiTooltipProvider, { "delay-duration": 0 }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiTooltip, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTooltipTrigger, { "as-child": "" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiButton, {
                            size: "round",
                            variant: "ghost-secondary",
                            onClick: ($event) => scrollTo(tool.id),
                            "aria-label": getTooltip(tool.id)
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span class="${ssrRenderClass([tool.icon, " size-4"])}"${_scopeId4}></span>`);
                              } else {
                                return [
                                  createVNode("span", {
                                    class: [tool.icon, " size-4"]
                                  }, null, 2)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiButton, {
                              size: "round",
                              variant: "ghost-secondary",
                              onClick: ($event) => scrollTo(tool.id),
                              "aria-label": getTooltip(tool.id)
                            }, {
                              default: withCtx(() => [
                                createVNode("span", {
                                  class: [tool.icon, " size-4"]
                                }, null, 2)
                              ]),
                              _: 2
                            }, 1032, ["onClick", "aria-label"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiTooltipContent, { side: "left" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(getTooltip(tool.id))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(getTooltip(tool.id)), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiTooltipTrigger, { "as-child": "" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiButton, {
                            size: "round",
                            variant: "ghost-secondary",
                            onClick: ($event) => scrollTo(tool.id),
                            "aria-label": getTooltip(tool.id)
                          }, {
                            default: withCtx(() => [
                              createVNode("span", {
                                class: [tool.icon, " size-4"]
                              }, null, 2)
                            ]),
                            _: 2
                          }, 1032, ["onClick", "aria-label"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_UiTooltipContent, { side: "left" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(getTooltip(tool.id)), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiTooltip, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiTooltipTrigger, { "as-child": "" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiButton, {
                          size: "round",
                          variant: "ghost-secondary",
                          onClick: ($event) => scrollTo(tool.id),
                          "aria-label": getTooltip(tool.id)
                        }, {
                          default: withCtx(() => [
                            createVNode("span", {
                              class: [tool.icon, " size-4"]
                            }, null, 2)
                          ]),
                          _: 2
                        }, 1032, ["onClick", "aria-label"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_UiTooltipContent, { side: "left" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(getTooltip(tool.id)), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/editor/toolbar/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const { data } = useDataStore();
    const { width } = useWindowSize();
    const isToolbarOpen = ref(width.value > 1024);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedHeader = _sfc_main$D;
      const _component_UiButton = _sfc_main$g$1;
      const _component_SplitterGroup = SplitterGroup;
      const _component_SplitterPanel = SplitterPanel;
      const _component_EditorCode = _sfc_main$C;
      const _component_UiSkeleton = _sfc_main$E;
      const _component_SplitterResizeHandle = SplitterResizeHandle;
      const _component_EditorPreview = __nuxt_component_7;
      const _component_EditorToolbar = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "editor-page",
        class: "flex flex-col"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SharedHeader, null, {
        tail: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiButton, {
              variant: "ghost-secondary",
              size: "round",
              onClick: ($event) => isToolbarOpen.value = !unref(isToolbarOpen),
              "aria-label": unref(isToolbarOpen) ? _ctx.$t("close_toolbar") : _ctx.$t("open_toolbar")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="${ssrRenderClass([
                    "size-4.5",
                    unref(isToolbarOpen) ? "i-tabler:layout-sidebar-right-collapse" : "i-tabler:layout-sidebar-right-expand"
                  ])}"${_scopeId2}></span>`);
                } else {
                  return [
                    createVNode("span", {
                      class: [
                        "size-4.5",
                        unref(isToolbarOpen) ? "i-tabler:layout-sidebar-right-collapse" : "i-tabler:layout-sidebar-right-expand"
                      ]
                    }, null, 2)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiButton, {
                variant: "ghost-secondary",
                size: "round",
                onClick: ($event) => isToolbarOpen.value = !unref(isToolbarOpen),
                "aria-label": unref(isToolbarOpen) ? _ctx.$t("close_toolbar") : _ctx.$t("open_toolbar")
              }, {
                default: withCtx(() => [
                  createVNode("span", {
                    class: [
                      "size-4.5",
                      unref(isToolbarOpen) ? "i-tabler:layout-sidebar-right-collapse" : "i-tabler:layout-sidebar-right-expand"
                    ]
                  }, null, 2)
                ]),
                _: 1
              }, 8, ["onClick", "aria-label"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="workspace flex pb-2">`);
      _push(ssrRenderComponent(_component_SplitterGroup, {
        id: "splitter-editor",
        direction: "horizontal",
        class: "px-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SplitterPanel, { id: "code-pane" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(data).loaded) {
                    _push3(ssrRenderComponent(_component_EditorCode, null, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<div class="flex flex-col gap-y-2 h-full"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiSkeleton, { class: "h-10 bg-secondary" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiSkeleton, { class: "flex-1 bg-secondary" }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  }
                } else {
                  return [
                    unref(data).loaded ? (openBlock(), createBlock(_component_EditorCode, { key: 0 })) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "flex flex-col gap-y-2 h-full"
                    }, [
                      createVNode(_component_UiSkeleton, { class: "h-10 bg-secondary" }),
                      createVNode(_component_UiSkeleton, { class: "flex-1 bg-secondary" })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SplitterResizeHandle, {
              id: "code-preview-handle",
              class: "w-3 relative after:content-[''] after:absolute after:bg-gray-400/40 after:w-1 after:h-10 after:rounded-full after:inset-0 after:m-auto"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SplitterPanel, { id: "preview-pane" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(data).loaded) {
                    _push3(ssrRenderComponent(_component_EditorPreview, null, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_component_UiSkeleton, { class: "size-full bg-secondary" }, null, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    unref(data).loaded ? (openBlock(), createBlock(_component_EditorPreview, { key: 0 })) : (openBlock(), createBlock(_component_UiSkeleton, {
                      key: 1,
                      class: "size-full bg-secondary"
                    }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SplitterPanel, { id: "code-pane" }, {
                default: withCtx(() => [
                  unref(data).loaded ? (openBlock(), createBlock(_component_EditorCode, { key: 0 })) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "flex flex-col gap-y-2 h-full"
                  }, [
                    createVNode(_component_UiSkeleton, { class: "h-10 bg-secondary" }),
                    createVNode(_component_UiSkeleton, { class: "flex-1 bg-secondary" })
                  ]))
                ]),
                _: 1
              }),
              createVNode(_component_SplitterResizeHandle, {
                id: "code-preview-handle",
                class: "w-3 relative after:content-[''] after:absolute after:bg-gray-400/40 after:w-1 after:h-10 after:rounded-full after:inset-0 after:m-auto"
              }),
              createVNode(_component_SplitterPanel, { id: "preview-pane" }, {
                default: withCtx(() => [
                  unref(data).loaded ? (openBlock(), createBlock(_component_EditorPreview, { key: 0 })) : (openBlock(), createBlock(_component_UiSkeleton, {
                    key: 1,
                    class: "size-full bg-secondary"
                  }))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(isToolbarOpen)) {
        _push(`<div id="tools-pane" lt-lg="fixed z-10 max-w-full h-full right-0 top-12 pb-10">`);
        if (unref(data).loaded) {
          _push(ssrRenderComponent(_component_EditorToolbar, null, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_UiSkeleton, { class: "h-full w-62 bg-secondary mr-10" }, null, _parent));
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/editor/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-DBfMMRk-.mjs.map
