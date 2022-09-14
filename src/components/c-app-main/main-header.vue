<template>
    <header>
        <section>
            <div class="myContainer">
                <div class="top d-flex">
                    <div class="left">
                        <h1>Distant learning for further expansion</h1>
                        <p>Learning is a life-long journey that in fact we never find the terminate stop. Stop
                            searching, enjoy the process.</p>
                        <main-button :contentButton="'Download free guide'" :icon="0" />
                        <a href="#">Have questions? <span>Get Free Sample
                                <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                            </span></a>
                    </div>
                    <div class="right">
                        <div>
                            back
                        </div>
                        <div>
                            midle
                        </div>
                        <div>
                            front
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    bottom
                </div>
            </div>
        </section>
    </header>
</template>


<script>
import mainButton from './main-button.vue';

export default {
    name: 'mainHeader',

    components: { mainButton },
}
</script>


<style scoped lang="scss">
* {
    color: #9694ab;
}

h1 {
    color: #3f3a64;
    font-weight: bold;
}

a {
    display: block;
    text-decoration: none;
    font-weight: 500;

    span {
        color: #1fad96;
        font-weight: bold;
    }

    &:hover {color: #9694ab;}
}
</style>