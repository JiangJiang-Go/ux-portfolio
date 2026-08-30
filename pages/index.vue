<template>
  <main class="home">
    <!-- ============================================================
         Hero Section — 1:1 还原 dawood.works

         DOM 层级结构（从底到顶）:
         1. Profile widget (z-index: auto, DOM idx 0) — 被桌面覆盖
         2. Name "Dawood H." (z-index: auto, DOM idx 1) — 被桌面覆盖
         3. Book a Call (z-index: auto, DOM idx 2) — 被桌面覆盖
         4. Roles (z-index: auto, DOM idx 3) — 被桌面覆盖
         5. Desktop Scene (z-index: auto, DOM idx 4, 最后) — 覆盖上面所有

         桌面场景内部 (从底到顶):
         - desk-mat (z:0) → desk-screen-group (z:1) → phone (z:2) →
           journal (z:3) → headphone (z:4) → skill-tags (z:5) →
           sticky icons (z:6) → big avatar (z:7) → ellipse shadow (z:8) →
           spotlight overlay (z:9) → laptop frame (z:10)
    ============================================================ -->

    <!-- 页面包装器 — flexbox 居中 -->
    <div class="hero-wrapper">

      <!-- 主 Hero 区域 -->
      <section
        class="hero-desktop"
        ref="heroDesktop"
        @mouseenter="onHeroEnter"
        @mouseleave="onHeroLeave"
      >

        <!-- ====== DOM idx 0: Profile Widget (原站 top:502.5, left:14, w:159, h:159) ====== -->
        <div class="hero-profile-widget" ref="itemProfile">
          <div class="profile-img-wrap">
            <img :src="'/ux-portfolio/头像.png'" alt="Profile" />
          </div>
          <div class="location-pill">
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" /></svg>
            <div class="location-scroll">
              <div class="location-list">
                <span>北京</span><span>深圳</span><span>广州</span><span>杭州</span><span>上海</span>
                <span>北京</span><span>深圳</span><span>广州</span><span>杭州</span><span>上海</span>
              </div>
            </div>
          </div>
        </div>

        <!-- ====== DOM idx 1: Name "Dawood H." (原站 top:464, left:194) ====== -->
        <h1 class="hero-name" ref="itemName">蒋林根</h1>

        <!-- ====== DOM idx 2: Book a Call (原站 top:515, right:14) ====== -->
        <a href="#call" class="hero-book-call" ref="itemBookCall">
          <span class="book-call-inner">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" /></svg>
            <span>Book a call</span>
          </span>
        </a>

        <!-- ====== DOM idx 3: Roles (原站 top:637, left:199) ====== -->
        <div class="hero-roles" ref="itemRoles">
          <span class="role-text">UI/UX Designer</span>
          <span class="role-divider" />
          <span class="role-text">Web Developer</span>
          <span class="role-divider" />
          <span class="role-text">Digital Designer</span>
        </div>

        <!-- ====== DOM idx 4: Desktop Scene (最上层，覆盖上面所有) ====== -->
        <div class="desk-scene">

          <!-- 层级 0: 桌垫 (最底层) -->
          <div class="desk-mat" />

          <!-- 层级 1: 桌面截图 Group -->
          <div class="desk-screen-group" ref="itemScreenGroup">
            <div class="desk-screen">
              <img src="https://framerusercontent.com/images/ZRkHHmJ3m86vvSvvFfCWFAnsNE.png?width=3340&height=1492" alt="Laptop screen" />
            </div>
          </div>

          <!-- 层级 2: 手机 image 19 (小手机 55x111) -->
          <div class="desk-phone" ref="itemPhone">
            <img src="https://framerusercontent.com/images/0fApSrVnWcRE5ivMpq1zdBkZJM.png?width=224&height=448" alt="Phone" />
          </div>

          <!-- 层级 3: 笔记本 Journal 42 (419x352, getBoundingClientRect: left:322, top:172) -->
          <div class="desk-journal" ref="itemJournal">
            <img src="https://framerusercontent.com/images/N9Jx8TOTtTbmuKWo3pFmpihlgng.png?width=1071&height=901" alt="Journal" />
          </div>

          <!-- 层级 4: 耳机 pngegg (140x147) — transform 动画作用在 img 上，外层定位不变 -->
          <div class="desk-headphone" ref="itemHeadphone">
            <img src="https://framerusercontent.com/images/zytdL5OOhlKQDgjGefV81NI6BGQ.png?width=376&height=460" alt="" />
          </div>

          <!-- 层级 5: 技能标签 (在 desk-scene 内，hover laptop 时从右侧移入) -->
          <div class="skill-tag skill-figma">Figma</div>
          <div class="skill-tag skill-framer">Framer</div>
          <div class="skill-tag skill-photoshop">Photoshop</div>
          <div class="skill-tag skill-aftereffects">After Effects</div>
          <div class="skill-tag skill-illustrator">Illustrator</div>

          <!-- 层级 6: 工具图标 Frame 34-38 -->
          <div class="desk-sticky desk-sticky-1" ref="itemSticky1">
            <img src="https://framerusercontent.com/images/C10IAmJ6FmfbQySPAXoIg6Qv2c.png?width=143&height=185" alt="" />
          </div>
          <div class="desk-sticky desk-sticky-2" ref="itemSticky2">
            <img src="https://framerusercontent.com/images/FJvXia4EesGCFQqUoRcqKatijyE.png?width=151&height=185" alt="" />
          </div>
          <div class="desk-sticky desk-sticky-3" ref="itemSticky3">
            <img src="https://framerusercontent.com/images/eJeLWTIPLLuBRi6OnEdLINeHw.png?width=175&height=175" alt="" />
          </div>
          <div class="desk-sticky desk-sticky-4" ref="itemSticky4">
            <img src="https://framerusercontent.com/images/dZLuYX8EiWe0WLZm520Z4nPDy4.png?width=174&height=175" alt="" />
          </div>
          <div class="desk-sticky desk-sticky-5" ref="itemSticky5">
            <img src="https://framerusercontent.com/images/vqeeFTbIUjt2d25HXfdZmrVnY.png?width=173&height=175" alt="" />
          </div>

          <!-- 层级 7: 大头像 (296x296, square, NO border-radius) -->
          <div class="desk-bigavatar" ref="itemBigAvatar">
            <img src="https://framerusercontent.com/images/lL66ZgX3g42q2tEaTQmJA2wvo.png?width=892&height=892" alt="Avatar" />
          </div>

          <!-- 层级 8: Ellipse 75 暗影叠加 -->
          <div class="desk-ellipse-shadow" />

          <!-- 层级 9: Spotlight 聚光圈 (framer-dwi842) -->
          <div class="desk-spotlight" ref="spotlight" />

          <!-- 层级 10: Laptop 框架 (最顶层) -->
          <div class="desk-laptop-frame" ref="itemLaptop">
            <img src="https://framerusercontent.com/images/DEx7NVGd42EHFqdO51hNp7nNIw.png?width=3341&height=2989" alt="" />
            <div class="hero-light" />
          </div>

          <!-- 技能标签独立热区 (在 desk-scene 内部，坐标与 sticky icons/skill-tags 一致) -->
          <div class="hotspot hotspot-skills" @mouseenter="onSkillsEnter" @mouseleave="onSkillsLeave" />

        </div>

        <!-- 交互热区 — 每个热区直接覆盖对应物品，hover 时只触发该物品动画
             laptop 大热区在底层(z:15), 其他小热区在上层(z:20)截断事件
             hotspot-laptop → laptop 场景动画(sticky散开+skill标签+bigavatar移位)
             hotspot-pencil → journal 抖动放大
             hotspot-mouse → phone 移动
             hotspot-headphone → 耳机晃动放大
             hotspot-bigavatar → bigavatar 移位放大 -->
        <div class="hotspot hotspot-laptop" @mouseenter="onLaptopEnter" @mouseleave="onLaptopLeave" />
        <div class="hotspot hotspot-pencil" @mouseenter="onPencilEnter" @mouseleave="onPencilLeave" />
        <div class="hotspot hotspot-mouse" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" />
        <div class="hotspot hotspot-headphone" @mouseenter="onHeadphoneEnter" @mouseleave="onHeadphoneLeave" />
        <div class="hotspot hotspot-bigavatar" @mouseenter="onBigAvatarEnter" @mouseleave="onBigAvatarLeave" />

        <!-- Contact -->
        <div class="hero-contact" ref="itemContact">
          <span class="contact-item">
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"/><path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"/></svg>
            dawoodh2306@gmail.com
          </span>
          <span class="role-divider" />
          <span class="contact-item">
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" /></svg>
            +44 7356041419
          </span>
        </div>

      </section>

    </div>

