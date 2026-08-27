<template>
  <main class="project-detail">
    <!-- 顶部固定导航 — 默认展示图标，hover 切换为文字（与首页导航相同） -->
    <nav class="detail-nav">
      <div class="nav-links">
        <!-- 返回 -->
        <NuxtLink to="/" class="nav-link" @mouseenter="onLinkEnter($event)" @mouseleave="onLinkLeave($event)">
          <div class="nav-icon-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </div>
          <div class="nav-text"><p>返回</p></div>
        </NuxtLink>
        <!-- 项目总览 -->
        <NuxtLink to="/#projects" class="nav-link" @mouseenter="onLinkEnter($event)" @mouseleave="onLinkLeave($event)">
          <div class="nav-icon-wrap">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z"/></svg>
          </div>
          <div class="nav-text"><p>项目总览</p></div>
        </NuxtLink>
        <!-- 个人简历 -->
        <NuxtLink to="/#about" class="nav-link" @mouseenter="onLinkEnter($event)" @mouseleave="onLinkLeave($event)">
          <div class="nav-icon-wrap">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd"/></svg>
          </div>
          <div class="nav-text"><p>个人简历</p></div>
        </NuxtLink>
        <!-- 联系方式 -->
        <NuxtLink to="/#contact" class="nav-link" @mouseenter="onLinkEnter($event)" @mouseleave="onLinkLeave($event)">
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
          <span class="tag">UI设计</span>
          <span class="tag">动画设计</span>
          <span class="tag">AIGC</span>
        </div>
        <h1 class="project-title">优选账单</h1>
        <p class="project-desc">为优化用户购物路径并提升跨品类购买，拟通过可视化的优选账单玩法，利用消费数据量化、省钱提示和缺陷引导等手段，刺激用户重复购买和探索新品类。</p>
      </div>
    </section>

    <!-- 项目图片 -->
    <section class="project-images">
      <div class="images-container">
        <div v-for="(img, idx) in project.images" :key="idx" class="image-block">
          <img :src="img" :alt="`优选账单 ${idx + 1}`" loading="lazy" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const project = {
  title: '优选账单',
  tags: ['UI设计', '动画设计', 'AIGC'],
  description: '为优化用户购物路径并提升跨品类购买，拟通过可视化的优选账单玩法，利用消费数据量化、省钱提示和缺陷引导等手段，刺激用户重复购买和探索新品类。',
  images: [
    '/优选账单-detail-1.png',
  ]
}
useHead({ title: '优选账单 | Dawood' })

// ─── 导航 hover 动画（与原网站 framer 效果一致） ───
// 默认：link 66×66，图标居中，文字隐藏在下方
// hover：link 宽度展开（按文字宽度），图标向上移出，文字上移到中间
const LINK_W = 66      // 默认宽度
const ICON_SIZE = 34   // 图标尺寸
const ANIM_DUR = 250   // 动画时长 ms

function onLinkEnter(e) {
  const link = e.currentTarget
  if (link.dataset.hovering === '1') return
  link.dataset.hovering = '1'

  const iconWrap = link.querySelector('.nav-icon-wrap')
  const textWrap = link.querySelector('.nav-text')
  const textP = textWrap?.querySelector('p')
  const textW = textP ? textP.offsetWidth : 54

  // 目标宽度：文字宽度 + 左右 padding (16*2) + icon/icon margin
  const targetW = textW + 32 + 4  // 32 = 左右 padding，4 = icon 与文字间距

  // link 展开宽度
  link.animate([
    { width: LINK_W + 'px' },
    { width: targetW + 'px' }
  ], { duration: ANIM_DUR, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' })

  // icon 向上移出
  iconWrap.animate([
    { top: 'calc(50% - ' + (ICON_SIZE / 2) + 'px)' },
    { top: -(ICON_SIZE + 10) + 'px' }
  ], { duration: ANIM_DUR, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' })

  // 文字从下方移动到中间（水平居中：left: 50% + translateX(-50%)）
  const textH = textP ? textP.offsetHeight : 18
  textWrap.animate([
    { top: 'calc(100% + 5px)', left: '50%', transform: 'translateX(-50%)' },
    { top: 'calc(50% - ' + (textH / 2) + 'px)', left: '50%', transform: 'translateX(-50%)' }
  ], { duration: ANIM_DUR, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' })
}

function onLinkLeave(e) {
  const link = e.currentTarget
  if (link.dataset.hovering !== '1') return
  link.dataset.hovering = '0'

  const iconWrap = link.querySelector('.nav-icon-wrap')
  const textWrap = link.querySelector('.nav-text')
  const textP = textWrap?.querySelector('p')
  const textH = textP ? textP.offsetHeight : 18

  // 恢复默认
  link.animate([
    { width: (link.offsetWidth) + 'px' },
    { width: LINK_W + 'px' }
  ], { duration: ANIM_DUR, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' })

  iconWrap.animate([
    { top: -(ICON_SIZE + 10) + 'px' },
    { top: 'calc(50% - ' + (ICON_SIZE / 2) + 'px)' }
  ], { duration: ANIM_DUR, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' })

  textWrap.animate([
    { top: 'calc(50% - ' + (textH / 2) + 'px)', left: '50%', transform: 'translateX(-50%)' },
    { top: 'calc(100% + 5px)', left: '50%', transform: 'translateX(-50%)' }
  ], { duration: ANIM_DUR, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' })
}
</script>

<style scoped>
.project-detail {
  min-height: 100vh;
  background: var(--bg, rgb(10, 10, 10));
}

/* ─── 顶部导航（固定在顶部） ─── */
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

/* nav-link：66×66 默认方形盒子，overflow hidden 隐藏文字 */
.nav-link {
  /* 由 JS 设置 width:66px; 这里设初始 */
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

/* 图标容器：绝对定位居中 */
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

/* 文字容器：绝对定位隐藏在下方 */
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
