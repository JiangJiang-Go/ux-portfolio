import { computed, ref, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import { w as works } from './works-JJFa6_z3.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BecO6ebo.mjs';
import { _ as _export_sfc } from './server.mjs';
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
      }, _attrs))} data-v-08b04e01>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/work/${__props.work.slug}`,
        class: ["card-link", { "is-hovered": unref(isHovered) }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card-text" data-v-08b04e01${_scopeId}><div class="card-tags" data-v-08b04e01${_scopeId}><!--[-->`);
            ssrRenderList(unref(tags), (tag) => {
              _push2(`<span class="card-tag" data-v-08b04e01${_scopeId}>${ssrInterpolate(tag)}</span>`);
            });
            _push2(`<!--]--></div><h3 class="card-title" data-v-08b04e01${_scopeId}>${ssrInterpolate(__props.work.title)}</h3></div><div class="card-mockup" data-v-08b04e01${_scopeId}><img${ssrRenderAttr("src", __props.work.mockup || __props.work.thumbnail)}${ssrRenderAttr("alt", __props.work.title)} class="mockup-main" data-v-08b04e01${_scopeId}>`);
            if (__props.work.mockupOverlays && __props.work.mockupOverlays.length) {
              _push2(`<div class="mockup-overlays" data-v-08b04e01${_scopeId}><!--[-->`);
              ssrRenderList(__props.work.mockupOverlays, (overlay, i) => {
                _push2(`<img${ssrRenderAttr("src", overlay)} class="${ssrRenderClass(`overlay-img overlay-${i}`)}" alt="" data-v-08b04e01${_scopeId}>`);
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
                createVNode("h3", { class: "card-title" }, toDisplayString(__props.work.title), 1)
              ]),
              createVNode("div", { class: "card-mockup" }, [
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
              ])
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
const ProjectCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-08b04e01"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const chunkedWorks = computed(() => {
      const rows = [];
      for (let i = 0; i < works.length; i += 2) {
        rows.push(works.slice(i, i + 2));
      }
      return rows;
    });
    ref(null);
    ref(null);
    const spotlightX = ref(0);
    const spotlightY = ref(0);
    ref(0);
    ref(0);
    const isMouseInside = ref(false);
    const spotlightStyle = computed(() => ({
      transform: `translate(${spotlightX.value - 291}px, ${spotlightY.value - 270}px)`,
      opacity: isMouseInside.value ? 1 : 0
    }));
    const carouselItems = [
      { title: "Pulse", href: "/Pulse", image: "https://s3plus.meituan.net/mcopilot-pub/copilot/chat/assets/94f5d5b6e2480b6e686609a3610a3078.png" },
      { title: "Daisena", href: "/Daisena", image: "https://s3plus.meituan.net/mcopilot-pub/copilot/chat/assets/5e32ce4e513116ef9a851e65f8e12cc1.png" },
      { title: "CargoVi", href: "/CargoVi", image: "https://s3plus.meituan.net/mcopilot-pub/copilot/chat/assets/1cc8366a7f755bc212a027a29995379c.png" },
      { title: "Resuppl.AI", href: "/Resuppl.AI", image: "https://s3plus.meituan.net/mcopilot-pub/copilot/chat/assets/bb3bccc1f223865771b8047605478ad6.png" },
      { title: "Biofirst Clinic", href: "/Biofirst", image: "https://s3plus.meituan.net/mcopilot-pub/copilot/chat/assets/0b79d5f649e3455628a815838fdf8333.png" },
      { title: "Bespoke Brand Developers", href: "/Bespoke", image: "https://s3plus.meituan.net/mcopilot-pub/copilot/chat/assets/ce92497be3ea246fe87976643a901c86.png" },
      // Repeat for infinite scroll
      { title: "Pulse", href: "/Pulse", image: "https://s3plus.meituan.net/mcopilot-pub/copilot/chat/assets/94f5d5b6e2480b6e686609a3610a3078.png" },
      { title: "Daisena", href: "/Daisena", image: "https://s3plus.meituan.net/mcopilot-pub/copilot/chat/assets/5e32ce4e513116ef9a851e65f8e12cc1.png" },
      { title: "CargoVi", href: "/CargoVi", image: "https://s3plus.meituan.net/mcopilot-pub/copilot/chat/assets/1cc8366a7f755bc212a027a29995379c.png" }
    ];
    const carouselItemsReverse = [
      { title: "Collabo", href: "/Collabo", image: "https://s3plus.meituan.net/mcopilot-pub/copilot/chat/assets/0b79d5f649e3455628a815838fdf8333.png" },
      { title: "AQ22", href: "/AQ22", image: "https://s3plus.meituan.net/mcopilot-pub/copilot/chat/assets/bb3bccc1f223865771b8047605478ad6.png" },
      { title: "Cloudport", href: "/Cloudport", image: "https://s3plus.meituan.net/mcopilot-pub/copilot/chat/assets/ce92497be3ea246fe87976643a901c86.png" },
      { title: "EVO Studio", href: "/EVOStudio", image: "https://s3plus.meituan.net/mcopilot-pub/copilot/chat/assets/0b79d5f649e3455628a815838fdf8333.png" },
      { title: "Gates.io", href: "/Gates", image: "https://s3plus.meituan.net/mcopilot-pub/copilot/chat/assets/5e32ce4e513116ef9a851e65f8e12cc1.png" },
      { title: "RBM", href: "/RBM", image: "https://s3plus.meituan.net/mcopilot-pub/copilot/chat/assets/94f5d5b6e2480b6e686609a3610a3078.png" },
      // Repeat
      { title: "Collabo", href: "/Collabo", image: "https://s3plus.meituan.net/mcopilot-pub/copilot/chat/assets/0b79d5f649e3455628a815838fdf8333.png" },
      { title: "AQ22", href: "/AQ22", image: "https://s3plus.meituan.net/mcopilot-pub/copilot/chat/assets/bb3bccc1f223865771b8047605478ad6.png" },
      { title: "Cloudport", href: "/Cloudport", image: "https://s3plus.meituan.net/mcopilot-pub/copilot/chat/assets/ce92497be3ea246fe87976643a901c86.png" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))} data-v-23b21ce3><div class="hero-outer" data-v-23b21ce3><div class="hero-spotlight" style="${ssrRenderStyle(unref(spotlightStyle))}" data-v-23b21ce3></div><section class="hero-mockup" data-v-23b21ce3><div class="mockup-ellipse" data-v-23b21ce3></div><div class="mockup-desk" data-v-23b21ce3><img src="https://framerusercontent.com/images/DEx7NVGd42EHFqdO51hNp7nNIw.png?width=3341&amp;height=2989" alt="" data-v-23b21ce3></div><div class="item item-journal" data-v-23b21ce3><img src="https://framerusercontent.com/images/OLolD36MPdCpWujoYspMMY8k.png?width=1071&amp;height=901" alt="Journal" data-v-23b21ce3></div><div class="item item-laptop" data-v-23b21ce3><img src="https://framerusercontent.com/images/DEx7NVGd42EHFqdO51hNp7nNIw.png?width=3341&amp;height=2989" alt="Laptop" data-v-23b21ce3><div class="laptop-screen" data-v-23b21ce3><img src="https://framerusercontent.com/images/ZRkHHmJ3m86vvSvvFfCWFAnsNE.png?width=3340&amp;height=1492" alt="Screen content" data-v-23b21ce3></div></div><div class="item item-notepad" data-v-23b21ce3><img src="https://framerusercontent.com/images/ZRkHHmJ3m86vvSvvFfCWFAnsNE.png?width=3340&amp;height=1492" alt="Notepad" data-v-23b21ce3></div><div class="item item-paper" data-v-23b21ce3><img src="https://framerusercontent.com/images/zytdL5OOhlKQDgjGefV81NI6BGQ.png?width=376&amp;height=460" alt="Paper note" data-v-23b21ce3></div><div class="item item-headphones" data-v-23b21ce3><img src="https://framerusercontent.com/images/0fApSrVnWcRE5ivMpq1zdBkZJM.png?width=224&amp;height=448" alt="Headphones" data-v-23b21ce3></div><div class="item item-rect64" data-v-23b21ce3><img src="https://framerusercontent.com/images/M4g3d1N46nMLhomJuLJgH9KAc.png?width=272&amp;height=260" alt="" data-v-23b21ce3></div><div class="item item-phone" data-v-23b21ce3><img src="https://framerusercontent.com/images/0fApSrVnWcRE5ivMpq1zdBkZJM.png?width=224&amp;height=448" alt="Phone" data-v-23b21ce3></div><div class="item item-avatar-scene" data-v-23b21ce3><img src="https://framerusercontent.com/images/lL66ZgX3g42q2tEaTQmJA2wvo.png?width=892&amp;height=892" alt="Avatar" data-v-23b21ce3></div><div class="item item-notebook" data-v-23b21ce3><img src="https://framerusercontent.com/images/zytdL5OOhlKQDgjGefV81NI6BGQ.png?width=376&amp;height=460" alt="Notebook" data-v-23b21ce3></div><div class="location-widget" data-v-23b21ce3><div class="loc-badge" data-v-23b21ce3><span class="loc-pin" data-v-23b21ce3><svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" data-v-23b21ce3><path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" data-v-23b21ce3></path></svg></span><span class="loc-text" data-v-23b21ce3>Currently in <strong data-v-23b21ce3>Dubai</strong></span></div></div></section><div class="hero-info" data-v-23b21ce3><h1 class="hero-name" data-v-23b21ce3>\u848B\u6797\u6839</h1><a href="#call" class="book-call-btn" data-v-23b21ce3><span class="book-call-bg" data-v-23b21ce3></span><span class="book-call-content" data-v-23b21ce3><svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" data-v-23b21ce3><path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" data-v-23b21ce3></path></svg><span data-v-23b21ce3>Book a call</span></span></a><div class="roles-row" data-v-23b21ce3><span class="role-label" data-v-23b21ce3>UI/UX Designer</span><span class="role-dot" data-v-23b21ce3></span><span class="role-label" data-v-23b21ce3>Web Developer</span><span class="role-dot" data-v-23b21ce3></span><span class="role-label" data-v-23b21ce3>Digital Designer</span></div><div class="contact-row" data-v-23b21ce3><span class="contact-item" data-v-23b21ce3><svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" data-v-23b21ce3><path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" data-v-23b21ce3></path><path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" data-v-23b21ce3></path></svg> dawoodh2306@gmail.com </span><span class="contact-sep" data-v-23b21ce3>\xB7</span><span class="contact-item" data-v-23b21ce3><svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" data-v-23b21ce3><path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" data-v-23b21ce3></path></svg> +44 7356041419 </span></div></div></div><section class="carousel-section" data-v-23b21ce3><div class="carousel-row" data-v-23b21ce3><div class="carousel-track" data-v-23b21ce3><!--[-->`);
      ssrRenderList(carouselItems, (item) => {
        _push(`<a${ssrRenderAttr("href", item.href)} class="carousel-card" data-v-23b21ce3><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.title)} class="carousel-img" data-v-23b21ce3><div class="carousel-pill" data-v-23b21ce3><span class="pill-text" data-v-23b21ce3>${ssrInterpolate(item.title)}</span></div></a>`);
      });
      _push(`<!--]--></div></div><div class="carousel-row" data-v-23b21ce3><div class="carousel-track track-reverse" data-v-23b21ce3><!--[-->`);
      ssrRenderList(carouselItemsReverse, (item) => {
        _push(`<a${ssrRenderAttr("href", item.href)} class="carousel-card" data-v-23b21ce3><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.title)} class="carousel-img" data-v-23b21ce3><div class="carousel-pill" data-v-23b21ce3><span class="pill-text" data-v-23b21ce3>${ssrInterpolate(item.title)}</span></div></a>`);
      });
      _push(`<!--]--></div></div></section><section id="projects" class="projects-section" data-v-23b21ce3><div class="projects-grid" data-v-23b21ce3><!--[-->`);
      ssrRenderList(unref(chunkedWorks), (row, rowIndex) => {
        _push(`<div class="project-row" data-v-23b21ce3><!--[-->`);
        ssrRenderList(row, (work) => {
          _push(ssrRenderComponent(ProjectCard, {
            key: work.slug,
            work
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></section><div class="bottom-spacer" data-v-23b21ce3></div><footer class="site-footer" data-v-23b21ce3><span class="footer-left" data-v-23b21ce3>\xA9 2026 Dawood</span><span class="footer-right" data-v-23b21ce3>Liverpool</span></footer></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-23b21ce3"]]);

export { index as default };
//# sourceMappingURL=index-DMsbWjGZ.mjs.map
