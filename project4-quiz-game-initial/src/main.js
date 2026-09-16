import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

createApp(App)
// .use(store)
.use(VueAxios, axios)
.mount('#app');

