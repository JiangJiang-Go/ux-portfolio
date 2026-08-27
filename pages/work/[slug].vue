<template>
  <main v-if="work" class="work-detail">
    <!-- Hero -->
    <section class="detail-hero">
      <div class="detail-container">
        <h1 class="detail-title">{{ work.title }}</h1>
      </div>
    </section>

    <!-- Main Image -->
    <section class="detail-image">
      <div class="detail-container">
        <div class="image-wrapper">
          <img :src="work.thumbnail" :alt="work.title" class="main-image" />
        </div>
      </div>
    </section>

    <!-- Info -->
    <section class="detail-info">
      <div class="detail-container">
        <div class="info-grid">
          <div class="info-block">
            <span class="info-label">Category</span>
            <span class="info-value">{{ work.category }}</span>
          </div>
          <div class="info-block">
            <span class="info-label">Year</span>
            <span class="info-value">{{ work.year }}</span>
          </div>
          <div v-if="work.client" class="info-block">
            <span class="info-label">Client</span>
            <span class="info-value">{{ work.client }}</span>
          </div>
          <div v-if="work.role" class="info-block">
            <span class="info-label">Role</span>
            <span class="info-value">{{ work.role }}</span>
          </div>
        </div>

        <p v-if="work.description" class="detail-desc">{{ work.description }}</p>
      </div>
    </section>

  </main>

  <main v-else class="work-detail not-found">
    <div class="detail-container">
      <h1>Project not found</h1>
      <NuxtLink to="/" class="back-link">Back to home</NuxtLink>
    </div>
  </main>
</template>

<script setup>
import { works } from '~/data/works'

const route = useRoute()
const slug = route.params.slug

const work = works.find(w => w.slug === slug)
</script>

<style scoped>
.work-detail {
  padding-top: 6rem;
  min-height: 100vh;
}

.detail-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* ========== Hero ========== */
.detail-hero {
  padding: 3rem 0 2rem;
  text-align: center;
}

.detail-title {
  font-family: "Satoshi", "Satoshi Placeholder", sans-serif;
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  letter-spacing: -0.06em;
  color: rgb(224, 224, 224);
  line-height: 1.05;
}

/* ========== Main Image ========== */
.detail-image {
  padding: 2rem 0;
}

.image-wrapper {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 20px;
  overflow: hidden;
  background: #111;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* ========== Info ========== */
.detail-info {
  padding: 2rem 0;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.info-block {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.info-label {
  font-family: "General Sans", "General Sans Placeholder", sans-serif;
  font-size: 13px;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
}

.info-value {
  font-family: "General Sans", "General Sans Placeholder", sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
}

.detail-desc {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.7;
  max-width: 700px;
}

/* ========== Not Found ========== */
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
}

.not-found h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.back-link {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: underline;
}

/* ========== Responsive ========== */
@media (max-width: 768px) {
  .detail-title {
    font-size: 2.5rem;
  }

}
</style>
