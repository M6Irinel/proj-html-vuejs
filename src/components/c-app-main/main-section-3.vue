<template>
    <section>
        <div class="myContainer">
            <div class="top text-center">
                <p>MAXCOACH AVAILABLE COURSES</p>
                <h2 class="fw-bold">Access <span>Smart Tutoring</span> Program For Benefits.</h2>
            </div>

            <div class="cards d-flex">
                <card-section-3 v-for="(el, i) in ArrayCardsSection3" :key="i" :el="el" />
            </div>
        </div>
    </section>
</template>


<script>
import ArrayCardsSection3 from '../json-components/array-cards-section-3.json';
import cardSection3 from './card-section-3.vue';

export default {
    name: 'mainSection3',

    components: { cardSection3 },

    data () {
        return {
            ArrayCardsSection3
        }
    },
}
</script>


<style scoped lang="scss">
section {
    padding: 100px 0 90px;

    p {
        color: #9694ab;
    }

    h2 {
        color: #3f3a64;
        margin-bottom: 70px;

        span {
            font-weight: normal;
            color: #20ad96;
        }
    }

    .cards {
        gap: 40px;
    }
}
</style>