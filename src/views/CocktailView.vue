<template>
  <HeaderComponent/>
  <CocktailDetails/>
  <CocktailInspiration/>
  <FooterComponent/>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import CocktailDetails from '@/components/details/CocktailDetailsComponent.vue'
import CocktailInspiration from '@/components/details/CocktailInspirationComponent.vue'

export default {
  name: 'CocktailView',
  components: {
    HeaderComponent,
    CocktailDetails,
    CocktailInspiration,
    FooterComponent
  },
  mounted () {
    this.loaded()
  },
  methods: {
    loaded () {
      console.log(this.$options.components)
    }
  }
}
</script>

<style>
</style>
