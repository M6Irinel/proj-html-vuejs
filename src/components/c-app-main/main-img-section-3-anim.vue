<template>
    <div class="right">
        <div class="bbackShadow"></div>
        <div class="back pos-absolute-0">
            <div class="top_left">
                <div>
                    <img src="../../assets/img/maxcoach-shape-05.png" alt="maxcoach shade 08">
                </div>
            </div>
            <div class="bottom_right">
                <div><img src="../../assets/img/maxcoach-shape-07.png" alt="maxcoach shade 07"></div>
            </div>
        </div>
        <div class="middle pos-absolute-0">
            <div class="img_front">
                <img src="../../assets/img/home-2-popup-video-poster.jpg" alt="about me profile">
            </div>
            <div class="icon">
                <img src="../../assets/img/icon-youtube-play.png" alt="icon youtube">
            </div>
        </div>
        <div class="front pos-absolute-0">
            <div class="front-left"></div>
            <div class="front-right">
                <img src="../../assets/img/maxtcoach-circle-00.png" alt="maxcoach shade 02">
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

    .bbackShadow {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        height: 80%;
        z-index: -20;
        box-shadow: 90px 130px 40px $myGrayMiddle;
    }

    .back {
        z-index: 1;

        .top_left {
            position: absolute;
            top: 150px;
            left: -104px;

            div {
                margin-top: 18px;
            }
        }

        .bottom_right {
            position: absolute;
            bottom: -165px;
            left: 520px;
        }
    }

    .middle {
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        height: 450px;
        width: 670px;
        margin-top: 115px;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            .img_front {
                transform: scale(1.1);
            }
        }

        .img_front {
            transition: transform 1.3s cubic-bezier(0.15, 0.5, 0.85, 0.95);
        }

        .icon {
            position: absolute;
        }
    }

    .front {
        position: relative;

        .front-left {
            position: absolute;
            top: 75px;
            left: 715px;
            width: 70px;
            aspect-ratio: 1;
            border-radius: 50%;
            border: 10px solid #ecc5ab;
        }

        .front-right {
            position: absolute;
            left: -60px;
            top: 20px;
        }
    }
}
</style>