<!-- ========== Carousel Section ========== -->
<section id="projects" class="carousel-section">
      <div class="carousel-row">
        <div class="carousel-track">
          <a v-for="item in carouselItems" :key="item.title" :href="item.href" class="carousel-card">
            <img :src="item.image" :alt="item.title" class="carousel-img" />
            <div class="carousel-pill"><span class="pill-text">{{ item.title }}</span></div>
          </a>
        </div>
      </div>
      <div class="carousel-row">
        <div class="carousel-track track-reverse">
          <a v-for="item in carouselItemsReverse" :key="item.title + 'r'" :href="item.href" class="carousel-card">
            <img :src="item.image" :alt="item.title" class="carousel-img" />
            <div class="carousel-pill"><span class="pill-text">{{ item.title }}</span></div>
          </a>
        </div>
      </div>
    </section>

<!-- ========== Project Cards Section ========== -->
<section class="projects-section">
      <div class="projects-grid">
        <div v-for="(row, rowIndex) in chunkedWorks" :key="rowIndex" class="project-row">
          <ProjectCard v-for="work in row" :key="work.slug" :work="work" />
        </div>
      </div>
    </section>

    <div class="bottom-spacer" />

    <footer class="site-footer">
      <span class="footer-left">© 2026 Dawood</span>
      <span class="footer-right">Liverpool</span>
    </footer>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

// 响应式缩放：JS 动态计算 scale 保证任何宽度下居中不溢出
// 原理：wrapper 设计宽度 1201px，当视口 < 1201 时，等比例缩放
// 1. 左右保留 20px padding
// 2. transform-origin: top left 从左上角缩放
const BASE_WIDTH = 1201
const BASE_HEIGHT = 831
const SIDE_PADDING = 20
function updateHeroScale() {
  const vw = document.documentElement.clientWidth
  const wrapper = document.querySelector('.hero-wrapper')
  if (!wrapper) return
  if (vw >= BASE_WIDTH) {
    wrapper.style.transform = ''
    wrapper.style.marginBottom = ''
    wrapper.style.left = ''
  } else {
    const availableWidth = vw - SIDE_PADDING * 2
    const scale = availableWidth / BASE_WIDTH
    const scaledWidth = BASE_WIDTH * scale
    const leftPx = SIDE_PADDING + (availableWidth - scaledWidth) / 2
    wrapper.style.position = 'relative'
    wrapper.style.left = leftPx + 'px'
    wrapper.style.transformOrigin = 'top left'
    wrapper.style.transform = 'scale(' + scale + ')'
    wrapper.style.marginBottom = (-BASE_HEIGHT * (1 - scale)) + 'px'
  }
}
import { works } from '~/data/works'
import ProjectCard from '~/components/ProjectCard.vue'

const chunkedWorks = computed(() => {
  const limited = works.slice(0, 8)
  const rows = []
  for (let i = 0; i < limited.length; i += 2) rows.push(limited.slice(i, i + 2))
  return rows
})

// Refs
const heroDesktop = ref(null)
const itemNav = ref(null)
const itemScreenGroup = ref(null)
const itemPhone = ref(null)
const itemJournal = ref(null)
const itemHeadphone = ref(null)
const itemSticky1 = ref(null)
const itemSticky2 = ref(null)
const itemSticky3 = ref(null)
const itemSticky4 = ref(null)
const itemSticky5 = ref(null)
const itemBigAvatar = ref(null)
const itemProfile = ref(null)
const itemName = ref(null)
const itemBookCall = ref(null)
const itemRoles = ref(null)
const itemContact = ref(null)
const itemLaptop = ref(null)
const spotlight = ref(null)

// Spring-like easing
const springEase = 'cubic-bezier(0.22, 1, 0.36, 1)'

// Current hover loop animation targets
let currentLoops = []

