<template>    
    <footer>
        <div id="contact" class="footer">
            <div class="footer-container">
                <h2 class="footer-container-titleF">Vamos conversar?</h2>
                <div class="footer-container-info">
                    <div class="footer-container-info-subTitle">
                        <p>Contate-me, podemos construir algo incrível juntos. Eu adoraria ouvir de você!</p>
                        <div class="footer-container-location">
                            <div class="flex items-center">
                                <app-icons name="location" :size="20" class="mr-3"/>
                                <span>Santa Maria - RS, Brasil</span>
                            </div>
                        </div>
                    </div>
                    <div class="footer-container-email">
                        <div class="footer-container-email-icon">
                           <div class="flex items-center">
                                <app-icons name="email" class="mr-3" :size="25"/>
                                <span>clique no texto e envie um e-mail</span>
                           </div>
                        </div>
                        <div @click="openToast">
                            <h2 class="degraded"><span class="underline">{{ email }}</span></h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-socials">
                <div class="footer-socials-icons">
                    <a :href="gitHubUrl" target="_blank"><app-icons name="git-hub" :size="25" class="mr-3"></app-icons></a>
                    <a :href="linkedinUrl" target="_blank"><app-icons name="linkedin" :size="25" class="mr-3"></app-icons></a>
                    <a :href="instagramUrl" target="_blank"><app-icons name="instagram" :size="25"></app-icons></a>
                </div>
                <span>Codificado em VsCode <strong>©Copyright {{ currentYear }}</strong></span>
            </div>
            <div class="footer-line"></div>
        </div>
        <toast v-model="toastVisible"></toast>
    </footer>
</template>
<script setup>
import { ref } from 'vue'
import AppIcons from '../AppIcons/AppIcons.vue'
import Toast from '../Toast/Toast.vue';

const instagramUrl = import.meta.env.VITE_APP_INSTAGRAM_URL
const gitHubUrl = import.meta.env.VITE_APP_GITHUB_URL
const linkedinUrl = import.meta.env.VITE_APP_LINKEDIN_URL

const email = ref('jlassumpcao@inf.ufsm.br')
const toastVisible = ref(false)

const currentYear = new Date().getFullYear();

const openToast = () => {
    toastVisible.value = true
    navigator.clipboard.writeText(email.value)
    setTimeout(() => {
        toastVisible.value = false
    }, 2500)
}

</script>
<style lang="scss" scoped>
@import './Footer-style.scss';
</style>