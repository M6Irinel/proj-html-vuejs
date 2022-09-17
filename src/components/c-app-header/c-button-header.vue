<template>
    <button>
        <div class="myBut">
            {{headerButtonName}}
            <font-awesome-icon icon="fa-solid fa-chevron-down" />
        </div>
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


<style scoped lang="scss">
@import '../scss/color-palet.scss';

button {
    font-weight: 500;
    font-size: 0.95rem;
    color: $myGrayDark;
    transition: color 0.2s ease-in-out;
    padding: 30px 15px;

    .fa-chevron-down {
        font-size: 0.6rem;
        width: 8px;
        position: relative;
        bottom: 3px;
        margin-left: 2px;
    }

    &:hover {
        color: $myGreenDark;

        & > .myBut::after {
            left: 0;
            width: 100%;
            transform: rotate(180deg);
        }
    }

    & > .myBut {
        position: relative;

        &::after {
            content: '';
            display: block;
            position: absolute;
            bottom: 0;
            transition: width 0.5s ease-out;
            background-color: $myGreenDark;
            left: 100%;
            width: 0;
            height: 1px;
            transform: translate(-100%);
        }
    }
}
</style>