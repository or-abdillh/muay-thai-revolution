<template>
    <nav style="z-index: 2;" :class="isScrolled ? 'pt-1' : 'pt-7'" class="w-full duration-300 sticky top-0 px-1 lg:px-4">
        <section
            class="bg-slate-100 rounded-full px-10 py-6 flex justify-between items-center border border-slate-300 duration-300">
            <!-- brand -->
            <h1 class="text-2xl md:text-3xl text-slate-800 tracking-wide">MuayThai Revolution</h1>

            <!-- nav toggler -->
            <div>
                <button @click="isSidebarOpen = true"
                    class="w-12 h-12 bg-slate-200 rounded-full active:scale-90 duration-300 lg:hidden"><i
                        class="fa-solid fa-bars-staggered"></i></button>
            </div>

            <!-- nav wrapper -->
            <section :class="isSidebarOpen ? 'right-0' : '-right-full'"
                class="fixed lg:static duration-300 bg-slate-100 bg-opacity-100 lg:bg-transparent bottom-0 top-0 px-12 pt-14 lg:p-0 lg:w-8/12 flex lg:flex-row flex-col lg:justify-between gap-12 lg:gap-0 lg:items-center">
                <!-- nav items -->
                <div class="flex lg:flex-row flex-col text-right lg:text-left gap-6">
                    <!-- nav closer -->
                    <div class="flex justify-end mb-10 lg:hidden">
                        <button @click="isSidebarOpen = false"
                            class="w-12 h-12 bg-slate-200 rounded-full text-right grid place-items-center"><i
                                class="fa-solid fa-times text-xl"></i></button>
                    </div>
                    <!-- items -->
                    <template v-for="nav in navs" :key="nav">
                        <button @click="scrollIntoSection(nav.name)" :class="nav.name === isActiveNav ? 'text-slate-700 hover:text-slate-400 font-semibold' : 'text-slate-400 hover:text-slate-700'"
                            class="text-xl duration-300">{{ nav?.name }}</button>
                    </template>
                </div>

                <!-- Socials -->
                <div>
                    <SocialsMedia></SocialsMedia>
                </div>
            </section>

        </section>
    </nav>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import SocialsMedia from '@component/base/SocialsMedia.vue'

const isScrolled = ref(false)

const navs = [
    { name: 'Beranda' },
    { name: 'Video' },
    { name: 'Sejarah' },
    { name: 'Atlet' },
    { name: 'Organisasi' },
]

const isActiveNav = ref(navs[0].name)

const isSidebarOpen = ref(false)

const scrollIntoSection = section => {
    document.getElementById(section)
        .scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    
    isActiveNav.value = section
} 

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

const handleScroll = () => {
    const sections = document.querySelectorAll('[data-role=main-section]')

    isScrolled.value = window.scrollY > 600

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.pageYOffset;

        if ( scrollPosition >= sectionTop - sectionHeight / 3 && scrollPosition < sectionTop + sectionHeight ) {
            // this.activeLink = section.id
            isActiveNav.value = section?.id
        }
    })
}

</script>