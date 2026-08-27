import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
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
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "about-page" }, _attrs))} data-v-418146c6><section class="about-hero" data-v-418146c6><div class="about-container" data-v-418146c6><div class="about-grid" data-v-418146c6><div class="about-image-col" data-v-418146c6><div class="about-image-wrapper" data-v-418146c6><div class="about-image-placeholder" data-v-418146c6><svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" opacity="0.3" data-v-418146c6><circle cx="12" cy="8" r="4" data-v-418146c6></circle><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" data-v-418146c6></path></svg></div></div></div><div class="about-content-col" data-v-418146c6><div class="about-tag" data-v-418146c6><span class="tag-dot" data-v-418146c6></span><span class="tag-text" data-v-418146c6>About Me</span></div><h1 class="about-title" data-v-418146c6> I&#39;m Dawood \u2014 a multidisciplinary <span class="title-serif" data-v-418146c6>creative designer</span> based in Dubai. </h1><div class="about-bio" data-v-418146c6><p data-v-418146c6> With over 5 years of experience in design, I specialize in creating compelling visual identities, UI/UX designs, and motion graphics that help brands stand out in the digital landscape. </p><p data-v-418146c6> My approach combines strategic thinking with creative execution, ensuring every project not only looks beautiful but also achieves its business objectives. From startups to established brands, I bring ideas to life through thoughtful design. </p></div><div class="about-stats" data-v-418146c6><div class="stat" data-v-418146c6><span class="stat-number" data-v-418146c6>50+</span><span class="stat-label" data-v-418146c6>Projects Done</span></div><div class="stat" data-v-418146c6><span class="stat-number" data-v-418146c6>5+</span><span class="stat-label" data-v-418146c6>Years Exp.</span></div><div class="stat" data-v-418146c6><span class="stat-number" data-v-418146c6>30+</span><span class="stat-label" data-v-418146c6>Happy Clients</span></div></div></div></div></div></section><section class="skills-section" data-v-418146c6><div class="about-container" data-v-418146c6><h2 class="section-heading" data-v-418146c6>Expertise</h2><div class="skills-grid" data-v-418146c6><!--[-->`);
      ssrRenderList(skills, (skill) => {
        var _a;
        _push(`<div class="skill-card" data-v-418146c6><div class="skill-icon" data-v-418146c6>${(_a = skill.icon) != null ? _a : ""}</div><h3 class="skill-title" data-v-418146c6>${ssrInterpolate(skill.title)}</h3><p class="skill-desc" data-v-418146c6>${ssrInterpolate(skill.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="tools-section" data-v-418146c6><div class="about-container" data-v-418146c6><h2 class="section-heading" data-v-418146c6>Tools &amp; Software</h2><div class="tools-list" data-v-418146c6><!--[-->`);
      ssrRenderList(tools, (tool) => {
        _push(`<span class="tool-tag" data-v-418146c6>${ssrInterpolate(tool)}</span>`);
      });
      _push(`<!--]--></div></div></section><section class="experience-section" data-v-418146c6><div class="about-container" data-v-418146c6><h2 class="section-heading" data-v-418146c6>Experience</h2><div class="timeline" data-v-418146c6><!--[-->`);
      ssrRenderList(experiences, (exp, i) => {
        _push(`<div class="timeline-item" data-v-418146c6><div class="timeline-year" data-v-418146c6>${ssrInterpolate(exp.year)}</div><div class="timeline-content" data-v-418146c6><h3 class="timeline-role" data-v-418146c6>${ssrInterpolate(exp.role)}</h3><p class="timeline-company" data-v-418146c6>${ssrInterpolate(exp.company)}</p><p class="timeline-desc" data-v-418146c6>${ssrInterpolate(exp.description)}</p></div></div>`);
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
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-418146c6"]]);

export { about as default };
//# sourceMappingURL=about-B9kB1RrC.mjs.map
