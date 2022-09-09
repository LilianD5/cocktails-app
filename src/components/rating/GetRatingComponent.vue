<template>
    <div v-if="this.rating !== null" class="sub-infos-container">
      <h3>Note : {{ roundedRating }}</h3>
    </div>
    <div v-else class="sub-infos-container">
      <h3>Note: Be the first to rate it !</h3>
    </div>
</template>

<script>
export default {
  name: 'GetRating',
  props: ['rating'],
  data () {
    return {
      roundedRating: null
    }
  },
  updated () {
    this.roundRating(this.rating.average_note)
  },
  methods: {
    roundRating (rating) {
      const rounded = (Math.round(rating * 100)) / 100
      this.roundedRating = rounded
    }
  }
}
</script>

<style scoped>
h3{
    font-size: 25px;
}
.sub-infos-container{
    padding-top: 30px;
}
@media screen and (max-width: 768px) {
    h3{
        font-size: 20px;
    }
    .sub-infos-container{
        padding-top: 15px;
    }
}
@media screen and (max-width: 500px) {
    h3{
        font-size: 22px;
        padding-top: 20px;
    }
    .sub-infos-container{
        padding-top: 15px;
    }
    .instructions-container{
        padding-top: 0;
    }
}
</style>
