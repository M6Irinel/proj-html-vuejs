<template>
    <section>
        <div class="myContainer">
            <div class="text-center">
                <p>STIMULATED TO LEARN?</p>
                <h2>Featured Online Courses</h2>
            </div>
            <div class="myCards d-flex gap-4">
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
section {
    background-color: #f5f7fa;
    padding: 100px 0 90px;

    p {
        color: #9694ab;
        letter-spacing: 1px;
    }

    h2 {
        color: #3f3a64;
        font-weight: bold;
        margin-bottom: 60px;
    }

    .myCards {
        flex-wrap: wrap;
    }
}
</style>