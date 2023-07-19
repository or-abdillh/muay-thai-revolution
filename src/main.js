// cores
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/routes/router.js'

// other packages
import VueSplide from '@splidejs/vue-splide'

// styles
import '@/style.css'
import '@splidejs/vue-splide/css'

createApp(App)
    .use(VueSplide)
    .use(router)
    .mount('#app')