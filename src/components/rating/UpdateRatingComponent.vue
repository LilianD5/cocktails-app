<template>
    <div class="sub-infos-container">
        <h3>Rate this drink :</h3>
        <div v-show="rate === false" class="rating-container">
            <img v-on:click="test" class="stars" id="star-1" value="1" src="../../assets/star.svg" alt="">
            <img v-on:click="clickStars($event)" class="stars" id="star-2" value="2" src="../../assets/star.svg" alt="">
            <img v-on:click="clickStars($event)" class="stars" id="star-3" value="3" src="../../assets/star.svg" alt="">
            <img v-on:click="clickStars($event)" class="stars" id="star-4" value="4" src="../../assets/star.svg" alt="">
            <img v-on:click="clickStars($event)" class="stars" id="star-5" value="5" src="../../assets/star.svg" alt="">
        </div>
        <div v-show="rate === true">
            <h3 class="rate">Thanks for voting</h3>
        </div>
    </div>
</template>

<script>
import ApiService from '@/services/api.service'

const apiService = new ApiService()

export default {
  name: 'UpdateRating',
  props: ['name', 'rating'],
  data () {
    return {
      rate: false,
      starValue: null,
      newrating: this.rating,
      drinkName: this.name
    }
  },
  mounted () {
    this.hoverStars()
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
      if (this.rating !== null) {
        this.upadteRating(this.drinkName, this.rating.average_note, this.rating.nb_vote)
      } else {
        this.createRating(this.drinkName)
      }
    },
    async upadteRating (name, avgNote, nbVote) {
      const noteGiven = parseInt(this.starValue)
      const newAvgNote = ((avgNote * nbVote) + noteGiven) / (nbVote + 1)
      const newNbVote = nbVote + 1

      await apiService.UpdateRatingByName(name, newAvgNote, newNbVote)
    },
    async createRating (name) {
      const noteGiven = parseInt(this.starValue)

      await apiService.CreateNewEntryRating(name, noteGiven)
    }
  }
}
</script>

<style scoped>
h3 {
    font-size: 25px;
}
.sub-infos-container {
    padding-top: 30px;
}
.rating-container {
    display: flex;
    justify-content: start;
}
.stars {
    width: 30px;
    padding-right: 12px;
    padding-top: 12px;
    filter: grayscale(1);
    cursor: pointer;
}
.stars-hover {
    filter: grayscale(0);
}
.stars-clicked {
    filter: grayscale(0);
}
.rate {
    padding-top: 12px;
}
@media screen and (max-width: 768px) {
    h3 {
        font-size: 20px;
    }

    .sub-infos-container {
        padding-top: 15px;
    }
}
@media screen and (max-width: 500px) {
    h3 {
        font-size: 22px;
        padding-top: 20px;
    }

    .sub-infos-container {
        padding-top: 15px;
    }

    .instructions-container {
        padding-top: 0;
    }
}
</style>
