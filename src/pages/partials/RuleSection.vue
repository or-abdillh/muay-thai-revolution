<template>
    <SectionCard data-role="main-section" id="Peraturan">
        <SectionTitle title="The Rules" subtitle="Mengenal Aspek Penting yang Membentuk Pertandingan Muay Thai"></SectionTitle>

        <!-- copywriter -->
        <p class="text-slate-300 text-xl md:text-center mb-8">Selamat datang di bagian yang akan mengungkapkan aturan dalam Muay Thai. Sebagai olahraga yang memiliki sejarah dan budaya yang kaya, Muay Thai memiliki tata cara dan etika yang dijunjung tinggi di dalam ring. Mari kita eksplorasi bersama untuk memahami aturan-aturan yang membentuk pertandingan Muay Thai.</p>

        <!-- card wrapper -->
        <section class="flex gap-6 flex-col md:flex-row justify-between">
            <template v-for="(rule, index) in rules" :key="index">
                <RuleCard :rule="rule" class="md:w-3/12"></RuleCard>
            </template>
        </section>
    </SectionCard>
</template>

<script setup>

import SectionTitle from '@component/base/SectionTitle.vue'
import SectionCard from '@component/base/SectionCard.vue'
import RuleCard from '@component/card/RuleCard.vue'

const rules = [
    {
        title: 'Penggunaan Sarung Tangan',
        description: 'Dalam Muay Thai, petarung menggunakan sarung tangan tinju yang sesuai dengan berat dan ukuran yang diatur. Sarung tangan bertujuan untuk melindungi tangan dari cedera dan meningkatkan keamanan dalam pertandingan.'
    },
    {
        title: 'Wai Kru Ram Muay',
        description: 'Sebelum pertandingan dimulai, setiap petarung akan menampilkan gerakan tarian khas yang disebut Wai Kru Ram Muay. Ini adalah bentuk penghormatan kepada guru, leluhur, dan tradisi Muay Thai. Wai Kru Ram Muay juga merupakan momen refleksi dan fokus sebelum memasuki pertarungan.'
    },
    {
        title: 'Delapan Anggota Tubuh',
        description: 'Dalam Muay Thai, delapan anggota tubuh (tinju, lutut, siku, dan kaki) dapat digunakan untuk menyerang dan mempertahankan diri. Petarung diajarkan untuk menggunakan teknik-teknik ini secara efektif dan dengan kekuatan yang terkontrol.'
    },
    {
        title: 'Teknik Serangan dan Pertahanan',
        description: 'Muay Thai melibatkan serangkaian teknik serangan dan pertahanan yang melibatkan keahlian dan strategi. Tinju, tendangan, lutut, dan siku digunakan dengan presisi untuk menghantam lawan dengan kekuatan dan kelincahan.'
    }
]

</script>