<template>
<div v-if="cocktailData !== null">
  <h2>{{ cocktailData.strDrink }}</h2>
  <div class="recipe-container">
    <div class="infos-container">
        <figure><img :src="cocktailData.strDrinkThumb" alt="Drinks image"></figure>
    </div>
    <div>
        <div>
          <h3 class="first-h3">Ingredients & Quantity</h3>
          <CocktailDetailsIngredients v-for="(value, index) in ingredientsData" :key="index" :ing="value"/>
        </div>
        <div class="sub-infos-container">
          <h3>Type of glass : {{ cocktailData.strGlass }}</h3>
        </div>
        <div class="sub-infos-container">
          <h3 v-if="cocktailData.strAlcoholic === 'Alcoholic'">Alcohol : Yes</h3>
          <h3 v-else>Alcohol: No</h3>
        </div>
        <div>
          <RatingComponent :name="cocktailData.strDrink" />
        </div>
    </div>
  </div>
  <div class="instructions-container">
    <h3>Instructions</h3>
    <p>{{ cocktailData.strInstructions }}</p>
  </div>
</div>
</template>

<script>
import ApiService from '@/services/api.service.js'
import CocktailDetailsIngredients from '@/components/details/CocktailDetailsIngredientsComponent.vue'
import RatingComponent from '../rating/RatingComponent.vue'

const apiService = new ApiService()

export default {
  name: 'CocktailDetails',
  components: {
    CocktailDetailsIngredients,
    RatingComponent
  },
  data () {
    return {
      cocktailData: null,
      ingredientsData: null,
      id: this.$route.params.id,
      starValue: null,
      rate: false
    }
  },
  created () {
    this.cocktailDetails(this.id)
  },
  methods: {
    async cocktailDetails (id) {
      const res = await apiService.getCocktailDetails(id)
      const details = await res.json()
      this.cocktailData = details.drinks[0]
      //   console.log(details.drinks[0])
      const recipe = []
      const strIngBase = 'strIngredient'
      const strMeasBase = 'strMeasure'
      let i = 1
      let strIngCurrent = strIngBase + i.toString()
      let strMeasCurrent = strMeasBase + i.toString()
      while (details.drinks[0][strIngCurrent] !== null) {
        recipe.push({
          key: details.drinks[0][strIngCurrent],
          value: details.drinks[0][strMeasCurrent]
        })
        i++
        strIngCurrent = strIngBase + i.toString()
        strMeasCurrent = strMeasBase + i.toString()
      }
      //   console.log(recipe)
      this.ingredientsData = recipe
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
  font-size: 20px;
  padding-top: 7px;
}
h2{
    text-align: center;
    font-size: 30px;
    padding-top: 5vh;
}
h3{
    font-size: 25px;
}
img{
    width: 100%;
}
.first-h3{
    padding-bottom: 10px;
}
.recipe-container, .instructions-container{
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 3vh;
}
.recipe-container{
    display: flex;
    padding-top: 10vh;
}
.infos-container{
    width: 40%;
    padding-right: 5vw;
}
.sub-infos-container{
    padding-top: 30px;
}
.rating-container{
  display: flex;
  justify-content: start;
}
.stars{
  width: 30px;
  padding-right: 12px;
  padding-top: 12px;
  filter: grayscale(1);
  cursor: pointer;
}
.stars-hover{
  filter: grayscale(0);
}
.stars-clicked{
  filter: grayscale(0);
}
.rate{
  padding-top: 12px;
}
@media screen and (max-width: 768px) {
  h3{
    font-size: 20px;
  }
  h2{
    font-size: 25px;
  }
  p{
    font-size: 17px;
  }
  .infos-container{
    width: 58%;
  }
  .sub-infos-container{
    padding-top: 15px;
  }
}
@media screen and (max-width: 500px) {
  .recipe-container{
    display: block;
    padding-top: 2vh;
  }
  .infos-container{
    width: 100%;
    padding-right: 0;
    margin: 0 auto;
  }
  h3{
    font-size: 22px;
    padding-top: 20px;
  }
  h2{
    padding-top: 5vh;
  }
  p{
    font-size: 17px;
  }
  .sub-infos-container{
    padding-top: 15px;
  }
  .instructions-container{
    padding-top: 0;
  }
}
</style>
