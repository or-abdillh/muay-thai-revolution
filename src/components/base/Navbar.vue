<template>
    <nav class="w-full sticky top-0 px-1 md:px-4 pt-7">
        <section class="bg-slate-100 rounded-full px-10 py-6 flex justify-between items-center border duration-300">
            <!-- brand -->
            <h1 class="text-2xl md:text-3xl text-slate-800 tracking-wide">MuayThai Revolution</h1>

            <!-- nav toggler -->
            <div>
                <button @click="isSidebarOpen = true"
                    class="w-12 h-12 bg-slate-200 rounded-full active:scale-90 duration-300 md:hidden"><i
                        class="fa-solid fa-bars-staggered"></i></button>
            </div>

            <!-- nav wrapper -->
            <section :class="isSidebarOpen ? 'right-0' : '-right-full'"
                class="fixed md:static duration-300 bg-slate-100 md:bg-transparent bottom-0 top-0 px-12 pt-14 md:p-0 md:w-7/12 flex md:flex-row flex-col md:justify-between gap-12 md:gap-0 md:items-center">
                <!-- nav items -->
                <div class="flex md:flex-row flex-col text-right md:text-left gap-6">
                    <!-- nav closer -->
                    <div class="flex justify-end mb-10 md:hidden">
                        <button @click="isSidebarOpen = false"
                            class="w-12 h-12 bg-slate-200 rounded-full text-right grid place-items-center"><i
                                class="fa-solid fa-times text-xl"></i></button>
                    </div>
                    <!-- items -->
                    <template v-for="nav in navs" :key="nav">
                        <a :class="nav.name === isActiveNav ? 'text-slate-700 hover:text-slate-500 font-semibold' : 'text-slate-400 hover:text-slate-700'"
                            class="text-xl" href="">{{ nav?.name }}</a>
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

import { ref } from 'vue'
import SocialsMedia from '@component/base/SocialsMedia.vue'

const navs = [
    { name: 'Beranda' },
    { name: 'Sejarah' },
    { name: 'Atlet' },
    { name: 'Program' },
    { name: 'Acara' },
]

const isActiveNav = ref(navs[0].name)

const isSidebarOpen = ref(false)

</script>