onMounted(() => {
  window.scrollTo(0, 0)

  // 1. Nav — delay 0.1s, from y:150
  animateIn(itemNav.value, { y: 150, delay: 100, duration: 1300 })
  // 2. Desktop scene — delay 0.2s, from y:-982
  // Note: individual items inside desk-scene animate separately
  // 3. Phone (small) — delay 0.1s, from y:-982, rotate 88→-16
  animateIn(itemPhone.value, { y: -982, rotate: { from: 88, to: -16 }, delay: 100, duration: 1500 })
  // 4. Screen group — delay 0.3s, from y:-982
  animateIn(itemScreenGroup.value, { y: -982, delay: 300, duration: 1200 })
  // 5. Journal — delay 0.2s, from y:-1025, rotate -148→0
  animateIn(itemJournal.value, { y: -1025, rotate: { from: -148, to: 0 }, delay: 200, duration: 1700 })
  // 6. Headphone — delay 0.3s, from y:-982, 只做位移(rotate在img上)
  animateIn(itemHeadphone.value, { y: -982, delay: 300, duration: 2000 })
  // 7. Big avatar — delay 0.3s, from y:-813, rotate -172→-25, 终点要匹配CSS的translateY(-111.5px)
  animateIn(itemBigAvatar.value, { y: -813, rotate: { from: -172, to: -25 }, delay: 300, duration: 1600, finalTransform: 'translateY(-111.5px) rotate(-25deg)' })
  // 8-12. Sticky icons — delay 0.6-0.7s, from y:-813, rotate -172→target
  animateIn(itemSticky1.value, { y: -813, rotate: { from: -172, to: 19 }, delay: 700, duration: 1800 })
  animateIn(itemSticky2.value, { y: -813, rotate: { from: -172, to: 0 }, delay: 700, duration: 1800 })
  animateIn(itemSticky3.value, { y: -813, rotate: { from: -172, to: 0 }, delay: 600, duration: 1900 })
  animateIn(itemSticky4.value, { y: -813, rotate: { from: -172, to: -13 }, delay: 700, duration: 1900 })
  animateIn(itemSticky5.value, { y: -813, rotate: { from: -172, to: 0 }, delay: 700, duration: 1900 })
  // Laptop — delay 0.4s, rotate 30→0, y:-982
  animateIn(itemLaptop.value, { y: -982, rotate: { from: 30, to: 0 }, delay: 400, duration: 1600 })
  // 13. Name — delay 0.7s, from y:-278
  animateIn(itemName.value, { y: -278, delay: 700, duration: 2100 })
  // 14. Roles — delay 0.7s, from y:-222
  animateIn(itemRoles.value, { y: -222, delay: 700, duration: 1800 })
  // 15. Profile — delay 0.7s, from y:-278
  animateIn(itemProfile.value, { y: -278, delay: 700, duration: 2000 })
  // 16. Book a call — delay 0.8s, from y:-278
  animateIn(itemBookCall.value, { y: -278, delay: 800, duration: 2000 })
  // 17. Contact — delay 0.7s, from y:-278
  animateIn(itemContact.value, { y: -278, delay: 700, duration: 2000 })

  // 响应式缩放
  updateHeroScale()
  window.addEventListener('resize', updateHeroScale)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateHeroScale)
})

function animateIn(el, { y, rotate, delay = 0, duration = 1500, finalTransform }) {
  if (!el || !('animate' in el)) return
  // 如果指定了 finalTransform，用它作为终点（解决 CSS 有默认 transform 时的跳动问题）
  // 否则用 rotate.to 生成目标 transform
  const targetTransform = finalTransform !== undefined
    ? finalTransform
    : `translateY(0) rotate(${rotate ? rotate.to : 0}deg)`
  const baseTransform = rotate
    ? `translateY(${y}px) rotate(${rotate.from}deg)`
    : `translateY(${y}px)`
  // 初始状态
  el.style.opacity = '0'
  el.style.transform = baseTransform
  // 用两个嵌套 setTimeout 确保 reflow 分隔 transition 和 transform 的设置
  setTimeout(() => {
    if (!el) return
    el.style.transition = `opacity ${duration}ms ${springEase}, transform ${duration}ms ${springEase}`
    void el.offsetHeight // 强制 reflow，让 transition 属性生效
    el.style.opacity = '1'
    el.style.transform = targetTransform
    // 动画结束后清理
    setTimeout(() => {
      if (!el) return
      el.style.transition = ''
      el.style.opacity = ''
      el.style.transform = ''
    }, duration + 50)
  }, delay)
}

// ===== Hover: 循环动画系统 (mirror repeat) =====
function startLoop(el, keyframes, duration, ease = 'cubic-bezier(0.44, 0, 0.56, 1)') {
  if (!el || !('animate' in el)) return
  // Cancel any existing animation on this element
  cancelLoop(el)
  const anim = el.animate(keyframes, {
    duration,
    iterations: Infinity,
    direction: 'alternate',
    easing: ease,
    fill: 'both'
  })
  currentLoops.push({ el, anim })
}

function cancelLoop(el) {
  if (!el) return
  const idx = currentLoops.findIndex(l => l.el === el)
  if (idx >= 0) {
    currentLoops[idx].anim.cancel()
    currentLoops.splice(idx, 1)
  }
}

function cancelAllLoops() {
  currentLoops.forEach(l => l.anim.cancel())
  currentLoops = []
}

// 取消所有动画并重置所有物品到原始状态（用于切换到新热区时彻底清理）
function cancelAllLoopsAndReset() {
  currentHoverEl = null
  // 直接取消所有 WAAPI 并清除 inline style
  cancelAllLoops()
  if (itemPhone.value) { itemPhone.value.style.transform = ''; itemPhone.value.style.transition = '' }
  if (itemJournal.value) { itemJournal.value.style.transform = ''; itemJournal.value.style.transition = '' }
  if (itemHeadphone.value) {
    itemHeadphone.value.style.transform = ''
    const hpImg = itemHeadphone.value.querySelector('img')
    if (hpImg) { hpImg.style.transform = ''; hpImg.style.transition = '' }
  }
  if (itemBigAvatar.value) { itemBigAvatar.value.style.transform = ''; itemBigAvatar.value.style.transition = '' }
  heroDesktop.value?.classList.remove('skills-hover')
}

