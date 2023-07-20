<template>
    <section>
        <!-- wrapper -->
        <div class="flex flex-col md:flex-row gap-6 justify-between items-center">
            <!-- copywriter -->
            <div class="md:w-5/12">
                <p data-aos="zoom-in-up" class="font-semibold text-3xl text-slate-200 mb-4">
                    <!-- icon -->
                    <i class="fa-solid text-orange-600 fa-trophy me-2"></i>
                    Statistik Partisipasi dan Prestasi Atlet di Indonesia
                </p>
                <p data-aos="zoom-in-up" class="text-lg text-slate-300 mb-8">Mengungkap Kisah Gemilang dan Dedikasi Atlet Muay Thai Indonesia: Menelusuri Sejarah Partisipasi dalam Event Bergengsi dan Meraih Prestasi Gemilang di Tingkat Nasional dan Internasional</p>

                <Reaction></Reaction>
            </div>

            <!-- stats -->
            <div class="md:w-6/12">
                <!-- bar -->
                <div data-aos="zoom-in-up" class="flex flex-wrap md:flex-nowrap text-slate-300 mb-1">
                    <template v-for="{ year } in statistics" :key="year">
                        <button @click="yearActive = year" :class="{'border-b border-slate-200 bg-orange-600': yearActive == year, 'bg-orange-950': yearActive != year}" class="px-9 py-2 duration-300 hover:bg-orange-900">{{ year }}</button>
                    </template>
                </div>
                <!-- lists -->
                <div data-aos="zoom-in-up" class="flex flex-wrap md:flex-nowrap gap-1 mb-6">
                    <template v-for="stat in statistics" :key="stat">
                        <!-- participants -->
                        <div v-if="stat?.year == yearActive" class="bg-orange-600 text-slate-200 p-8 text-center text-sm flex-grow">
                            <h1 class="text-slate-300 text-3xl mb-2">
                                <i class="fa-solid fa-user text-2xl"></i>
                                {{ stat?.totalParticipants }} 
                            </h1>
                            Partisipasi Atlet
                        </div>
                        <!-- gold -->
                        <div v-if="stat?.year == yearActive" class="bg-orange-600 text-slate-200 p-8 text-center text-sm flex-grow">
                            <h1 class="text-slate-300 text-3xl mb-2">
                                <i class="fa-solid fa-medal text-2xl"></i>
                                {{ stat?.goldMedals }}</h1>
                            Emas
                        </div>
                        <!-- silver -->
                        <div v-if="stat?.year == yearActive" class="bg-orange-600 text-slate-200 p-8 text-center text-sm flex-grow">
                            <h1 class="text-slate-300 text-3xl mb-2">
                                <i class="fa-solid fa-medal text-2xl"></i>
                                {{ stat?.silverMedals }}
                            </h1>
                            Silver
                        </div>
                        <!-- gold -->
                        <div v-if="stat?.year == yearActive" class="bg-orange-600 text-slate-200 p-8 text-center text-sm flex-grow">
                            <h1 class="text-slate-300 text-3xl mb-2">
                                <i class="fa-solid fa-medal text-2xl"></i>
                                {{ stat?.bronzeMedals }}
                            </h1>
                            Perunggu
                        </div>
                    </template>
                </div>
                <!-- tournaments -->
                <div>
                    <p data-aos="zoom-in-up" class="text-slate-300 mb-2">Turnamen Internasional</p>
                    <div class="flex flex-col md:flex-row md:gap-3">
                        <template v-for="stat in statistics" :key="stat.internationalTournaments">
                            <template v-for="tournament in stat.internationalTournaments" :key="tournament">
                                <div v-if="stat?.year == yearActive" class="mb-2">
                                    <p data-aos="zoom-in-up" class="text-slate-200 text-sm">
                                        <i class="fa-solid fa-medal me-2" :class="{ 'text-yellow-500': tournament?.medalType == 'gold', 'text-slate-500': tournament?.medalType == 'silver', 'text-orange-800': tournament?.medalType == 'bronze' }"></i>
                                        {{ tournament?.tournamentName }}
                                    </p>
                                </div>
                            </template>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

import { ref } from 'vue'
import Reaction from '@component/Reaction.vue'

const yearActive = ref('2022')

const statistics = [
    {
        year: 2022,
        totalParticipants: 120,
        goldMedals: 10,
        silverMedals: 15,
        bronzeMedals: 20,
        totalMedals: 45,
        nationalChampionship: true,
        internationalTournaments: [
            {
                tournamentName: "Asian Muay Thai Championships",
                medalType: "gold",
            },
            {
                tournamentName: "SEA Games",
                medalType: "silver",
            },
            {
                tournamentName: "World Muay Thai Championships",
                medalType: "bronze",
            },
        ],
    },
    {
        year: 2021,
        totalParticipants: 100,
        goldMedals: 5,
        silverMedals: 10,
        bronzeMedals: 15,
        totalMedals: 30,
        nationalChampionship: true,
        internationalTournaments: [
            {
                tournamentName: "Asian Muay Thai Championships",
                medalType: "silver",
            },
            {
                tournamentName: "SEA Games",
                medalType: "bronze",
            },
        ],
    },
    {
        year: 2020,
        totalParticipants: 80,
        goldMedals: 7,
        silverMedals: 12,
        bronzeMedals: 18,
        totalMedals: 37,
        nationalChampionship: true,
        internationalTournaments: [
            {
                tournamentName: "Asian Muay Thai Championships",
                medalType: "gold",
            },
        ],
    },
    {
        year: 2019,
        totalParticipants: 90,
        goldMedals: 9,
        silverMedals: 14,
        bronzeMedals: 22,
        totalMedals: 45,
        nationalChampionship: true,
        internationalTournaments: [
            {
                tournamentName: "SEA Games",
                medalType: "silver",
            },
            {
                tournamentName: "World Muay Thai Championships",
                medalType: "bronze",
            },
        ],
    },
    {
        year: 2018,
        totalParticipants: 70,
        goldMedals: 6,
        silverMedals: 11,
        bronzeMedals: 15,
        totalMedals: 32,
        nationalChampionship: true,
        internationalTournaments: [
            {
                tournamentName: "Asian Muay Thai Championships",
                medalType: "silver",
            },
        ],
    }
]

</script>