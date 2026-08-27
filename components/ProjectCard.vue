<template>
  <div
    class="project-card"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    :style="{ '--hover-bg': work.hoverBg || 'linear-gradient(325deg, rgb(40, 40, 50) -12%, rgb(80, 80, 100) 142%)' }"
  >
    <NuxtLink :to="`/work/${work.slug}`" class="card-link" :class="{ 'is-hovered': isHovered }">
      <!-- Text section (left) -->
      <div class="card-text">
        <div class="card-tags">
          <span v-for="tag in tags" :key="tag" class="card-tag">{{ tag }}</span>
        </div>
        <h3 class="card-title" v-html="work.title"></h3>
      </div>

      <!-- Mockup section (right) -->
      <div class="card-mockup" :class="{ 'is-large': work.slug === 'evostudio' }">
        <img
          :src="work.mockup || work.thumbnail"
          :alt="work.title"
          class="mockup-main"
        />
        <div v-if="work.mockupOverlays && work.mockupOverlays.length" class="mockup-overlays">
          <img
            v-for="(overlay, i) in work.mockupOverlays"
            :key="i"
            :src="overlay"
            :class="`overlay-img overlay-${i}`"
            alt=""
          />
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  work: { type: Object, required: true },
  index: { type: Number, default: 0 },
})

const isHovered = ref(false)

const tags = computed(() => {
  if (!props.work.category) return []
  return props.work.category.split('·').map(t => t.trim()).filter(t => t.length > 0)
})
</script>

<style scoped>
.project-card {
  position: relative;
  width: 554px;
  border-radius: 33px;
  overflow: hidden;
}

.card-link {
  display: block;
  position: relative;
  text-decoration: none;
  border-radius: 33px;
  background: linear-gradient(270deg, rgb(20, 20, 20) -16.6523%, rgb(31, 31, 31) 105.371%);
  transition: background 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  height: 260px;
  overflow: hidden;
}

.card-link.is-hovered {
  background: var(--hover-bg);
  transform: scale(1.02);
}

/* Text section */
.card-text {
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: 46px;
  left: 45px;
  width: 44%;
  z-index: 2;
}

.card-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.card-tag {
  font-family: "General Sans", "General Sans Placeholder", sans-serif;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.23em;
  color: rgba(255, 255, 255, 0.55);
  padding: 0 15px;
  height: 22px;
  line-height: 22px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 8px;
  white-space: nowrap;
  transition: border-color 0.3s ease, color 0.3s ease, background-color 0.3s ease;
}

.card-link:hover .card-tag {
  border-color: rgba(255, 255, 255, 0.6);
  color: rgba(255, 255, 255, 0.85);
  background-color: rgba(255, 255, 255, 0.05);
}

.card-title {
  font-family: "General Sans", "General Sans Placeholder", sans-serif;
  font-size: 30px;
  font-weight: 600;
  color: rgb(255, 255, 255);
  letter-spacing: -0.02em;
  line-height: 1.4;
  margin: 0;
  max-width: 220px;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Mockup section */
.card-mockup {
  position: absolute;
  max-width: 251px;
  max-height: 224px;
  bottom: -44px;
  right: -28px;
  z-index: 1;
  overflow: visible;
  transform: translateX(30px);
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.card-mockup.is-large {
  max-width: 753px;
  max-height: 672px;
  bottom: -330px;
  right: -30px;
  transform: translateX(40px);
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.card-link.is-hovered .card-mockup.is-large {
  transform: translateX(0);
}

.card-link.is-hovered .card-mockup {
  transform: translateX(0);
}

.mockup-main {
  max-width: 100%;
  max-height: 224px;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
  filter: drop-shadow(rgba(0,0,0,0.1) 0px 5px 3px);
}

.card-mockup.is-large .mockup-main {
  max-height: 672px;
}

.mockup-overlays {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.overlay-img {
  position: absolute;
  filter: drop-shadow(rgba(0,0,0,0.1) 0px 5px 3px);
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.overlay-0 {
  width: 172px;
  height: 72px;
  bottom: 18px;
  left: -23px;
}

.overlay-1 {
  width: 95px;
  height: 70px;
  bottom: 40px;
  right: 21px;
}

/* When hovered, overlays shift */
.card-link.is-hovered .overlay-0 {
  transform: translateX(-18px) translateY(-5px);
}

.card-link.is-hovered .overlay-1 {
  transform: translateX(12px) translateY(5px);
}

/* Responsive */
@media (max-width: 768px) {
  .card-link {
    height: 200px;
  }
  .card-text {
    padding: 1.5rem;
  }
  .card-mockup {
    width: 180px;
    height: 160px;
  }
  .card-title {
    font-size: 22px;
  }
}

@media (max-width: 500px) {
  .card-mockup {
    display: none;
  }
}
</style>
