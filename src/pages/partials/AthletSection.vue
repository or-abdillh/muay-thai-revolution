<template>
    <SectionCard data-role="main-section" id="Atlet">
        <SectionTitle title="Zone Of Athlet" subtitle="Melampaui Batas Prestasi dan Semangat Dalam Dunia Muay Thai"></SectionTitle>
        
        <section>
            <AthletStaticticSection></AthletStaticticSection>
        </section>
    </SectionCard>
</template>

<script setup>

import SectionCard from '@component/base/SectionCard.vue'
import SectionTitle from '@component/base/SectionTitle.vue'
import AthletStaticticSection from '@page/partials/AthletStaticticSection.vue'

const subs = [
    {
        heading: 'Statistik Partisipasi dan Prestasi Atlet di Indonesia',
        sub: '',
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