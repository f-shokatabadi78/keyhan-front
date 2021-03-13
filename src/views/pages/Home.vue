<template>
  <div class="home-page">
    <!-- slider -->
    <slider></slider>
    <!-- category product -->
    <categoryp :catpro="catarray"></categoryp>
    <!-- brands -->
    <brands :brandprops="brandarray"></brands>
    <!-- product carousel -->
    <section class="title-section mt-24 relative">
      <div class="container mx-auto">
        <div class=" grid grid-cols-2 gap-30">
          <div class="col-span-1">
            <h3
              class="title-border relative text-xl font-black text-cool-800 inline-block border-b-2 border-cool-600 pb-2 pl-0 lg:pl-5 "
            >
              محصولات پیشنهادی
            </h3>
          </div>
          <div class="col-span-1 text-left">
            <a
              class="more-border relative text-xs lg:text-base font-thin text-cool-700 border-b-2 border-cool-600 pb-3 px-6 "
              href=""
            >
              مشاهـــــده هـــمــــه
            </a>
          </div>
        </div>
      </div>
    </section>
    <product-slider :psliderprops="psliderarray" ></product-slider>
    <!-- course carousel -->
    <section class="title-section mt-10 relative">
      <div class="container mx-auto">
        <div class=" grid grid-cols-2 gap-30">
          <div class="col-span-1">
            <h3
              class="title-border relative text-xl font-black text-cool-800 inline-block border-b-2 border-cool-600 pb-2 pl-0 lg:pl-5 "
            >
              دوره های آموزش
            </h3>
          </div>
          <div class="col-span-1 text-left">
            <a
              class="more-border relative text-xs lg:text-base font-thin text-cool-700 border-b-2 border-cool-600 pb-3 px-6 "
              href=""
            >
              مشاهـــــده هـــمــــه
            </a>
          </div>
        </div>
      </div>
    </section>
    <course-slider :csliderprops="csliderarray"></course-slider>
    <!-- contact form -->
    <contact></contact>
    <!-- blog -->
    <section class="title-section mt-24 relative mb-8">
      <div class="container mx-auto">
        <div class=" grid grid-cols-2 gap-30">
          <div class="col-span-2">
            <h3
              class="title-border relative text-xl font-black text-cool-800 inline-block border-b-2 border-cool-600 pb-2 pl-0 lg:pl-5 "
            >
              دوره های آموزش
            </h3>
          </div>

        </div>
      </div>
    </section>
    <singleblog :singleblogprops="blogarray"></singleblog>
      <div class="col-span-12 text-center">
        <a
        class="more-border relative text-xs lg:text-base font-thin text-cool-700 border-b-2 border-cool-600 pb-3 px-6"
        href=""
        >مشاهـــــده هـــمــــه
        </a>
      </div>
  </div>
</template>
<script>

import slider from "../../components/Home/slider.vue";
import categoryp from "../../components/Home/catproduct.vue";
import productSlider from "../../components/Home/product-slider.vue";
import courseSlider from "../../components/Home/course-slider.vue";
import contact from "../../components/Home/contact.vue";
import singleblog from "../../components/blog/single-blog.vue";
import brands from "../../components/Home/brands.vue"


