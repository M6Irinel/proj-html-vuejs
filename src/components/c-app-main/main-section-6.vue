<template>
    <section>
        <div class="myContainer">
            <div class="section6 d-flex">
                <div class="left">
                    <p class="first">ENJOYABLE INSIGHTS</p>
                    <h2>Most Viewed <span>Best Blogs</span></h2>
                    <div class="cicle position-relative">
                        <div v-for="(el, i) in arrayParagraphSection6" :key="i">
                            <div class="icons">
                                <div class="iconCol">
                                    <font-awesome-icon icon="fa-solid fa-right-long" />
                                </div>
                                <div class="iconNormal">
                                    <font-awesome-icon icon="fa-solid fa-right-long" />
                                </div>
                            </div>
                            <p> {{el}} </p>
                        </div>
                    </div>
                </div>
                <card-section-6 v-for="(el, i) in arrayCardsSection6" :key="i" :el="el" />
            </div>
        </div>
    </section>
</template>


<script>
import cardSection6 from './card-section-6.vue';
import arrayCardsSection6 from '../json-components/array-cards-section-6.json';
import arrayParagraphSection6 from '../json-components/array-paragraph-section-6.json';

export default {
    name: 'mainSection6',

    components: { cardSection6 },

    data () {
        return {
            arrayCardsSection6,
            arrayParagraphSection6
        }
    },
}
</script>


<style scoped lang="scss">
section {
    background-color: #f5f1ed;
    padding: 127px 0 100px;

    .section6 {
        gap: 30px;

        & > * {
            flex-basis: 0;
            flex-grow: 1;
        }

        .left {
            .first {
                color: #9694ab;
                margin-top: 20px;
            }

            h2 {
                color: #3f3a64;
                font-weight: bold;
                margin-bottom: 40px;

                span {
                    color: #20ad96;
                    font-weight: 400;
                }
            }

            .cicle {
                & > div {
                    color: #3f3a64;
                    font-weight: bold;
                    font-size: 0.9rem;
                    display: flex;
                    gap: 15px;
                    margin-bottom: 22px;
                    cursor: pointer;
                    padding: 3px 0;

                    &:hover {
                        p {
                            color: #20ad96;
                        }

                        .icons {
                            .iconCol {
                                left: 0;
                                opacity: 1;
                            }

                            .iconNormal {
                                left: 120%;
                                opacity: 0;
                            }
                        }
                    }

                    & > p {
                        transition: color 0.2s ease-in-out;
                        margin: 0;
                    }

                    span {
                        margin-right: 15px;
                    }

                    .icons {
                        width: 15px;
                        position: relative;

                        .iconCol,
                        .iconNormal {
                            position: absolute;
                            top: 0;
                            transition: all 0.2s ease-in;

                        }

                        .iconCol {
                            left: -120%;
                            color: #20ad96;
                            opacity: 0;
                        }

                        .iconNormal {
                            left: 0;
                            opacity: 1;
                        }
                    }
                }
            }
        }
    }
}
</style>