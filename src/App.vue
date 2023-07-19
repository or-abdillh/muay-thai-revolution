<template>
  <Navbar></Navbar>
  <main class="min-h-screen pt-5">
    <router-view></router-view>
    <FloatingButton></FloatingButton>
  </main>
  <Footer></Footer>
</template>

<script setup>

import Navbar from '@component/base/Navbar.vue'
import Footer from '@component/base/Footer.vue'
import FloatingButton from '@component/button/FloatingButton.vue'

</script>