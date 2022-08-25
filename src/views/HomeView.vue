<template>
  <HeaderComponent/>
  <Searchcomponent/>
  <SliderComponent/>
  <FooterComponent/>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import Searchcomponent from '@/components/SearchComponent.vue'
import SliderComponent from '@/components/SliderComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    FooterComponent,
    Searchcomponent,
    SliderComponent
  }
}
</script>

<style>
</style>
