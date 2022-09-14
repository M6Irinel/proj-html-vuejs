import Vue from 'vue';
import App from './App.vue';

// BOOTSTRAP
require( './components/imports-library/bootsrap.js' );

// FONTAWESOME
require( './components/imports-library/fontawesome.js' );

Vue.config.productionTip = false;

new Vue( {
  render: h => h( App ),
} ).$mount( '#app' );
