<template>
<HeaderComponent/>
<PartyComponent/>
<FooterComponent/>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import PartyComponent from '@/components/PartyComponent.vue'

export default {
  name: 'PartyView',
  components: {
    HeaderComponent,
    FooterComponent,
    PartyComponent
  }
}
</script>

<style>
</style>
