<template>
    <div>
        <button>
            <div class="d-flex justify-content-center align-items-center gap-3" v-if="icon === 0">
                <font-awesome-icon icon="fa-solid fa-download" />
                <p> {{contentButton}} </p>
            </div>
            <div class="d-flex justify-content-center align-items-center gap-2" v-if="icon === 1">
                <p> {{contentButton}} </p>
                <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
            </div>
            <div class="d-flex justify-content-center align-items-center" v-if="icon === 2">
                <p> {{contentButton}} </p>
            </div>
        </button>
    </div>
</template>


<script>
export default {
    name: 'mainButton',

    props: {
        contentButton: String,
        icon: Number
    }
}
</script>


<style scoped lang="scss">
@import '../scss/color-palet.scss';

button {
    background-color: $myGreenDark;
    color: #fff;
    font-weight: bold;
    border-radius: 5px;
    transition: background-color 0.2s ease-in-out;
    margin-bottom: 25px;

    div {
        height: 52px;
        width: 260px;

        p {
            padding: 0;
            margin: 0;
            font-size: 0.8rem;
        }
    }

    &:hover {
        background-color: $myVioletDark;
    }
}
</style>