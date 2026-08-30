import { _ as __nuxt_component_0 } from "./nuxt-link-2JB5KEic.js";
import { mergeProps, withCtx, createVNode, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { u as useHead } from "./v3-DxjFqmgL.js";
import { _ as _export_sfc } from "../server.mjs";
import "/Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/ufo@1.6.4/node_modules/ufo/dist/index.mjs";
import "/Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/defu@6.1.7/node_modules/defu/dist/defu.mjs";
import "/Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/@unhead+vue@2.1.17_vue@3.5.42/node_modules/@unhead/vue/dist/index.mjs";
import "/Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/ofetch@1.5.1/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs";
import "/Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/unctx@2.5.0/node_modules/unctx/dist/index.mjs";
import "/Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/h3@1.15.11/node_modules/h3/dist/index.mjs";
import "vue-router";
const LINK_W = 66;
const ICON_SIZE = 34;
const ANIM_DUR = 250;
const _sfc_main = {
  __name: "work4",
  __ssrInlineRender: true,
  setup(__props) {
    const project = {
      images: [
        "/节日节气/节日节气-01.png",
        "/节日节气/节日节气-02.png",
        "/节日节气/节日节气-03.png",
        "/节日节气/节日节气-04.png",
        "/节日节气/节日节气-05.png",
        "/节日节气/节日节气-06.png",
        "/节日节气/节日节气-07.png",
        "/节日节气/节日节气-08.png",
        "/节日节气/节日节气-09.png",
        "/节日节气/节日节气-10.png",
        "/节日节气/节日节气-11.png",
        "/节日节气/节日节气-12.png",
        "/节日节气/节日节气-13.png"
      ]
    };
    useHead({ title: "节日节气 | 蒋林根" });
    function onLinkEnter(e) {
      const link = e.currentTarget;
      if (link.dataset.hovering === "1") return;
      link.dataset.hovering = "1";
      const iconWrap = link.querySelector(".nav-icon-wrap");
      const textWrap = link.querySelector(".nav-text");
      const textP = textWrap?.querySelector("p");
      const textW = textP ? textP.offsetWidth : 54;
      const targetW = textW + 32 + 4;
      link.animate([{ width: LINK_W + "px" }, { width: targetW + "px" }], { duration: ANIM_DUR, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "forwards" });
      iconWrap.animate([{ top: "calc(50% - " + ICON_SIZE / 2 + "px)" }, { top: "-44px" }], { duration: ANIM_DUR, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "forwards" });
      const textH = textP ? textP.offsetHeight : 18;
      textWrap.animate([{ top: "calc(100% + 5px)", left: "50%", transform: "translateX(-50%)" }, { top: "calc(50% - " + textH / 2 + "px)", left: "50%", transform: "translateX(-50%)" }], { duration: ANIM_DUR, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "forwards" });
    }
    function onLinkLeave(e) {
      const link = e.currentTarget;
      if (link.dataset.hovering !== "1") return;
      link.dataset.hovering = "0";
      const iconWrap = link.querySelector(".nav-icon-wrap");
      const textWrap = link.querySelector(".nav-text");
      const textP = textWrap?.querySelector("p");
      const textH = textP ? textP.offsetHeight : 18;
      link.animate([{ width: link.offsetWidth + "px" }, { width: LINK_W + "px" }], { duration: ANIM_DUR, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "forwards" });
      iconWrap.animate([{ top: "-44px" }, { top: "calc(50% - " + ICON_SIZE / 2 + "px)" }], { duration: ANIM_DUR, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "forwards" });
      textWrap.animate([{ top: "calc(50% - " + textH / 2 + "px)", left: "50%", transform: "translateX(-50%)" }, { top: "calc(100% + 5px)", left: "50%", transform: "translateX(-50%)" }], { duration: ANIM_DUR, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "forwards" });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "project-detail" }, _attrs))} data-v-18bacc99><nav class="detail-nav" data-v-18bacc99><div class="nav-links" data-v-18bacc99>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "nav-link",
        onMouseenter: ($event) => onLinkEnter($event),
        onMouseleave: ($event) => onLinkLeave($event)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="nav-icon-wrap" data-v-18bacc99${_scopeId}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-v-18bacc99${_scopeId}><path d="M19 12H5M12 19l-7-7 7-7" data-v-18bacc99${_scopeId}></path></svg></div><div class="nav-text" data-v-18bacc99${_scopeId}><p data-v-18bacc99${_scopeId}>返回</p></div>`);
          } else {
            return [
              createVNode("div", { class: "nav-icon-wrap" }, [
                (openBlock(), createBlock("svg", {
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "aria-hidden": "true"
                }, [
                  createVNode("path", { d: "M19 12H5M12 19l-7-7 7-7" })
                ]))
              ]),
              createVNode("div", { class: "nav-text" }, [
                createVNode("p", null, "返回")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/#projects",
        class: "nav-link",
        onMouseenter: ($event) => onLinkEnter($event),
        onMouseleave: ($event) => onLinkLeave($event)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="nav-icon-wrap" data-v-18bacc99${_scopeId}><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-18bacc99${_scopeId}><path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" data-v-18bacc99${_scopeId}></path></svg></div><div class="nav-text" data-v-18bacc99${_scopeId}><p data-v-18bacc99${_scopeId}>项目总览</p></div>`);
          } else {
            return [
              createVNode("div", { class: "nav-icon-wrap" }, [
                (openBlock(), createBlock("svg", {
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  "aria-hidden": "true"
                }, [
                  createVNode("path", { d: "M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" })
                ]))
              ]),
              createVNode("div", { class: "nav-text" }, [
                createVNode("p", null, "项目总览")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "nav-link",
        onMouseenter: ($event) => onLinkEnter($event),
        onMouseleave: ($event) => onLinkLeave($event)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="nav-icon-wrap" data-v-18bacc99${_scopeId}><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-18bacc99${_scopeId}><path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" data-v-18bacc99${_scopeId}></path></svg></div><div class="nav-text" data-v-18bacc99${_scopeId}><p data-v-18bacc99${_scopeId}>个人简历</p></div>`);
          } else {
            return [
              createVNode("div", { class: "nav-icon-wrap" }, [
                (openBlock(), createBlock("svg", {
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  "aria-hidden": "true"
                }, [
                  createVNode("path", {
                    "fill-rule": "evenodd",
                    d: "M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z",
                    "clip-rule": "evenodd"
                  })
                ]))
              ]),
              createVNode("div", { class: "nav-text" }, [
                createVNode("p", null, "个人简历")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "nav-link",
        onMouseenter: ($event) => onLinkEnter($event),
        onMouseleave: ($event) => onLinkLeave($event)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="nav-icon-wrap" data-v-18bacc99${_scopeId}><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-18bacc99${_scopeId}><path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" data-v-18bacc99${_scopeId}></path></svg></div><div class="nav-text" data-v-18bacc99${_scopeId}><p data-v-18bacc99${_scopeId}>联系方式</p></div>`);
          } else {
            return [
              createVNode("div", { class: "nav-icon-wrap" }, [
                (openBlock(), createBlock("svg", {
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  "aria-hidden": "true"
                }, [
                  createVNode("path", {
                    "fill-rule": "evenodd",
                    d: "M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z",
                    "clip-rule": "evenodd"
                  })
                ]))
              ]),
              createVNode("div", { class: "nav-text" }, [
                createVNode("p", null, "联系方式")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></nav><section class="project-header" data-v-18bacc99><div class="header-container" data-v-18bacc99><div class="tags" data-v-18bacc99><span class="tag" data-v-18bacc99>情感化表达</span><span class="tag" data-v-18bacc99>动效设计</span><span class="tag" data-v-18bacc99>AIGC提效</span></div><h1 class="project-title" data-v-18bacc99>节日节气购物流程<br data-v-18bacc99>情感化表达</h1><p class="project-desc" data-v-18bacc99>传统节日营销往往停留在&quot;打折促销&quot;，缺乏情感共鸣和趣味体验，美团优选服务的是千家万户的&quot;吃饭人&quot;他们既要实惠，也渴望新鲜感，既要便捷购物，也期待文化认同，因此我们希望通过节日节气的情感化设计，让&quot;吃饭&quot;这件事，变得更有趣、更有文化味儿。</p></div></section><section class="project-images" data-v-18bacc99><div class="images-container" data-v-18bacc99><!--[-->`);
      ssrRenderList(project.images, (img, idx) => {
        _push(`<div class="image-block" data-v-18bacc99><img${ssrRenderAttr("src", img)}${ssrRenderAttr("alt", `节日节气 ${idx + 1}`)} loading="lazy" data-v-18bacc99></div>`);
      });
      _push(`<!--]--></div></section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/work4.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const work4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-18bacc99"]]);
export {
  work4 as default
};
//# sourceMappingURL=work4-DLE3R-8P.js.map
