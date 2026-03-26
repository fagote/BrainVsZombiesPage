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
          O funcionamento interno do jogo de matemática.
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
            <a href="https://fagote.github.io/mathZombie/">
              <div class="flex justify-center mt-12">
                
                <div class="aspect-square w-40 bg-white/5 rounded-xl border border-white/10 overflow-hidden relative group flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/10">
                  
                  <!-- Zumbi -->
                  <div class="text-5xl mb-2 transition-all duration-300 
                              drop-shadow-[0_0_15px_rgba(168,85,247,0.9)]
                              group-hover:drop-shadow-[0_0_30px_rgba(168,85,247,1)]">
                    🧟
                  </div>

                  <!-- Texto -->
                  <div class="text-gray-400 font-mono text-xs text-center transition-colors duration-300 group-hover:text-white">
                    Hora de JOGAR!
                  </div>

                </div>

              </div>
            </a>

    </div>
  </section>
</template>
