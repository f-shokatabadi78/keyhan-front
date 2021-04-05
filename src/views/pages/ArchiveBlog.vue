<template>
  <div class="archive-blog">
    <section class="title-blog">
      <div class="container mx-auto">
        <div class="grid grid-cols-12 gap-30">
          <div class="col-span-12 border-cool-100 border py-7 rounded-lg my-5 ">
            <h1 class="text-center text-xl">عنوان بلاگ</h1>
              <div class="breadcumb text-sm text-center mx-auto">
                <vs-breadcrumb color="#eee" align="center">
                  <li>
                    <a href="#" title="Home">صفحه اصلی</a
                    ><span class="vs-breadcrum--separator">/</span>
                  </li>
                  <li>
                    <a href="#" title="blogcat">دانشنامه</a
                    >
                  </li>
                </vs-breadcrumb>
              </div>
          </div>
        </div>
      </div>
    </section>
    <section class="archive-area">
      <div class="container mx-auto">
        <div class="grid grid-cols-12 gap-5">
          <div class="right-box col-span-12 md:col-span-4 lg:col-span-3 relative">
            <div class="right-item p-3 border-cool-100 border rounded-lg relative mb-4">
              <div class="title-sidebar relative"> 
                <h3 class="text-center border-b-2 border-cool-600 pb-3 relative block px-2 lg:px-8 "> دسته بندی ها </h3>
              </div>
              <div class="content-side text-right mt-5">
                <vs-checkbox class="text-sm text-cool-600 mb-1" icon-pack="fal" icon=" fa-check" v-model="checkBox1" >تجهیزات مخابراتی</vs-checkbox>
                <vs-checkbox class="text-sm text-cool-600 mb-1" icon-pack="fal" icon=" fa-check" v-model="checkBox1" > تجهیزات شبکه ای</vs-checkbox>
              </div>
            </div>
          </div>
          <div class="left-box col-span-12 md:col-span-8 lg:col-span-9 p-3 border-cool-100 border rounded-lg">
            <singleblog :singleblogprops="blogarray"></singleblog>
            <div class="paganition mt-5 mx-auto">
              <vs-pagination max="6" :total="6" icon-pack="fal" 
              prev-icon="fa-arrow-right" next-icon="fa-arrow-left" :color="colorx" v-model="currentx"></vs-pagination>
            </div>
          </div>


        </div>
      </div>
    </section>
  </div>
</template>
<style>
.title-sidebar h3::before{
  content: "";
  height: 2px;
  width: 80%;
  background-color: #1f2937;
  position: absolute;
  bottom: -6px;
  right: 15px;
  left: 15px;
  margin: auto;
}
.content-side .con-vs-checkbox{
  justify-content: right !important;
}
.vs-pagination--mb{
  justify-content: center !important;
}
</style>
<script>
import singleblog from "../../components/Home/single-blog.vue";
export default {
  data() {
    return {
      colorx:'#F97316',
      currentx: 5 ,

      blogarray:[
        { responsivMd:"6" ,responsivLg:"4" , img: require('@/assets/img/product/03.png') ,title:"  ۰ تا ۱۰۰ آموزش کسب و کار اینترنتی، دوره جامع وبمستران هوشمند " ,href:"#" ,desc:" آموزش جامع ساخت و مدیریت کسب و کار اینترنتی، اصول بازاریابی و رساندن سایت و "},
        { responsivMd:"6" ,responsivLg:"4" ,img: require('@/assets/img/product/03.png') ,title:"  ۰ تا ۱۰۰ آموزش کسب و کار اینترنتی، دوره جامع وبمستران هوشمند " ,href:"#" ,desc:" آموزش جامع ساخت و مدیریت کسب و کار اینترنتی، اصول بازاریابی و رساندن سایت و "},
        { responsivMd:"6" ,responsivLg:"4" ,img: require('@/assets/img/product/03.png') ,title:"  ۰ تا ۱۰۰ آموزش کسب و کار اینترنتی، دوره جامع وبمستران هوشمند " ,href:"#" ,desc:" آموزش جامع ساخت و مدیریت کسب و کار اینترنتی، اصول بازاریابی و رساندن سایت و "},
        { responsivMd:"6" ,responsivLg:"4" ,img: require('@/assets/img/product/03.png') ,title:"  ۰ تا ۱۰۰ آموزش کسب و کار اینترنتی، دوره جامع وبمستران هوشمند " ,href:"#" ,desc:" آموزش جامع ساخت و مدیریت کسب و کار اینترنتی، اصول بازاریابی و رساندن سایت و "},
      ],

    };
  },
  components: {

    singleblog ,
  },
};
</script>
