import { computed, ref, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/vue@3.5.42/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderClass } from 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/vue@3.5.42/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import { w as works } from './works-E9O-UBtk.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-2JB5KEic.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/vue-bundle-renderer@2.3.2/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/h3@1.15.11/node_modules/h3/dist/index.mjs';
import 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/ufo@1.6.4/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs';
import 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/ofetch@1.5.1/node_modules/ofetch/dist/node.mjs';
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

const _imports_0 = publicAssetsURL("/\u5934\u50CF.png");
const _sfc_main$1 = {
  __name: "ProjectCard",
  __ssrInlineRender: true,
  props: {
    work: { type: Object, required: true },
    index: { type: Number, default: 0 }
  },
  setup(__props) {
    const props = __props;
    const isHovered = ref(false);
    const tags = computed(() => {
      if (!props.work.category) return [];
      return props.work.category.split("\xB7").map((t) => t.trim()).filter((t) => t.length > 0);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "project-card",
        style: { "--hover-bg": __props.work.hoverBg || "linear-gradient(325deg, rgb(40, 40, 50) -12%, rgb(80, 80, 100) 142%)" }
      }, _attrs))} data-v-5e5f250b>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/work/${__props.work.slug}`,
        class: ["card-link", { "is-hovered": unref(isHovered) }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a;
          if (_push2) {
            _push2(`<div class="card-text" data-v-5e5f250b${_scopeId}><div class="card-tags" data-v-5e5f250b${_scopeId}><!--[-->`);
            ssrRenderList(unref(tags), (tag) => {
              _push2(`<span class="card-tag" data-v-5e5f250b${_scopeId}>${ssrInterpolate(tag)}</span>`);
            });
            _push2(`<!--]--></div><h3 class="card-title" data-v-5e5f250b${_scopeId}>${(_a = __props.work.title) != null ? _a : ""}</h3></div><div class="${ssrRenderClass([{ "is-large": __props.work.slug === "evostudio" }, "card-mockup"])}" data-v-5e5f250b${_scopeId}><img${ssrRenderAttr("src", __props.work.mockup || __props.work.thumbnail)}${ssrRenderAttr("alt", __props.work.title)} class="mockup-main" data-v-5e5f250b${_scopeId}>`);
            if (__props.work.mockupOverlays && __props.work.mockupOverlays.length) {
              _push2(`<div class="mockup-overlays" data-v-5e5f250b${_scopeId}><!--[-->`);
              ssrRenderList(__props.work.mockupOverlays, (overlay, i) => {
                _push2(`<img${ssrRenderAttr("src", overlay)} class="${ssrRenderClass(`overlay-img overlay-${i}`)}" alt="" data-v-5e5f250b${_scopeId}>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "card-text" }, [
                createVNode("div", { class: "card-tags" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(tags), (tag) => {
                    return openBlock(), createBlock("span", {
                      key: tag,
                      class: "card-tag"
                    }, toDisplayString(tag), 1);
                  }), 128))
                ]),
                createVNode("h3", {
                  class: "card-title",
                  innerHTML: __props.work.title
                }, null, 8, ["innerHTML"])
              ]),
              createVNode("div", {
                class: ["card-mockup", { "is-large": __props.work.slug === "evostudio" }]
              }, [
                createVNode("img", {
                  src: __props.work.mockup || __props.work.thumbnail,
                  alt: __props.work.title,
                  class: "mockup-main"
                }, null, 8, ["src", "alt"]),
                __props.work.mockupOverlays && __props.work.mockupOverlays.length ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mockup-overlays"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.work.mockupOverlays, (overlay, i) => {
                    return openBlock(), createBlock("img", {
                      key: i,
                      src: overlay,
                      class: `overlay-img overlay-${i}`,
                      alt: ""
                    }, null, 10, ["src"]);
                  }), 128))
                ])) : createCommentVNode("", true)
              ], 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProjectCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5e5f250b"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const chunkedWorks = computed(() => {
      const limited = works.slice(0, 8);
      const rows = [];
      for (let i = 0; i < limited.length; i += 2) rows.push(limited.slice(i, i + 2));
      return rows;
    });
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    const carouselItems = [
      { title: "\u4F18\u9009\u8D26\u5355", href: "/bill", image: "/\u4F18\u9009\u8D26\u5355.png" },
      { title: "\u5FAE\u4FE1\u5206\u4EAB\u5361\u7247", href: "/share", image: "/\u5FAE\u4FE1\u5206\u4EAB\u5361\u7247.png" },
      { title: "\u8D2D\u7269\u5C0F\u7968", href: "/receipt", image: "/\u8D2D\u7269\u5C0F\u7968.png" },
      { title: "\u4F18\u9009\u8D26\u5355", href: "/bill", image: "/\u4F18\u9009\u8D26\u5355.png" },
      { title: "\u5FAE\u4FE1\u5206\u4EAB\u5361\u7247", href: "/share", image: "/\u5FAE\u4FE1\u5206\u4EAB\u5361\u7247.png" },
      { title: "\u8D2D\u7269\u5C0F\u7968", href: "/receipt", image: "/\u8D2D\u7269\u5C0F\u7968.png" },
      { title: "\u4F18\u9009\u8D26\u5355", href: "/bill", image: "/\u4F18\u9009\u8D26\u5355.png" },
      { title: "\u5FAE\u4FE1\u5206\u4EAB\u5361\u7247", href: "/share", image: "/\u5FAE\u4FE1\u5206\u4EAB\u5361\u7247.png" },
      { title: "\u8D2D\u7269\u5C0F\u7968", href: "/receipt", image: "/\u8D2D\u7269\u5C0F\u7968.png" }
    ];
    const carouselItemsReverse = [
      { title: "\u8282\u65E5\u8282\u6C14", href: "/work4", image: "/\u8282\u65E5\u8282\u6C14/\u8282\u65E5\u8282\u6C14-01.png" },
      { title: "\u9879\u76EE5", href: "/work/\u9879\u76EE5", image: "/\u9879\u76EE5.png" },
      { title: "\u9879\u76EE6", href: "/work/\u9879\u76EE6", image: "/\u9879\u76EE6.png" },
      { title: "\u9879\u76EE7", href: "/work/\u9879\u76EE7", image: "/\u9879\u76EE7.png" },
      { title: "\u56E2\u597D\u8D27\u5168\u65B0\u6539\u7248", href: "/work/\u56E2\u597D\u8D27", image: "/\u9879\u76EE8.png" },
      { title: "\u8282\u65E5\u8282\u6C14", href: "/work4", image: "/\u8282\u65E5\u8282\u6C14/\u8282\u65E5\u8282\u6C14-01.png" },
      { title: "\u9879\u76EE5", href: "/work/\u9879\u76EE5", image: "/\u9879\u76EE5.png" },
      { title: "\u9879\u76EE6", href: "/work/\u9879\u76EE6", image: "/\u9879\u76EE6.png" },
      { title: "\u9879\u76EE7", href: "/work/\u9879\u76EE7", image: "/\u9879\u76EE7.png" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))} data-v-027e7547><div class="hero-wrapper" data-v-027e7547><section class="hero-desktop" data-v-027e7547><div class="hero-profile-widget" data-v-027e7547><div class="profile-img-wrap" data-v-027e7547><img${ssrRenderAttr("src", _imports_0)} alt="Profile" data-v-027e7547></div><div class="location-pill" data-v-027e7547><svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" data-v-027e7547><path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" data-v-027e7547></path></svg><div class="location-scroll" data-v-027e7547><div class="location-list" data-v-027e7547><span data-v-027e7547>\u5317\u4EAC</span><span data-v-027e7547>\u6DF1\u5733</span><span data-v-027e7547>\u5E7F\u5DDE</span><span data-v-027e7547>\u676D\u5DDE</span><span data-v-027e7547>\u4E0A\u6D77</span><span data-v-027e7547>\u5317\u4EAC</span><span data-v-027e7547>\u6DF1\u5733</span><span data-v-027e7547>\u5E7F\u5DDE</span><span data-v-027e7547>\u676D\u5DDE</span><span data-v-027e7547>\u4E0A\u6D77</span></div></div></div></div><h1 class="hero-name" data-v-027e7547>\u848B\u6797\u6839</h1><a href="#call" class="hero-book-call" data-v-027e7547><span class="book-call-inner" data-v-027e7547><svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" data-v-027e7547><path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" data-v-027e7547></path></svg><span data-v-027e7547>Book a call</span></span></a><div class="hero-roles" data-v-027e7547><span class="role-text" data-v-027e7547>UI/UX Designer</span><span class="role-divider" data-v-027e7547></span><span class="role-text" data-v-027e7547>Web Developer</span><span class="role-divider" data-v-027e7547></span><span class="role-text" data-v-027e7547>Digital Designer</span></div><div class="desk-scene" data-v-027e7547><div class="desk-mat" data-v-027e7547></div><div class="desk-screen-group" data-v-027e7547><div class="desk-screen" data-v-027e7547><img src="https://framerusercontent.com/images/ZRkHHmJ3m86vvSvvFfCWFAnsNE.png?width=3340&amp;height=1492" alt="Laptop screen" data-v-027e7547></div></div><div class="desk-phone" data-v-027e7547><img src="https://framerusercontent.com/images/0fApSrVnWcRE5ivMpq1zdBkZJM.png?width=224&amp;height=448" alt="Phone" data-v-027e7547></div><div class="desk-journal" data-v-027e7547><img src="https://framerusercontent.com/images/N9Jx8TOTtTbmuKWo3pFmpihlgng.png?width=1071&amp;height=901" alt="Journal" data-v-027e7547></div><div class="desk-headphone" data-v-027e7547><img src="https://framerusercontent.com/images/zytdL5OOhlKQDgjGefV81NI6BGQ.png?width=376&amp;height=460" alt="" data-v-027e7547></div><div class="skill-tag skill-figma" data-v-027e7547>Figma</div><div class="skill-tag skill-framer" data-v-027e7547>Framer</div><div class="skill-tag skill-photoshop" data-v-027e7547>Photoshop</div><div class="skill-tag skill-aftereffects" data-v-027e7547>After Effects</div><div class="skill-tag skill-illustrator" data-v-027e7547>Illustrator</div><div class="desk-sticky desk-sticky-1" data-v-027e7547><img src="https://framerusercontent.com/images/C10IAmJ6FmfbQySPAXoIg6Qv2c.png?width=143&amp;height=185" alt="" data-v-027e7547></div><div class="desk-sticky desk-sticky-2" data-v-027e7547><img src="https://framerusercontent.com/images/FJvXia4EesGCFQqUoRcqKatijyE.png?width=151&amp;height=185" alt="" data-v-027e7547></div><div class="desk-sticky desk-sticky-3" data-v-027e7547><img src="https://framerusercontent.com/images/eJeLWTIPLLuBRi6OnEdLINeHw.png?width=175&amp;height=175" alt="" data-v-027e7547></div><div class="desk-sticky desk-sticky-4" data-v-027e7547><img src="https://framerusercontent.com/images/dZLuYX8EiWe0WLZm520Z4nPDy4.png?width=174&amp;height=175" alt="" data-v-027e7547></div><div class="desk-sticky desk-sticky-5" data-v-027e7547><img src="https://framerusercontent.com/images/vqeeFTbIUjt2d25HXfdZmrVnY.png?width=173&amp;height=175" alt="" data-v-027e7547></div><div class="desk-bigavatar" data-v-027e7547><img src="https://framerusercontent.com/images/lL66ZgX3g42q2tEaTQmJA2wvo.png?width=892&amp;height=892" alt="Avatar" data-v-027e7547></div><div class="desk-ellipse-shadow" data-v-027e7547></div><div class="desk-spotlight" data-v-027e7547></div><div class="desk-laptop-frame" data-v-027e7547><img src="https://framerusercontent.com/images/DEx7NVGd42EHFqdO51hNp7nNIw.png?width=3341&amp;height=2989" alt="" data-v-027e7547><div class="hero-light" data-v-027e7547></div></div><div class="hotspot hotspot-skills" data-v-027e7547></div></div><div class="hotspot hotspot-laptop" data-v-027e7547></div><div class="hotspot hotspot-pencil" data-v-027e7547></div><div class="hotspot hotspot-mouse" data-v-027e7547></div><div class="hotspot hotspot-headphone" data-v-027e7547></div><div class="hotspot hotspot-bigavatar" data-v-027e7547></div><div class="hero-contact" data-v-027e7547><span class="contact-item" data-v-027e7547><svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" data-v-027e7547><path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" data-v-027e7547></path><path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" data-v-027e7547></path></svg> dawoodh2306@gmail.com </span><span class="role-divider" data-v-027e7547></span><span class="contact-item" data-v-027e7547><svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" data-v-027e7547><path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" data-v-027e7547></path></svg> +44 7356041419 </span></div></section></div><section id="projects" class="carousel-section" data-v-027e7547><div class="carousel-row" data-v-027e7547><div class="carousel-track" data-v-027e7547><!--[-->`);
      ssrRenderList(carouselItems, (item) => {
        _push(`<a${ssrRenderAttr("href", item.href)} class="carousel-card" data-v-027e7547><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.title)} class="carousel-img" data-v-027e7547><div class="carousel-pill" data-v-027e7547><span class="pill-text" data-v-027e7547>${ssrInterpolate(item.title)}</span></div></a>`);
      });
      _push(`<!--]--></div></div><div class="carousel-row" data-v-027e7547><div class="carousel-track track-reverse" data-v-027e7547><!--[-->`);
      ssrRenderList(carouselItemsReverse, (item) => {
        _push(`<a${ssrRenderAttr("href", item.href)} class="carousel-card" data-v-027e7547><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.title)} class="carousel-img" data-v-027e7547><div class="carousel-pill" data-v-027e7547><span class="pill-text" data-v-027e7547>${ssrInterpolate(item.title)}</span></div></a>`);
      });
      _push(`<!--]--></div></div></section><section class="projects-section" data-v-027e7547><div class="projects-grid" data-v-027e7547><!--[-->`);
      ssrRenderList(chunkedWorks.value, (row, rowIndex) => {
        _push(`<div class="project-row" data-v-027e7547><!--[-->`);
        ssrRenderList(row, (work) => {
          _push(ssrRenderComponent(ProjectCard, {
            key: work.slug,
            work
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></section><div class="bottom-spacer" data-v-027e7547></div><footer class="site-footer" data-v-027e7547><span class="footer-left" data-v-027e7547>\xA9 2026 Dawood</span><span class="footer-right" data-v-027e7547>Liverpool</span></footer></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-027e7547"]]);

export { index as default };
//# sourceMappingURL=index-Co0dsTAu.mjs.map
