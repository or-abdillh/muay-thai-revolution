<template>
    <SectionCard data-role="main-section" id="Atlet">
        <SectionTitle title="Zone Of Athlet" subtitle="Melampaui Batas Prestasi dan Semangat Dalam Dunia Muay Thai"></SectionTitle>
        <section class="">
            <!-- subs menu -->
            <template v-for="(sub, x) in subs" :key="x">
                <div class="w-full relative bg-[url('/images/muay-thai-battle.jpg')] bg-center bg-cover bg-no-repeat mb-6 rounded-xl overflow-hidden">
                    <div class="bg-slate-900 bg-opacity-90 hover:backdrop-blur-lg duration-300 p-12 flex flex-col md:flex-row md:items-center gap-6">
                        <!-- icon -->
                        <div>
                            <div class="w-20 h-20 bg-orange-400 rounded-lg grid place-items-center">
                                <i class="fa-solid text-slate-200 text-xl" :class="sub?.icon"></i>
                            </div>
                        </div>
                        <!-- copywriter -->
                        <div class="md:w-9/12">
                            <p class="text-2xl text-slate-200 font-semibold mb-2">{{ sub.heading }}</p>
                            <p class="text-slate-300">{{ sub.sub }}</p>
                        </div>
                        <!-- link -->
                        <div class="md:text-center flex-grow">
                            <a href="" class="border border-slate-300 text-slate-300 px-6 py-2 text-sm hover:bg-orange-600 duration-300">Klik Disini</a>
                        </div>
                    </div>
                </div>
            </template>
        </section>
    </SectionCard>
</template>

<script setup>

import SectionCard from '@component/base/SectionCard.vue'
import SectionTitle from '@component/base/SectionTitle.vue'

const subs = [
    {
        heading: 'Statistik Partisipasi dan Prestasi Atlet di Indonesia',
        sub: 'Mengungkap Kisah Gemilang dan Dedikasi Atlet Muay Thai Indonesia: Menelusuri Sejarah Partisipasi dalam Event Bergengsi dan Meraih Prestasi Gemilang di Tingkat Nasional dan Internasional',
        icon: 'fa-trophy'
    },
    {
        heading: 'Program Pengembangan Atlet untuk Indonesia',
        sub: 'Membangun Masa Depan Kejuaraan Muay Thai di Indonesia: Program Pelatihan dan Pengembangan Atlet Berbakat untuk Mewujudkan Generasi Unggul dan Berprestasi dalam Dunia Olahraga Bela Diri Terkenal ini',
        icon: 'fa-people-group'
    },
    {
        heading: 'Inovasi pada Cabang Olahraga Muay Thai di Indonesia',
        sub: 'Membuka Cakrawala Baru bagi Muay Thai di Nusantara: Mengulas Inovasi, Teknologi, dan Pendekatan Modern dalam Mengembangkan dan Memajukan Cabang Olahraga yang Penuh Pesona ini di Tanah Air',
        icon: 'fa-lightbulb'
    }
]

</script>