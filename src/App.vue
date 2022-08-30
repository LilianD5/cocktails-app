<template>
  <router-view :key="$route.fullPath" />
</template>

<script>
</script>

<style>

/* RESET */

html, body, div, span, applet, object, iframe,h1, h2, h3, h4, h5, h6, p, blockquote, pre,a, abbr, acronym, address, big, cite, code,del, dfn,em, img, ins, kbd, q, s, samp,small, strike, strong, sub, sup, tt, var,b, u, i, center,dl, dt, dd, ol, ul, li,fieldset, form, label, legend,table, caption, tbody, tfoot, thead, tr, th, td,article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu,nav,output, ruby, section, summary,time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* RESET END */

@font-face{
  font-family: 'Antic Didone';
  src: url('./assets/fonts/AnticDidone-Regular.ttf');
}

body{
  background-color: #1E1E1E;
  color: #d8d8d8;
  font-family: 'Antic Didone', 'Times New Roman', Times, serif;
  height: 100vh;
}

.overflow-hidden{
  overflow-y: hidden;
  height: 100vh;
}

.cocktails-list-container{
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
}

.page-title{
  font-size: 30px;
  text-transform: capitalize;
  text-align: center;
  padding: 5vh 0;
  letter-spacing: 3px;
}

a{
  text-decoration: none;
  color: #d8d8d8;
}

.flex-start{
  display: flex;
  justify-content: start;
}

.show{
  display: block;
}

.none{
  display: none;
}

footer{
  padding-top: 10px;
  position: relative;
  bottom: 0;
}

@media screen and (max-width: 500px) {
  .page-title{
    font-size: 22px;
    text-transform: capitalize;
    text-align: center;
    padding: 5vh 0;
    letter-spacing: 3px;
  }
}
</style>
