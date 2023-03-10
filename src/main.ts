import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VCalendar from 'v-calendar'

import './assets/base.css'
import '@/styles/index.sass'
import 'animate.css'
import 'v-calendar/dist/style.css'

const app = createApp(App)

app.use(VCalendar, {})

app.use(router)

app.mount('#app')
