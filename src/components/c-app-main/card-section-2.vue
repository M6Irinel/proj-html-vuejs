<template>
    <div class="myCard">
        <div class="left">
            <img :src="require('../../assets/img/' + el.img_link)" :alt="el.alt">
        </div>
        <div class="right">
            <div class="price"> {{el.price}}<span>{{el.secondPrice}}</span> </div>
            <p> {{el.description}} </p>
            <div class="bottom d-flex">
                <div>
                    <font-awesome-icon icon="fa-regular fa-file-lines" />
                    {{el.lessons}} Lessons
                </div>
                <div>
                    <font-awesome-icon icon="fa-regular fa-user" />
                    {{el.students}} Students
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'cardSection2',

    props: {
        el: Object,
    },
}
</script>


<style scoped lang="scss">
@import '../scss/color-palet.scss';

.myCard {
    display: flex;
    align-content: center;
    flex-basis: 35%;
    flex-grow: 1;
    padding: 20px;
    gap: 30px;
    border-radius: 5px;
    transition: all 0.25s ease-in-out;

    .left {
        cursor: pointer;

        img {
            border-radius: 50%;
            height: 170px;
            aspect-ratio: 1;
            object-fit: cover;
            object-position: center;
        }
    }

    .right {
        padding-top: 15px;

        .price {
            color: $myGreenDark;
            font-weight: 800;
            font-size: 1.4rem;
            font-family: Gilroy;

            span {
                font-size: 0.9rem;
                font-family: Gilroy;
                font-weight: 800;
            }
        }

        p {
            color: $myVioletDark;
            cursor: pointer;
            font-size: 1.2rem;
            font-weight: 600;
            transition: color 0.2s ease-out;

            &:hover {
                color: $myGrayDark;
            }
        }

        .bottom {
            color: $myVioletLight;
            font-size: 0.85rem;
            gap: 20px;
            font-weight: 500;

            div {
                display: flex;
                gap: 12px;
            }
        }
    }

    &:hover {
        background-color: #fff;
        box-shadow: 0 0 30px #e0e8ee;
    }
}
</style>