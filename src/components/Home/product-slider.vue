<template>
    <section class="product-row my-8 ltr">
      <div class="container mx-auto">
        <div class="grid grid-cols-12">
          <div class="col-span-12 product-area">
            <carousel 
              :navText="['','']"
              :items="5"
              :autoplayHoverPause="true"
              :autoplay="true"
              :nav="true"
              :margin="30"
              :loop="true"
              :dots="false"
              :responsive="{0:{items:2,nav:false ,margin:20},
              600:{items:3,nav:false},
              720:{items:3,nav:false},
              992:{items:4,nav:true},
              1254:{items:5,nav:true},
              1470:{items:5,nav:true}}"
            >
            <div  v-for="(ps , index ) in $props.psliderprops"  :key="index">
               <product-card :psdata="ps" />
            </div>
            </carousel>
          </div>
        </div>
      </div>
    </section>
</template>
<script>
import carousel from "vue-owl-carousel";
import ProductCard from "./productCard";
export default {
    props:{
        psliderprops: {
            type: Array ,
        }
    },
    components:{
        ProductCard,
        carousel ,
    }
}
</script>