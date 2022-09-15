<template>
    <div class="myCard">
        <div class="img">
            <img :src="el.img_link" :alt="el.alt">
        </div>
        <div class="bottom">
            <div class="first">BUSINESS</div>
            <p> {{el.title}} </p>
            <div class="down d-flex gap-5">
                <div class="d-flex gap-3 align-items-center">
                    <font-awesome-icon icon="fa-regular fa-calendar" />
                    Dec 28, 2020
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
        max-height: 250px;

        img {
            object-fit: cover;
            object-position: center;
            width: 100%;
            height: 100%;
            transition: transform 1.2s ease-out;
        }
    }

    .bottom {
        padding: 30px;

        .first {
            margin-bottom: 8px;
            color: #9694ab;
            font-weight: 500;
            letter-spacing: 1px;
            transition: color 0.2s ease-in-out;
            display: inline-block;
            cursor: pointer;
            
            &:hover {
                color: #20ad96;
            }
        }
        
        p {
            margin-bottom: 25px;
            font-weight: bold;
            line-height: 30px;
            font-size: 1.12rem;
            color: #3f3a64;
            transition: color 0.2s ease-in-out;
            cursor: pointer;
            
            &:hover {
                color: #20ad96;
            }
        }

        .down {
            color: #6f6f6f;
            font-size: 0.9rem;
        }
    }
}
</style>