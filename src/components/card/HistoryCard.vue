<template>
    <section>
        <!-- header -->
        <div class="bg-orange-600 flex justify-between gap-3 items-center rounded-full px-5 py-3">
            <p class="text-slate-200 font-medium uppercase">{{ props?.history?.title }}</p>
            
            <div>
                <button @click="isExpanded = !isExpanded" class="w-10 h-10 bg-slate-200 active:scale-90 duration-300 rounded-full grid place-items-center bg-opacity-80">
                    <i :class="isExpanded ? 'fa-chevron-down' : 'fa-chevron-up'" class="fa-solid text-orange-600"></i>
                </button>
            </div>
        </div>

        <!-- body -->
        <div class="px-6 md:px-7">
            <!-- content -->
            <div :class="isExpanded ? 'p-3' : 'h-0 overflow-hidden p-0'" class="w-full bg-slate-200 rounded-b-xl hover:pt-8 duration-300 text-slate-700">
                <p class="font-semibold text-xs mb-2">{{ props?.history?.sub }}</p>
                <template v-for="(point, index) in props?.history?.points" :key="index">
                    <p class="border-b border-gray-300 pb-4 mb-4 text-sm">{{ point }}</p>
                </template>
            </div>
        </div>
    </section>
</template>

<script setup>

import { ref, watch } from 'vue'

const isExpanded = ref(true)

const props = defineProps({
    history: {
        type: Object
    },
    expand: {
        type: Boolean,
        default: false
    }
})

watch(() => props?.expand, value => {
    isExpanded.value = value
})
</script>