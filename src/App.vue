<script setup>
import HeroSection from './components/HeroSection.vue'
import AboutGame from './components/AboutGame.vue'
import Demonstration from './components/Demonstration.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <main class="bg-dark-bg min-h-screen font-sans text-gray-100 selection:bg-brain-pink selection:text-white">
    <HeroSection />
    <AboutGame />
    <Demonstration />
    <FooterSection />
  </main>
</template>

<style scoped>
/* Scoped styles can be empty since we use Tailwind */
</style>
