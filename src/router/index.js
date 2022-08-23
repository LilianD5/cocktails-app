import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TypeView from '../views/TypeView.vue'
import IngredientView from '../views/IngredientView.vue'
import CategoryView from '../views/CategoryView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/selection/:type',
    name: 'type',
    component: TypeView
  },
  {
    path: '/selection/:ingredient',
    name: 'ingredient',
    component: IngredientView
  },
  {
    path: '/selection/:category',
    name: 'category',
    component: CategoryView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
