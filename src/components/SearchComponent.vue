<template>
<div>
  <h2>Looking for a drink ?</h2>
  <input type="text" v-model="search" placeholder="Search the drink you are looking for here">
</div>
<div class="flex-start cards-container">
  <CocktailCard v-for="item in searchData" :key="item.idDrink" :id="item.idDrink" :name="item.strDrink" :thumbnail="item.strDrinkThumb" />
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
      searchData: null,
      search: null
    }
  },
  watch: {
    search (value) {
      if (value === '') {
        value = null
      }
      this.searchCocktails(value)
      // console.log(value)
    }
  },
  methods: {
    async searchCocktails (search) {
      const res = await apiService.getResearchCocktails(search)
      const results = await res.json()
      this.searchData = results.drinks
      console.log(results.drinks)
    }
  }
}
</script>

<style scoped>
input{
  margin: 2vh auto;
  display: block;
  width: 89%;
  max-width: 1200px;
  height: 35px;
  background-color: rgb(15, 15, 15);
  border: 1px solid #d8d8d8;
  color: #d8d8d8;
  font-size: 22px;
  font-family: 'Antic Didone', 'Times New Roman', Times, serif;
  letter-spacing: 2px;
  padding-left: 1%;

}
input:focus-visible{
  outline: none;
}
h2{
  text-align: center;
  font-size: 30px;
  padding-top: 10vh;
}
.cards-container{
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  flex-wrap: wrap;
}
</style>
