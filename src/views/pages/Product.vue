<template>
  <div class="single-product-page mt-2">
    <section class="landing-product">
      <div class="container mx-auto">
        <div class="grid grid-cols-12 gap-30">
          <div class="col-span-12 md:col-span-12 lg:col-span-9 grid grid-cols-11 gap-30">
            <div class="col-span-11 md:col-span-5 lg:col-span-5 relative">

              <div class="breadcumb text-sm mb-2">
                <vs-breadcrumb color="#eee" :items="breadcrumbItems"/>
              </div>
              <vs-button
                class="save-product save-product-s"
                color="#D1D5DB"
                type="flat"
                icon-pack="fal"
                icon=" fa-bookmark"
              ></vs-button>
              <div class="gallery-product ltr">
                <carousel
                  :navText="['','']"
                  :items="1"
                  :autoplayHoverPause="true"
                  :autoplay="false"
                  :nav="true"
                  :margin="30"
                  :loop="false"
                  :dots="false"
                >

                  <img src="@/assets/img/product/img-p01.jpg"/>
                  <img src="@/assets/img/product/img-p02.jpg"/>
                  <img src="@/assets/img/product/img-p02.jpg"/>

                </carousel>
              </div>
            </div>
            <div class="col-span-11 md:col-span-6 lg:col-span-6">
              <product/>
            </div>
            <div class=" sidebar-product md:hidden col-span-full lg:hidden rounded-lg border border-cool-200 p-3 lg:mt-14">
              <sidbar/>
            </div>
            <div class="col-span-11 md:col-span-11 lg:col-span-11">
              <div class="tab-area">
                <vs-tabs :color="colorx" position="top">
                  <vs-tab @click="colorx = '#EF4444'" label="مشخصات">
                    <div class="con-tab-ejemplo">
                      <detail/>
                    </div>
                  </vs-tab>
                  <vs-tab label="نقد و بررسی">
                    <div class="con-tab-ejemplo">
                      نقد و بررسی
                    </div>
                  </vs-tab>
                  <vs-tab label="نظرات شما">
                    <div class="con-tab-ejemplo">
                      <div class="grid grid-cols-12 gap-30 text-cool-600">
                        <div class="col-span-12 md:col-span-7">
                          <comments/>
                        </div>
                        <div class="col-span-12 md:col-span-5">
                        <formcomment/>
                        </div>
                      </div>

                    </div>
                  </vs-tab>
                </vs-tabs>
              </div>
            </div>
          </div>
          <div class="hidden md:block md:col-span-12 lg:col-span-3">
            <div class="sidebar-product rounded-lg border border-cool-200 p-3 lg:mt-14 sticky top-5">
              <sidbar/>
            </div>

          </div>
        </div>

      </div>
    </section>
  </div>
</template>
<script>
  import carousel from "vue-owl-carousel";
  import sidbar from "../../components/product/sidbar"
  import Product from "../../components/product/product";
  import Detail from "../../components/product/detail";
  import Comments from "../../components/product/comments";
  import Formcomment from "../../components/productd/formcomment";

  export default {
    data() {
      return {
        popupActivo: false,
        number1: 1,
        colorx: '#EF4444',
        breadcrumbItems:[
          {'title' : 'صفحه اصلی' , 'link':'#/' , 'active' : false , 'disabled':false},
          {'title' : 'محصولات' , 'link':'#/' , 'active' : false , 'disabled':false},
          {'title' : 'الکتریکی' , 'link':'#/' , 'active' : true , 'disabled':false},
          ]
      };
    },
    name: "Home",
    components: {
      Formcomment,
      Comments,
      Detail,
      Product,
      sidbar,
      carousel,
    },
  };
</script>
