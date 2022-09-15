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

            <div class="bottom d-flex">
                <div class="left">
                    <main-img-section-3-anim />
                </div>
                <div class="right">
                    <p class="first">GET STARTED <span>EFFORTLESSLY</span></p>
                    <h2>Enjoy Our</h2>
                    <h3>Companionship</h3>
                    <p class="second">Sneek peek into what has in store for you on our online teaching and mentoring
                        portal. Seek for some hidden hints of early-bird rewards as well.</p>
                    <text-animation-underline-vue :textA="''" :textSpan="'Download free guidebook'" />
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import ArrayCardsSection3 from '../json-components/array-cards-section-3.json';
import cardSection3 from './card-section-3.vue';
import textAnimationUnderlineVue from './text-animation-underline.vue';
import mainImgSection3Anim from './main-img-section-3-anim.vue';

export default {
    name: 'mainSection3',

    components: { cardSection3, textAnimationUnderlineVue, mainImgSection3Anim },

    data () {
        return {
            ArrayCardsSection3
        }
    },
}
</script>


<style scoped lang="scss">
section {
    padding: 100px 0 170px;

    .top {
        p {
            color: #9694ab;
            letter-spacing: 1px;
        }

        h2 {
            color: #3f3a64;
            margin-bottom: 70px;

            span {
                font-weight: normal;
                color: #20ad96;
            }
        }
    }

    .cards {
        gap: 40px;
    }

    .bottom {
        padding-top: 30px;
        display: flex;
        align-items: center;
        gap: 220px;

        .left {
            flex-basis: 40%;
            flex-grow: 1;
            padding: 20px;

            .back {
                .img-2 {
                    width: 50px;
                    border-radius: 50%;
                    border: 6px solid;
                }
            }
        }

        .right {
            flex-basis: 30%;
            flex-grow: 1;

            .first {
                color: #9694ab;
                margin-top: 170px;
                font-weight: 500;
                font-size: 1.05rem;

                span {
                    color: #3f3a64;
                    font-weight: bold;
                }
            }

            h2 {
                color: #3f3a64;
                font-weight: bold;
                font-size: 2.85rem;
            }

            h3 {
                font-size: 2.7rem;
                color: #20ad96;
                font-weight: 400;
            }

            .second {
                color: #6f6f6f;
                max-width: 400px;
                padding: 30px 0 50px;
            }
        }
    }
}
</style>