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
section {
    padding: 90px 0 100px;

    .content {

        h2 {
            color: #3f3a64;
            font-weight: bold;
            margin-bottom: 27px;

            span {
                color: #20ad96;
                font-weight: 400;
            }
        }

        p {
            color: #6f6f6f;
            font-weight: 500;
            margin-bottom: 52px;
        }

        .inputSection7 {
            width: 570px;
        }
    }
}
</style>