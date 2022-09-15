<template>
    <section>
        <div class="container2">
            <div class="top text-center">
                <p>GREAT WORDS ABOUT MAXCOACH</p>
                <h2>Our <span>top learners'</span> verbatim</h2>
            </div>
            <div class="cards d-flex">
                <card-section-4 v-for="(el, i) in arrayCardsSection4" :key="i" :el="el"
                    :class="(activeCard === i) ? 'opacity-1' : 'opacity-50'" />
            </div>
            <div class="d-flex justify-content-center align-items-center gap-4 pt-5">
                <div class="itemsImg" v-for="n in 4" :key="n"
                    :class="activeCard === n ? 'opacity-1' : 'opacity-50 minDimension'"></div>
            </div>
            <div class="info myContainer text-center mt-5 pt-5">
                <h5>Start today for getting <span>Online Certification</span></h5>
                <h4>You can be your own guiding star with our help!</h4>
                <div class="imgs">
                    <div class="myCircle"></div>
                    <div class="fiftyCircle">
                        <img src="../../assets/img/maxcoach-shape-02.png" alt="maxcoach shape 02">
                    </div>
                    <div class="lines">
                        <img src="../../assets/img/maxcoach-shape-01.png" alt="maxcoach shape 01">
                    </div>
                </div>
                <div class="text-center mt-4 pt-3">
                    <main-button-vue :icon="2" :contentButton="'Get started now'" />
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import cardSection4 from './card-section-4.vue';
import arrayCardsSection4 from '../json-components/array-cards-section-4.json';
import mainButtonVue from './main-button.vue';

export default {
    name: 'mainSection4',

    components: { cardSection4, mainButtonVue },

    data () {
        return {
            arrayCardsSection4,
            activeCard: 1
        }
    },

    methods: {
        act ( i ) { console.log( i ); this.activeCard = i }
    }
}
</script>


<style scoped lang="scss">
section {
    background-color: #f8f8f8;
    padding: 110px 0 80px;

    .container2 {
        padding: 0 50px;

        .top {
            p {
                color: #9694ab;
                letter-spacing: 1px;
            }

            h2 {
                color: #3f3a64;
                font-weight: bold;
                margin-bottom: 60px;

                span {
                    color: #20ad96;
                    font-weight: 400;
                }
            }
        }

        .cards {
            gap: 50px;
        }

        .itemsImg {
            background-color: #3f3a64;
            border-radius: 50%;
            aspect-ratio: 1;
            width: 12px;
        }

        h5 {
            color: #3f3a64;
            font-weight: bold;
            font-size: 1.35rem;

            span {
                color: #20ad96;
                font-weight: 400;
            }
        }

        h4 {
            color: #3f3a64;
            font-weight: bold;
            font-size: 2rem;
        }

        .info {
            position: relative;

            .imgs {
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;

                .myCircle {
                    width: 55px;
                    border: 8px solid #e6dcd2;
                    aspect-ratio: 1;
                    border-radius: 50%;
                    position: absolute;
                    top: 50px;
                    left: 0;
                }

                .lines {
                    position: absolute;
                    top: 120px;
                    left: 0;
                }
                
                .fiftyCircle {
                    position: absolute;
                    right: 0;
                    bottom: 0;
                }
            }
        }
    }
}

.minDimension {
    width: 8px !important;
    height: 8px !important;
}

.opacity-1 {
    opacity: 1;
}

.opacity-50 {
    opacity: 0.5;
}
</style>