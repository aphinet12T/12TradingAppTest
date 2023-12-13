import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueScreen from 'vue-screen'

import App from './App.vue'
import router from './router'

import './index.css'

const app = createApp(App)
app.use(createPinia())
app.use(VueScreen, 'tailwind')
app.use(router)

app.mount('#app')
