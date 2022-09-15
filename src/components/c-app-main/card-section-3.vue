<template>
    <div class="myCard">
        <div class="top">
            <img :src="require(`../../assets/img/${el.img_link}`)" :alt="el.alt">
        </div>
        <div class="bottom">
            <h4> {{el.title}} </h4>
            <p> {{el.description}} </p>
            <div class="linkCardBotton">
                <span> {{el.linkBottom}} </span>
                <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'cardSection3',

    props: {
        el: Object
    }
}
</script>


<style scoped lang="scss">
.myCard {
    flex-basis: 0;
    flex-grow: 1;
    cursor: pointer;

    &:hover {
        .linkCardBotton {
            color: #20ad96 !important;

            &::after {
                width: 100% !important;
            }
        }
    }

    .top {
        margin-bottom: 35px;
    }

    .bottom {
        h4 {
            color: #3f3a64;
            font-weight: 600;
            font-size: 1.4rem;
            margin-bottom: 23px;
        }

        p {
            color: #575757;
            font-size: 0.9rem;
            margin-bottom: 25px;
        }

        .linkCardBotton {
            color: #9694ab;
            font-weight: bold;
            letter-spacing: -0.5px;
            font-size: 0.85rem;
            align-items: center;
            position: relative;
            display: inline-block;

            span {
                margin-right: 8px;
            }

            &::after {
                content: '';
                display: block;
                position: absolute;
                bottom: 0;
                left: 0;
                height: 1px;
                background-color: #dadada;
                width: 0;
                transition: width 0.5s ease-in-out;
            }
        }
    }
}
</style>