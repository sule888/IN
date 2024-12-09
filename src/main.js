import { createApp } from 'vue';
import App from './App.vue';
import './assets/base.css';
import './assets/main.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWhatsapp, faFacebook, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
library.add(faWhatsapp, faFacebook, faYoutube, faTiktok);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');

