<template>
    <section class="flex flex-col-reverse md:flex-row gap-6 justify-between items-center">
        <!-- programs -->
        <div class="md:w-6/12 gap-1 flex">
            <!-- years -->
            <div data-aos="zoom-in-up" class="md:w-2/12 columns-1 gap-2">
                <template v-for="{ year } in athleteDevelopmentPrograms" :key="year">
                    <button @click="yearActive = year" :class="{'border-r border-slate-200 bg-orange-600': yearActive == year, 'bg-orange-950': yearActive != year}" class="px-9 py-2 duration-300 hover:bg-orange-900 text-slate-300 mb-2">{{ year }}</button>
                </template>
            </div>
            <!-- program -->
            <div data-aos="zoom-in-up" class="md:w-10/12 p-6 bg-orange-600">
                <template v-for="program in athleteDevelopmentPrograms" :key="program">
                    <div data-aos="zoom-in-up" v-if="program?.year == yearActive" class="text-slate-200">
                        <!-- name -->
                        <div class="mb-3 flex flex-col-reverse md:flex-row justify-between">
                            <div>
                                <small class="font-semibold">Program</small>
                                <p>{{ program?.programName }}</p>
                            </div>
                            
                            <!-- icon -->
                            <div class="h-10 w-10 bg-slate-200 grid place-items-center rounded-lg">
                                <i class="fa-solid fa-dumbbell text-orange-600"></i>
                            </div>
                        </div>
                        <!-- description -->
                        <div class="mb-3">
                            <small class="font-semibold">Deskripsi</small>
                            <p class="text-sm">{{ program?.description }}</p>
                        </div>
                        <!-- objectives -->
                        <div>
                            <small class="font-semibold">Objectives</small>
                            <template v-for="objective in program?.objectives" :key="objective">
                                <p class="flex items-center gap-3 text-sm">
                                    <i class="fa-solid fa-check"></i>
                                    {{ objective }}
                                </p>
                            </template>
                        </div>
                    </div>
                </template>
            </div>
        </div>

        <!-- copywriter -->
        <div class="md:w-5/12 md:text-right">
            <p data-aos="zoom-in-up" class="font-semibold text-3xl text-slate-200 mb-4">
                <!-- icon -->
                Program Pengembangan Atlet untuk Indonesia
                <i class="fa-solid text-orange-600 fa-people-group me-2"></i>
            </p>
            <p data-aos="zoom-in-up" class="text-lg text-slate-300 mb-8">Membangun Masa Depan Kejuaraan Muay Thai di Indonesia: Program Pelatihan dan Pengembangan Atlet Berbakat untuk Mewujudkan Generasi Unggul dan Berprestasi dalam Dunia Olahraga Bela Diri Terkenal ini</p>

            <Reaction :use-justify-end="true"></Reaction>
        </div>
    </section>
</template>

<script setup>

import { ref } from 'vue'
import Reaction from '@component/Reaction.vue'

const yearActive = ref('2022')

const athleteDevelopmentPrograms = [
    {
        year: 2022,
        programName: "Talent Discovery Camp",
        description: "Kemahasiswaan talenta nasional untuk mengidentifikasi atlet muda berbakat di Muay Thai.",
        objectives: [
            "Mengidentifikasi bakat-bakat muda dengan potensi di Muay Thai.",
            "Menyediakan pelatihan dasar dan pemaparan olahraga.",
            "Memilih calon-calon potensial untuk program pengembangan lebih lanjut."
        ]
    },
    {
        year: 2021,
        programName: "Youth Development Squad",
        description: "Program pelatihan khusus untuk atlet muda yang menunjukkan potensi di Talent Discovery Camp.",
        objectives: [
            "Menyediakan pelatihan komprehensif dalam keterampilan teknis, kebugaran fisik, dan persiapan mental.",
            "Mengajak atlet berpartisipasi dalam kompetisi nasional dan internasional.",
            "Mengidentifikasi calon-calon potensial untuk tim nasional."
        ]
    },
    {
        year: 2020,
        programName: "Elite Athlete Development",
        description: "Program intensif untuk mendukung dan mengembangkan atlet elit untuk kompetisi internasional.",
        objectives: [
            "Menyediakan pelatihan lanjutan dalam teknik dan strategi khusus.",
            "Mendukung atlet dengan ilmu olahraga, nutrisi, dan psikologi olahraga.",
            "Mempersiapkan atlet untuk turnamen internasional besar seperti Kejuaraan Muay Thai Asia dan Kejuaraan Muay Thai Dunia."
        ]
    },
]

</script>