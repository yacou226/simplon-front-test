import { createApp } from 'vue'
import '@/style.css'
import '@/index.css'
import router from '@/plugins/router.js'
import App from './App.vue'

createApp(App).use(router).mount('#app')
