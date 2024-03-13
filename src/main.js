import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// Set base URL for axios requests
axios.defaults.baseURL = 'http://127.0.0.1:8000';
createApp(App).use(router).mount('#app')
