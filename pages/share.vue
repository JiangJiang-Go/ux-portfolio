<template>
  <main class="project-detail">
    <!-- 顶部固定导航 -->
    <nav class="detail-nav">
      <div class="nav-links">
        <NuxtLink to="/" class="nav-link" @mouseenter="onLinkEnter($event)" @mouseleave="onLinkLeave($event)">
          <div class="nav-icon-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </div>
          <div class="nav-text"><p>返回</p></div>
        </NuxtLink>
        <NuxtLink to="/#projects" class="nav-link" @mouseenter="onLinkEnter($event)" @mouseleave="onLinkLeave($event)">
          <div class="nav-icon-wrap">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z"/></svg>
          </div>
          <div class="nav-text"><p>项目总览</p></div>
        </NuxtLink>
        <NuxtLink to="/about" class="nav-link" @mouseenter="onLinkEnter($event)" @mouseleave="onLinkLeave($event)">
          <div class="nav-icon-wrap">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd"/></svg>
          </div>
          <div class="nav-text"><p>个人简历</p></div>
        </NuxtLink>
        <NuxtLink to="/contact" class="nav-link" @mouseenter="onLinkEnter($event)" @mouseleave="onLinkLeave($event)">
          <div class="nav-icon-wrap">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd"/></svg>
          </div>
          <div class="nav-text"><p>联系方式</p></div>
        </NuxtLink>
      </div>
    </nav>

    <!-- 项目信息 -->
    <section class="project-header">
      <div class="header-container">
        <div class="tags">
          <span class="tag">精细化迭代</span>
          <span class="tag">设计价值量化</span>
          <span class="tag">数据提升</span>
        </div>
        <h1 class="project-title">优选微信分享卡片迭代</h1>
        <p class="project-desc">群商卡是店推渠道最直观面向用户的环节，直接对 uv 做功。面对群内本品和竞品共存的情况，需不断提升卡片吸引力获取更多顾客资源。</p>
      </div>
    </section>

    <!-- 项目图片 -->
    <section class="project-images">
      <div class="images-container">
        <div v-for="(img, idx) in project.images" :key="idx" class="image-block">
          <img :src="img" :alt="`微信分享卡片 ${idx + 1}`" loading="lazy" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const project = {
  images: [
    '/微信分享卡片/微信分享卡片-01@0.5x.png',
    '/微信分享卡片/微信分享卡片-02@0.5x.png',
    '/微信分享卡片/微信分享卡片-03@0.5x.png',
    '/微信分享卡片/微信分享卡片-04@0.5x.png',
    '/微信分享卡片/微信分享卡片-05@0.5x.png',
    '/微信分享卡片/微信分享卡片-06@0.5x.png',
  ]
}
useHead({ title: '微信分享卡片 | 蒋林根' })

// ─── 导航 hover 动画 ───
const LINK_W = 66
const ICON_SIZE = 34
const ANIM_DUR = 250

