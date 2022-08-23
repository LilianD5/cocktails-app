<template>
  <header>
    <div v-on:click="showMenu" id="burger-icon">
      <div class="menu-button" id="menu-button-top"></div>
      <div class="menu-button" id="menu-button-center"></div>
      <div class="menu-button" id="menu-button-bottom"></div>
    </div>
    <figure class="logo-container">
      <router-link :to="{ name: 'home'}">
        <img class="logo" src="../assets/logo_v1_transparent_255x176.png" alt="Booze Club Logo">
      </router-link>
    </figure>
    <h1>your prenium cocktail app</h1>
  </header>
  <nav class="menu-burger none">
    <ul class="menu-list">
      <router-link :to="{ name: 'type', params: {type: 'Alcoholic'}}">
        <li v-on:click="closeMenu" class="menu-li">Selection with alcohol</li>
      </router-link>
      <router-link :to="{ name: 'type', params: {type: 'Non_Alcoholic'}}">
        <li v-on:click="closeMenu" class="menu-li">Selection without alcohol</li>
      </router-link>
      <li class="menu-li" v-on:click="showSubMenu('#sub-ingredients')">Selection by ingredient
        <nav class="none" id="sub-ingredients">
          <ul>
            <IngredientsList v-on:click="closeMenu" v-for="item in ingredientsData" :key="item.strIngredient1" :name="item.strIngredient1"/>
          </ul>
        </nav>
      </li>
      <li class="menu-li" v-on:click="showSubMenu('#sub-category')">Selection by category
        <nav class="none" id="sub-category">
          <ul>
            <CategoriesList v-for="item in categoriesData" :key="item.strCategory" :name="item.strCategory"/>
          </ul>
        </nav>
      </li>
    </ul>
  </nav>
</template>

<script>
import ApiService from '@/services/api.service.js'
import IngredientsList from './IngredientsListComponent.vue'
import CategoriesList from './CategoriesListComponent.vue'

const apiService = new ApiService()

export default {
  name: 'HeaderComponent',
  props: [],
  components: {
    IngredientsList,
    CategoriesList
  },
  data () {
    return {
      ingredientsData: null,
      categoriesData: null
    }
  },
  mounted () {
    this.allIngredients()
    this.allCategories()
  },
  methods: {
    showMenu: function () {
      const menuBurgerTop = document.querySelector('#menu-button-top')
      const menuBurgerCenter = document.querySelector('#menu-button-center')
      const menuBurgerBottom = document.querySelector('#menu-button-bottom')
      const menuBurger = document.querySelector('.menu-burger')
      menuBurgerTop.classList.toggle('top-transformation')
      menuBurgerBottom.classList.toggle('bottom-transformation')
      menuBurgerCenter.classList.toggle('none')
      menuBurger.classList.toggle('none')
    },
    showSubMenu: function (id) {
      const subNav = document.querySelector(id)
      subNav.classList.toggle('none')
    },
    closeMenu: function () {
      const menuBurger = document.querySelector('.menu-burger')
      menuBurger.classList.add('none')
    },
    async allIngredients () {
      const res = await apiService.getAllIngredients()
      const ingredients = await res.json()
      this.ingredientsData = ingredients.drinks
      // console.log(ingredients.drinks)
    },
    async allCategories () {
      const res = await apiService.getAllCategories()
      const categories = await res.json()
      this.categoriesData = categories.drinks
      // console.log(categories.drinks)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* General */

.none{
  display: none;
}

li, h1{
  text-transform: capitalize;
}

h1{
  color: #efefef;
  font-family: 'Antic Didone', 'Times New Roman', Times, serif;
  letter-spacing: 4px;
  font-weight: 300;
  font-size: 35px;
  text-align: center;
  padding-top: 3vh;
}

/* Logo */

.logo-container{
  width: 255px;
  margin: 0 auto;
}

.logo{
  padding-top: 1vh;
  display: block;
  cursor: pointer;
}

/* Menu Burger Icon*/

#burger-icon{
  position: absolute;
  top: 40px;
  left: 45px;
  z-index: 100;
  height: 30px;
  width: 46px;
}

.menu-button{
  height: 4px;
  width: 40px;
  position: absolute;
  left: 3px;
  border-radius: 2px;
  background-color: #fff;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
}

#menu-button-top{
  top: 3px;
}

#menu-button-center{
  top: 13px;
}

#menu-button-bottom{
  top: 23px;
}

.top-transformation {
  position: absolute;
  top: 12px !important;
  transform: rotate(585deg);
}

.bottom-transformation {
  position: absolute;
  top: 12px !important;
  transform: rotate(-585deg);
}

/* Menu Burger */

.menu-burger{
  background-color: #1C1C1CE6;
  position: absolute;
  top: 0;
  width: 100vw;
  overflow: auto;
  height: 100vh;
  overflow-y: overlay;
}

.menu-list{
  max-width: 1000px;
  width: 80%;
  margin: 0 auto;
  padding-top: 15vh;
}

.menu-list a {
  text-decoration: none;
}

.menu-list li:hover {
  color: #9e9e9e;
}

.menu-li{
  font-family: 'Antic Didone';
  font-size: 25px;
  letter-spacing: 3px;
  color: #efefef;
  padding: 15px 0;
  cursor: pointer;
}

/* Responsive */

@media screen and (max-width: 768px) {
  .logo-container{
    width: 150px;
  }

  .logo-container img{
    width: 100%;
  }

  h1{
    font-size: 20px;
  }
}

@media screen and (max-width: 500px) {
  .logo-container{
    width: 100px;
    position: absolute;
    right: 20px;
    top: 5px
  }

  .logo-container img{
    width: 100%;
  }

  h1{
    display: none;
  }

  #burger-icon{
    top: 48px;
    left: 20px;
  }

  .menu-li{
  font-family: 'Antic Didone';
  font-size: 17px;
  letter-spacing: 2px;
  color: #efefef;
  padding: 10px 0;
  cursor: pointer;
}
}
</style>
