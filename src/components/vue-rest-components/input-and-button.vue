<template>
    <div :class="classStyle">
        <input type="text" :placeholder="placeholder">
        <button v-if="icon"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
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


<style lang="scss">
    
</style>