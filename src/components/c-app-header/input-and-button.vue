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
.input-and-button {
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    padding: 1px;

    input {
        border: none;
        background-color: #f6f3f5;
        border-radius: 5px;
        font-size: 0.88rem;

        &:focus {
            color: #4f4f4f;
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
        color: #1fad96;
        aspect-ratio: 1;

        &:hover {
            background-color: #1fad96;
            color: #fff;
        }
    }
    
    .classButton {
        padding-left: 36px;
        padding-right: 36px;
        color: #fff;
        font-weight: bold;
        background-color: #1fad96;
        font-size: 0.9rem;
        letter-spacing: -1px;

        &:hover {
            background-color: #3e3c65;
        }
    }
}
</style>