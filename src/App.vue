<template>
  <div id="app">
    <app-header />
    <app-main />
    <app-footer />
  </div>
</template>

<script>
import appHeader from './components/app-header.vue';
import appMain from './components/app-main.vue';
import appFooter from './components/app-footer.vue';

export default {
  name: 'appVue',

  components: { appHeader, appMain, appFooter },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@200;300&family=Poppins:wght@400;500;600&family=Roboto:wght@400;500&family=Rubik:wght@400;500;600;700&display=swap');

@font-face {
  font-family: Gilroy;
  src: url('./assets/fonts/Gilroy-ExtraBold.otf') format('opentype');
}

* {
  font-family: 'Poppins', sans-serif;
}

button {
  border: none;
  background: none;
}

.myContainer {
  max-width: 1200px;
  margin: 0 auto;
}

.inputHeader {
  max-width: 227px !important;
  padding: 3px 50px 3px 20px;
}

.inputMain {
  width: 100%;
  padding: 15px 160px 15px 23px;
}
</style>
