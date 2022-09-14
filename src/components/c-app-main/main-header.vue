<template>
    <header>
        <section>
            <div class="myContainer">
                <div class="top d-flex pb-5">
                    <div class="left">
                        <div>
                            <h1>Distant learning for further expansion</h1>
                            <p>Learning is a life-long journey that in fact we never find the terminate stop. Stop
                                searching, enjoy the process.</p>
                            <main-button :contentButton="'Download free guide'" :icon="0" />
                            <a href="#">Have questions? <span>Get Free Sample
                                    <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                                </span></a>
                        </div>
                    </div>

                    <main-img-header-anim />
                </div>

                <div class="bottom d-flex justify-content-around align-items-center mt-4 mb-5 pb-2">
                    <main-header-bottom v-for="(el, i) in arrayMainHeaderBottom" :key="i" :el="el" />
                </div>
            </div>
        </section>
    </header>
</template>


<script>
import mainButton from './main-button.vue';
import mainImgHeaderAnim from './main-img-header-anim.vue';
import mainHeaderBottom from './main-header-bottom.vue';
import arrayMainHeaderBottom from '../json-components/array-main-header-bottom.json';

export default {
    name: 'mainHeader',

    components: { mainButton, mainImgHeaderAnim, mainHeaderBottom },

    data () {
        return {
            arrayMainHeaderBottom
        }
    },
}
</script>


<style scoped lang="scss">
* {
    color: #9694ab;
}

.top {
    padding-top: 70px;

    .left {
        flex-basis: 0;
        flex-grow: 1;

        & > div {
            width: 80%;
        }

        h1 {
            color: #3f3a64;
            font-weight: bold;
            margin-bottom: 25px;
        }

        p {
            font-size: 1.05rem;
            font-weight: 500;
            margin-bottom: 40px;
        }

        a {
            text-decoration: none;
            font-weight: 500;
            letter-spacing: -1px;

            span {
                color: #1fad96;
                font-weight: bold;
                position: relative;

                path {
                    color: #1fad96;
                }

                &::after,
                &::before {
                    content: '';
                    display: block;
                    height: 1px;
                    position: absolute;
                    bottom: 0;
                    transition: width 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
                }

                &::after {
                    background-color: #1fad96;
                    left: 0;
                    width: 0;
                }

                &::before {
                    background-color: #dadada;
                    right: 0;
                    width: 100%;
                    transition-delay: 0.3s;
                }
            }

            &:hover {
                color: #9694ab;

                span::after {
                    width: 100%;
                    transition-delay: 0.6s;
                }

                span::before {
                    width: 0;
                }
            }
        }
    }
}
</style>