// Spotlight (聚光圈) 控制 — 根据 hover 元素移动中心点 + 切换 .active class
// spotlight: 3885x4248, left=-1242.5, top=-1983 (相对 desk-scene)
// 公式: atX% = (itemCenterRelLeft + 1242.5) / 3885 * 100
//       atY% = (itemCenterRelTop + 1983) / 4248 * 100
function setSpotlightAt(relCenterX, relCenterY) {
  const el = spotlight.value
  if (!el) return
  const cx = ((relCenterX + 1242.5) / 3885 * 100).toFixed(1)
  const cy = ((relCenterY + 1983) / 4248 * 100).toFixed(1)
  // 完全复制原站 framer-dwi842 的渐变
  el.style.background = `radial-gradient(50% 50% at ${cx}% ${cy}%, rgba(0,0,0,0) 2.7027%, rgba(255,255,255,0) 36.036%, rgba(0,0,0,0.5) 43.9459%, rgba(0,0,0,0.65) 51.3514%, rgba(0,0,0,0.9) 68.018%)`
  // 添加 .active 触发 scale + opacity 动画
  el.classList.add('active')
}

function hideSpotlight() {
  const el = spotlight.value
  if (!el) return
  el.classList.remove('active')
}

function showSpotlight(variant) {
  switch (variant) {
    case 'laptop':    // laptop 中心 (23+557, 65+498) = (580, 563)
      setSpotlightAt(580, 563)
      break
    case 'phone':     // phone 中心 (877+27, 383+55) = (904, 438)
      setSpotlightAt(904, 438)
      break
    case 'journal':   // journal 中心 (-45+209, 293+176) = (164, 469)
      setSpotlightAt(164, 469)
      break
    case 'headphone': // headphone 中心 (218+70, 206+73) = (288, 279)
      setSpotlightAt(288, 279)
      break
    case 'bigavatar': // avatar 中心 (853+148, 120+148) = (1001, 268)
      setSpotlightAt(1001, 268)
      break
    default:          // desk 中心 (1172/2, 597/2) = (586, 298)
      setSpotlightAt(586, 298)
      break
  }
}

// === 交互热区事件处理 ===
// 每个 hover 只触发自己的动画和 spotlight，不互相叠加

function onLaptopEnter() {
  showSpotlight('laptop')
  heroDesktop.value?.classList.add('hover-laptop')
  // Laptop 本身轻微上下浮动 + 放大循环动画
  const laptop = itemLaptop.value
  if (laptop) {
    cancelLoop(laptop)
    enterHover(laptop,
      'translateY(0) rotate(0deg) scale(1.04)',
      [
        { transform: 'translateY(0) rotate(0deg) scale(1.04)' },
        { transform: 'translateY(-6px) rotate(0.3deg) scale(1.04)' }
      ], 1800
    )
  }
}

function onLaptopLeave() {
  hideSpotlight()
  cancelLoop(itemLaptop.value)
  animateReturn(itemLaptop.value, 'translateY(0) rotate(0deg) scale(1)')
  heroDesktop.value?.classList.remove('hover-laptop')
}

// 鼠标热区 (framer-14xo172) → 触发 desk-phone (image 19) 动画
function onMouseEnter() {
  showSpotlight('phone')
  const phone = itemPhone.value
  if (phone) {
    enterHover(phone,
      'rotate(-16deg) scale(1.1)',
      [
        { transform: 'rotate(-16deg) translate(0, 0) scale(1.1)' },
        { transform: 'rotate(-7deg) translate(-28px, -11px) scale(1.1)' }
      ], 1400
    )
  }
}

function onMouseLeave() {
  hideSpotlight()
  cancelLoop(itemPhone.value)
  animateReturn(itemPhone.value, 'rotate(-16deg) scale(1)')
}

// 笔热区 — 覆盖笔记本(journal)位置，hover 时 journal 放大并左右摆动
function onPencilEnter() {
  showSpotlight('journal')
  const journal = itemJournal.value
  if (journal) {
    enterHover(journal,
      'rotate(0deg) scale(1.1)',
      [
        { transform: 'rotate(0deg) scale(1.1)' },
        { transform: 'rotate(6deg) scale(1.1)' }
      ], 1000
    )
  }
}

function onPencilLeave() {
  hideSpotlight()
  cancelLoop(itemJournal.value)
  animateReturn(itemJournal.value, 'rotate(0deg) scale(1)')
}

// 耳机热区 — hover 时动画作用在 img 上（外层 div 定位不变，scale 不会导致位移）
function onHeadphoneEnter() {
  showSpotlight('headphone')
  const hp = itemHeadphone.value
  const img = hp?.querySelector('img')
  if (img) {
    enterHover(img,
      'rotate(-150deg) scale(1.1)',
      [
        { transform: 'rotate(-150deg) scale(1.1)' },
        { transform: 'rotate(-142deg) scale(1.1)' }
      ], 1200
    )
  }
}

function onHeadphoneLeave() {
  hideSpotlight()
  animateReturn(itemHeadphone.value?.querySelector('img'), 'rotate(-150deg) scale(1)')
}

function onBigAvatarEnter() {
  showSpotlight('bigavatar')
  const avatar = itemBigAvatar.value
  if (avatar) {
    enterHover(avatar,
      'translateY(-111.5px) rotate(-25deg) scale(1.1)',
      [
        { transform: 'translateY(-111.5px) rotate(-25deg) scale(1.1)' },
        { transform: 'translateY(-111.5px) rotate(-15deg) translate(-2px, -6px) scale(1.1)' }
      ], 1700
    )
  }
}

function onBigAvatarLeave() {
  hideSpotlight()
  cancelLoop(itemBigAvatar.value)
  animateReturn(itemBigAvatar.value, 'translateY(-111.5px) rotate(-25deg) scale(1)')
}

// 追踪当前 hover 的元素
let currentHoverEl = null

