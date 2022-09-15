<template>
    <section>
        <div class="myCards myContainer d-flex">
            <div class="myCard text-center" v-for="(el, i) in arrayCardsSection5" :key="i">
                <h4> {{el.title}} </h4>
                <div class="middle"> {{el.number}} </div>
                <div class="bottom"> {{el.rest}} </div>
            </div>
        </div>
    </section>
</template>


<script>
import arrayCardsSection5 from '../json-components/array-cards-section-5.json';

export default {
    name: 'mainSection5',

    data () {
        return {
            arrayCardsSection5
        }
    }
}
</script>


<style scoped lang="scss">
@import '../scss/color-palet.scss';

.myCards {

    .myCard {
        flex-basis: 0;
        flex-grow: 1;
        border-left: 1px solid $bgCol3;
        padding: 99px 0 99px;

        h4 {
            color: $myVioletDark;
            padding: 0 60px 10px;
            font-weight: 600;
            font-size: 1.4rem;
        }

        .middle {
            color: $myGreenDark;
            font-weight: bold;
            font-size: 4rem;
            font-family: Gilroy;
        }

        .bottom {
            color: $myVioletLight;
            letter-spacing: 1px;
            font-weight: bold;
            font-size: 1.05rem;
        }
    }

    .myCard:last-of-type {
        border-right: 1px solid $bgCol3;
    }
}
</style>