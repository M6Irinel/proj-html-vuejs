<template>
    <div>
        <img :src="require('../../assets/img/' + el)" :alt="el">
    </div>
</template>


<script>
export default {
    name: 'mainHeaderBottom',

    props: {
        el: String
    }
}
</script>


<style scoped lang="scss">
div {
    opacity: 0.5;
    transition: opacity 0.2s ease-out;

    &:hover {
        opacity: 1;
    }
}
</style>