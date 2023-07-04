<template>
    <section class="flex gap-2 md:gap-4 justify-between items-center mb-6 md:mb-10">
        <div class="md:w-10/12">
            <h1 class="text-slate-200 w-full text-3xl md:text-5xl mb-2 font-medium uppercase tracking-wider">{{ props.title }}</h1>
            <p class="text-slate-400">{{ props.subtitle }}</p>
        </div>
        <div class="md:w-1/12 hidden md:flex">
            <Direction class="w-6/12 fill-slate-300 opacity-25"></Direction>
            <Direction class="w-6/12 fill-slate-300 opacity-50"></Direction>
            <Direction class="w-6/12 fill-slate-300 opacity-80"></Direction>
        </div>
    </section>
</template>

<script setup>

import Direction from '@asset/svg/direction.svg'

const props = defineProps({
    title: {
        type: String,
        default: 'Title Goes Here ...'
    },
    subtitle: {
        type: String,
        default: 'Proident reprehenderit velit minim est laboris consectetur consectetur nisi eu sit.'
    }
})

</script>