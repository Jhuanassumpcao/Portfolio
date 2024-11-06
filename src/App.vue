<template>
  <Header></Header>
    <hero />
    <about />
    <experiences />
    <works />
  <Footer></Footer>
</template>
<script setup>
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';
import Hero from './pages/Hero/Hero.vue';
import About from './pages/About/About.vue';
import Works from './pages/Works/Works.vue';
import Experiences from './pages/Experiences/Experiences.vue';
</script>
