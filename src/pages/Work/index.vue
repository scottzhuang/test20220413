<template>
  <div class="l-main">
    <section class="work section" id="work">
        <h2 class="section-title">Work</h2>

        <div class="work__container bd-grid">
            <div class="work__img">
                <a href="https://github.com/scottJinXiang/FaceSwap_application">
                    <img src="./images/faceswapimg.png" alt="" title="https://github.com/scottJinXiang/FaceSwap_application">
                </a>
            </div>

            <div class="work__img">
                <router-link to="/project/fullcalendar" class="nav__link" active-class="active"><img src="./images/scott02.jpg" alt=""></router-link>
            </div>

            <div class="work__img">
                <img src="./images/scott02.jpg" alt="">
            </div>

            <div class="work__img">
                <img src="./images/scott02.jpg" alt="">
            </div>

            <div class="work__img">
                <img src="./images/scott02.jpg" alt="">
            </div>

            <div class="work__img">
                <img src="./images/scott02.jpg" alt="">
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
    name:''
}
</script>

<style>

</style>