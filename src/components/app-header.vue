<template>
    <header>
        <section>
            <nav class="container">
                <div class="contentHeader d-flex">
                    <a class="me-auto" href="#"><img src="../assets/img/dark-logo.png" height="25" alt="dark-logo"></a>

                    <c-button-header v-for="(el, i) in arrayHeaderButtons" :key="i" :headerButtonName="el" />

                    <button class="circle-user">
                        <font-awesome-icon icon="fa-regular fa-circle-user" />
                    </button>

                    <input-and-button :placeholder="'Search...'" :icon="true" :classStyle="'search'" />
                </div>
            </nav>
        </section>
    </header>
</template>


<script>
import cButtonHeader from './vue-rest-components/c-button-header.vue';
import inputAndButton from './vue-rest-components/input-and-button.vue';
import arrayHeaderButtons from './json-components/array-header-buttons.json';

export default {
    name: 'appHeader',

    components: { cButtonHeader, inputAndButton },

    data () {
        return {
            arrayHeaderButtons,
        }
    },
}
</script>


<style scoped lang="scss">
section {
    box-shadow: 0 5px 3px #f6f6f6;

    .contentHeader {
        padding: 0 65px;
        gap: 5px;
        align-items: center;

        .circle-user {
            font-size: 1.13rem;
            padding: 0 15px 0 5px;
            transition: color 0.2s ease-in-out;

            &:hover {
                color: #1fad96;
            }
        }
    }
}
</style>