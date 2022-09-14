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

button {
    font-weight: 500;
    font-size: 0.95rem;
    color: #313131;
    transition: color 0.2s ease-in-out;
    padding: 30px 16.5px;

    .fa-chevron-down {
        font-size: 0.6rem;
        width: 8px;
    }

    &:hover {
        color: #1fad96;

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
            background-color: #1fad96;
            left: 100%;
            width: 0;
            height: 1px;
            transform: translate(-100%);
        }
    }
}
</style>