// Hover 进入：放大和摆动同时进行
// 方案：两个 WAAPI 动画
//   动画1 (enterAnim, 750ms, 不循环): 从 scale(1) 到 kfA
//     - WAAPI 会同时插值 scale(1)→scale(1.1) 和 rotate/translate 的变化
//     - 所以"放大"和"摆动"在视觉上是同步进行的，不是串行
//   动画2 (loopAnim, 循环): 在 kfA ↔ kfB 之间无限摆动（不再缩放）
function enterHover(el, enterTransform, loopKeyframes, loopDuration) {
  if (!el) return
  // 取消该元素自身可能存在的旧动画
  cancelLoop(el)
  el.style.transition = 'none'
  currentHoverEl = el

  // 起始状态：基准旋转/位移 + scale(1)（不放大）
  const baseTransform = enterTransform.replace(/\s*scale\([^)]+\)/, '').trim() || ''
  const startTransform = baseTransform || 'scale(1)'

  // 原始摆动关键帧
  const kfA = loopKeyframes[0].transform

  // 动画1: 从 scale(1) 平滑过渡到 kfA（750ms，不循环）
  // WAAPI 同时插值 scale(1)→scale(1.1) 和 rotate/translate，实现放大和摆动同步
  const enterAnim = el.animate([
    { transform: startTransform, offset: 0 },
    { transform: kfA, offset: 1 }
  ], {
    duration: 750,
    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
    fill: 'forwards'
  })

  // 动画1自然完成后，启动原始节奏的摆动循环
  enterAnim.onfinish = () => {
    if (!el || currentHoverEl !== el) return
    const loopAnim = el.animate(loopKeyframes, {
      duration: loopDuration,
      iterations: Infinity,
      direction: 'alternate',
      easing: 'ease-in-out',
      fill: 'forwards'
    })
    const idx = currentLoops.findIndex(l => l.el === el)
    if (idx >= 0) {
      currentLoops[idx].anim = loopAnim
    } else {
      currentLoops.push({ el, anim: loopAnim })
    }
  }

  currentLoops.push({ el, anim: enterAnim })
}

// 技能标签独立热区
function onSkillsEnter() {
  heroDesktop.value?.classList.add('skills-hover')
}

function onSkillsLeave() {
  heroDesktop.value?.classList.remove('skills-hover')
}

// Smooth return animation — 缩小和回正同时进行
// 方案：先获取 WAAPI 当前视觉值，固化为 inline style，取消 WAAPI，再用 transition 缩小
function animateReturn(el, targetTransform) {
  if (!el) return
  // 在 cancel 前获取当前 WAAPI 的视觉状态
  const currentMatrix = getComputedStyle(el).transform
  // 固化当前视觉状态为 inline style（cancel 后不会跳变）
  el.style.transform = currentMatrix === 'none' ? '' : currentMatrix
  // 取消 WAAPI
  cancelLoop(el)
  // 下一帧设置 transition + 目标值（从固化状态缩小回 scale(1)）
  requestAnimationFrame(() => {
    if (!el) return
    el.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
    el.style.transform = targetTransform || ''
    // 动画结束后清理
    setTimeout(() => {
      if (el) {
        el.style.transition = ''
        el.style.transform = ''
      }
    }, 550)
  })
}

function onHeroEnter() {
  // 进入 hero 时不显示 spotlight，等具体元素 hover 才显示
}

function onHeroLeave() {
  cancelAllLoops()
  hideSpotlight()
  // 直接清除 inline transform，让 CSS 默认值立即接管（不做 WAAPI 过渡，避免动画冲突导致位移）
  if (itemPhone.value) itemPhone.value.style.transform = ''
  if (itemJournal.value) itemJournal.value.style.transform = ''
  if (itemHeadphone.value) {
    itemHeadphone.value.style.transform = ''
    const hpImg = itemHeadphone.value.querySelector('img')
    if (hpImg) { hpImg.style.transform = ''; hpImg.style.transition = '' }
  }
  if (itemBigAvatar.value) itemBigAvatar.value.style.transform = ''
  heroDesktop.value?.classList.remove('hover-laptop', 'stickies-hover')
}

const carouselItems = [
  { title: '优选账单', href: '/ux-portfolio/bill', image: '/ux-portfolio/优选账单.png' },
  { title: '微信分享卡片', href: '/ux-portfolio/share', image: '/ux-portfolio/微信分享卡片.png' },
  { title: '购物小票', href: '/ux-portfolio/receipt', image: '/ux-portfolio/购物小票.png' },
  { title: '优选账单', href: '/ux-portfolio/bill', image: '/ux-portfolio/优选账单.png' },
  { title: '微信分享卡片', href: '/ux-portfolio/share', image: '/ux-portfolio/微信分享卡片.png' },
  { title: '购物小票', href: '/ux-portfolio/receipt', image: '/ux-portfolio/购物小票.png' },
  { title: '优选账单', href: '/ux-portfolio/bill', image: '/ux-portfolio/优选账单.png' },
  { title: '微信分享卡片', href: '/ux-portfolio/share', image: '/ux-portfolio/微信分享卡片.png' },
  { title: '购物小票', href: '/ux-portfolio/receipt', image: '/ux-portfolio/购物小票.png' },
]

const carouselItemsReverse = [
  { title: '节日节气', href: '/ux-portfolio/work4', image: '/ux-portfolio/节日节气/节日节气-01.png' },
  { title: '项目5', href: '/ux-portfolio/work/项目5', image: '/ux-portfolio/项目5.png' },
  { title: '项目6', href: '/ux-portfolio/work/项目6', image: '/ux-portfolio/项目6.png' },
  { title: '项目7', href: '/ux-portfolio/work/项目7', image: '/ux-portfolio/项目7.png' },
  { title: '团好货全新改版', href: '/ux-portfolio/work/团好货', image: '/ux-portfolio/项目8.png' },
  { title: '节日节气', href: '/ux-portfolio/work4', image: '/ux-portfolio/节日节气/节日节气-01.png' },
  { title: '项目5', href: '/ux-portfolio/work/项目5', image: '/ux-portfolio/项目5.png' },
  { title: '项目6', href: '/ux-portfolio/work/项目6', image: '/ux-portfolio/项目6.png' },
  { title: '项目7', href: '/ux-portfolio/work/项目7', image: '/ux-portfolio/项目7.png' },
]
</script>

<style scoped>
.home {
  min-height: 100vh;
  overflow-x: hidden;
  padding-bottom: 120px;
  background: rgb(10, 10, 10);
}

/* =========================================================
   Hero Wrapper — flexbox 居中 + 响应式缩放
   1. 基础尺寸 1201px
   2. 当视口 < 1201px 时，scale = 100vw/1201
   3. 用 clamp 防止过度缩小(scale 最小 0.45)
   4. transform-origin: top center 保证居中缩放
   ========================================================= */
