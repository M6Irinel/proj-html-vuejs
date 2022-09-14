<template>
    <div :class="classStyle" class="input-and-button">
        <input type="text" :placeholder="placeholder">
        <button v-if="icon">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </button>
        <button v-else>Subcribe</button>
    </div>
</template>


<script>
export default {
    name: 'inputAndButton',

    props: {
        placeholder: String,
        icon: Boolean,
        classStyle: String
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
        padding: 12px 55px 12px 23px;
        border: none;
        background-color: #f6f3f5;
        border-radius: 5px;
        max-width: 225px;
        font-size: 0.88rem;

        &:focus {
            color: #4f4f4f;
            outline: 1px solid #1fad96;
        }
    }

    button {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        color: #1fad96;
        transition: all 0.2s ease-in-out;
        aspect-ratio: 1;

        &:hover {
            background-color: #1fad96;
            color: #fff;
        }
    }
}
</style>