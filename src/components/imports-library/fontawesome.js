import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faChevronDown } from '@fortawesome/free-solid-svg-icons';
library.add( faCircleUser, faMagnifyingGlass, faChevronDown );
Vue.component( 'font-awesome-icon', FontAwesomeIcon );