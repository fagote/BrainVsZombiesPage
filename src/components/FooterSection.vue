<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-black py-12 border-t border-white/10 text-center relative overflow-hidden">
    <!-- Efeito Sutil -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-zombie-green/50 to-transparent"></div>
    
    <div class="max-w-4xl mx-auto px-4 relative z-10">
      <h2 class="text-2xl font-black mb-6 tracking-tighter">
        <span class="text-white">BRAIN</span> 
        <span class="text-zombie-green mx-1 font-mono text-sm">VS</span> 
        <span class="text-brain-pink">ZOMBIES</span>
      </h2>
      
      <p class="text-gray-500 mb-8 max-w-xl mx-auto text-sm">
        Projeto de Trabalho de Conclusão de Curso (TCC).<br>
        O aprendizado da matemática gamificado contra zumbis.
      </p>

      <div class="flex justify-center gap-6 mb-8">
        <a href="#" class="text-gray-400 hover:text-white transition-colors">
          <span class="sr-only">Repositório do Jogo</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>

      <p class="text-xs text-gray-600">
        &copy; {{ currentYear }} Leonardo Fagote. Todos os direitos reservados. Feito com Vue e muita matemática.
      </p>
    </div>
  </footer>
</template>
