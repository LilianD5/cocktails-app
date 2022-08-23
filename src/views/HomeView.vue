<template>
  <HeaderComponent/>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderComponent
  }
}
</script>

<style>
@font-face{
  font-family: 'Antic Didone';
  src: url('../assets/fonts/AnticDidone-Regular.ttf');
}

body{
  background-color: #1E1E1E;
}
</style>
