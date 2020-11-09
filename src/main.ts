import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'

import HelloWorld from './components/HelloWorld.vue'
import Frank from './components/frank.vue'

const history = createWebHashHistory()
const router = createRouter({
    history, routes:[{
        path: '/',
        component: HelloWorld
    },{
        path:'/frank',
        component: Frank
    }]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
