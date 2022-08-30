<template>
<div class="party-content-container" v-if="party === true">
  <div>
    <h2>My Party</h2>
    <h3>Drinks choosen</h3>
    <div v-if="this.selectedCocktailData.length !== 0">
      <PlanComponent  v-on:click="remove(index, item.idDrink, this.ingredientsData)" v-for="(item, index) in selectedCocktailData" :key="item.idDrink" :name="item.strDrink"/>
    </div>
    <div v-else>
      <p>No drinks choosen yet</p>
    </div>
    <div v-if="this.ingredientsData.length !== 0">
      <h3>My Grocery List</h3>
      <GroceryList v-for="(value, index) in ingredientsData" :key="index" :ing="value"/>
    </div>
  </div>
  <div>
    <div class="search-input">
      <h2>Looking for a drink ?</h2>
      <input type="text" v-model="search" placeholder="Search the drink you are looking for here">
    </div>
    <div  v-if="searchData !== null" class="flex-start cards-container">
      <CocktailCard v-on:click="getCocktailSelected(item.idDrink, this.ingredientsData)" v-for="item in searchData" :key="item.idDrink" :id="item.idDrink" :name="item.strDrink" :thumbnail="item.strDrinkThumb" :partyIs="this.party" />
    </div>
    <div  v-else class="flex-start cards-container">
      <p>Sorry couldn't find any drinks corresponding</p>
    </div>
  </div>
</div>
<div v-else>
  <div class="search-noparty">
    <div class="search-input">
      <h2>Looking for a drink ?</h2>
      <input type="text" v-model="search" placeholder="Search the drink you are looking for here">
    </div>
    <div  v-if="searchData !== null" class="flex-start cards-container">
      <CocktailCard v-on:click="getCocktailSelected(item.idDrink, this.ingredientsData)" v-for="item in searchData" :key="item.idDrink" :id="item.idDrink" :name="item.strDrink" :thumbnail="item.strDrinkThumb" :partyIs="this.party" />
    </div>
    <div  v-else class="flex-start cards-container">
      <p>Sorry couldn't find any drinks corresponding</p>
    </div>
  </div>
</div>
</template>

<script>
import ApiService from '@/services/api.service'
import CocktailCard from '@/components/CocktailCardComponent.vue'
import GroceryList from '@/components/party/GroceryListComponent.vue'
import PlanComponent from './party/PlanComponent.vue'

const apiService = new ApiService()

