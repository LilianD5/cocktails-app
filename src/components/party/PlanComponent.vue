<template>
  <div>
    <img src="../../assets/close.svg" alt="">
    <p>{{ name }}</p>
  </div>
</template>

<script>

export default {
  name: 'PlanComponent',
  props: ['name'],
  components: {
  }
}
</script>

<style scoped>
p{
  font-size: 20px;
  padding-top: 10px;
}
img{
  width: 20px;
  height: 20px;
  padding-top: 10px;
  padding-right: 10px;
  cursor: pointer;
}
div{
  display: flex;
}
@media screen and (max-width: 768px) {
  p{
    font-size: 17px;
    padding-top: 10px;
  }
  img{
    width: 17px;
    height: 17px;
  }
}
@media screen and (max-width: 768px) {
  p{
    font-size: 20px;
    padding-top: 10px;
  }
  img{
    width: 20px;
    height: 20px;
  }
}
</style>
