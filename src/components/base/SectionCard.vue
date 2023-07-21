<template>
    <section :class="{ 'px-5 md:px-12': props?.useHorizontalPadding, 'py-3 md:py-10': props?.useVerticalPadding }" class="w-full">
        <slot />
    </section>
</template>

<script setup>

const props = defineProps({
    useHorizontalPadding: {
        type: Boolean,
        default: true
    },
    useVerticalPadding: {
        type: Boolean,
        default: true
    }
})

</script>