<template>
  <footer>
    <div class="flex-between">
        <p>Conditions of Use</p>
        <p>Privacy Notice</p>
        <p>Contact Us</p>
        <p>FAQ</p>
        <p>Help</p>
    </div>
    <p class="copyrights">all rights reserved booze club inc. 2022</p>
  </footer>
</template>

<script>

export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
p{
    text-transform: capitalize;
    font-size: 20px;
    letter-spacing: 3px;
    cursor: pointer;
}

div > p:hover{
    color: #9e9e9e;;
}

.flex-between{
    display: flex;
    justify-content: space-between;
}

footer{
    width: 90%;
    max-width: 1400px;
    margin: 10vh auto 0;
    padding-top: 10vh;
    border-top: 1px solid #d8d8d8;
}

.copyrights{
    text-align: center;
    font-size: 22px;
    padding: 20px 0;
    cursor: default;
}
</style>
