<template>
    <!-- landing page -->
    <SectionCard class="bg-slate-100 rounded-4xl mb-5">
        <!-- header -->
        <section class="flex flex-col md:flex-row gap-3 md:gap-5 md:items-center border-b border-slate-300 pb-5 mb-10">
            <i class="w-10 h-10 bg-slate-200 rounded-full grid place-items-center fa-solid fa-bullhorn"></i>
            <p class="font-semibold text-xl md:text-2xl text-slate-800 uppercase">
                Memajukan Beladiri Indonesia
                Menuju Keunggulan!
            </p>
        </section>

        <section class="flex flex-col md:flex-row justify-between">
            <!-- copywriter -->
            <div class="md:w-8/12 mb-12 md:mb-0">
                <h1 class="mb-6 md:mb-16 text-5xl md:text-7xl leading-snug md:leading-[1.25] text-slate-800 font-semibold">
                    Jelajahi
                    Keajaiban <i class="fa-solid fa-dumbbell text-orange-600"></i>
                    Keberanian, dan
                    Kekuatan Dalam
                    Beladiri
                    Terkuat
                    dari
                    Thailand
                </h1>

                <div class="flex gap-5">
                    <!-- CTA -->
                    <button class="md:w-4/12 bg-orange-600 px-6 py-4 text-slate-200 font-medium uppercase rounded-full">
                        <i class="fa-solid fa-users me-2"></i>
                        Join Our Community
                    </button>

                    <!-- decorations -->
                    <div class="flex justify-end md:w-3/12">
                        <Direction class="fill-orange-600" />
                        <Direction class="fill-orange-600" />
                        <Direction class="fill-orange-600" />
                        <Direction class="fill-orange-600" />
                    </div>
                </div>

            </div>

            <!-- illustration -->
            <div class="md:w-4/12 grid place-items-center">
                <img src="/images/muay-thai-fighter.png" style="z-index: 1;"
                    class="rotate-[-4deg] mb-8 border-8 border-slate-900 rounded-xl" alt="Muay Thai Fighter">

                <p class="text-slate-600 text-sm">Bergabunglah dengan kami sekarang dan jadilah bagian dari perubahan besar
                    ini.
                    <br><br>
                    Mari kita bersama-sama
                    merayakan semangat, ketekunan, dan prestasi yang mengguncang dunia Muay Thai
                </p>
            </div>
        </section>

    </SectionCard>
</template>

<script setup>

import SectionCard from '@component/base/SectionCard.vue'
import Direction from '@asset/svg/direction.svg'

</script>