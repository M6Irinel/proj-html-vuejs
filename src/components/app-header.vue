<template>
    <header>
        <section>
            <div class="container">
                <div class="d-flex py-3">
                    <a href="#"><img src="../assets/img/dark-logo.png" height="25" alt="dark-logo"></a>

                    <div class="ms-auto">
                        <c-button-header v-for="(el, i) in arrayHeaderButtons" :key="i" :headerButtonName="el" />
                    </div>

                    <button>
                        <font-awesome-icon icon="fa-regular fa-circle-user" />
                    </button>

                    <input-and-button :placeholder="'Search...'" :icon="true" :classStyle="'search'" />
                </div>
            </div>
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


<style lang="scss">

</style>