import { reactive, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "/Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/ofetch@1.5.1/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs";
import "/Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/unctx@2.5.0/node_modules/unctx/dist/index.mjs";
import "/Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/h3@1.15.11/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/defu@6.1.7/node_modules/defu/dist/defu.mjs";
import "/Users/jianglingen/Desktop/ux-portfolio/node_modules/.pnpm/ufo@1.6.4/node_modules/ufo/dist/index.mjs";
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const form = reactive({
      name: "",
      email: "",
      type: "",
      message: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "contact-page" }, _attrs))} data-v-2474c351><section class="contact-hero" data-v-2474c351><div class="contact-container" data-v-2474c351><div class="contact-header" data-v-2474c351><span class="contact-tag" data-v-2474c351><span class="tag-dot" data-v-2474c351></span> Get in touch </span><h1 class="contact-title" data-v-2474c351> Let&#39;s create<br data-v-2474c351><span class="title-serif" data-v-2474c351>something great</span><br data-v-2474c351> together. </h1><p class="contact-desc" data-v-2474c351> Have a project or idea you&#39;d like to discuss?<br data-v-2474c351> Feel free to reach out and let&#39;s make it happen. </p></div><div class="contact-grid" data-v-2474c351><div class="contact-info" data-v-2474c351><div class="info-block" data-v-2474c351><h3 class="info-label" data-v-2474c351>Email</h3><a href="mailto:dawoodh2306@gmail.com" class="info-value" data-v-2474c351>dawoodh2306@gmail.com</a></div><div class="info-block" data-v-2474c351><h3 class="info-label" data-v-2474c351>Location</h3><span class="info-value" data-v-2474c351>Dubai, UAE</span></div><div class="info-block" data-v-2474c351><h3 class="info-label" data-v-2474c351>Socials</h3><div class="social-links" data-v-2474c351><a href="#" class="social-item" data-v-2474c351><span class="social-name" data-v-2474c351>Dribbble</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-2474c351><path d="M7 17L17 7M17 7H7M17 7V17" data-v-2474c351></path></svg></a><a href="#" class="social-item" data-v-2474c351><span class="social-name" data-v-2474c351>Behance</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-2474c351><path d="M7 17L17 7M17 7H7M17 7V17" data-v-2474c351></path></svg></a><a href="#" class="social-item" data-v-2474c351><span class="social-name" data-v-2474c351>Instagram</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-2474c351><path d="M7 17L17 7M17 7H7M17 7V17" data-v-2474c351></path></svg></a><a href="#" class="social-item" data-v-2474c351><span class="social-name" data-v-2474c351>LinkedIn</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-2474c351><path d="M7 17L17 7M17 7H7M17 7V17" data-v-2474c351></path></svg></a></div></div></div><div class="contact-form-wrapper" data-v-2474c351><form class="contact-form" data-v-2474c351><div class="form-group" data-v-2474c351><label class="form-label" data-v-2474c351>Name</label><input${ssrRenderAttr("value", unref(form).name)} type="text" class="form-input" placeholder="Your name" required data-v-2474c351></div><div class="form-group" data-v-2474c351><label class="form-label" data-v-2474c351>Email</label><input${ssrRenderAttr("value", unref(form).email)} type="email" class="form-input" placeholder="your@email.com" required data-v-2474c351></div><div class="form-group" data-v-2474c351><label class="form-label" data-v-2474c351>Project Type</label><select class="form-input" data-v-2474c351><option value="" data-v-2474c351${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, "") : ssrLooseEqual(unref(form).type, "")) ? " selected" : ""}>Select a project type</option><option value="branding" data-v-2474c351${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, "branding") : ssrLooseEqual(unref(form).type, "branding")) ? " selected" : ""}>Branding &amp; Identity</option><option value="uiux" data-v-2474c351${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, "uiux") : ssrLooseEqual(unref(form).type, "uiux")) ? " selected" : ""}>UI/UX Design</option><option value="web" data-v-2474c351${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, "web") : ssrLooseEqual(unref(form).type, "web")) ? " selected" : ""}>Web Design</option><option value="motion" data-v-2474c351${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, "motion") : ssrLooseEqual(unref(form).type, "motion")) ? " selected" : ""}>Motion Graphics</option><option value="video" data-v-2474c351${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, "video") : ssrLooseEqual(unref(form).type, "video")) ? " selected" : ""}>Video Ads</option><option value="other" data-v-2474c351${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, "other") : ssrLooseEqual(unref(form).type, "other")) ? " selected" : ""}>Other</option></select></div><div class="form-group" data-v-2474c351><label class="form-label" data-v-2474c351>Message</label><textarea class="form-input form-textarea" placeholder="Tell me about your project..." rows="5" required data-v-2474c351>${ssrInterpolate(unref(form).message)}</textarea></div><button type="submit" class="form-submit" data-v-2474c351><span data-v-2474c351>Send Message</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-2474c351><path d="M7 17L17 7M17 7H7M17 7V17" data-v-2474c351></path></svg></button></form></div></div></div></section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2474c351"]]);
export {
  contact as default
};
//# sourceMappingURL=contact-BJIofxKc.js.map
