<template>
<div class="cards" v-if="partyIs === true">
  <h3>{{ name }}</h3>
  <img :src="thumbnail" alt="">
</div>
<div class="cards" v-else v-show="index === show" :class="baseID">
<router-link :to="{ name: 'cocktail', params: {id: id}}" >
  <h3>{{ name }}</h3>
  <img :src="thumbnail" alt="">
</router-link>
</div>

</template>

<script>

export default {
  name: 'CocktailCard',
  props: ['name', 'thumbnail', 'id', 'show', 'index', 'partyIs'],
  data () {
    if (typeof this.show !== 'undefined') {
      return {
        baseID: 'cocktailSlider'
      }
    } else {
      return {
        baseID: ''
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
    font-size: 20px;
    text-align: center;
    padding-bottom:20px;
}
.cards{
  width: 33%;
  padding-bottom: 20px;
}
img{
  width: 80%;
  display: block;
  margin: 0 auto;
}
.cocktailSlider{
  width: 100%;
}
.cocktailSlider img {
  width: 30%;
}
@media screen and (max-width: 768px) {
  .cards{
    width: 50%;
  }
}
@media screen and (max-width: 500px) {
  .cocktailSlider img {
    width: 50%;
  }
  .cards{
    width: 100%;
  }
}
</style>
