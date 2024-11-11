<template>
    <div id="about" class="pages">
        <div class="pages-container">
            <h2 class="title pt-2">{{ data.title }}</h2>
            <div class="__backgr">
                <div class="pages-container-content">
                    <div class="info">
                        <span>{{ data.subTitle }}</span>
                        <!-- minHeight -->
                        <div class="description" :style="heightStyle">
                            <!-- expandedHeight -->
                            <div ref="expanded">
                                <p class="stress" v-html="data.info"></p>
                                <p>{{ data.info2 }}</p>
                                <p  class="stress" v-html="data.info3"></p> 
                            </div>
                        </div> 
                        <button v-if="buttonVisibility" class="seeMore" @click="isExpanded = !isExpanded">
                            {{ (isExpanded ?  'Ver menos': 'Ver mais...') }}
                        </button>
                        <div class="button">
                            <div class="download">
                                <a :href="Cv" download>Download CV<app-icons name="download" :size="24" class="ml-2" /></a>
                            </div>
                        </div>
                    </div>
                    <div class="about-img z-30">
                        <div class="wrapper">
                            <div class="img">
                                <img :src="imageDefault" alt="imagen perfil" />
                            </div>
                        </div>
                    </div>
                    <div class="pt-10 flex justify-center pb-3 lg:justify-start lg:hidden">
                            <div class="download">
                                <a :href="Cv" download>Download CV<app-icons name="download" :size="24" class="ml-2" /></a>
                            </div>
                        </div>
                </div> 
            </div>
            <section class="pages__wrapper">
                <div class="pb-10">
                    <div class="pages__wrapper--skill">
                        <h3>{{ data.skill }}</h3>
                        <h2 class="_subTitle">{{ data.tools }}</h2>
                    </div>
                    <div class="pages__wrapper--iconsContainer" >
                        <div v-for="item in items" :key="item" >
                            <div class="_cards">
                                <app-icons :name="item.icon" :size="50"></app-icons>
                                <span class="pt-1">{{item.title}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
    </div>  
</template>
<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import imageDefault from '../../assets/img/img-perfil.png'
import Cv from '../../assets/file/CV-Jhuan-Assumpcao.pdf';
import AppIcons from '../../components/AppIcons/AppIcons.vue';

const isExpanded = ref(false)
const expanded = ref(null)
const minHeight = ref(0)
const expandedHeight = ref(0)


let timer = null

const observer = new ResizeObserver((entries) => {
	// debounce
	if (timer) {
		clearTimeout(timer)
	}

	timer = setTimeout(() => {
		const { height } = entries[0].contentRect
		expandedHeight.value = height

		const LINES = 7
		const LINES_MOBILE = LINES * 22
		const LINES_DESKTOP = LINES * 29

		minHeight.value = window.innerWidth < 1024 ? LINES_MOBILE : LINES_DESKTOP
	}, 500)
})

const buttonVisibility = computed(() => {
	if (!expanded.value) {
		return false
	}

	return expandedHeight.value > minHeight.value
})

const heightStyle = computed(() => {
	const style = {
		height: minHeight.value + 'px',
	}

	if (expandedHeight.value < minHeight.value || isExpanded.value) {
		style.height = 'auto'
	}

	return style
})

const data = ref({
    title: 'Escrevo código, Projeto coisas',
    subTitle: 'Quem é Jhuan', 
    info: 'Tenho uma paixão profunda por criar experiências digitais excepcionais. Com um desejo incessante de aprendizado, mantenho-me constantemente atualizado sobre as últimas tendências e tecnologias em desenvolvimento Front-End e Back-End.',
    info2: 'Como Full-Stack, meu objetivo é unir a  estética e usabilidade com desempenho e robustez. Em cada projeto, valorizo boas práticas de design e arquitetura de software, garantindo que tanto a interface quanto a infraestrutura ofereçam uma experiência excelente, escalável e pronta para evoluir.',
    info3: `Minha formação em <strong>Ciência da Computação</strong> me forneceu uma base sólida em programação e resolução de problemas complexos. Compreender as necessidades dos usuários e as metas do negócio é fundamental para mim. Ao longo da minha carreira, adquiri experiência em projetos diversos, desde sites institucionais até aplicações web complexas. Valorizo ​​a escrita de código limpo (Clean Code), modular e bem documentado, o que facilita a manutenção e escalabilidade dos projetos.`,
    skill: 'Web developer skills',
    tools: 'Veja as principais competências técnicas que possuo e atuo para o desenvolvimento Full-Stack.',
    design: 'Design Tools',
    ui:'Ferramentas que uso em meus designs de interface do usuário.'

})

const items = ref([
	{
		icon: 'html',
		title: "HTML",
	},
    {
		icon: 'css',
		title: "CSS",
	},
    {
		icon: 'scss',
		title: "Sass",
	},
    {
		icon: 'vue',
		title: "VueJS",
	},
    {
		icon: 'react',
		title: "ReactJS",
	},
    {
		icon: 'node',
		title: "NodeJs",
	},
    {
		icon: 'adonis',
		title: "AdonisJs",
	},
    {
		icon: 'js',
		title: "Javascript",
	},
    {
		icon: 'ts',
		title: "Typescript",
	},
    {
		icon: 'bootstrap',
		title: "Bootstrap",
	},
    {
		icon: 'tailwind',
		title: "TailwindCss",
	},
    {
		icon: 'vs-code',
		title: "VsCode",
	},
    {
		icon: 'git-hub',
		title: "GitHub",
	},
    {
		icon: 'npm',
		title: "Npm",
	},
])

const design = ref([
	{
		icon: 'figma',
		title: "Figma",
	},
    {
		icon: 'adobe-xd',
		title: "Adobe Xd ",
	},
    {
		icon: 'adobe-il',
		title: "Adobe Il",
	},
])

onMounted(() => {
	if (expanded.value) {
		observer.observe(expanded.value)
	}
})

onBeforeUnmount(() => {
	observer.unobserve(expanded.value)
})
</script>
<style lang="scss" scoped>
@import './About-style.scss';
</style>
