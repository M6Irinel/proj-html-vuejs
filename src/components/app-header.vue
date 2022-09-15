<template>
    <header>
        <section>
            <nav>
                <div class="myContainer d-flex">
                    <a class="me-auto py-3" href="#"><img src="../assets/img/dark-logo.png" height="25"
                            alt="dark-logo"></a>

                    <c-button-header v-for="(el, i) in arrayHeaderButtons" :key="i" :headerButtonName="el" />

                    <button class="circle-user">
                        <font-awesome-icon icon="fa-regular fa-circle-user" />
                    </button>

                    <input-and-button :placeholder="'Search...'" :icon="true" :classInput="'inputHeader'" />
                </div>
            </nav>
        </section>
    </header>
</template>


<script>
import cButtonHeader from './c-app-header/c-button-header.vue';
import inputAndButton from './c-app-header/input-and-button.vue';
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
@import './scss/color-palet.scss';

header {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: #fff;

    section {
        box-shadow: 0 5px 3px #ecebeb;

        .myContainer {
            gap: 5px;
            align-items: center;
            padding: 0 15px;

            .circle-user {
                font-size: 1.13rem;
                padding: 0 17px 0 7px;
                margin-left: -6px;
                transition: color 0.2s ease-in-out;
                color: $myGrayDark;

                &:hover {
                    color: $myGreenDark;
                }
            }
        }
    }
}
</style>