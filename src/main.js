import './assets/main.css'

import App from './App.vue'
import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import router from "./router";


createApp(App).mount('#app')
createApp(App).use(router).mount("#app"); 
