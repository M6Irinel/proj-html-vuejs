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
body {
  overflow: scroll;
}

button {
  border: none;
  background: none;
}
</style>