.hero-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1201px;
  margin: 0 auto;
  position: relative;
  overflow: visible;
  transform-origin: top center;
}

/* =========================================================
   Hero Desktop — 主容器 (1201x831)
   ========================================================= */
.hero-desktop {
position: relative;
width: 1201px;
height: 831px;
flex-shrink: 0;
margin-left: 10px;
}

/* =========================================================
   交互热区 — 不可见，覆盖在桌面物品上方触发 hover
   坐标相对 hero-desktop (desk-scene 偏移: top=-121, left≈14)
   ========================================================= */
.hotspot {
position: absolute;
pointer-events: auto;
background: transparent;
border: none;
cursor: pointer;
}
/* Laptop 大热区在最底层，其他小热区叠在上面避免被误触 */
.hotspot-laptop { z-index: 15; }
.hotspot-pencil { z-index: 20; }
.hotspot-headphone { z-index: 20; }
.hotspot-mouse { z-index: 20; }
.hotspot-bigavatar { z-index: 20; }
/* =========================================================
   交互热区 — 直接覆盖对应物品位置，hover 时该物品动画
   hotspot 放在 desk-scene 外面(hero-desktop 子元素), z-index分层
   desk-scene 相对 hero-desktop 偏移 (14, -121)
   ========================================================= */

/* 1. Laptop 热区: 覆盖整个 laptop 可见区域 */
.hotspot-laptop {
  left: 389px;
  top: 18.5px;
  width: 401px;
  height: 401px;
}

/* 2. 笔/笔记本热区: 覆盖 journal 位置 desk-scene内(-45,293,419,352) → hero(-31,172) */
.hotspot-pencil {
  left: 39px;
  top: 202px;
  width: 339px;
  height: 292px;
}

/* 3. 耳机热区: 覆盖耳机图片位置 desk-scene内(217,206,140,147) → hero(231,85) */
.hotspot-headphone {
  left: 231px;
  top: 135px;
  width: 180px;
  height: 56px;
  transform: rotate(-20deg);
}

/* 4. 鼠标/手机热区: 覆盖手机图片位置 desk-scene内(877,383,55,111) → hero(891,262) */
.hotspot-mouse {
  left: 891px;
  top: 262px;
  width: 80px;
  height: 145px;
  transform: rotate(-14deg);
}

/* 5. 大头像热区: 覆盖 bigavatar 位置 desk-scene内(853,120,223,223) → hero(867,-1) */
.hotspot-bigavatar {
  left: 922px;
  top: 45.5px;
  width: 223px;
  height: 223px;
}

/* 6. 技能标签热区: 独立热区 */
.hotspot-skills {
  z-index: 20;
  left: 1015px;
  top: 400px;
  width: 140px;
  height: 180px;
}

/* =========================================================
   Desktop Scene — 桌面场景内部容器 (1172x597)
   排在 DOM 最后 → 覆盖 profile/name/roles/contact
   ========================================================= */
.desk-scene {
  position: absolute;
  width: 1172px;
  height: 597px;
  top: -121px;
  left: calc(50.0416% - 586px);
  overflow: hidden;
  border-radius: 13px;
  box-shadow: 0 61px 43.6px rgba(0,0,0,1);
  z-index: 1; /* 在 profile/name/roles/contact 之上 */
}

/* === 层级 0: 桌垫 (最底层) === */
.desk-mat {
  position: absolute;
  width: 1191px;
  height: 607px;
  top: 0;
  left: calc(50% - 595.5px);
  background: linear-gradient(180deg, rgb(27,27,27) 0%, rgb(45,45,45) 100%);
  border-radius: 7px;
  z-index: 0;
  box-shadow: 0 215px 101.6px rgba(0,0,0,0), 0 109px 113.9px rgba(0,0,0,0.23);
}

/* === 层级 1: 桌面截图 Group (835x373) === */
.desk-screen-group {
  position: absolute;
  width: 835px;
  height: 373px;
  top: 191px;
  left: 178px;
  z-index: 1;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3.18px 2.97px rgba(0,0,0,0.33);
}
.desk-screen {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.desk-screen img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* === 层级 2: 手机 (55x111) === */
.desk-phone {
  position: absolute;
  width: 55px;
  height: 111px;
  bottom: 103px;
  left: 877px;
  transform: rotate(-16deg);
  z-index: 2;
  border-radius: 22.51px;
  overflow: hidden;
  box-shadow: 25px 10.13px 20.82px rgba(0,0,0,0.64), 11px 6px 12.2px rgba(0,0,0,0.72);
  will-change: transform;
}
.desk-phone img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}

/* === 层级 3: 笔记本 Journal (419x352, 相对desk-scene: left:-45, top:293) === */
.desk-journal {
  position: absolute;
  width: 419px;
  height: 352px;
  top: 293px;
  left: -45px;
  z-index: 3;
  will-change: transform;
}
.desk-journal img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* === 层级 4: 耳机 —外层只做定位(不受scale影响)，transform 动画作用在 img 上=== */
.desk-headphone {
  position: absolute;
  width: 140px;
  height: 147px;
  top: 206px;
  left: 217px;
  z-index: 4;
  filter: drop-shadow(-10px 1px 4px rgba(0,0,0,0.6));
  overflow: visible;
}
.desk-headphone img {
  width: 100%;
  height: 100%;
  object-fit: fill;
  transform: rotate(-150deg);
  transform-origin: center center;
  will-change: transform;
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

/* === 层级 5: 技能标签 (desk-scene 内绝对定位)
   默认状态: 所有标签在容器右侧外面（不可见 opacity:0）
   Figma: right:-78px (被推到容器外), 其他: 用很大的left值 (1286-1443px，也在容器外)
   Hover状态: 全部对齐到 left:1067px，形成垂直列表 (top值不变，间距36px)
   父容器 desk-scene 宽1172px, left:1067px 意味着靠右端 */
.skill-tag {
  position: absolute;
  font-family: "General Sans", "General Sans Placeholder", sans-serif;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.65);
  white-space: nowrap;
  pointer-events: none;
  z-index: 11;
  opacity: 0;
  transition: opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1),
              left 0.45s cubic-bezier(0.22, 1, 0.36, 1),
              right 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}
