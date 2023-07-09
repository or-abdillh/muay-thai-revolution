<template>
    <SectionCard class="mb-5" data-role="main-section" id="Video">
        <SectionTitle title="Our Videos" subtitle="Membangkitkan Semangat dan Meningkatkan Prestasi Muay Thai di Indonesia Melalui Video"></SectionTitle>
        
        <section class="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 md:mb-16">
            <!-- yt embed -->
            <iframe class="w-full md:md:w-7/12" height="400" src="https://www.youtube.com/embed/lReh1gcr7ls" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div class="md:w-4/12 md:text-right">
                <!-- copywriter -->
                <div class="mb-6">
                    <h2 class="text-3xl text-slate-200 mb-5 border-b border-slate-800 pb-5">Menginspirasi Kehebatan Muay Thai Melalui Video</h2>
                    <p class="text-slate-300 text-lg">
                        Selamat datang di bagian video kami yang memukau tentang Muay Thai! Di sini, kami menghadirkan koleksi video yang memperlihatkan pesona dan kehebatan olahraga ini.
                        <br><br> 
                        Dari gerakan yang memukau hingga pertarungan sengit di atas ring, Anda akan terpukau oleh keindahan dan ketangguhan Muay Thai.
                    </p>
                </div>
                <!-- CTA -->
                <PrimaryButton title="Subscribe Our Channel" icon="fa-solid fa-bell"></PrimaryButton>
            </div>
        </section>

        <!-- featured videos -->
        <section>
            <h3 class="heading__sub text-center">Our Featured Videos</h3>

            <!-- videos -->
            <div class="flex gap-5 flex-col md:flex-row">
                <iframe class="w-full mb-4" height="400" src="https://www.youtube.com/embed/7sLw5dHdRG4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe class="w-full mb-4" height="400" src="https://www.youtube.com/embed/IwAOh9g2nH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe class="w-full mb-4" height="400" src="https://www.youtube.com/embed/AI2MD0wuXXo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </section>
    </SectionCard>
</template>

<script setup>

import SectionTitle from '@component/base/SectionTitle.vue'
import SectionCard from '@component/base/SectionCard.vue'
import PrimaryButton from '@component/button/Primary.vue'

</script>