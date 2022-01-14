import {createApp} from 'vue'

require('./bootstrap')
import App from '@/vue/App.vue'
import router from '@/vue/router'

import axios from 'axios'

const app = createApp(App)
app.config.globalProperties.$axios = axios;
app.use(router)
app.mount('#app')
