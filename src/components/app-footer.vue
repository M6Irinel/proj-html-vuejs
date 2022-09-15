<template>
    <footer>
        <section>
            <div class="myContainer">
                <div class="d-flex">
                    <address>
                        <h4>Adress</h4>
                        <div>
                            <p>382 NE 191st St # 87394 Miami, FL 33179-3899</p>
                            <p>+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</p>
                            <p><a href="#">support@maxcoach.com</a></p>
                            <div class="icons">
                                <button v-for="(el, i) in arrayIconFooter" :key="i">
                                    <font-awesome-icon :icon="['fa-brands', el]" />
                                </button>
                            </div>
                        </div>
                    </address>
                    <div class="explore">
                        <h4>Explore</h4>
                        <div>
                            <p><a href="#">Start here</a></p>
                            <p><a href="#">Success story</a></p>
                            <p><a href="#">Blog</a></p>
                            <p><a href="#">Courses</a></p>
                            <p><a href="#">About us</a></p>
                            <p><a href="#">Contact us</a></p>
                        </div>
                    </div>
                    <div class="info">
                        <h4>Information</h4>
                        <div>
                            <p><a href="#">Membership</a></p>
                            <p><a href="#">Purchase guide</a></p>
                            <p><a href="#">Privacy policy</a></p>
                            <p><a href="#">Terms of services</a></p>
                        </div>
                    </div>
                </div>
                <p class="endPageWeb text-center mt-5 mb-0">© 2020 Maxcoach. All Rights Reserved</p>
            </div>
        </section>
    </footer>
</template>


<script>
import arrayIconFooter from './json-components/array-icon-footer.json';

export default {
    name: 'appFooter',

    data () {
        return {
            arrayIconFooter
        }
    },
}
</script>


<style scoped lang="scss">
@import './scss/color-palet.scss';

section {
    background-color: $bgCol2;
    padding: 69px 0 50px;
}

h4 {
    margin-bottom: 20px;
    color: $myBlack;
}

p {
    font-size: 0.85rem;
    font-weight: 500;
}

p,
a {
    color: $myGrayDark;
}

a {
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
        color: $myGreenDark;
    }
}

address {
    flex-basis: 0;
    flex-grow: 6;

    p {
        font-family: 'Rubik', sans-serif;
    }

    .icons {
        display: flex;
        gap: 20px;
        font-size: 1.5rem;

        & > button {
            opacity: 0.3;
            transition: all 0.2s ease-in-out;

            &:hover {
                opacity: 1;
                color: $myGreenDark;
            }
        }
    }
}

.explore {
    flex-basis: 0;
    flex-grow: 3;

    & > div {
        display: flex;
        flex-wrap: wrap;

        & > * {
            flex-basis: 40%;
            flex-grow: 1;
        }
    }
}

.info {
    flex-basis: 0;
    flex-grow: 3;
}

.endPageWeb {
    color: $myGrayMiddle;
}
</style>