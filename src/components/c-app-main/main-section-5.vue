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

    data() {
        return {
            arrayCardsSection5
        }
    }
}
</script>


<style scoped lang="scss">
.myCards {
    
    .myCard {
        flex-basis: 0;
        flex-grow: 1;
        border-left: 1px solid #f5f1ed;
        padding: 99px 0 70px;

        h4 {
            color: #3f3a64;
            padding: 0 50px 10px;
        }

        .middle {
            color: #20ad96;
            font-weight: bold;
            font-size: 4rem;
            font-family: Gilroy;
        }

        .bottom {
            color: #9694ab;
            letter-spacing: 1px;
            font-weight: bold;
            font-size: 1.05rem;
        }
    }

    .myCard:last-of-type {
        border-right: 1px solid #f5f1ed;
    }
} 
</style>