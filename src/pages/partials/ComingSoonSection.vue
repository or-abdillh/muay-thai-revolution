<template>
    <SectionCard :use-horizontal-padding="false" :use-vertical-padding="false" class="bg-[url('/images/muay-thai-battle.jpg')] bg-center bg-no-repeat bg-cover">
        <!-- layer -->
        <section class="md:px-24 md:py-32 p-12 bg-orange-950 bg-opacity-50 backdrop-blur text-center">
            <i data-aos="zoom-in-up" class="fa-solid fa-trophy text-orange-600 text-4xl mb-4"></i>
            <h4 data-aos="zoom-in-up" class="text-2xl uppercase text-slate-200 mb-5">Coming Soon</h4>
            <h3 data-aos="zoom-in-up" class="text-4xl uppercase text-slate-200 mb-12">Muaythai National Championship 2023</h3>
            <p data-aos="zoom-in-up" class="text-slate-300 mb-16">Inilah momen bagi Anda untuk menorehkan namamu dalam sejarah kebanggaan olahraga ini. Siapkan diri Anda dengan latihan yang intens, karena di kejuaraan ini, hanya yang terbaik yang akan berdiri di podium kemenangan. Tunjukkan teknik pukulan yang memukau, tendangan yang mematikan, serta taktik cerdas yang menggemparkan lawan.</p>
            <Primary data-aos="zoom-in-up" title="Bagikan informasi ini" icon="fa-solid fa-share"></Primary>
        </section>
    </SectionCard>
</template>

<script setup>

import SectionCard from '@/components/base/SectionCard.vue'
import Primary from '@/components/button/Primary.vue'

</script>