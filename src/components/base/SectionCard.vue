<template>
    <section :class="{ 'px-8 md:px-12': props?.useHorizontalPadding }" class="w-full py-6 md:py-10">
        <slot />
    </section>
</template>

<script setup>

const props = defineProps({
    useHorizontalPadding: {
        type: Boolean,
        default: true
    }
})

</script>