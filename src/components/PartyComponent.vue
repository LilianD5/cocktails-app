<template>
  <div class="content-container">
    <div>
      <SearchComponent/>
    </div>
  </div>
</template>

<script>
import SearchComponent from './SearchComponent.vue'

export default {
  name: 'PartyComponent',
  props: [],
  components: {
    SearchComponent
  }
}
</script>

<style scoped>
.content-container{
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}
</style>
