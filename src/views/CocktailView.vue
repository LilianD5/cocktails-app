<template>
  <HeaderComponent/>
  <CocktailDetails/>
  <FooterComponent/>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import CocktailDetails from '@/components/CocktailDetailsComponent.vue'

export default {
  name: 'CocktailView',
  components: {
    HeaderComponent,
    FooterComponent,
    CocktailDetails
  }
}
</script>

<style>
</style>
