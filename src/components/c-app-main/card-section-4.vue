<template>
    <div class="myCard">
        <h4> {{el.title}} </h4>
        <p> {{el.description}} </p>
        <div class="profile d-flex gap-4">
            <div class="img rounded-circle overflow-hidden">
                <img :src="require(`../../assets/img/${el.img_link}`)" :alt="el.namePerson">
            </div>
            <div class="info">
                <h5> {{el.namePerson}} </h5>
                <p> / {{el.speciality}} </p>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'cardSection4',

    props: {
        el: Object,
        i: Number
    }
}
</script>


<style scoped lang="scss">
.myCard {
    flex-basis: 0;
    flex-grow: 1;
    padding: 50px;
    background-color: #fff;

    h4 {
        color: #3f3a64;
        font-size: 1.16rem;
        font-weight: 600;
        line-height: 2rem;
    }
    
    p {
        color: #575757;
        margin-bottom: 35px;
        line-height: 1.9rem;
        font-weight: 500;
    }

    .profile {
        .img {
            width: 75px;
            aspect-ratio: 1;

            img {
                object-fit: cover;
                object-position: center;
                width: 100%;
                height: 100%;
            }
        }

        .info {
            display: flex;
            flex-direction: column;
            justify-content: center;

            h5 {
                color: #3f3a64;
                font-size: 0.95rem;
                font-weight: 700;
            }
    
            p {
                color: #8d8d8d;
                font-size: 0.86rem;
                margin: 0;
            }
        }

    }
}
</style>