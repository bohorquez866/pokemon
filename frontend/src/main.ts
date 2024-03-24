import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'primevue/resources/themes/aura-light-green/theme.css'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue, {})
app.use(router)

app.mount('#app')
