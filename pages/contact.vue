<template>
  <main class="contact-page">
    <section class="contact-hero">
      <div class="contact-container">
        <div class="contact-header">
          <span class="contact-tag">
            <span class="tag-dot" />
            Get in touch
          </span>

          <h1 class="contact-title">
            Let's create<br />
            <span class="title-serif">something great</span><br />
            together.
          </h1>

          <p class="contact-desc">
            Have a project or idea you'd like to discuss?<br />
            Feel free to reach out and let's make it happen.
          </p>
        </div>

        <div class="contact-grid">
          <!-- Contact Info -->
          <div class="contact-info">
            <div class="info-block">
              <h3 class="info-label">Email</h3>
              <a href="mailto:dawoodh2306@gmail.com" class="info-value">dawoodh2306@gmail.com</a>
            </div>

            <div class="info-block">
              <h3 class="info-label">Location</h3>
              <span class="info-value">Dubai, UAE</span>
            </div>

            <div class="info-block">
              <h3 class="info-label">Socials</h3>
              <div class="social-links">
                <a href="#" class="social-item">
                  <span class="social-name">Dribbble</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
                <a href="#" class="social-item">
                  <span class="social-name">Behance</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
                <a href="#" class="social-item">
                  <span class="social-name">Instagram</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
                <a href="#" class="social-item">
                  <span class="social-name">LinkedIn</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form-wrapper">
            <form class="contact-form" @submit.prevent="handleSubmit">
              <div class="form-group">
                <label class="form-label">Name</label>
                <input
                  v-model="form.name"
                  type="text"
                  class="form-input"
                  placeholder="Your name"
                  required
                />
              </div>

              <div class="form-group">
                <label class="form-label">Email</label>
                <input
                  v-model="form.email"
                  type="email"
                  class="form-input"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div class="form-group">
                <label class="form-label">Project Type</label>
                <select v-model="form.type" class="form-input">
                  <option value="">Select a project type</option>
                  <option value="branding">Branding & Identity</option>
                  <option value="uiux">UI/UX Design</option>
                  <option value="web">Web Design</option>
                  <option value="motion">Motion Graphics</option>
                  <option value="video">Video Ads</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">Message</label>
                <textarea
                  v-model="form.message"
                  class="form-input form-textarea"
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                />
              </div>

              <button type="submit" class="form-submit">
                <span>Send Message</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const form = reactive({
  name: '',
  email: '',
  type: '',
  message: '',
})

function handleSubmit() {
  alert(`Thanks ${form.name}! This is a demo — form data would be sent to the server.`)
}
</script>

<style scoped>
.contact-page {
  padding-top: 5rem;
  min-height: 100vh;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.contact-header {
  margin-bottom: 4rem;
  max-width: 700px;
}

.contact-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 500;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
}

.tag-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-green);
}

.contact-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 1.5rem;
}

.title-serif {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
}

.contact-desc {
  font-size: 1.1rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: start;
}

/* ========== Contact Info ========== */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.info-block {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.info-label {
  font-size: 0.8rem;
  color: var(--text-dim);
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.info-value {
  font-size: 1.1rem;
  color: var(--text);
  transition: color 0.25s ease;
}

a.info-value:hover {
  color: #fff;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.social-item {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: var(--text-muted);
  transition: color 0.25s ease;
  align-self: flex-start;
}

.social-item:hover {
  color: var(--text);
}

.social-item svg {
  transition: transform 0.25s ease;
}

.social-item:hover svg {
  transform: rotate(45deg);
}

/* ========== Contact Form ========== */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 500;
  letter-spacing: 0.03em;
}

.form-input {
  width: 100%;
  padding: 0.9rem 1.2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-light);
  border-radius: 12px;
  color: var(--text);
  font-family: var(--font-sans);
  font-size: 0.95rem;
  transition: all 0.25s ease;
  outline: none;
}

.form-input::placeholder {
  color: var(--text-dim);
}

.form-input:focus {
  border-color: var(--border);
  background: rgba(255, 255, 255, 0.05);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

select.form-input {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
}

select.form-input option {
  background: var(--bg-light);
  color: var(--text);
}

.form-submit {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 1rem 2.5rem;
  background: var(--glass-bg);
  border: 1px solid var(--border);
  border-radius: 30px;
  color: var(--text);
  font-family: var(--font-sans);
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s var(--transition);
  margin-top: 0.5rem;
}

.form-submit:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.form-submit svg {
  transition: transform 0.3s var(--transition);
}

.form-submit:hover svg {
  transform: rotate(45deg);
}

/* ========== Responsive ========== */
@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .contact-title {
    font-size: 2.2rem;
  }
}
</style>
