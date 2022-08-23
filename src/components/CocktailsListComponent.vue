<template>
  <li>{{ name }}</li>
</template>

<script>
export default {
  name: 'CocktailsList',
  props: ['name', 'thumbnail', 'id']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
