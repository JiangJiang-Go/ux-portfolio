<template>
  <main class="about-page">
    <section class="about-hero">
      <div class="about-container">
        <div class="about-grid">
          <div class="about-content-col">
            <div class="about-tag">
              <span class="tag-dot" />
              <span class="tag-text">About Me</span>
            </div>

            <h1 class="about-title">
              I'm Dawood — a multidisciplinary
              <span class="title-serif">creative designer</span>
              based in Dubai.
            </h1>

            <div class="about-bio">
              <p>
                With over 5 years of experience in design, I specialize in creating
                compelling visual identities, UI/UX designs, and motion graphics that
                help brands stand out in the digital landscape.
              </p>
              <p>
                My approach combines strategic thinking with creative execution,
                ensuring every project not only looks beautiful but also achieves
                its business objectives. From startups to established brands, I bring
                ideas to life through thoughtful design.
              </p>
            </div>

            <div class="about-stats">
              <div class="stat">
                <span class="stat-number">50+</span>
                <span class="stat-label">Projects Done</span>
              </div>
              <div class="stat">
                <span class="stat-number">5+</span>
                <span class="stat-label">Years Exp.</span>
              </div>
              <div class="stat">
                <span class="stat-number">30+</span>
                <span class="stat-label">Happy Clients</span>
              </div>
            </div>
          </div>

          <div class="about-image-col">
            <div class="about-image-wrapper">
              <div class="gyro-card" ref="gyroCard">
                <div class="holo-card">
                  <div class="holo-shine" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills-section">
      <div class="about-container">
        <h2 class="section-heading">Expertise</h2>
        <div class="skills-grid">
          <div v-for="skill in skills" :key="skill.title" class="skill-card">
            <div class="skill-icon" v-html="skill.icon" />
            <h3 class="skill-title">{{ skill.title }}</h3>
            <p class="skill-desc">{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tools Section -->
    <section class="tools-section">
      <div class="about-container">
        <h2 class="section-heading">Tools & Software</h2>
        <div class="tools-list">
          <span v-for="tool in tools" :key="tool" class="tool-tag">{{ tool }}</span>
        </div>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section class="experience-section">
      <div class="about-container">
        <h2 class="section-heading">Experience</h2>
        <div class="timeline">
          <div v-for="(exp, i) in experiences" :key="i" class="timeline-item">
            <div class="timeline-year">{{ exp.year }}</div>
            <div class="timeline-content">
              <h3 class="timeline-role">{{ exp.role }}</h3>
              <p class="timeline-company">{{ exp.company }}</p>
              <p class="timeline-desc">{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const gyroCard = ref(null)
let rafId = null

function onMouseMove(e) {
  if (!gyroCard.value) return
  const rect = gyroCard.value.getBoundingClientRect()
  const cx = rect.left + rect.width / 2
  const cy = rect.top + rect.height / 2
  const dx = (e.clientX - cx) / rect.width
  const dy = (e.clientY - cy) / rect.height
  const rotateY = dx * 25
  const rotateX = -dy * 25
  rafId = requestAnimationFrame(() => {
    if (gyroCard.value) {
      gyroCard.value.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }
  })
}

function onMouseLeave() {
  if (gyroCard.value) {
    gyroCard.value.style.transition = 'transform 0.5s ease'
    gyroCard.value.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)'
    setTimeout(() => { if (gyroCard.value) gyroCard.value.style.transition = '' }, 500)
  }
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseleave', onMouseLeave)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseleave', onMouseLeave)
  if (rafId) cancelAnimationFrame(rafId)
})

const skills = [
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive interfaces and seamless user experiences that delight and convert.',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>',
  },
  {
    title: 'Brand Identity',
    description: 'Building distinctive visual identities that communicate brand values and resonate with audiences.',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  },
  {
    title: 'Web Design',
    description: 'Designing modern, responsive websites that combine aesthetics with functionality.',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  },
  {
    title: 'Motion Graphics',
    description: 'Bringing designs to life through animation and motion for video ads and digital content.',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
  },
]

const tools = [
  'Figma', 'Adobe Photoshop', 'Illustrator', 'After Effects',
  'Premiere Pro', 'Blender', 'Framer', 'Webflow',
  'Sketch', 'Cinema 4D', 'InDesign', 'Canva',
]

