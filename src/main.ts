import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import { createWebHashHistory, createRouter } from 'vue-router'

import Home from './views/home.vue'
import Doc from './views/doc.vue'

const history = createWebHashHistory()
const router = createRouter({
    history, routes:[{
        path: '/',
        component: Home
    },{
        path:'/doc',
        component: Doc
    }]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
