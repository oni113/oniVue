import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VueRouter from 'vue-router'
import fileUpload from '../components/fileupload/DragFile.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/route1',
            name: 'route1',
            component: fileUpload
        }
    ]
})
