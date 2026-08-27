<template>
  <NuxtLayout>
    <div id="app">
      <NoiseOverlay />
      <SiteNav />
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<script setup>
import NoiseOverlay from '~/components/NoiseOverlay.vue'
import SiteNav from '~/components/SiteNav.vue'
</script>

<style>
#app {
  min-height: 100vh;
  position: relative;
}
</style>
