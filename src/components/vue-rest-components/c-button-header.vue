<template>
    <button>
        {{headerButtonName}}
        <font-awesome-icon icon="fa-solid fa-chevron-down" />
    </button>
</template>


<script>
export default {
    name: 'cButtonHeader',

    props: {
        headerButtonName: String
    }
}
</script>


<style lang="scss">

</style>