<template>
    <SectionCard data-role="main-section" id="Atlet">
        <SectionTitle title="Zone Of Athlet" subtitle="Melampaui Batas Prestasi dan Semangat Dalam Dunia Muay Thai"></SectionTitle>
        
        <section>
            <AthletStaticticSection class="mb-24"></AthletStaticticSection>
            <AthletProgramSection class="mb-24"></AthletProgramSection>
        </section>
    </SectionCard>
</template>

<script setup>

import SectionCard from '@component/base/SectionCard.vue'
import SectionTitle from '@component/base/SectionTitle.vue'
import AthletStaticticSection from '@page/partials/AthletStaticticSection.vue'
import AthletProgramSection from '@page/partials/AthletProgramSection.vue'
</script>