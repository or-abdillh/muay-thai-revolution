<template>
    <section>
        <p data-aos="zoom-in-up" class="text-slate-400 font-medium mb-3">Apakah anda menyukai informasi seperti ini?</p>
        <!-- thumbs -->
        <div data-aos="zoom-in-up" class="flex gap-3" :class="{ 'justify-end': props?.useJustifyEnd }">
            <button @click="isLike = true" :class="{ 'bg-orange-600': isLike != null && isLike }" class="text-slate-100 w-10 h-10 border border-slate-300 rounded-full  duration-300"><i class="fa-regular fa-thumbs-up"></i></button>
            <button @click="isLike = false" :class="{ 'bg-orange-600': isLike != null && !isLike }" class="text-slate-100 w-10 h-10 border border-slate-300 rounded-full  duration-300"><i class="fa-regular fa-thumbs-down"></i></button>
        </div>
    </section>
</template>

<script setup>

import { ref } from 'vue'

const isLike = ref(null)

const props = defineProps({
    useJustifyEnd: {
        type: Boolean,
        default: false
    }
})

</script>