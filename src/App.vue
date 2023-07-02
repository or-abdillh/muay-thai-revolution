<template>
  <Navbar></Navbar>
  <main class="min-h-screen bg-slate-950 pt-5">
    <router-view></router-view>
  </main>
</template>

<script setup>

import Navbar from '@component/base/Navbar.vue'

</script>