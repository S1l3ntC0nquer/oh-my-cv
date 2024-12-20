import { a as _sfc_main$1, b as __nuxt_component_1, _ as _sfc_main$2 } from "./Header-CVL2gF3u.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-C2wghSqn.js";
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "class-variance-authority";
import "radix-vue";
import "clsx";
import "tailwind-merge";
import "lucide-vue-next";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "devalue";
import "@vue/devtools-api";
import "destr";
import "klona";
import "consola";
import "cookie-es";
import "ohash";
import "vue-sonner";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedHeader = _sfc_main$1;
      const _component_SharedBrandName = __nuxt_component_1;
      const _component_UiButton = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "landing-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SharedHeader, null, null, _parent));
      _push(`<div class="h-fit max-w-240 sm:absolute sm:inset-0 sm:m-auto" p="x-5 t-30 md:x-20 lt-sm:b-10"><div text-center><h1 text="3xl sm:4xl">${_ctx.$t("landing.hero") ?? ""}</h1><div my-10 text="lg sm:xl">`);
      _push(ssrRenderComponent(_component_SharedBrandName, null, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$t("landing.desc"))}</div>`);
      _push(ssrRenderComponent(_component_UiButton, {
        as: unref(__nuxt_component_0),
        to: _ctx.$nuxt.$localePath("/dashboard"),
        class: "text-base h-11"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("landing.start"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("landing.start")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div m="t-15 x-auto" grid="~ cols-1 sm:cols-2 gap-y-10" max-w-150><!--[-->`);
      ssrRenderList([0, 1], (i) => {
        _push(`<div><div w-fit sm:mx-auto><div hstack mb-3 gap-x-1.5><span class="${ssrRenderClass([
          "rounded-full flex-center size-5",
          i ? "bg-blue-400" : "bg-primary"
        ])}" text="white xs"><span class="${ssrRenderClass(i ? "i-wpf:privacy" : "i-mdi:rocket-launch")}"></span></span><h2 text-foreground>${ssrInterpolate(_ctx.$t(`landing.feats[${i}].title`))}</h2></div><ul text="sm muted-foreground" pl-2 ml-4.5 list-disc><!--[-->`);
        ssrRenderList(_ctx.$t(`landing.feats[${i}].items`).split("<br>"), (line) => {
          _push(`<li>${line ?? ""}</li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-Ck5aP4H4.js.map
