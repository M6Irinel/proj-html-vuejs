<template>
    <section>
        <div class="myContainer">
            <div class="top">
                <p>GREAT WORDS ABOUT MAXCOACH</p>
                <h2>Our <span>top learners'</span> verbatim</h2>
            </div>
            <div class="cards d-flex">
                <card-section-4 v-for="(el, i) in arrayCardsSection4" :key="i" :el="el" />
            </div>
        </div>
    </section>
</template>


<script>
import cardSection4 from './card-section-4.vue';
import arrayCardsSection4 from '../json-components/array-cards-section-4.json';

export default {
    name: 'mainSection4',

    components: { cardSection4 },

    data() {
        return {
            arrayCardsSection4
        }
    },
}
</script>


<style scoped lang="scss">
section {
    background-color: #f8f8f8;
    padding: 100px 0 90px;
}
</style>