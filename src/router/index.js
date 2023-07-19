import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostDetailsView from '../views/PostDetailsView.vue'
import CreatePostView from '../views/CreatePostView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts/:id',
    name: 'postDetails',
    component: PostDetailsView,
    props: true
  },
  {
    path: '/create',
    name: 'createPost',
    component: CreatePostView,

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
