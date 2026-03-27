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
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
          </div>

          <h3 class="text-2xl font-bold text-white mb-3">
            Aprendizagem Ativa com Matemática
          </h3>

          <p class="text-gray-400 leading-relaxed">
            No Brain vs Zombies, cada ação do jogador depende da resolução rápida de operações matemáticas. 
            As contas são geradas dinamicamente durante a partida, transformando o aprendizado de matemática básica 
            em uma experiência interativa, desafiadora e divertida.
          </p>
        </div>


        <!-- Card 2 -->
        <div class="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-lg hover:border-brain-pink/50 transition-all duration-300 hover:-translate-y-2 group">
          <div class="w-14 h-14 bg-brain-pink/20 rounded-xl flex items-center justify-center mb-6 text-brain-pink group-hover:scale-110 transition-transform">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>

          <h3 class="text-2xl font-bold text-white mb-3">
            Progressão Inteligente de Dificuldade
          </h3>

          <p class="text-gray-400 leading-relaxed">
            O sistema do jogo ajusta automaticamente a complexidade das operações conforme o desempenho do jogador. 
            À medida que o jogador evolui, novos desafios surgem, mantendo o equilíbrio entre dificuldade, aprendizado 
            e engajamento ao longo da experiência.
          </p>
        </div>


        <!-- Card 3 -->
        <div class="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-lg hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 group">
          <div class="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
            </svg>
          </div>

          <h3 class="text-2xl font-bold text-white mb-3">
            Análise Educacional com IA
          </h3>

          <p class="text-gray-400 leading-relaxed">
            O desempenho do jogador é analisado por um Grande Modelo de Linguagem (LLM), capaz de identificar padrões 
            de erro e gerar diagnósticos personalizados sobre dificuldades matemáticas. Essas informações podem auxiliar 
            professores na identificação de lacunas no aprendizado dos estudantes.
          </p>
        </div>
      </div>

      <div class="flex justify-center pt-40">

        <a href="https://drive.google.com/file/d/1UyU21AYaQarU08xVe1KnN8b1_RZkQ_9S/view?usp=sharing" target="_blank" class="tcc-link">

        ACESSAR TCC

        <div class="drips">

        <div class="drip"></div>
        <div class="drip"></div>
        <div class="drip"></div>
        <div class="drip"></div>
        <div class="drip"></div>

        </div>

        </a>

    </div>
    </div>
  </section>
</template>

<style>

/* Texto neon */
.tcc-link{
  font-size:2.2rem;
  font-weight:900;
  letter-spacing:3px;
  color:#39ff14;
  text-shadow:
  0 0 6px #39ff14,
  0 0 12px #39ff14,
  0 0 25px #39ff14,
  0 0 50px #00ff88;

  position:relative;
  display:inline-block;
  font-family:monospace;
  transition:0.3s;
}

/* hover glow */
.tcc-link:hover{
  transform:scale(1.08);
  text-shadow:
  0 0 10px #39ff14,
  0 0 20px #39ff14,
  0 0 40px #39ff14,
  0 0 80px #00ff88;
}


/* container das gotas */
.drips{
  position:absolute;
  left:0;
  top:100%;
  width:100%;
  height:80px;
  pointer-events:none;
}

/* gotas individuais */
.drip{
  position:absolute;
  width:8px;
  height:25px;
  background:linear-gradient(
  to bottom,
  #5a0000,
  #a00000,
  #ff0000,
  #500000
  );

  border-radius:50% 50% 60% 60%;
  filter:blur(0.3px);
  animation:drip 3s infinite ease-in;
}

/* gotas em posições diferentes */

.drip:nth-child(1){
left:15%;
animation-delay:0s;
height:35px;
}

.drip:nth-child(2){
left:30%;
animation-delay:1s;
height:28px;
}

.drip:nth-child(3){
left:55%;
animation-delay:0.5s;
height:40px;
}

.drip:nth-child(4){
left:75%;
animation-delay:1.5s;
height:30px;
}

.drip:nth-child(5){
left:90%;
animation-delay:0.8s;
height:24px;
}


/* animação escorrendo */

@keyframes drip{

0%{
transform:translateY(0);
opacity:0;
}

15%{
opacity:1;
}

70%{
transform:translateY(40px) scaleY(1.3);
}

100%{
transform:translateY(70px) scaleY(1.6);
opacity:0;
}

}

</style>
