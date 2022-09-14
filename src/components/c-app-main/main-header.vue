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

                <div class="bottom d-flex justify-content-around align-items-center mt-5 mb-4">
                    <div>
                        <img src="../../assets/img/client-logo-01.png" alt="client logo 01">
                    </div>
                    <div>
                        <img src="../../assets/img/client-logo-02.png" alt="client logo 02">
                    </div>
                    <div>
                        <img src="../../assets/img/client-logo-03.png" alt="client logo 03">
                    </div>
                    <div>
                        <img src="../../assets/img/client-logo-04.png" alt="client logo 04">
                    </div>
                    <div>
                        <img src="../../assets/img/client-logo-05.png" alt="client logo 05">
                    </div>
                    <div>
                        <img src="../../assets/img/client-logo-06.png" alt="client logo 06">
                    </div>
                </div>
            </div>
        </section>
    </header>
</template>


<script>
import mainButton from './main-button.vue';
import mainImgHeaderAnim from './main-img-header-anim.vue';

export default {
    name: 'mainHeader',

    components: { mainButton, mainImgHeaderAnim },
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
            display: block;
            text-decoration: none;
            font-weight: 500;

            span {
                color: #1fad96;
                font-weight: bold;
            }

            &:hover {
                color: #9694ab;
            }
        }
    }
}

.bottom {
    div {
        opacity: 0.5;
        transition: opacity 0.2s ease-out;

        &:hover {
            opacity: 1;
        }
    }
}
</style>