export default {
  data() {
    return {
      catarray:[
        { link:"#", title:"تجهیزات شبکه ای", img: require('@/assets/img/technology.svg'), mt:"20"},
        { link:"#", title:"تجهیزات مخابراتی", img: require('@/assets/img/transmitting.svg'), mt:"10"},
        { link:"#", title:"تجهیزات  برق صنعتی", img: require('@/assets/img/electrical-panel.svg'), mt:"0"},
        { link:"#", title:"تجهیزات برق ساختمان", img: require('@/assets/img/power-plant.svg'), mt:"0" },
        { link:"#", title:"تجهیزات خانه هوشمند", img: require('@/assets/img/smarthouse.svg'), mt:"10" },
        { link:"#", title:"انـــرژی های پـــاک", img: require('@/assets/img/energy.svg'), mt:"20"},
      ],
      psliderarray:[
        { status: "1" , img: require('@/assets/img/product/img-p01.jpg') ,title:" دوربین مداربسته تحت شبکه شیائومی مدل IMICMSXJ13B " , discount:"15%" ,newprice: "35,000,000" ,oldprice: "55,000,000" , href:"#" },
        { status: "2" , img: require('@/assets/img/product/img-p01.jpg') ,title:" دوربین مداربسته تحت شبکه شیائومی مدل IMICMSXJ13B " , text:"نـــاموجود" , href:"#"},
        { status: "3" , img: require('@/assets/img/product/img-p01.jpg') ,title:" دوربین مداربسته تحت شبکه شیائومی مدل IMICMSXJ13B " , price: "35,000,000" , href:"#" },
        { status: "4" , img: require('@/assets/img/product/img-p01.jpg') ,title:" دوربین مداربسته تحت شبکه شیائومی مدل IMICMSXJ13B " , href:"#" },
        { status: "2" , img: require('@/assets/img/product/img-p01.jpg') ,title:" دوربین مداربسته تحت شبکه شیائومی مدل IMICMSXJ13B " , text:"نـــاموجود" , href:"#"},
        { status: "3" , img: require('@/assets/img/product/img-p01.jpg') ,title:" دوربین مداربسته تحت شبکه شیائومی مدل IMICMSXJ13B " , price: "35,000,000" , href:"#" },
      ],
      csliderarray:[
        { img: require('@/assets/img/product/03.png') ,title:"  ۰ تا ۱۰۰ آموزش کسب و کار اینترنتی، دوره جامع وبمستران هوشمند " ,href:"#" ,desc:" آموزش جامع ساخت و مدیریت کسب و کار اینترنتی، اصول بازاریابی و رساندن سایت و "},
        { img: require('@/assets/img/product/03.png') ,title:"  ۰ تا ۱۰۰ آموزش کسب و کار اینترنتی، دوره جامع وبمستران هوشمند " ,href:"#" ,desc:" آموزش جامع ساخت و مدیریت کسب و کار اینترنتی، اصول بازاریابی و رساندن سایت و "},
        { img: require('@/assets/img/product/03.png') ,title:"  ۰ تا ۱۰۰ آموزش کسب و کار اینترنتی، دوره جامع وبمستران هوشمند " ,href:"#" ,desc:" آموزش جامع ساخت و مدیریت کسب و کار اینترنتی، اصول بازاریابی و رساندن سایت و "},
        { img: require('@/assets/img/product/03.png') ,title:"  ۰ تا ۱۰۰ آموزش کسب و کار اینترنتی، دوره جامع وبمستران هوشمند " ,href:"#" ,desc:" آموزش جامع ساخت و مدیریت کسب و کار اینترنتی، اصول بازاریابی و رساندن سایت و "},
        { img: require('@/assets/img/product/03.png') ,title:"  ۰ تا ۱۰۰ آموزش کسب و کار اینترنتی، دوره جامع وبمستران هوشمند " ,href:"#" ,desc:" آموزش جامع ساخت و مدیریت کسب و کار اینترنتی، اصول بازاریابی و رساندن سایت و "},
        { img: require('@/assets/img/product/03.png') ,title:"  ۰ تا ۱۰۰ آموزش کسب و کار اینترنتی، دوره جامع وبمستران هوشمند " ,href:"#" ,desc:" آموزش جامع ساخت و مدیریت کسب و کار اینترنتی، اصول بازاریابی و رساندن سایت و "},
      ],
      blogarray:[
        { img: require('@/assets/img/product/03.png') ,title:"  ۰ تا ۱۰۰ آموزش کسب و کار اینترنتی، دوره جامع وبمستران هوشمند " ,href:"#" ,desc:" آموزش جامع ساخت و مدیریت کسب و کار اینترنتی، اصول بازاریابی و رساندن سایت و "},
        { img: require('@/assets/img/product/03.png') ,title:"  ۰ تا ۱۰۰ آموزش کسب و کار اینترنتی، دوره جامع وبمستران هوشمند " ,href:"#" ,desc:" آموزش جامع ساخت و مدیریت کسب و کار اینترنتی، اصول بازاریابی و رساندن سایت و "},
        { img: require('@/assets/img/product/03.png') ,title:"  ۰ تا ۱۰۰ آموزش کسب و کار اینترنتی، دوره جامع وبمستران هوشمند " ,href:"#" ,desc:" آموزش جامع ساخت و مدیریت کسب و کار اینترنتی، اصول بازاریابی و رساندن سایت و "},
        { img: require('@/assets/img/product/03.png') ,title:"  ۰ تا ۱۰۰ آموزش کسب و کار اینترنتی، دوره جامع وبمستران هوشمند " ,href:"#" ,desc:" آموزش جامع ساخت و مدیریت کسب و کار اینترنتی، اصول بازاریابی و رساندن سایت و "},
      ],
      brandarray:[
        { img: require('@/assets/img/brands/Ansee.png') , href:"#"},
        { img: require('@/assets/img/brands/cantonk.png') , href:"#"},
        { img: require('@/assets/img/brands/farahoosh.png') , href:"#"},
        { img: require('@/assets/img/brands/mrsmart.png') , href:"#"},
        { img: require('@/assets/img/brands/starvedia.png') , href:"#"},
        { img: require('@/assets/img/brands/Ansee.png') , href:"#"},

      ],
      value1: "",
      colorx: "success",
    };
  },
  name: "Home",
  components: {
    slider ,
    categoryp ,
    productSlider ,
    courseSlider ,
    contact ,
    singleblog ,
    brands ,
  },
};
</script>
