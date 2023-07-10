<template>
    <button class="bg-orange-600 px-6 py-4 text-slate-200 font-medium uppercase rounded-full hover:bg-orange-400 duration-300">
        <i v-if="props.icon" class="me-2" :class="props.icon"></i>
        {{ props.title }}
    </button>
</template>

<script setup>

const props = defineProps({
    title: {
        type: String,
        default: 'Main button title'
    },
    icon: String
})

</script>