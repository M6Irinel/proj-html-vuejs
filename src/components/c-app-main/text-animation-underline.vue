<template>
    <a href="#">{{textA}} <span>{{textSpan}}
            <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
        </span></a>
</template>


<script>
export default {
    name: 'TextAnimationUnderline',

    props: {
        textA: String,
        textSpan: String
    }
}
</script>


<style scoped lang="scss">
a {
    text-decoration: none;
    font-weight: 500;
    letter-spacing: -1px;
    font-size: 0.9rem;

    span {
        color: #1fad96;
        font-weight: bold;
        position: relative;

        .fa-arrow-right-long {
            margin-left: 4px;
            margin-bottom: 1px;
        }

        path {
            color: #1fad96;
        }

        &::after,
        &::before {
            content: '';
            display: block;
            height: 1px;
            position: absolute;
            bottom: 0;
            transition: width 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        }

        &::after {
            background-color: #1fad96;
            left: 0;
            width: 0;
        }

        &::before {
            background-color: #dadada;
            right: 0;
            width: 100%;
            transition-delay: 0.3s;
        }
    }

    &:hover {
        color: #9694ab;

        span::after {
            width: 100%;
            transition-delay: 0.6s;
        }

        span::before {
            width: 0;
        }
    }
}
</style>