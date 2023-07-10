<template>
    <section class="bg-slate-200 rounded-xl p-4 hover:scale-105 duration-300 group hover:bg-orange-600">
        <!-- icon -->
        <div class="h-12 w-12 rounded-full bg-orange-600 group-hover:bg-slate-200 text-slate-200 group-hover:text-orange-600 grid place-items-center mb-3">
            <i class="fa-solid fa-dumbbell"></i>
        </div>
        <!-- title -->
        <p class="font-bold text-slate-800 group-hover:text-slate-100 mb-2 text-lg">{{ props?.rule?.title }}</p>
        <!-- description -->
        <p class="text-slate-600 group-hover:text-slate-200 text-sm">{{ props?.rule?.description }}</p>
    </section>
</template>

<script setup>

const props = defineProps({
    rule: {
        type: Object
    }
})

</script>