<template>
    <SectionCard data-role="main-section" id="Sejarah">
        <SectionTitle title="The Histories" subtitle="Sejarah dan Perkembangan Muay Thai: Dari Akar Thailand Hingga Menembus Indonesia"></SectionTitle>

        <section class="mb-12 md:mb-16">
            <!-- copywriter -->
            <div class="text-slate-300 text-xl duration-300">
                <!-- heading -->
                <p data-aos="zoom-in-up">
                    Selamat datang di bagian yang membahas sejarah dan perkembangan Muay Thai,
                    <span class="font-bold text-slate-200">
                        seni bela diri yang telah melampaui batas-batas dan kini menghiasi Indonesia.
                    </span>
                    Muay Thai memiliki sejarah yang kaya dan dipercaya telah ada selama berabad-abad di Thailand. Pada awalnya, Muay Thai digunakan sebagai teknik pertempuran oleh tentara Kerajaan Thailand untuk melindungi tanah air mereka. Dengan waktu, Muay Thai berkembang menjadi suatu seni bela diri yang memadukan teknik serangan menggunakan tinju, lutut, siku, dan kaki.
                </p>
                <br>
                <template v-if="isReadMore">
                    <p data-aos="zoom-in-up" class="duration-300">
                        Tidak hanya di Thailand, Muay Thai kemudian menyebar ke berbagai belahan dunia, termasuk Indonesia. Melalui perjalanan para ahli Muay Thai, ajaran-ajaran dan keterampilan mereka diperkenalkan kepada masyarakat Indonesia. Dalam waktu singkat, Muay Thai mendapatkan pengakuan dan popularitas di Indonesia sebagai olahraga bela diri yang menarik dan kompetitif.
                    </p>
                    <br>
                    <p data-aos="zoom-in-up" class="duration-300">
                        Dalam perjalanannya, Muay Thai telah menginspirasi dan melibatkan banyak peminat di Indonesia. Baik melalui pelatihan, pertandingan, atau komunitas yang berdedikasi, Muay Thai menjadi bagian dari kehidupan dan semangat para praktisi di tanah air. Pengaruh Muay Thai dalam meningkatkan kebugaran fisik, disiplin, keberanian, dan semangat juang tidak dapat disangkal.
                    </p>
                    <br>
                    <p data-aos="zoom-in-up" class="duration-300 mb-6">
                        Bersama-sama, kita dapat terus memperkuat dan mengembangkan tradisi Muay Thai di Indonesia. Dengan menghargai sejarahnya yang kaya dan menghormati nilai-nilai yang terkandung di dalamnya, kita dapat meneruskan warisan Muay Thai kepada generasi masa depan. Mari kita terus menginspirasi dan memperjuangkan prestasi Muay Thai di Indonesia, membawa semangat juang kita ke tingkat yang lebih tinggi.
                    </p>
                </template>
            </div>
            <!-- read more -->
            <div data-aos="zoom-in-up">
                <p class="text-slate-200">...</p>
                <button @click="isReadMore = !isReadMore" class="text-orange-600 duration-300">
                    <i class="fa-solid fa-book-open me-1"></i>
                    Baca {{ isReadMore ? 'lebih sedikit' : 'selengkapnya' }}
                </button>
            </div>
        </section>

        <!-- timelines -->
        <section class="mb-8 md:mb-20">
            <h3 data-aos="zoom-in-up" class="heading__sub text-center">Sebuah Perjalanan Bersejarah</h3>

            <!-- histories -->
            <section class="columns-1 md:columns-3">
                <template v-for="(history, index) in histories" :key="index">
                    <HistoryCard data-aos="zoom-in-up" :history="history" :expand="isExpanded" class="w-full break-inside-avoid mb-6"></HistoryCard>
                </template>
            </section>

            <!-- action -->
            <button data-aos="zoom-in-up" @click="isExpanded = !isExpanded" class="block mx-auto text-orange-600">
                <p>{{ isExpanded ? 'Tutup' : 'Lihat semua' }}</p>
                <i class="fa-solid fa-chevron-down"></i>
            </button>
        </section>

        <!-- quote -->
        <section class="w-full md:w-10/12 mx-auto">
            <div data-aos="zoom-in-up" class="text-center mb-2">
                <i class="text-orange-600 text-5xl fa-solid fa-quote-left"></i>
            </div>
            <h2 data-aos="zoom-in-up" class="text-center text-3xl text-slate-300 tracking-wide mb-3">Melalui perjalanan sejarahnya dan masuknya ke Indonesia telah membentuk landasan penting bagi pengembangan seni bela diri ini. Melalui upaya terus-menerus dan semangat juang kita, Muay Thai terus berkembang dan menginspirasi di Indonesia.</h2>
            <p data-aos="zoom-in-up" class="text-center italic text-slate-300">Anonymous</p>
        </section>
    </SectionCard>
</template>

<script setup>

import { ref } from 'vue'
import SectionCard from '@component/base/SectionCard.vue'
import SectionTitle from '@component/base/SectionTitle.vue'
import HistoryCard from '@component/card/HistoryCard.vue'

const isReadMore = ref(true)
const isExpanded = ref(true)

const histories = [
    {
        title: 'Seni Pertempuran Sipil di Thailand',
        sub: 'Pada abad ke-13',
        points: [
            'Di Kerajaan Ayutthaya, muncul seni pertempuran yang kemudian berkembang menjadi Muay Thai.',
            'Seni pertempuran ini awalnya digunakan oleh tentara Kerajaan untuk melindungi tanah air dan sebagai sarana pelatihan prajurit.'
        ]
    },
    {
        title: 'Perubahan menjadi Seni Bela Diri',
        sub: 'Pada abad ke-18',
        points: [
            'Muay Thai bertransformasi menjadi seni bela diri yang digunakan oleh masyarakat umum untuk melatih tubuh, mempertahankan diri, dan mengasah kemampuan pertempuran.',
            'Pertandingan Muay Thai mulai dilangsungkan dengan aturan dan ritual yang khas.'
        ]
    },
    {
        title: 'Pengakuan Internasional',
        sub: 'Pada abad ke-20',
        points: [
            'Muay Thai mulai mendapatkan perhatian internasional melalui pertandingan yang diadakan di Thailand.',
            'Prestasi petarung Muay Thai Thailand membawa reputasi seni bela diri ini ke kancah dunia.'
        ]
    },
    {
        title: 'Perkenalan Awal di Indonesia',
        sub: 'Pada tahun 1960-an',
        points: [
            'Muay Thai mulai diperkenalkan di Indonesia melalui pertukaran budaya antara Thailand dan Indonesia.',
            'Ahli Muay Thai dari Thailand mulai mengunjungi Indonesia untuk memberikan pelatihan dan tampil dalam pertunjukan.'
        ]
    },
    {
        title: 'Pertumbuhan Komunitas Muay Thai',
        sub: 'Pada tahun 1970-an',
        points: [
            'Komunitas Muay Thai di Indonesia mulai tumbuh dengan didirikannya klub-klub dan sekolah bela diri yang mengajarkan Muay Thai.',
            'Semakin banyak orang Indonesia tertarik dan terlibat dalam latihan Muay Thai.'
        ]
    },
    {
        title: 'Kompetisi Muay Thai di Indonesia',
        sub: 'Pada tahun 1980-an',
        points: [
            'Pertandingan Muay Thai resmi mulai diadakan di Indonesia, menarik minat penonton dan atlet bela diri.',
            'Prestasi atlet Muay Thai Indonesia mulai mencuri perhatian dan mengangkat nama Indonesia di kancah internasional.'
        ]
    }
]


</script>