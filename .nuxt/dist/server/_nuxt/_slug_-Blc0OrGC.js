import { _ as __nuxt_component_0 } from "./nuxt-link-2JB5KEic.js";
import { unref, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { w as works } from "./works-E9O-UBtk.js";
import { _ as _export_sfc, u as useRoute } from "../server.mjs";
import "/Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/ufo@1.6.4/node_modules/ufo/dist/index.mjs";
import "/Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/defu@6.1.7/node_modules/defu/dist/defu.mjs";
import "/Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/ofetch@1.5.1/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs";
import "/Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/unctx@2.5.0/node_modules/unctx/dist/index.mjs";
import "/Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/h3@1.15.11/node_modules/h3/dist/index.mjs";
import "vue-router";
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const slug = route.params.slug;
    const work = works.find((w) => w.slug === slug);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (unref(work)) {
        _push(`<main${ssrRenderAttrs(mergeProps({ class: "work-detail" }, _attrs))} data-v-b44339e9><section class="detail-hero" data-v-b44339e9><div class="detail-container" data-v-b44339e9><h1 class="detail-title" data-v-b44339e9>${ssrInterpolate(unref(work).title)}</h1></div></section><section class="detail-image" data-v-b44339e9><div class="detail-container" data-v-b44339e9><div class="image-wrapper" data-v-b44339e9><img${ssrRenderAttr("src", unref(work).thumbnail)}${ssrRenderAttr("alt", unref(work).title)} class="main-image" data-v-b44339e9></div></div></section><section class="detail-info" data-v-b44339e9><div class="detail-container" data-v-b44339e9><div class="info-grid" data-v-b44339e9><div class="info-block" data-v-b44339e9><span class="info-label" data-v-b44339e9>Category</span><span class="info-value" data-v-b44339e9>${ssrInterpolate(unref(work).category)}</span></div><div class="info-block" data-v-b44339e9><span class="info-label" data-v-b44339e9>Year</span><span class="info-value" data-v-b44339e9>${ssrInterpolate(unref(work).year)}</span></div>`);
        if (unref(work).client) {
          _push(`<div class="info-block" data-v-b44339e9><span class="info-label" data-v-b44339e9>Client</span><span class="info-value" data-v-b44339e9>${ssrInterpolate(unref(work).client)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(work).role) {
          _push(`<div class="info-block" data-v-b44339e9><span class="info-label" data-v-b44339e9>Role</span><span class="info-value" data-v-b44339e9>${ssrInterpolate(unref(work).role)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(work).description) {
          _push(`<p class="detail-desc" data-v-b44339e9>${ssrInterpolate(unref(work).description)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></section></main>`);
      } else {
        _push(`<main${ssrRenderAttrs(mergeProps({ class: "work-detail not-found" }, _attrs))} data-v-b44339e9><div class="detail-container" data-v-b44339e9><h1 data-v-b44339e9>Project not found</h1>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "back-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Back to home`);
            } else {
              return [
                createTextVNode("Back to home")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></main>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/work/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b44339e9"]]);
export {
  _slug_ as default
};
//# sourceMappingURL=_slug_-Blc0OrGC.js.map