/* 默认状态 — 标签在容器外面（不可见） */
.skill-figma { top: 405.4px; right: -78px; left: auto; transition-delay: 0s; }
.skill-framer { top: 440.4px; left: 1286px; transition-delay: 0.04s; }
.skill-photoshop { top: 476.4px; left: 1344px; transition-delay: 0.08s; }
.skill-aftereffects { top: 512.4px; left: 1397px; transition-delay: 0.12s; }
.skill-illustrator { top: 549.4px; left: 1443px; transition-delay: 0.16s; }

/* Skills hover 时 — 所有标签对齐到 left:1067px 垂直排列 */
.hero-desktop.skills-hover .skill-figma { left: 1067px; right: auto; }
.hero-desktop.skills-hover .skill-framer { left: 1067px; }
.hero-desktop.skills-hover .skill-photoshop { left: 1067px; }
.hero-desktop.skills-hover .skill-aftereffects { left: 1067px; }
.hero-desktop.skills-hover .skill-illustrator { left: 1067px; }
.hero-desktop.skills-hover .skill-tag { opacity: 1; }

/* === 层级 6: 工具图标 Frame 34-38 === */
.desk-sticky {
  position: absolute;
  z-index: 6;
  will-change: transform;
  transition: transform 0.5s cubic-bezier(0.44, 0, 0.56, 1),
              bottom 0.5s cubic-bezier(0.44, 0, 0.56, 1),
              right 0.5s cubic-bezier(0.44, 0, 0.56, 1);
}
.desk-sticky img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* Sticky 默认位置 — 原站精确坐标 */
.desk-sticky-1 { width: 25px; height: 32px; bottom: 112px; right: 73px; transform: rotate(19deg); }
.desk-sticky-2 { width: 27px; height: 33px; bottom: 128px; right: 112px; }
.desk-sticky-3 { width: 32px; height: 32px; bottom: 41px; right: 52px; }
.desk-sticky-4 { width: 31px; height: 31px; bottom: 67px; right: 106px; transform: rotate(-13deg); }
.desk-sticky-5 { width: 31px; height: 32px; bottom: 100px; right: 29px; }

/* Laptop hover → 工具图标分散重新排列 (原站精确坐标) */
.hero-desktop.skills-hover .desk-sticky-1 { bottom: 131px; right: 119px; transform: rotate(0deg); }
.hero-desktop.skills-hover .desk-sticky-2 { bottom: 166px; right: 117px; transform: rotate(0deg); }
.hero-desktop.skills-hover .desk-sticky-3 { bottom: 97px; right: 112px; transform: rotate(0deg); }
.hero-desktop.skills-hover .desk-sticky-4 { bottom: 60px; right: 113px; transform: rotate(0deg); }
.hero-desktop.skills-hover .desk-sticky-5 { bottom: 23px; right: 113px; transform: rotate(0deg); }

/* === 层级 7: 大头像 (223x223 container, SQUARE, no border-radius) ===
   默认: top:268px, right:59px, transform: translateY(-111.5px) rotate(-25deg)
   Laptop hover: top:158px, left:890px, transform: rotate(-25deg) */
.desk-bigavatar {
  position: absolute;
  width: 223px;
  height: 223px;
  top: 268px;
  right: 59px;
  transform: translateY(-111.5px) rotate(-25deg);
  z-index: 7;
  border-radius: 0px;
  overflow: visible;
  filter: drop-shadow(11px 2px 8px rgba(0,0,0,0.45)) drop-shadow(7px 4px 7px rgba(0,0,0,0.33));
  will-change: transform;
  transition: top 0.5s cubic-bezier(0.22, 1, 0.36, 1),
              right 0.5s cubic-bezier(0.22, 1, 0.36, 1),
              left 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.desk-bigavatar img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
/* Laptop hover → bigavatar 移动到 top:158px, left:890px (原站) */
.hero-desktop.avatar-nolift .desk-bigavatar {
  top: 158px;
  left: 890px;
  right: auto;
  transform: rotate(-25deg);
}

/* === 层级 8: Ellipse 75 暗影叠加 (framer-ojkiis) === */
.desk-ellipse-shadow {
  position: absolute;
  width: 1514px;
  height: 1523px;
  top: -463px;
  left: -178px;
  background: radial-gradient(41.4385% 31.0828% at 50.0326% 62.0026%, transparent 42.5%, rgba(0,0,0,0.5) 76%);
  border-radius: 100%;
  z-index: 8;
  pointer-events: none;
}

/* === 层级 9: Spotlight 聚光圈 (framer-dwi842) ===
   原站: 3885x4248, 中心固定在 desk-scene 中央上方
   hover 时通过 scale + opacity 切换可见性，背景 radial-gradient 位置可变 */
.desk-spotlight {
  position: absolute;
  width: 3885px;
  height: 4248px;
  top: -1983px;
  left: -1242.5px;
  z-index: 9;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.6);
  transform-origin: center center;
  /* 完全复制原站 framer-dwi842 的渐变 (默认中心 47.9% 50%) */
  background: radial-gradient(50% 50% at 47.9% 50%, rgba(0,0,0,0) 2.7027%, rgba(255,255,255,0) 36.036%, rgba(0,0,0,0.5) 43.9459%, rgba(0,0,0,0.65) 51.3514%, rgba(0,0,0,0.9) 68.018%);
  transition: opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
              background 0.4s ease;
  will-change: transform, opacity, background;
}
/* hover 时显示聚光灯 — scale 放大到 1 + opacity 1 */
.desk-spotlight.active {
  opacity: 1;
  transform: scale(1);
}

/* === 层级 10: Laptop 框架 (最顶层 1114x997) === */
.desk-laptop-frame {
  position: absolute;
  width: 1114px;
  height: 997px;
  bottom: -465px;
  left: calc(49.49% - 557px);
  z-index: 10;
  pointer-events: none;
  will-change: transform;
}
.desk-laptop-frame img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

/* === 灯光效果 (在 Laptop 框架内部, z-index:1) === */
.hero-light {
  position: absolute;
  width: 283px;
  height: 200px;
  left: 32%;
  top: 38%;
  transform: rotate(-15deg);
  z-index: 1;
  pointer-events: none;
  background: radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 60%);
  opacity: 0.8;
  transition: opacity 0.4s ease;
}
.hero-desktop:hover .hero-light {
  opacity: 1;
  background: radial-gradient(ellipse at center, rgba(255,255,255,0.06) 0%, transparent 60%);
}