function onLinkEnter(e) {
  const link = e.currentTarget
  if (link.dataset.hovering === '1') return
  link.dataset.hovering = '1'
  const iconWrap = link.querySelector('.nav-icon-wrap')
  const textWrap = link.querySelector('.nav-text')
  const textP = textWrap?.querySelector('p')
  const textW = textP ? textP.offsetWidth : 54
  const targetW = textW + 32 + 4
  link.animate([{ width: LINK_W + 'px' }, { width: targetW + 'px' }], { duration: ANIM_DUR, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' })
  iconWrap.animate([{ top: 'calc(50% - ' + (ICON_SIZE / 2) + 'px)' }, { top: -(ICON_SIZE + 10) + 'px' }], { duration: ANIM_DUR, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' })
  const textH = textP ? textP.offsetHeight : 18
  textWrap.animate([{ top: 'calc(100% + 5px)', left: '50%', transform: 'translateX(-50%)' }, { top: 'calc(50% - ' + (textH / 2) + 'px)', left: '50%', transform: 'translateX(-50%)' }], { duration: ANIM_DUR, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' })
}

function onLinkLeave(e) {
  const link = e.currentTarget
  if (link.dataset.hovering !== '1') return
  link.dataset.hovering = '0'
  const iconWrap = link.querySelector('.nav-icon-wrap')
  const textWrap = link.querySelector('.nav-text')
  const textP = textWrap?.querySelector('p')
  const textH = textP ? textP.offsetHeight : 18
  link.animate([{ width: (link.offsetWidth) + 'px' }, { width: LINK_W + 'px' }], { duration: ANIM_DUR, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' })
  iconWrap.animate([{ top: -(ICON_SIZE + 10) + 'px' }, { top: 'calc(50% - ' + (ICON_SIZE / 2) + 'px)' }], { duration: ANIM_DUR, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' })
  textWrap.animate([{ top: 'calc(50% - ' + (textH / 2) + 'px)', left: '50%', transform: 'translateX(-50%)' }, { top: 'calc(100% + 5px)', left: '50%', transform: 'translateX(-50%)' }], { duration: ANIM_DUR, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' })
}
</script>

<style scoped>
.project-detail {
  min-height: 100vh;
  background: var(--bg, rgb(10, 10, 10));
}

.detail-nav {
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  will-change: transform;
  pointer-events: none;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px;
  border: 1px solid rgba(255,255,255,0.09);
  border-radius: 30px;
  background: rgba(255,255,255,0.04);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  pointer-events: auto;
}

.nav-link {
  width: 66px;
  height: 66px;
  border-radius: 20px;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  flex: 0 0 auto;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.02);
  display: block;
  cursor: pointer;
  font-family: "General Sans", "General Sans Placeholder", sans-serif;
}

.nav-icon-wrap {
  position: absolute;
  width: 34px;
  height: 34px;
  top: calc(50% - 17px);
  left: calc(50% - 17px);
  flex: 0 0 auto;
}
.nav-icon-wrap svg {
  width: 100%;
  height: 100%;
  display: block;
  color: rgb(255, 255, 255);
}

.nav-text {
  position: absolute;
  white-space: nowrap;
  height: auto;
  top: calc(100% + 5px);
  left: 50%;
  transform: translateX(-50%);
  flex: 0 0 auto;
}
.nav-text p {
  margin: 0;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.05em;
  color: rgb(224, 224, 224);
  line-height: 1.2;
  font-family: "General Sans", "General Sans Placeholder", sans-serif;
}

/* ─── 项目信息 ─── */
.project-header {
  padding-top: 185px;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 4rem;
  text-align: center;
}
.header-container {
  max-width: 800px;
  margin: 0 auto;
}

.tags {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
}
.tag {
  padding: 0.4rem 1rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.02em;
}

.project-title {
  font-family: "General Sans", "General Sans Placeholder", -apple-system, sans-serif;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 1000;
  letter-spacing: -0.04em;
  color: rgb(230, 230, 230);
  line-height: 1.3;
  margin-bottom: 1.5rem;
}

.project-desc {
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.5);
  max-width: 640px;
  margin: 0 auto;
}

/* ─── 项目图片 ─── */
.project-images {
  padding: 0 2rem 5rem;
}
.images-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.image-block {
  width: 100%;
  border-radius: 24px;
  overflow: hidden;
  background: #111;
}
.image-block img {
  width: 100%;
  height: auto;
  display: block;
}

/* ─── 响应式 ─── */
@media (max-width: 768px) {
  .detail-nav { top: 16px; }
  .project-header { padding-top: 90px; padding-left: 1rem; padding-right: 1rem; padding-bottom: 3rem; }
  .project-images { padding: 0 1rem 3rem; }
}
@media (max-width: 480px) {
  .nav-link { width: 56px; height: 56px; }
  .nav-icon-wrap { width: 28px; height: 28px; top: calc(50% - 14px); left: calc(50% - 14px); }
}
</style>
