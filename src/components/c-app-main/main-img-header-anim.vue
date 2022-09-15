<template>
    <div class="right">
        <div class="back pos-absolute-0">
            <div class="top_left">
                <div>
                    <img src="../../assets/img/maxcoach-shape-08.png" alt="maxcoach shade 08">
                </div>
                <div>
                    <img src="../../assets/img/maxcoach-shape-08.png" alt="maxcoach shade 08">
                </div>
            </div>
            <div class="bottom_right">
                <div><img src="../../assets/img/maxcoach-shape-07.png" alt="maxcoach shade 07"></div>
            </div>
        </div>
        <div class="middle pos-absolute-0">
            <img class="rounded-circle"
                src="../../assets/img/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg"
                alt="about me profile">
        </div>
        <div class="front pos-absolute-0">
            <div class="front-left"></div>
            <div class="front-right">
                <img src="../../assets/img/maxcoach-shape-02.png" alt="maxcoach shade 02">
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'mainImgHeaderAnim',
}
</script>


<style scoped lang="scss">
@import '../scss/color-palet.scss';

.pos-absolute-0 {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.right {
    flex-basis: 0;
    flex-grow: 1;
    position: relative;
    aspect-ratio: 1;

    .back {

        .top_left {
            position: absolute;
            top: 170px;
            left: -90px;

            div {
                margin-top: 18px;
            }
        }

        .bottom_right {
            position: absolute;
            bottom: 5px;
            right: 80px;
        }
    }

    .middle {

        img {
            object-fit: cover;
            object-position: center;
            width: 100%;
            height: 100%;
        }
    }

    .front {
        position: relative;

        .front-left {
            position: absolute;
            top: 395px;
            left: -38px;
            width: 65px;
            aspect-ratio: 1;
            border-radius: 50%;
            border: 8px solid #ebc3a9;
        }

        .front-right {
            position: absolute;
            top: 130px;
            right: -120px;
        }
    }
}
</style>