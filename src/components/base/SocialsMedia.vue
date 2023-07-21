<template>
    <section class="flex flex-col lg:flex-row lg:gap-2 gap-4">
        <template v-for="social in socials" :key="social">
            <button
                class="bg-slate-200 hover:bg-slate-300 duration-300 text-slate-800 h-12 lg:w-12 px-5 lg:p-0 rounded-full flex gap-2 items-center lg:grid lg:place-items-center">
                <i :class="social?.icon"></i>
                <p class="lg:hidden">{{ social?.name }}</p>
            </button>
        </template>
    </section>
</template>

<script setup>

const socials = [
    {
        name: 'Instagram',
        icon: 'fa-brands fa-instagram'
    },
    {
        name: 'Twitter',
        icon: 'fa-brands fa-twitter'
    },
    {
        name: 'Facebook',
        icon: 'fa-brands fa-facebook'
    }
]

</script>