const experiences = [
  {
    year: '2023 - Present',
    role: 'Senior Creative Designer',
    company: 'Freelance',
    description: 'Leading design projects for international clients across branding, UI/UX, and motion graphics.',
  },
  {
    year: '2021 - 2023',
    role: 'UI/UX Designer',
    company: 'Digital Agency',
    description: 'Designed user interfaces and experiences for web and mobile applications.',
  },
  {
    year: '2019 - 2021',
    role: 'Graphic Designer',
    company: 'Creative Studio',
    description: 'Created visual content including brand identities, marketing materials, and social media graphics.',
  },
  {
    year: '2018 - 2019',
    role: 'Junior Designer',
    company: 'Startup Inc.',
    description: 'Assisted in design tasks and learned industry best practices in a fast-paced environment.',
  },
]
</script>

<style scoped>
.about-page {
  padding-top: 5rem;
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* ========== Hero ========== */
.about-hero {
  padding: 4rem 0 6rem;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  align-items: start;
}

.about-image-wrapper {
  position: sticky;
  top: 7rem;
}

.gyro-card {
  width: 100%;
  aspect-ratio: 3 / 4;
  max-width: 380px;
  margin: 0 auto;
  perspective: 1000px;
}

.holo-card {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: linear-gradient(
    135deg,
    #1a1a2e 0%,
    #16213e 25%,
    #0f3460 50%,
    #533483 75%,
    #e94560 100%
  );
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  transform: rotateY(0deg) rotateX(0deg);
  transition: transform 0.1s ease-out;
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.5),
    0 0 40px rgba(100, 60, 200, 0.2);
}

.holo-shine {
  position: absolute;
  inset: -50%;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    rgba(255, 100, 150, 0.15) 60deg,
    rgba(100, 200, 255, 0.2) 120deg,
    rgba(150, 100, 255, 0.15) 180deg,
    rgba(255, 150, 100, 0.1) 240deg,
    rgba(100, 255, 200, 0.15) 300deg,
    transparent 360deg
  );
  animation: rotateShine 6s linear infinite;
}

@keyframes rotateShine {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.holo-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    transparent 40%,
    rgba(255, 255, 255, 0.1) 45%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.05) 55%,
    transparent 60%
  );
  transform: translateX(-100%);
  transition: none;
  animation: holoShine 3s ease-in-out infinite;
}

@keyframes holoShine {
  0% { transform: translateX(-100%) skewX(-15deg); }
  100% { transform: translateX(100%) skewX(-15deg); }
}

.about-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  background: var(--glass-bg);
  border: 1px solid var(--border);
  border-radius: 20px;
  margin-bottom: 1.5rem;
}

.tag-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-green);
}

.tag-text {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 500;
  letter-spacing: 0.05em;
}

.about-title {
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 2rem;
}

.title-serif {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
}

.about-bio {
  margin-bottom: 3rem;
}

.about-bio p {
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 1rem;
}

.about-stats {
  display: flex;
  gap: 3rem;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin-bottom: 0.2rem;
}

.stat-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  letter-spacing: 0.02em;
}

/* ========== Skills ========== */
.skills-section {
  padding: 5rem 0;
  border-top: 1px solid var(--border-light);
}

.section-heading {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 500;
  letter-spacing: -0.02em;
  margin-bottom: 3rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-light);
  border-radius: 16px;
  transition: all 0.3s var(--transition);
}

.skill-card:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: var(--border);
  transform: translateY(-2px);
}

.skill-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
  margin-bottom: 1.2rem;
}

.skill-title {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.skill-desc {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.6;
}

/* ========== Tools ========== */
.tools-section {
  padding: 5rem 0;
  border-top: 1px solid var(--border-light);
}

.tools-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tool-tag {
  padding: 0.6rem 1.2rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-muted);
  background: var(--glass-bg);
  border: 1px solid var(--border-light);
  border-radius: 30px;
  transition: all 0.25s ease;
}

.tool-tag:hover {
  color: var(--text);
  border-color: var(--border);
  background: rgba(255, 255, 255, 0.06);
}

/* ========== Experience ========== */
.experience-section {
  padding: 5rem 0;
  border-top: 1px solid var(--border-light);
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.timeline-item {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 2rem;
  padding: 2rem 0;
  border-bottom: 1px solid var(--border-light);
}

.timeline-item:last-child {
  border-bottom: none;
}

.timeline-year {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 500;
  padding-top: 0.2rem;
}

.timeline-role {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
}

.timeline-company {
  font-size: 0.9rem;
  color: var(--accent-green);
  margin-bottom: 0.5rem;
}

.timeline-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.6;
}

/* ========== Responsive ========== */
@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-image-wrapper {
    position: static;
    max-width: 300px;
  }

  .about-stats {
    gap: 2rem;
  }

  .timeline-item {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
