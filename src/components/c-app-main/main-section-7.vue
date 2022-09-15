<template>
    <section>
        <div class="myContainer">
            <div class="content text-center">
                <h2>Subscribe <span>Newsletters</span></h2>
                <p>Enter your email address to register to our newsletter subscription <br> delivered on a regular
                    basis!</p>
                <div class="inputSection7 mx-auto">
                    <input-and-button :icon="false" :placeholder="'Enter your email'" :classInput="'inputMain'" />
                </div>
            </div>
            <div class="imgs">
                <div class="circle"></div>
                <div class="fiftyCircle">
                    <img src="../../assets/img/maxcoach-shape-02.png" alt="maxcoach shape 02">
                </div>
                <div class="rectangular">
                    <img src="../../assets/img/maxcoach-shape-09.png" alt="maxcoach shape 09">
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import inputAndButton from '../c-app-header/input-and-button.vue';

export default {
    name: 'mainSection7',

    components: { inputAndButton },
}
</script>


<style scoped lang="scss">
@import '../scss/color-palet.scss';

section {
    padding: 90px 0 100px;

    .myContainer {
        position: relative;
    }

    .content {

        h2 {
            color: $myVioletDark;
            font-weight: bold;
            margin-bottom: 27px;

            span {
                color: $myGreenDark;
                font-weight: 400;
            }
        }

        p {
            color: $myGrayMiddle;
            font-weight: 500;
            margin-bottom: 52px;
        }

        .inputSection7 {
            width: 570px;
        }
    }

    .imgs,
    .circle,
    .fiftyCircle,
    .rectangular {
        position: absolute;
    }

    .imgs {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -5;

        .circle {
            top: 50%;
            left: -100px;
            width: 60px;
            aspect-ratio: 1;
            border: 7px solid #8fd6ca;
            border-radius: 50%;
        }

        .fiftyCircle {
            right: 20px;
            top: 100px;
        }

        .rectangular {
            top: -40px;
            right: 20px;
        }
    }
}
</style>