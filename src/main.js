import './style/main.css'
import './style/variaveis.css'
import 'boxicons'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
