import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TypeView from '../views/TypeView.vue'
import IngredientView from '../views/IngredientView.vue'
import CategoryView from '../views/CategoryView.vue'
import CocktailView from '../views/CocktailView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/types/:type',
    name: 'type',
    component: TypeView
  },
  {
    path: '/ingredients/:ingredient',
    name: 'ingredient',
    component: IngredientView
  },
  {
    path: '/categories/:category',
    name: 'category',
    component: CategoryView
  },
  {
    path: '/drinks/:id',
    name: 'cocktail',
    component: CocktailView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
