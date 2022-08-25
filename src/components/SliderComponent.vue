<template>
<div>
  <h2>Our Most Popular Cocktails</h2>
</div>
<div id="slider">
  <CocktailCard v-for="(item, index) in cocktailsData" :key="item.idDrink" :id="item.idDrink" :name="item.strDrink" :thumbnail="item.strDrinkThumb" :index="index" :show="currentIndex"/>
</div>
</template>

<script>
import ApiService from '@/services/api.service'
import CocktailCard from '@/components/CocktailCardComponent.vue'

const apiService = new ApiService()

export default {
  name: 'SearchComponent',
  components: {
    CocktailCard
  },
  data () {
    return {
      cocktailsData: null,
      currentIndex: 0
    }
  },
  mounted () {
    this.popularCocktails()
    this.startSlider()
  },
  methods: {
    async popularCocktails () {
      const res = await apiService.getPopularCocktails()
      const popular = await res.json()
      this.cocktailsData = popular.drinks
    },
    next () {
      if (this.currentIndex === 19) {
        this.currentIndex = 0
      } else {
        this.currentIndex += 1
      }
    },
    previous () {
      if (this.currentIndex === 0) {
        this.currentIndex = 19
      } else {
        this.currentIndex -= 1
      }
    },
    startSlider () {
      setInterval(this.next, 4000)
    }
  }
}
</script>

<style scoped>
h2{
  text-align: center;
  font-size: 30px;
  padding-top: 10vh;
}
.cards-container{
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
}
#slider{
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}
</style>
