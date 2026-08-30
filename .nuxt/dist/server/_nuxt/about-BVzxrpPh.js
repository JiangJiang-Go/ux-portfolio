import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
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
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    const skills = [
      {
        title: "UI/UX Design",
        description: "Creating intuitive interfaces and seamless user experiences that delight and convert.",
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>'
      },
      {
        title: "Brand Identity",
        description: "Building distinctive visual identities that communicate brand values and resonate with audiences.",
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>'
      },
      {
        title: "Web Design",
        description: "Designing modern, responsive websites that combine aesthetics with functionality.",
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>'
      },
      {
        title: "Motion Graphics",
        description: "Bringing designs to life through animation and motion for video ads and digital content.",
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>'
      }
    ];
    const tools = [
      "Figma",
      "Adobe Photoshop",
      "Illustrator",
      "After Effects",
      "Premiere Pro",
      "Blender",
      "Framer",
      "Webflow",
      "Sketch",
      "Cinema 4D",
      "InDesign",
      "Canva"
    ];
    const experiences = [
      {
        year: "2023 - Present",
        role: "Senior Creative Designer",
        company: "Freelance",
        description: "Leading design projects for international clients across branding, UI/UX, and motion graphics."
      },
      {
        year: "2021 - 2023",
        role: "UI/UX Designer",
        company: "Digital Agency",
        description: "Designed user interfaces and experiences for web and mobile applications."
      },
      {
        year: "2019 - 2021",
        role: "Graphic Designer",
        company: "Creative Studio",
        description: "Created visual content including brand identities, marketing materials, and social media graphics."
      },
      {
        year: "2018 - 2019",
        role: "Junior Designer",
        company: "Startup Inc.",
        description: "Assisted in design tasks and learned industry best practices in a fast-paced environment."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "about-page" }, _attrs))} data-v-3bfc76a2><section class="about-hero" data-v-3bfc76a2><div class="about-container" data-v-3bfc76a2><div class="about-grid" data-v-3bfc76a2><div class="about-content-col" data-v-3bfc76a2><div class="about-tag" data-v-3bfc76a2><span class="tag-dot" data-v-3bfc76a2></span><span class="tag-text" data-v-3bfc76a2>About Me</span></div><h1 class="about-title" data-v-3bfc76a2> I&#39;m Dawood — a multidisciplinary <span class="title-serif" data-v-3bfc76a2>creative designer</span> based in Dubai. </h1><div class="about-bio" data-v-3bfc76a2><p data-v-3bfc76a2> With over 5 years of experience in design, I specialize in creating compelling visual identities, UI/UX designs, and motion graphics that help brands stand out in the digital landscape. </p><p data-v-3bfc76a2> My approach combines strategic thinking with creative execution, ensuring every project not only looks beautiful but also achieves its business objectives. From startups to established brands, I bring ideas to life through thoughtful design. </p></div><div class="about-stats" data-v-3bfc76a2><div class="stat" data-v-3bfc76a2><span class="stat-number" data-v-3bfc76a2>50+</span><span class="stat-label" data-v-3bfc76a2>Projects Done</span></div><div class="stat" data-v-3bfc76a2><span class="stat-number" data-v-3bfc76a2>5+</span><span class="stat-label" data-v-3bfc76a2>Years Exp.</span></div><div class="stat" data-v-3bfc76a2><span class="stat-number" data-v-3bfc76a2>30+</span><span class="stat-label" data-v-3bfc76a2>Happy Clients</span></div></div></div><div class="about-image-col" data-v-3bfc76a2><div class="about-image-wrapper" data-v-3bfc76a2><div class="gyro-card" data-v-3bfc76a2><div class="holo-card" data-v-3bfc76a2><div class="holo-shine" data-v-3bfc76a2></div></div></div></div></div></div></div></section><section class="skills-section" data-v-3bfc76a2><div class="about-container" data-v-3bfc76a2><h2 class="section-heading" data-v-3bfc76a2>Expertise</h2><div class="skills-grid" data-v-3bfc76a2><!--[-->`);
      ssrRenderList(skills, (skill) => {
        _push(`<div class="skill-card" data-v-3bfc76a2><div class="skill-icon" data-v-3bfc76a2>${skill.icon ?? ""}</div><h3 class="skill-title" data-v-3bfc76a2>${ssrInterpolate(skill.title)}</h3><p class="skill-desc" data-v-3bfc76a2>${ssrInterpolate(skill.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="tools-section" data-v-3bfc76a2><div class="about-container" data-v-3bfc76a2><h2 class="section-heading" data-v-3bfc76a2>Tools &amp; Software</h2><div class="tools-list" data-v-3bfc76a2><!--[-->`);
      ssrRenderList(tools, (tool) => {
        _push(`<span class="tool-tag" data-v-3bfc76a2>${ssrInterpolate(tool)}</span>`);
      });
      _push(`<!--]--></div></div></section><section class="experience-section" data-v-3bfc76a2><div class="about-container" data-v-3bfc76a2><h2 class="section-heading" data-v-3bfc76a2>Experience</h2><div class="timeline" data-v-3bfc76a2><!--[-->`);
      ssrRenderList(experiences, (exp, i) => {
        _push(`<div class="timeline-item" data-v-3bfc76a2><div class="timeline-year" data-v-3bfc76a2>${ssrInterpolate(exp.year)}</div><div class="timeline-content" data-v-3bfc76a2><h3 class="timeline-role" data-v-3bfc76a2>${ssrInterpolate(exp.role)}</h3><p class="timeline-company" data-v-3bfc76a2>${ssrInterpolate(exp.company)}</p><p class="timeline-desc" data-v-3bfc76a2>${ssrInterpolate(exp.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3bfc76a2"]]);
export {
  about as default
};
//# sourceMappingURL=about-BVzxrpPh.js.map
