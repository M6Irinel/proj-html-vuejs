<template>
    <section>
        <div class="myContainer">
            <div class="text-center">
                <p>STIMULATED TO LEARN?</p>
                <h2>Featured Online Courses</h2>
            </div>
            <div class="myCards d-flex">
                <card-section-2 v-for="(el, i) in arrayCardsSection2" :key="i" :el="el" />
            </div>
            <div class="d-flex justify-content-center mt-5">
                <main-button :contentButton="'View all courses'" :icon="1" />
            </div>
        </div>
    </section>
</template>


<script>
import mainButton from './main-button.vue';
import cardSection2 from './card-section-2.vue';
import arrayCardsSection2 from '../json-components/array-cards-section-2.json';

export default {
    name: 'mainSection2',

    components: { cardSection2, mainButton },

    data () {
        return {
            arrayCardsSection2
        }
    },
}
</script>


<style scoped lang="scss">
@import '../scss/color-palet.scss';

section {
    background-color: $bgCol1;
    padding: 100px 0 90px;

    p {
        color: $myVioletLight;
        letter-spacing: 1px;
    }

    h2 {
        color: $myVioletDark;
        font-weight: bold;
        margin-bottom: 60px;
    }

    .myCards {
        flex-wrap: wrap;
        gap: 30px;
    }
}
</style>