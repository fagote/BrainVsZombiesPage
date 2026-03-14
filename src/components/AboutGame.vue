<script setup>
</script>

<template>
  <section id="about" class="py-24 bg-dark-bg relative border-t border-white/5">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="text-white">Sobre o </span><span class="text-brain-pink">Jogo</span>
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Um projeto de TCC desenvolvido para provar que aprender matemática pode ser uma questão de sobrevivência.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Card 1 -->
        <div class="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-lg hover:border-zombie-green/50 transition-all duration-300 hover:-translate-y-2 group">
          <div class="w-14 h-14 bg-zombie-green/20 rounded-xl flex items-center justify-center mb-6 text-zombie-green group-hover:scale-110 transition-transform">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
          </div>
          <h3 class="text-2xl font-bold text-white mb-3">Mecânica Baseada em Cálculos</h3>
          <p class="text-gray-400 leading-relaxed">
            Para atacar ou defender, o jogador precisa resolver rapidamente operações matemáticas geradas de forma procedural.
          </p>
        </div>

        <!-- Card 2 -->
        <div class="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-lg hover:border-brain-pink/50 transition-all duration-300 hover:-translate-y-2 group">
          <div class="w-14 h-14 bg-brain-pink/20 rounded-xl flex items-center justify-center mb-6 text-brain-pink group-hover:scale-110 transition-transform">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <h3 class="text-2xl font-bold text-white mb-3">Dificuldade Progressiva</h3>
          <p class="text-gray-400 leading-relaxed">
            O algoritmo do jogo aumenta a velocidade e a complexidade das contas com base no progresso do jogador.
          </p>
        </div>

        <!-- Card 3 -->
        <div class="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-lg hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 group">
          <div class="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
          </div>
          <h3 class="text-2xl font-bold text-white mb-3">Pesquisa do TCC</h3>
          <p class="text-gray-400 leading-relaxed">
            Jogo educacional para apoio ao ensino de matemática básica com diagnóstico personalizado por meio de Grandes Modelos de Linguagem.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
