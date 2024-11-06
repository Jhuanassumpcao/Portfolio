<template>
   <div id="works" class="pages">
      <div class="pages-container">
            <h1 class="title">Projetos</h1>
            <h2 class="_subTitle">Algumas coisas eu construí e outras para fazer.</h2>
            <div class="wrapper">
                <div class="card">
                    <img :src="prototype" alt="Projeto Adote Minha Casa">
                    <div class="info">
                        <h2 >Adote MInha Casa</h2>
                        <p >O projeto 'Adote Minha Casa' visa unir pessoas carentes a doadores dispostos a transformar vidas através da solidariedade</p>
                        <a :href="adotemcUrl" target="_blank" class="card__button">Ver projeto</a>
                    </div>
                </div>
                <div class="card">
                    <img :src="prototype2" alt="Projeto SCAE - Selo de Classificação Acústica">
                    <div class="info">
                        <h2 >SCAE - Selo de Classificação Acústica </h2>
                        <p >Elaboração de Ferramenta para Método de Classificação Acústica</p>
                        <a :href="scaeUrl" target="_blank" class="card__button">Ver projeto</a>
                    </div>
                </div>
                <div  v-for="card in cards" :key="card" class="card" >
                    <img :src="developer" alt="Desenvolvedor">
                    <div class="info">
                        <h2>{{ card.title }}</h2>
                        <p>{{ card.subTitle }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import prototype from '../../assets/img/prototype.jpg'
import developer from '../../assets/img/dev.svg'
import prototype2 from '../../assets/img/prototype-2.png'

const adotemcUrl = import.meta.env.VITE_APP_ADOTEMC_URL
const scaeUrl = import.meta.env.VITE_APP_SCAE_URL

const cards = ref([
    {   
        title: 'Em breve',
        subTitle: 'Pegue o café e espere um pouco, estou desenvolvendo o projeto.',
    },
])
</script>
<style lang="scss" scoped>
@import './Work-style.scss';
</style>