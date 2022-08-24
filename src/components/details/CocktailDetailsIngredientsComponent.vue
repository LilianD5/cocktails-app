<template>
<div class="flex-start">
  <p>{{ ing.key }}:&nbsp;</p>
  <p>{{ ing.value }}</p>
</div>
</template>

<script>
// import ApiService from '@/services/api.service.js'

// const apiService = new ApiService()

export default {
  name: 'CocktailDetailsIngredients',
  props: ['ing']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
    font-size: 20px;
    padding-top: 7px;
}
</style>
