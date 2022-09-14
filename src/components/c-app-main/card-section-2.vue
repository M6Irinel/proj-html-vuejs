<template>
    <div class="myCard">
        <div class="left">
            <img :src="require('../../assets/img/' + el.img_link)" :alt="el.alt">
        </div>
        <div class="right">
            <div class="price"> {{el.price}}{{el.secondPrice}} </div>
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
.myCard {
    display: flex;
    align-content: center;
    flex-basis: 35%;
    flex-grow: 1;
    padding: 20px;
    gap: 30px;
    border-radius: 5px;
    transition: background-color 0.1s ease-in-out;

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
            color: #20ad96;
            font-weight: bold;
            font-size: 1.4rem;
        }

        p {
            color: #3f3a64;
            cursor: pointer;
            font-size: 1.2rem;
            font-weight: 600;
            transition: color 0.2s ease-out;

            &:hover {
                color: #20ad96;
            }
        }

        .bottom {
            color: #9694ab;
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
        box-shadow: 0 0 15px #ececec;
    }
}
</style>