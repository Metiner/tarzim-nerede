import Vue from 'vue'
import Router from 'vue-router'
import CreatePost from './views/CreatePost.vue'

Vue.use(Router)

export default new Router({

    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'createPost',
        component: CreatePost
      }
    ]
})
