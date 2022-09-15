<template>
    <div class="myCard">
        {{el}}
    </div>
</template>


<script>
export default {
    name: 'cardSection4',

    props: {
        el: Object
    }
}
</script>


<style scoped lang="scss">
.myCard {
    flex-basis: 0;
    flex-grow: 1;
}
</style>