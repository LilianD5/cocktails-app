<template>
  <router-link :to="{name: 'category', params: {category: name}}">
    <li class="sous-menu-li">{{ name }}</li>
  </router-link>
</template>

<script>
export default {
  name: 'CategoriesList',
  props: ['name']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sous-menu-li{
  font-size: 20px;
  letter-spacing: 3px;
  color: #efefef;
  padding-top: 15px;
}
.sous-menu-li:hover{
  color: #9e9e9e;
}
</style>
