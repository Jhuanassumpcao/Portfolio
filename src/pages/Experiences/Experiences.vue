<template>
   <div id="experiences" class="pages ">
      <div class="pages-container">
         <h1 class="title">Experiências</h1>
         <h2 class="_subTitle">Onde trabalhei profissionalmente, como Desenvolvedor.</h2>
         <div class="pages-container-content">
            <div class="steps">
               <div class="steps__list">
                  <div class="steps__list--item" v-for="(step, index) in steps" :key="step">
                     <span></span>
                     <div class="steps__list--item__info">
                        <p class="__titleInfo">{{ step.title }}</p>
                        <p class="__timeInfo">{{ step.time }}</p>
                        <p class="__timeWork">{{ step.work }}</p>
                        <div class="__timeList">
                           <p class="__resp">Responsabilidades</p>
                          <ul class="ml-2">
                              <li>{{ step.subTitle }}</li>
                              <li>{{ step.first }}</li>
                              <li>{{ step.second }}</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script setup>
const steps = [
   {
		title: 'Green Next',
		time: 'Dezembro 2023 - Fevereiro 2024',
      work: 'Desenvolvedor Front-End Freelance',
      subTitle: 'Projetar, e criar layout de um painel administrativo para ligar bombas de irrigação.',
      first: 'Desenvolver e integrar três telas de controle de bombas.',
      second: 'Documentar o código e realizar o deploy do sistema.'
	},
   {
		title: 'Projeto SCAE',
		time: 'Fevereiro 2024 - Abril 2024',
      work: 'Desenvolvedor Front-End',
      subTitle: 'Desenvolvimento de ferramenta digital para aplicação da classificação acústica de habitações brasileiras',
      first: 'Implementação de telas para a classificação acústica utilizando React.',
      second: 'Realização de reports constantes sobre o progresso e feedbacks durante o desenvolvimento.'
	},
   {
		title: 'Stars Aceleradora',
		time: 'Março 2023 - Atual',
      work: 'Desenvolvedor Full Stack',
      subTitle: "Responsável, junto à equipe, por criar a base dos projetos e manter sistemas.",
      first: "Desenvolvimento front-end com React, Vue, Storybook, Clean Code e integração de e-mails.",
      second: "Backend com Node, Adonis, autenticação JWT, controle de acesso e geração de PDFs."
	},
]
</script>
<style lang="scss" scoped>
@import './Experiences-style.scss';
</style>