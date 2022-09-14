import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCircleUser, faUser, faFileLines } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faChevronDown, faDownload, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
library.add(
    faCircleUser,
    faMagnifyingGlass,
    faChevronDown,
    faDownload,
    faArrowRightLong,
    faUser,
    faFileLines
);
Vue.component( 'font-awesome-icon', FontAwesomeIcon );