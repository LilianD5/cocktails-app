<template>
  <HeaderComponent/>
  <div class="cocktails-list-container">
    <h2 class="page-title">drinks with {{ ingredient }}</h2>
    <ul class="cocktails-list">
      <CocktailsList v-for="item in ingredientsData" :key="item.idDrink" :id="item.idDrink" :name="item.strDrink" :thumbnail="item.strDrinkThumb" />
   </ul>
  </div>
  <FooterComponent/>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import ApiService from '@/services/api.service.js'
import CocktailsList from '@/components/CocktailsListComponent.vue'

const apiService = new ApiService()

export default {
  name: 'IngredientView',
  components: {
    HeaderComponent,
    CocktailsList,
    FooterComponent
  },
  data () {
    return {
      ingredientsData: null,
      ingredient: this.$route.params.ingredient
    }
  },
  created () {
    this.cocktailsByIngredients(this.ingredient)
  },
  methods: {
    async cocktailsByIngredients (ingredient) {
      const res = await apiService.getCocktailsListByIngredients(ingredient)
      const cocktails = await res.json()
      this.ingredientsData = cocktails.drinks
      console.log(cocktails.drinks)
    }
  }
}
</script>

<style>
</style>
