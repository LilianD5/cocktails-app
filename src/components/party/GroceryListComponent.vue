<template>
    <p>{{ ing }}</p>
</template>

<script>

export default {
  name: 'GroceryList',
  props: ['ing'],
  components: {
  }
}
</script>

<style scoped>
p{
  font-size: 20px;
  padding-top: 10px;
}
@media screen and (max-width: 768px) {
  p{
    font-size: 17px;
    padding-top: 10px;
  }
}
</style>
