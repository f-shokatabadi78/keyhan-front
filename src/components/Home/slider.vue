<template>
    <section class="slider-row py-6">
      <div class="container mx-auto">
        <div class="grid grid-cols-12 gap-30">
          <div class="col-span-12 md:col-span-9 slider-area ltr">
            <carousel
              :items="1"
              :autoplayHoverPause="true"
              :autoplay="true"
              :nav="false"
              :margin="5"
              :loop="true"
            >
            <a href="">
              <img src="@/assets/img/slider/slider01.jpg" />
            </a>
            <a href="">
              <img src="@/assets/img/slider/slider01.jpg" />
            </a>
            <a href="">
              <img src="@/assets/img/slider/slider01.jpg" />
            </a>
            <a href="">
              <img src="@/assets/img/slider/slider01.jpg" />
            </a>

            </carousel>
          </div>
          <div class="col-span-12 md:col-span-3 banner-area">
            <div class="grid grid-cols-2 gap-5">
            <div class="col-span-1 md:col-span-2 banner-top">
              <a href="">
                <img
                  class="rounded-lg"
                  src="@/assets/img/banner/banner01.jpg"
                  alt=""
                />
              </a>

            </div>
            <div class="col-span-1 md:col-span-2 banner-bottom">
              <a href="">
                <img
                  class="rounded-lg"
                  src="@/assets/img/banner/banner02.jpg"
                  alt=""
                />
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
<script>
import carousel from "vue-owl-carousel";
export default {
  components: {
    carousel,
  },
};
</script>