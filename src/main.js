// cores
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/routes/router.js'

// other packages
import AOS from 'aos'

// styles
import '@/style.css'
import '@splidejs/vue-splide/css'
import 'aos/dist/aos.css'
import 'animate.css'

AOS.init()

createApp(App)
    .use(router)
    .mount('#app')