<script setup>
import mathVideo from '../assets/math.mp4'
</script>

<template>
  <section id="demo" class="py-24 bg-dark-bg/50 relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="text-white">Veja em </span><span class="text-zombie-green">Ação</span>
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Screenshots e vídeos demonstrando o funcionamento interno do jogo de matemática.
        </p>
      </div>

      <!-- Video Demo Area -->
      <div class="relative rounded-2xl overflow-hidden aspect-video bg-black border border-white/10 shadow-2xl group mx-auto max-w-4xl">
        <video 
          :src="mathVideo" 
          class="w-full h-full object-cover" 
          autoplay 
          muted 
          loop 
          controls
        ></video>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        <div class="aspect-square bg-white/5 rounded-xl border border-white/10 overflow-hidden relative group">
          <div class="absolute inset-0 flex items-center justify-center text-gray-500 font-mono text-xs text-center px-4 transition-all duration-300 group-hover:bg-white/10 group-hover:text-white">
            <a href="https://fagote.github.io/mathZombie/">Hora de JOGAR!</a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
