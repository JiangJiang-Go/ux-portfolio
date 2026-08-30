import { _ as __nuxt_component_0 } from './nuxt-link-2JB5KEic.mjs';
import { unref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/vue@3.5.42/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/vue@3.5.42/node_modules/vue/server-renderer/index.mjs';
import { w as works } from './works-BiMSxMl5.mjs';
import { _ as _export_sfc, u as useRoute } from './server.mjs';
import 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/ufo@1.6.4/node_modules/ufo/dist/index.mjs';
import 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/ofetch@1.5.1/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/vue-bundle-renderer@2.3.2/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/h3@1.15.11/node_modules/h3/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs';
import 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/node-mock-http@1.0.5/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/unstorage@1.17.5_db0@0.3.4_ioredis@5.11.1/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/unstorage@1.17.5_db0@0.3.4_ioredis@5.11.1/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'node:fs/promises';
import 'node:path';
import 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/unstorage@1.17.5_db0@0.3.4_ioredis@5.11.1/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/unstorage@1.17.5_db0@0.3.4_ioredis@5.11.1/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/ohash@2.0.12/node_modules/ohash/dist/index.mjs';
import 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/defu@6.1.7/node_modules/defu/dist/defu.mjs';
import 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/unctx@2.5.0/node_modules/unctx/dist/index.mjs';
import 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/pathe@2.0.3/node_modules/pathe/dist/index.mjs';
import 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/unhead@2.1.17/node_modules/unhead/dist/server.mjs';
import 'node:async_hooks';
import 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/devalue@5.9.2/node_modules/devalue/index.js';
import 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/unhead@2.1.17/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/unhead@2.1.17/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/vue-router@4.6.4_vue@3.5.42/node_modules/vue-router/vue-router.node.mjs';

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

export { _slug_ as default };
//# sourceMappingURL=_slug_-DdvSTfDI.mjs.map
