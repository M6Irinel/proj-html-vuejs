<template>
    <div class="input-and-button">
        <input :class="classInput" type="text" :placeholder="placeholder">
        <button class="headerbutton" v-if="icon">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </button>
        <button class="classButton" v-else>Subscribe</button>
    </div>
</template>


<script>
export default {
    name: 'inputAndButton',

    props: {
        placeholder: String,
        icon: Boolean,
        classInput: String
    }
}
</script>


<style scoped lang="scss">
@import '../scss/color-palet.scss';

.input-and-button {
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    padding: 1px;

    input {
        border: none;
        background-color: $myGrayLight;
        border-radius: 5px;
        font-size: 1rem;
        height: 50px;
        font-family: 'Be Vietnam Pro', sans-serif;
        letter-spacing: -1px;
        font-weight: 300;

        &:focus {
            color: $myGrayDark;
            outline: 1px solid #1fad96;
        }
    }

    .headerbutton,
    .classButton {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        transition: all 0.2s ease-in-out;
    }

    .headerbutton {
        color: $myGreenDark;
        aspect-ratio: 1;

        &:hover {
            background-color: $myGreenDark;
            color: #fff;
        }
    }

    .classButton {
        padding-left: 36px;
        padding-right: 36px;
        color: #fff;
        font-weight: bold;
        background-color: $myGreenDark;
        font-size: 0.9rem;
        letter-spacing: -1px;

        &:hover {
            background-color: $myVioletDark;
        }
    }
}
</style>