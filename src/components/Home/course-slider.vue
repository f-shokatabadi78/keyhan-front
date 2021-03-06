<template>
    <section class="courses-row my-8 ltr">
      <div class="container mx-auto">
        <div class="grid grid-cols-12">
          <div class="col-span-12 product-area">
            <carousel
              :navText="['','']"
              :items="4"
              :autoplayHoverPause="true"
              :autoplay="true"
              :nav="true"
              :margin="30"
              :loop="true"
              :dots="false"
              :responsive="{0:{items:2,nav:false},
              600:{items:3,nav:true},
              720:{items:3,nav:true},
              992:{items:4,nav:true},
              1254:{items:4,nav:true},
              1470:{items:4,nav:true}}"
            >
              <div v-for="(cs , index ) in $props.csliderprops" :key="index">
                <div
                    class="item-course border border-cool-100 rounded-lg hover:shadow-xl mb-10 mt-2 relative"
                >
                <vs-button
                    class="save-product"
                    color="#D1D5DB"
                    type="flat"
                    icon-pack="fal"
                    icon=" fa-bookmark"    
                    ></vs-button>
                    <div class="img-course">
                    <a class="img-thum" :href="cs.href">
                        <img :src="cs.img" alt="" />
                    </a>
                    </div>
                    <div class="title-course px-4 my-4 h-13 overflow-hidden">
                    <a class="title-p text-cool-800" :href="cs.href">
                        <h3 class="text-right font-black text-sm">
                        {{cs.title}}
                        </h3>
                    </a>
                    </div>
                    <div class="des-course px-4 pb-4 h-15 overflow-hidden ">
                    <p class="text-xs text-cool-600 font-thin text-right">
                     {{cs.desc}}
                    </p>
                    </div>
                </div>
              </div>
            </carousel>
          </div>
        </div>
      </div>
    </section>
</template>
<script>
import carousel from "vue-owl-carousel";
export default {
    props:{
        csliderprops:{
            type: Array
        }
    },
  components: {
    carousel,
  },
};
</script>