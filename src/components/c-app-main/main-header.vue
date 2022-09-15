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
                            <text-animation-underline-vue :textA="'Have questions?'" :textSpan="'Get Free Sample'" />
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
import textAnimationUnderlineVue from './text-animation-underline.vue';

export default {
    name: 'mainHeader',

    components: { mainButton, mainImgHeaderAnim, mainHeaderBottom, textAnimationUnderlineVue },

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
    }
}
</style>