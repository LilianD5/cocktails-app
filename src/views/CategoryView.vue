<template>
  <HeaderComponent/>
  <div class="cocktails-list-container">
    <h2 class="page-title">drinks category: {{ category }}</h2>
    <ul class="cocktails-list">
      <CocktailsList v-for="item in categoriesData" :key="item.idDrink" :id="item.idDrink" :name="item.strDrink" :thumbnail="item.strDrinkThumb" />
    </ul>
  </div>
  <FooterComponent/>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import ApiService from '@/services/api.service.js'
import CocktailsList from '../components/CocktailsListComponent.vue'

const apiService = new ApiService()

export default {
  name: 'CategoryView',
  components: {
    HeaderComponent,
    CocktailsList,
    FooterComponent
  },
  data () {
    return {
      categoriesData: null,
      category: this.$route.params.category
    }
  },
  created () {
    this.cocktailsByCategories(this.category)
  },
  methods: {
    async cocktailsByCategories (category) {
      const res = await apiService.getCocktailsListByCategories(category)
      const cocktails = await res.json()
      this.categoriesData = cocktails.drinks
      console.log(cocktails.drinks)
    }
  }
}
</script>

<style>
</style>
