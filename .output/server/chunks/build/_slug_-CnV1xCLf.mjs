import { _ as __nuxt_component_0 } from './nuxt-link-BecO6ebo.mjs';
import { unref, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { w as works } from './works-JJFa6_z3.mjs';
import { _ as _export_sfc, u as useRoute } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const slug = route.params.slug;
    const work = works.find((w) => w.slug === slug);
    const currentIndex = works.findIndex((w) => w.slug === slug);
    const prevWork = currentIndex > 0 ? works[currentIndex - 1] : null;
    const nextWork = currentIndex < works.length - 1 ? works[currentIndex + 1] : null;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (unref(work)) {
        _push(`<main${ssrRenderAttrs(mergeProps({ class: "work-detail" }, _attrs))} data-v-6b0b3142><section class="detail-hero" data-v-6b0b3142><div class="detail-container" data-v-6b0b3142><h1 class="detail-title" data-v-6b0b3142>${ssrInterpolate(unref(work).title)}</h1></div></section><section class="detail-image" data-v-6b0b3142><div class="detail-container" data-v-6b0b3142><div class="image-wrapper" data-v-6b0b3142><img${ssrRenderAttr("src", unref(work).thumbnail)}${ssrRenderAttr("alt", unref(work).title)} class="main-image" data-v-6b0b3142></div></div></section><section class="detail-info" data-v-6b0b3142><div class="detail-container" data-v-6b0b3142><div class="info-grid" data-v-6b0b3142><div class="info-block" data-v-6b0b3142><span class="info-label" data-v-6b0b3142>Category</span><span class="info-value" data-v-6b0b3142>${ssrInterpolate(unref(work).category)}</span></div><div class="info-block" data-v-6b0b3142><span class="info-label" data-v-6b0b3142>Year</span><span class="info-value" data-v-6b0b3142>${ssrInterpolate(unref(work).year)}</span></div>`);
        if (unref(work).client) {
          _push(`<div class="info-block" data-v-6b0b3142><span class="info-label" data-v-6b0b3142>Client</span><span class="info-value" data-v-6b0b3142>${ssrInterpolate(unref(work).client)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(work).role) {
          _push(`<div class="info-block" data-v-6b0b3142><span class="info-label" data-v-6b0b3142>Role</span><span class="info-value" data-v-6b0b3142>${ssrInterpolate(unref(work).role)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(work).description) {
          _push(`<p class="detail-desc" data-v-6b0b3142>${ssrInterpolate(unref(work).description)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></section><section class="detail-nav-bottom" data-v-6b0b3142><div class="detail-container" data-v-6b0b3142>`);
        if (unref(prevWork)) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/work/${unref(prevWork).slug}`,
            class: "nav-bottom-link"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="nav-bottom-label" data-v-6b0b3142${_scopeId}>Previous</span><span class="nav-bottom-title" data-v-6b0b3142${_scopeId}>${ssrInterpolate(unref(prevWork).title)}</span>`);
              } else {
                return [
                  createVNode("span", { class: "nav-bottom-label" }, "Previous"),
                  createVNode("span", { class: "nav-bottom-title" }, toDisplayString(unref(prevWork).title), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<span data-v-6b0b3142></span>`);
        }
        if (unref(nextWork)) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/work/${unref(nextWork).slug}`,
            class: "nav-bottom-link"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="nav-bottom-label" data-v-6b0b3142${_scopeId}>Next</span><span class="nav-bottom-title" data-v-6b0b3142${_scopeId}>${ssrInterpolate(unref(nextWork).title)}</span>`);
              } else {
                return [
                  createVNode("span", { class: "nav-bottom-label" }, "Next"),
                  createVNode("span", { class: "nav-bottom-title" }, toDisplayString(unref(nextWork).title), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></section></main>`);
      } else {
        _push(`<main${ssrRenderAttrs(mergeProps({ class: "work-detail not-found" }, _attrs))} data-v-6b0b3142><div class="detail-container" data-v-6b0b3142><h1 data-v-6b0b3142>Project not found</h1>`);
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
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6b0b3142"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-CnV1xCLf.mjs.map
