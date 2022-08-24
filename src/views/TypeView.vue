<template>
  <HeaderComponent/>
  <div class="cocktails-list-container">
    <h2 class="page-title">drinks {{ alcohol }} alcohol</h2>
    <ul class="cocktails-list">
      <CocktailsList v-for="item in typeData" :key="item.idDrink" :id="item.idDrink" :name="item.strDrink" :thumbnail="item.strDrinkThumb" />
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
  name: 'TypeView',
  components: {
    HeaderComponent,
    CocktailsList,
    FooterComponent
  },
  data () {
    return {
      typeData: null,
      type: this.$route.params.type,
      alcohol: 'with'
    }
  },
  created () {
    this.cocktailsByType(this.type)
    this.pageTitle(this.type)
  },
  methods: {
    async cocktailsByType (type) {
      const res = await apiService.getCocktailsListByType(type)
      const cocktails = await res.json()
      this.typeData = cocktails.drinks
    },
    async pageTitle (type) {
      if (type === 'Non_Alcoholic') {
        this.alcohol = 'without'
      }
    }
  }
}
</script>

<style>
</style>
