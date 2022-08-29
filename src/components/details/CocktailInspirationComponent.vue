<template>
<h2>Looking for Inspiration ?</h2>
<div class="flex-start cards-container">
  <CocktailCard v-for="item in seeAlsoData" :key="item.idDrink" :id="item.idDrink" :name="item.strDrink" :thumbnail="item.strDrinkThumb"/>
</div>

</template>

<script>
import ApiService from '@/services/api.service.js'
import CocktailCard from '@/components/CocktailCardComponent.vue'

const apiService = new ApiService()

export default {
  name: 'CocktailInspiration',
  components: {
    CocktailCard
  },
  data () {
    return {
      seeAlsoData: null
    }
  },
  created () {
    this.randomCocktail()
  },
  methods: {
    async randomCocktail () {
      const res = await apiService.getRandomCocktails()
      const random = await res.json()
      this.seeAlsoData = random.drinks
      // console.log(random.drinks)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2{
  text-align: center;
  font-size: 30px;
  padding-top: 10vh;
  padding-bottom: 50px;
}
.cards-container{
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  flex-wrap: wrap;
}
@media screen and (max-width: 768px) {
  h2{
    font-size: 25px;
  }
}
@media screen and (max-width: 500px) {
  h2{
    padding-top: 5vh;
  }
}
</style>
