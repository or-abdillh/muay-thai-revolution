<template>
    <button v-if="showButton" @click="toTop" class="w-16 h-16 duration-300 bg-orange-300 fixed right-4 bottom-20 rounded-2xl bg-opacity-50 backdrop-blur border border-slate-300 text-slate-200">
        <i class="fa-solid fa-chevron-up"></i>
        <p class="text-xs">Top</p>
    </button>
</template>

<script setup>

import { onMounted, ref } from 'vue'

const showButton = ref(false)

const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

onMounted(() => {
    window.addEventListener('scroll', () => {
        showButton.value = window.scrollY > 500
    })
})

</script>