<template>
  <GetRating :rating="rating" />
  <UpdateRating :rating="rating" :name="this.name" />
</template>

<script>
import ApiService from '@/services/api.service.js'
import GetRating from '@/components/rating/GetRatingComponent.vue'
import UpdateRating from '@/components/rating/UpdateRatingComponent.vue'

const apiService = new ApiService()

export default {
  name: 'RatingComponent',
  props: ['name'],
  components: {
    GetRating,
    UpdateRating
  },
  data () {
    return {
      rate: false,
      starValue: null,
      drinkName: this.name,
      rating: null
    }
  },
  created () {
    this.getRating(this.drinkName)
  },
  methods: {
    hoverStars () {
      const stars = document.querySelectorAll('.stars')
      // console.log(stars)
      stars.forEach((star, index) => {
        // console.log(star)
        // console.log(index)
        star.addEventListener('mouseenter', () => {
          star.classList.add('stars-hover')
          for (let i = 0; i < index; i++) {
            stars[i].classList.add('stars-hover')
          }
        })
      })
      stars.forEach((star, index) => {
        star.addEventListener('mouseleave', () => {
          star.classList.remove('stars-hover')
          for (let i = 0; i < index; i++) {
            stars[i].classList.remove('stars-hover')
          }
        })
      })
    },
    getStarValue (event) {
      this.starValue = event.target.attributes.value.value
      setTimeout(() => {
        this.afterVote()
      }, 500)
      // console.log(this.starValue)
    },
    afterVote () {
      this.rate = true
    },
    clickStars (event) {
      const stars = document.querySelectorAll('.stars')
      const starIndex = event.target.attributes.value.value - 1
      // console.log(starIndex)
      for (let i = 0; i <= starIndex; i++) {
        stars[i].classList.add('stars-clicked')
      }
      this.getStarValue(event)
    },
    async getRating (name) {
      const res = await apiService.getRatingByName(name)
      const rating = await res.json()
      if (rating !== null) {
        this.rating = rating
        console.log(rating.average_note)
      }
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
.rating-container{
  display: flex;
  justify-content: start;
}
.stars{
  width: 30px;
  padding-right: 12px;
  padding-top: 12px;
  filter: grayscale(1);
  cursor: pointer;
}
.stars-hover{
  filter: grayscale(0);
}
.stars-clicked{
  filter: grayscale(0);
}
.rate{
  padding-top: 12px;
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
