<template>
  <router-link :to="{name: 'ingredient', params: {ingredient: name}}">
    <li class="sous-menu-li">{{ name }}</li>
  </router-link>
</template>

<script>
export default {
  name: 'IngredientsList',
  props: ['name']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sous-menu-li{
  font-size: 20px;
  letter-spacing: 3px;
  padding-top: 15px;
  padding-left: 15px;
}
.sous-menu-li:hover{
  color: #9e9e9e;
}
/* Responsive */

@media screen and (max-width: 500px) {
  .sous-menu-li{
  font-size: 15px;
  letter-spacing: 1px;
  }
}
</style>
