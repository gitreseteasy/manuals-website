import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import {createPinia as store} from 'pinia';
import './index.css';

createApp(App).use(router).use(store).mount('#app');