export default {
  name: 'SearchComponent',
  components: {
    CocktailCard,
    GroceryList,
    PlanComponent
  },
  data () {
    return {
      searchData: '',
      search: null,
      party: false,
      selectedCocktailData: [],
      ingredientsData: [],
      cocktailsGrocery: []
    }
  },
  mounted () {
    this.partyMode()
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
      if (search === null) {
        this.searchData = ''
      } else {
        this.searchData = results.drinks
      }
      // console.log(results.drinks)
    },
    partyMode () {
      const url = document.location.href
      const queue = url.substring(url.lastIndexOf('/') + 1)
      if (queue === 'party-planner') {
        this.party = true
      }
      // console.log(this.party)
    },
    async getCocktailSelected (id, array) {
      const res = await apiService.getCocktailDetails(id)
      const results = await res.json()

      const strIngBase = 'strIngredient'
      let i = 1
      let strIngCurrent = strIngBase + i.toString()

      if (this.selectedCocktailData.length === 0 && array.length === 0) {
        this.selectedCocktailData.push(results.drinks[0])
        while (results.drinks[0][strIngCurrent] !== null) {
          array.push({
            key: results.drinks[0].strDrink,
            value: results.drinks[0][strIngCurrent]
          })
          i++
          strIngCurrent = strIngBase + i.toString()
        }
        this.cocktailsGrocery.push(results.drinks[0].strDrink)
      } else {
        if (this.cocktailsGrocery.includes(results.drinks[0].strDrink) === false) {
          this.selectedCocktailData.push(results.drinks[0])
          array.forEach(element => {
            console.log(this.cocktailsGrocery.includes(results.drinks[0].strDrink))
            if (this.cocktailsGrocery.includes(results.drinks[0].strDrink) === false) {
              while (results.drinks[0][strIngCurrent] !== null) {
                array.push({
                  key: results.drinks[0].strDrink,
                  value: results.drinks[0][strIngCurrent]
                })
                // console.log(results.drinks[-1].strDrink)
                console.log(element.key)
                i++
                strIngCurrent = strIngBase + i.toString()
              }
            }
          })
          this.cocktailsGrocery.push(results.drinks[0].strDrink)
        }
      }
      console.log(this.cocktailsGrocery)
      console.log(this.selectedCocktailData)

      if (array.length === 0) {
        while (results.drinks[0][strIngCurrent] !== null) {
          array.push({
            key: results.drinks[0].strDrink,
            value: results.drinks[0][strIngCurrent]
          })
          i++
          strIngCurrent = strIngBase + i.toString()
        }
      } else {
        array.forEach(element => {
          console.log(this.cocktailsGrocery.includes(results.drinks[0].strDrink))
          if (this.cocktailsGrocery.includes(results.drinks[0].strDrink) === false) {
            while (results.drinks[0][strIngCurrent] !== null) {
              array.push({
                key: results.drinks[0].strDrink,
                value: results.drinks[0][strIngCurrent]
              })
              // console.log(results.drinks[-1].strDrink)
              console.log(element.key)
              i++
              strIngCurrent = strIngBase + i.toString()
            }
          }
        })
      }
      const set = new Set(array)
      this.ingredientsData = Array.from(set)
      // console.log(this.ingredientsData)
      // console.log(this.selectedCocktailData)
    },
    async remove (index, id) {
      console.log(index)
      this.selectedCocktailData.splice(index, 1)
      this.cocktailsGrocery.splice(index, 1)

      const res = await apiService.getCocktailDetails(id)
      const results = await res.json()

      const ingKey = results.drinks[0].strDrink

      this.ingredientsData = this.ingredientsData.filter((item) => {
        return (item.key !== ingKey)
      })

      // if (this.selectedCocktailData)

      // console.log(id)
      // console.log(results.drinks)
      console.log(this.ingredientsData)
    }
  }
}
</script>

<style scoped>
.party-content-container{
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding-top: 10vh;
}
.party-content-container > :last-child{
  width: 65%;
}
.party-content-container > :first-child{
  width: 25%;
  padding-left: 5%;
  border-left: solid 1px #d8d8d8;
}
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
}
h2,h3{
  text-transform: capitalize;
}
h3{
  font-size: 25px;
  padding: 20px 0 10px;
}
.cards-container{
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  flex-wrap: wrap;
}
p{
  font-size: 20px;
}
.search-noparty{
  padding-top: 10vh;
}
@media screen and (max-width: 768px) {
  input{
    height: 25px;
    font-size: 17px;
  }
  h2{
    font-size: 20px;
  }
  h3{
    font-size: 18px;
    padding: 20px 0 10px;
  }
  p{
    font-size: 17px;
  }
  .party-content-container > :first-child{
    width: 30%;
  }
  .search-noparty{
    padding-top: 5vh;
  }
}
@media screen and (max-width: 500px) {
  .party-content-container > :last-child{
    width: 100%;
  }
  .party-content-container > :first-child{
    width: 100%;
    border-left: none;
  }
  .party-content-container{
    display: block;
    padding-top: 0;
  }
  h2{
    font-size: 25px;
    padding-top: 50px;
  }
  h3{
    font-size: 22px;
  }
  p{
    font-size: 20px;
  }
  input{
    height: 35px;
    font-size: 20px;
  }
  .search-noparty{
    padding-top: 0;
  }
}
</style>
