<template>
    <SectionCard class="bg-orange-950 rounded-xl flex flex-col md:flex-row justify-between gap-3">
        <!-- copywriter -->
        <section class="md:w-3/12 p-4">
            <h1 data-aos="zoom-in-up" class="text-slate-300 text-5xl mb-8 leading-tight">Kisah Inspiratif Para Atlet Nasional Indonesia</h1>
            <p data-aos="zoom-in-up" class="text-slate-300 text-xl">Di Balik Prestasi Gemilang: Perjalanan Perjuangan dan Keberhasilan Mereka</p>
        </section>

        <!-- stories -->
        <section class="md:w-8/12">
            <template v-for="(story, index) in stories" :key="index">
                <div data-aos="zoom-in-up" class="bg-slate-300 px-8 py-6 rounded-xl mb-6">
                    <!-- icon -->
                    <i data-aos="zoom-in-up" class="fa-solid fa-quote-left text-orange-600 text-5xl mb-3"></i>
                    
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-2 md:mb-0">
                        <!-- content -->
                        <p data-aos="zoom-in-up" class="md:w-9/12 text-base text-slate-700 mb-6">{{ story?.content }}</p>
                        <!-- avatar -->
                        <div class="md:w-2/12 w-4/12"><img src="/images/avatar-1.jpg" class="w-full rounded-full"></div>
                    </div>

                    <!-- athlet -->
                    <div data-aos="zoom-in-up" class="flex gap-5 items-center">
                        <!-- name and achievment -->
                        <div>
                            <p class="font-bold text-slate-800">{{ story?.name }}</p>
                            <p class="text-slate-600 text-sm">{{ story?.achievment }}</p>
                        </div>
                    </div>
                </div>
            </template>
        </section>

    </SectionCard>
</template>

<script setup>

import SectionCard from '@/components/base/SectionCard.vue'

const stories = [
    {
        name: 'Rani Fitriani',
        achievment: 'Emas - Kejuaraan Asia Muay Thai 2021',
        content: 'Rani Fitriani, atlet Muay Thai berbakat dari Indonesia, menaklukkan dunia olahraga dengan prestasinya yang mengesankan. Dengan semangat juang yang tak pernah padam, Rani meraih medali emas di Kejuaraan Asia Muay Thai 2021, menginspirasi generasi muda untuk bermimpi dan berusaha keras.'
    },
    {
        name: 'Budi Santoso',
        achievment: 'Perunggu - Kejuaraan Dunia Muay Thai 2020',
        content: 'Budi Santoso, sosok luar biasa dalam Muay Thai Indonesia, menorehkan namanya di puncak olahraga internasional. Dalam perjalanan karier yang penuh tantangan, ketekunan dan dedikasinya pada Muay Thai tidak pernah pudar. Di Kejuaraan Dunia Muay Thai 2020, Budi meraih medali perunggu setelah mengalahkan pesaing tangguh dari negara-negara lain. Prestasinya membuktikan bahwa impian dapat menjadi kenyataan dengan kerja keras dan tekad. Budi Santoso menjadi inspirasi bagi banyak orang, mengajarkan pentingnya bermimpi besar dan bekerja keras menuju kesuksesan.'
    }
]

</script>