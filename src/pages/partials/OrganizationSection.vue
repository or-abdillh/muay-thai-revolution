<template>
    <SectionCard data-role="main-section" id="Organisasi" class="mb-16">
        <h3 data-aos="zoom-in-up" class="heading__sub text-center">Pengurus Besar Muaythai Indonesia</h3>

        <!-- logo -->
        <img data-aos="zoom-in-up" src="/images/pbmi.png" class="bg-slate-200 mx-auto mb-8 mt-12 rounded-xl">

        <!-- copywriter -->
        <p data-aos="zoom-in-up" class="text-slate-300 text-xl md:text-center mb-8">Struktur kepengurusan yang solid adalah pilar penting dalam mengembangkan olahraga ini. Bersama dengan para pemimpin yang berdedikasi, kita mewujudkan visi keunggulan dan mencetak atlet-atlet unggul yang akan mengharumkan nama Indonesia di kancah internasional.</p>

        <!-- list -->
        <section class="flex flex-wrap justify-center gap-3">
            <template v-for="(structure, x) in structures" :key="x">
                <!-- profile -->
                <div data-aos="zoom-in-up" class="w-full md:w-[28%] px-6 py-4 rounded-xl bg-orange-600 hover:bg-orange-950 duration-300 border border-orange-900 mb-1 flex flex-col md:flex-row text-center md:text-left items-center gap-6">
                    <!-- avatar -->
                    <div><img src="/images/avatar-1.jpg" class="w-16 h-16 rounded-full"></div>
                    <div>
                        <small class="text-slate-200 font-medium">{{ structure?.role }}</small>
                        <p class="text-slate-200 text-xl mb-3">{{ structure?.name }}</p>

                        <!-- socials -->
                        <div class="flex justify-center md:justify-start gap-3 text-slate-300 text-sm">
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-whatsapp"></i>
                        </div>
                    </div>
                </div>
            </template>
        </section>
    </SectionCard>
</template>

<script setup>

import SectionCard from '@component/base/SectionCard.vue'

const structures = [
    {
        role: 'Ketua Umum',
        name: 'La Nyalla Mattalitti'
    },
    {
        role: 'Wakil Ketua Umum',
        name: 'Siti Rahayu Asri'
    },
    {
        role: 'Ketua Harian',
        name: 'Hadi Susanto Wibowo'
    },
    {
        role: 'Sekretaris Jenderal',
        name: 'Bambang Kusumoo'
    },
    {
        role: 'Wakil Sekretaris Jenderal',
        name: 'Rina Wulandari'
    },
    {
        role: 'Bendahara Umum',
        name: 'Hendra Setiawan'
    },
    {
        role: 'Wakil Bendahara Umum',
        name: 'Dewi Anggraeni'
    },
    {
        role: 'Ketua Dewan Pembina',
        name: 'Dra. Retno Wulandari'
    },
    {
        role: 'Ketua Dewan Penasehat',
        name: 'Dr. H. Ahmad Rahman'
    },
]

</script>