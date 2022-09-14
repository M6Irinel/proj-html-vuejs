<template>
    <section>
        <div class="myContainer">
            <div class="text-center">
                <p>STIMULATED TO LEARN?</p>
                <h2>Featured Online Courses</h2>
            </div>
            <div>
                <card-section-2 v-for="(el, i) in arrayCardsSection2" :key="i" :el="el" />
            </div>
        </div>
    </section>
</template>


<script>
import cardSection2 from './card-section-2.vue';
import arrayCardsSection2 from '../json-components/array-cards-section-2.json';

export default {
    name: 'mainSection2',

    components: { cardSection2 },

    data() {
        return {
            arrayCardsSection2
        }
    },
}
</script>


<style scoped lang="scss">
    
</style>