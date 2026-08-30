<template>
  <div v-if="isHomePage" class="nav-wrapper">
    <nav class="site-nav">
      <div class="nav-links">
        <!-- Projects -->
        <a href="/ux-portfolio/#projects" class="nav-link" :class="{ active: isActive('/#projects') }">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" color="rgb(255, 255, 255)" width="34" height="34" class="nav-svg">
            <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" />
          </svg>
          <span class="nav-label">项目总览</span>
        </a>

        <!-- About -->
        <a href="/ux-portfolio/About" class="nav-link" :class="{ active: isActive('/About') }">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" color="rgb(255, 255, 255)" width="34" height="34" class="nav-svg">
            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
          </svg>
          <span class="nav-label">个人简历</span>
        </a>

        <!-- Contact -->
        <a href="mailto:dawoodh2306@gmail.com" class="nav-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" color="rgb(255, 255, 255)" width="34" height="34" class="nav-svg">
            <path fill-rule="evenodd" d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579 1.041.579.385 0 .746-.18 1.048-.584.303-.405.503-.997.503-1.696a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z" clip-rule="evenodd" />
          </svg>
          <span class="nav-label">联系方式</span>
        </a>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from '#imports'

const route = useRoute()
const isHomePage = computed(() => route.path === '/')

function isActive(href) {
  if (import.meta.client) {
    if (href.startsWith('/ux-portfolio/#')) {
      return window.location.pathname === '/' && window.location.hash === href.slice(1)
    }
    return window.location.pathname === href
  }
  return false
}
</script>

<style scoped>
.nav-wrapper {
  position: fixed;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  pointer-events: none;
}

.site-nav {
  background-color: rgba(255, 255, 255, 0.04);
  border-radius: 30px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.09);
  padding: 9px;
  pointer-events: auto;
}

.nav-links {
  display: flex;
  gap: 10px;
}

.nav-link {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 66px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.02);
  text-decoration: none;
  overflow: hidden;
  transition: width 0.4s cubic-bezier(0.25, 0.1, 0.25, 1),
              background-color 0.4s ease;
  cursor: pointer;
}

.nav-link:hover {
  width: 100px;
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-link.active {
  background-color: rgba(255, 255, 255, 0.05);
}

.nav-link:hover.active {
  background-color: rgba(255, 255, 255, 0.1);
}

/* SVG Icon - centered by default, moves up and out on hover */
.nav-svg {
  display: block;
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  transform: translateY(0);
  opacity: 1;
  transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1),
              opacity 0.3s ease;
}

.nav-link:hover .nav-svg {
  transform: translateY(-30px);
  opacity: 0;
}

/* Label - hidden below, slides up to center on hover */
.nav-label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-50% + 16px));
  width: max-content;
  text-align: center;
  font-family: "General Sans", "General Sans Placeholder", sans-serif;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.65px;
  color: rgb(224, 224, 224);
  white-space: nowrap;
  opacity: 0;
  transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1),
              opacity 0.3s ease 0.05s;
  pointer-events: none;
}

.nav-link:hover .nav-label {
  opacity: 1;
  transform: translate(-50%, -50%);
}

/* Mobile */
@media (max-width: 600px) {
  .nav-wrapper {
    bottom: 20px;
  }

  .nav-link:hover {
    width: 86px;
  }
}
</style>