/* =========================================================
   桌面场景之外的元素 — DOM 在 .desk-scene 之前，被桌面覆盖
   ========================================================= */

/* === Profile Widget (159x159) — 原站 hero-desktop 内 top:373, left:14 === */
.hero-profile-widget {
  position: absolute;
  width: 160px;
  height: 160px;
  top: 495px;
  left: 14px;
  z-index: 0;
  will-change: transform;
}
.profile-img-wrap {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
}
.profile-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.location-pill {
  position: absolute;
  bottom: -22px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 12px;
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 8px;
  z-index: 1;
  white-space: nowrap;
}
.location-pill svg {
  color: rgba(255,255,255,0.5);
  flex-shrink: 0;
}
.location-scroll {
  width: 60px;
  overflow: hidden;
  height: 15px;
}
.location-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: scrollLocations 12s linear infinite;
}
.location-list span {
  font-family: "Satoshi", "General Sans", sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  text-align: left;
  white-space: nowrap;
  line-height: 15px;
}
@keyframes scrollLocations {
  0% { transform: translateY(-80%); }
  100% { transform: translateY(0); }
}

/* === Name "Dawood H." (原站 hero-desktop 内 top:464, left:194) === */
.hero-name {
position: absolute;
top: 490px;
left: 229px;
font-family: "Satoshi", "Satoshi Placeholder", sans-serif;
font-size: 160px;
font-weight: 900;
letter-spacing: -8px;
  line-height: 1em;
  color: rgb(224, 224, 224);
  margin: 0;
  white-space: nowrap;
  z-index: 0;
}

/* === Book a Call (原站 hero-desktop 内 top:515, right:14) === */
.hero-book-call {
  position: absolute;
  top: 515px;
  right: 14px;
  width: 220px;
  height: 56px;
  border-radius: 27px;
  z-index: 0;
  text-decoration: none;
  overflow: hidden;
  display: block;
  background: linear-gradient(149deg,
    rgba(255,255,255,0.25) 0%,
    rgba(255,255,255,0) 24.3%,
    rgba(255,255,255,0) 55%,
    rgba(255,255,255,0.3) 100%);
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
              filter 0.35s ease;
}
.hero-book-call:hover {
  transform: scale(1.06);
  filter: brightness(1.15);
}
.book-call-inner {
  position: absolute;
  inset: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  z-index: 1;
  color: #fff;
  font-family: "General Sans", "General Sans Placeholder", sans-serif;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.02em;
  background: linear-gradient(157deg, rgb(31,31,31) -30%, rgb(22,22,22) 51.6%, rgb(13,13,13) 100%);
  border-radius: 26px;
}
.book-call-inner svg {
  flex-shrink: 0;
}

/* === Roles (原站 hero-desktop 内 top:637, left:199) === */
.hero-roles {
  position: absolute;
  top: 676px;
  left: 229px;
  display: flex;
  align-items: center;
  gap: 28px;
  z-index: 0;
}
.role-text {
  font-family: "General Sans", "General Sans Placeholder", sans-serif;
  font-size: 22px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  white-space: nowrap;
}
.role-divider {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  flex-shrink: 0;
}

/* === Contact (原站 hero-desktop 内 top:672, left:199) === */
.hero-contact {
  position: absolute;
  top: 709px;
  left: 229px;
  display: flex;
  align-items: center;
  gap: 28px;
  z-index: 0;
}
.contact-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: "General Sans", "General Sans Placeholder", sans-serif;
  font-size: 22px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
}
.contact-item svg {
  color: rgba(255, 255, 255, 0.5);
  flex-shrink: 0;
}

/* =========================================================
   导航栏
   ========================================================= */
.hero-nav {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  padding-bottom: 40px;
  will-change: transform;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px;
  border: 1px solid rgba(255,255,255,0.09);
  border-radius: 30px;
  background: rgba(255,255,255,0.04);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
.nav-link {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 20px;
  text-decoration: none;
  font-family: "General Sans", "General Sans Placeholder", sans-serif;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.05em;
  color: rgb(224, 224, 224);
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.02);
  transition: background 0.3s ease, transform 0.2s ease;
}
.nav-link:hover {
  background: rgba(255,255,255,0.1);
  transform: scale(1.03);
}
.nav-link svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

/* =========================================================
   Carousel
   ========================================================= */
.carousel-section {
  padding: 1rem 0;
  margin-top: 20px;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,0) 100%);
  mask-image: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,0) 100%);
}
.carousel-row {
  overflow: hidden;
  padding: 5px 0;
}
.carousel-track {
  display: flex;
  gap: 10px;
  animation: carouselScroll 30s linear infinite;
  width: max-content;
  padding: 10px;
}
.track-reverse {
  animation: carouselScrollReverse 30s linear infinite;
}
@keyframes carouselScroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes carouselScrollReverse {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}
.carousel-card {
  position: relative;
  flex-shrink: 0;
  width: 509px;
  height: 286px;
  border-radius: 17px;
  overflow: hidden;
  text-decoration: none;
  transition: transform 0.3s ease;
}
.carousel-card:hover { transform: scale(1.03); }
.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.carousel-pill {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  height: 44px;
  background-color: rgba(255, 255, 255, 0.77);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 52px;
  opacity: 0;
  transition: opacity 0.35s ease, bottom 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.carousel-card:hover .carousel-pill {
  opacity: 1;
  bottom: 29px;
}
.pill-text {
  font-family: "General Sans", "General Sans Placeholder", sans-serif;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.04em;
  color: rgb(38, 38, 38);
  white-space: nowrap;
}

/* ========== Projects Section ========== */
.projects-section {
  padding: 50px 0 96px;
  max-width: 1200px;
  margin: 0 auto;
}
.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px 20px;
}
.project-row {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.bottom-spacer { height: 30px; }

.site-footer {
  position: fixed;
  bottom: 15px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  z-index: 90;
  pointer-events: none;
}
.footer-left, .footer-right {
  font-family: "General Sans", "General Sans Placeholder", sans-serif;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
}

/* =========================================================
   响应式适配 — 小屏幕隐藏skill标签
   ========================================================= */
@media (max-width: 809.98px) {
  .skill-tag, .hotspot { display: none; }
  .carousel-card {
    width: 427px;
    height: 200px;
  }
}
</style>
