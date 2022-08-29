<template>
  <router-link :to="{ name: 'cocktail', params: {id: id}}">
    <li>{{ name }}</li>
  </router-link>
</template>

<script>
export default {
  name: 'CocktailsList',
  props: ['name', 'thumbnail', 'id']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
  font-size: 22px;
  padding: 15px 0 8px;
  border-bottom: 1px solid #d8d8d8;
}
li:hover{
  color: #9e9e9e;
}
@media screen and (max-width: 500px) {
  li{
    font-size: 18px;
    padding: 15px 0 8px;
    border-bottom: 1px solid #d8d8d8;
  }
  li:hover{
    color: #9e9e9e;
  }
}
</style>
