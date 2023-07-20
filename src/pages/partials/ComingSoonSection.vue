<template>
    <SectionCard :use-horizontal-padding="false" :use-vertical-padding="false" class="bg-[url('/images/muay-thai-battle.jpg')] bg-center bg-no-repeat bg-cover">
        <!-- layer -->
        <section class="md:p-24 p-12 bg-orange-950 bg-opacity-50 backdrop-blur text-center">
            <i class="fa-solid fa-trophy text-orange-600 text-4xl mb-2"></i>
            <h4 class="text-2xl uppercase text-slate-200 mb-3">Coming Soon</h4>
            <h3 class="text-4xl uppercase text-slate-200 mb-6">Muaythai National Championship 2023</h3>
            <p class="text-slate-300 mb-6">Inilah momen bagi Anda untuk menorehkan namamu dalam sejarah kebanggaan olahraga ini. Siapkan diri Anda dengan latihan yang intens, karena di kejuaraan ini, hanya yang terbaik yang akan berdiri di podium kemenangan. Tunjukkan teknik pukulan yang memukau, tendangan yang mematikan, serta taktik cerdas yang menggemparkan lawan.</p>
            <Primary title="Bagikan informasi ini" icon="fa-solid fa-share"></Primary>
        </section>
    </SectionCard>
</template>

<script setup>

import SectionCard from '@/components/base/SectionCard.vue'
import Primary from '@/components/button/Primary.vue'

</script>