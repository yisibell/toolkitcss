import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import DemoifyUI from 'demoify'

import 'demoify/lib/style.css'
import 'prismjs/themes/prism.min.css'

import '@/lib/styles/index.scss'

const app = createApp(App)

app.use(DemoifyUI)
app.use(createPinia())
app.use(router)

app.mount('#app')
