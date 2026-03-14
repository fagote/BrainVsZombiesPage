<script setup>
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg">
    <!-- Efeito de fundo / Gradients -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brain-pink/20 via-dark-bg to-dark-bg"></div>
    
    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <h1 class="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-center flex flex-col md:flex-row items-center justify-center gap-2">
        <span class="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
          BRAIN
        </span>

        <span class="text-zombie-green font-mono">
          VS
        </span>

        <span class="text-transparent bg-clip-text bg-gradient-to-r from-brain-pink to-purple-500 drop-shadow-[0_0_20px_rgba(236,72,153,0.6)]">
          ZOMBIES
        </span>
      </h1>

      
      <p class="text-xl md:text-2xl text-gray-300 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
        A matemática é sua única arma contra o apocalipse. 
        Sobreviva resolvendo equações dinâmicas neste TCC intenso!
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a href="#demo" class="group relative px-8 py-4 font-bold text-dark-bg bg-zombie-green rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.8)]">
          <span class="relative z-10">Ver Demonstração</span>
          <div class="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 ease-out group-hover:scale-100 group-hover:bg-white/20"></div>
        </a>
        <a href="#about" class="px-8 py-4 font-bold text-white border-2 border-white/20 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm">
          Como Funciona?
        </a>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>

