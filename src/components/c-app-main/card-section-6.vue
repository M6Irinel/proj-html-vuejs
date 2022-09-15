<template>
    <div class="myCard">
        <div class="img">
            <img :src="require(`../../assets/img/${el.img_link}`)" :alt="el.alt">
        </div>
        <div class="bottom">
            <div class="first">ARTIST</div>
            <p> {{el.title}} </p>
            <div class="down d-flex gap-5">
                <div class="d-flex gap-3 align-items-center">
                    <font-awesome-icon icon="fa-regular fa-calendar" />
                    May 15, 2020
                </div>
                <div class="d-flex gap-3 align-items-center">
                    <font-awesome-icon icon="fa-regular fa-eye" />
                    {{el.views}} views
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'cardSection6',

    props: {
        el: Object
    }
}
</script>


<style scoped lang="scss">
@import '../scss/color-palet.scss';

.myCard {
    background-color: #fff;
    border-radius: 5px;
    max-width: 340px;
    margin: 0 15px;
    overflow: hidden;

    &:hover {
        img {
            transform: scale(1.1);
        }
    }

    .img {
        height: 250px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            transition: transform 1.2s ease-out;
        }
    }

    .bottom {
        padding: 30px;

        .first {
            margin-bottom: 8px;
            color: $myVioletLight;
            font-weight: 500;
            letter-spacing: 1px;
            transition: color 0.2s ease-in-out;
            display: inline-block;
            cursor: pointer;

            &:hover {
                color: $myGreenDark;
            }
        }

        p {
            margin-bottom: 25px;
            font-weight: bold;
            line-height: 30px;
            font-size: 1.12rem;
            color: $myVioletDark;
            transition: color 0.2s ease-in-out;
            cursor: pointer;

            &:hover {
                color: $myGreenDark;
            }
        }

        .down {
            color: $myGrayMiddle;
            font-size: 0.9rem;

            div {
                font-family: Rubik;
                font-weight: 400;
            }
        }
    }
}
</style>