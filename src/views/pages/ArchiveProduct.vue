<template>
  <div class="archive-product">
    <section class="title-blog">
      <div class="container mx-auto">
        <div class="grid grid-cols-12 gap-30">
          <div class="col-span-12 border-cool-100 border py-7 rounded-lg my-5 ">
            <h1 class="text-center text-xl">عنوان آرشیو</h1>
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
                <h3 class="text-center border-b-2 border-cool-600 pb-3 relative block px-1 lg:px-8 "> جستجو در این دسته </h3>
              </div>
              <div class="content-side text-right mt-5">
                <div class="font-fd my-auto search">
                  <vs-input
                    color="#F97316"
                    icon-after="true"
                    icon-pack="fal"
                    icon="fa-search"
                    placeholder="جستجو ..."
                    :icon-no-border="false"
                    v-model="value1"
                  />
                </div>
              </div>
            </div>
            <div class="right-item p-3 border-cool-100 border rounded-lg relative mb-4">
              <div class="title-sidebar relative"> 
                <h3 class="text-center border-b-2 border-cool-600 pb-3 relative block px-1 lg:px-8  "> محصولات </h3>
              </div>
              <div class="content-side text-right mt-5">
                <vs-checkbox class="text-sm text-cool-600 mb-1" icon-pack="fal" icon=" fa-check" v-model="checkBox1" >کالاها</vs-checkbox>
                <vs-checkbox class="text-sm text-cool-600 mb-1" icon-pack="fal" icon=" fa-check" v-model="checkBox1" >دوره ها</vs-checkbox>
              </div>
            </div>
            <div class="right-item p-3 border-cool-100 border rounded-lg relative mb-4">
              <div class="title-sidebar relative"> 
                <h3 class="text-center border-b-2 border-cool-600 pb-3 relative block px-1 lg:px-8  "> دسته بندی ها </h3>
              </div>
              <div class="content-side text-right mt-5">
                <vs-checkbox class="text-sm text-cool-600 mb-1" icon-pack="fal" icon=" fa-check" v-model="checkBox1" >تجهیزات مخابراتی</vs-checkbox>
                <vs-checkbox class="text-sm text-cool-600 mb-1" icon-pack="fal" icon=" fa-check" v-model="checkBox1" > تجهیزات شبکه ای</vs-checkbox>
              </div>
            </div>
            <div class="right-item p-3 border-cool-100 border rounded-lg relative mb-4">
              <div class="title-sidebar relative"> 
                <h3 class="text-center border-b-2 border-cool-600 pb-3 relative block px-1 lg:px-8  ">زیر دسته تجهیزات مخابراتی</h3>
              </div>
              <div class="content-side text-right mt-5">
                <vs-checkbox class="text-sm text-cool-600 mb-1" icon-pack="fal" icon=" fa-check" v-model="checkBox1" >مخابرات یک</vs-checkbox>
                <vs-checkbox class="text-sm text-cool-600 mb-1" icon-pack="fal" icon=" fa-check" v-model="checkBox1" >دوم مخابراتی</vs-checkbox>
                <vs-checkbox class="text-sm text-cool-600 mb-1" icon-pack="fal" icon=" fa-check" v-model="checkBox1" >مخابرات یک</vs-checkbox>
                <vs-checkbox class="text-sm text-cool-600 mb-1" icon-pack="fal" icon=" fa-check" v-model="checkBox1" >دوم مخابراتی</vs-checkbox>
                <vs-checkbox class="text-sm text-cool-600 mb-1" icon-pack="fal" icon=" fa-check" v-model="checkBox1" >مخابرات یک</vs-checkbox>
                <vs-checkbox class="text-sm text-cool-600 mb-1" icon-pack="fal" icon=" fa-check" v-model="checkBox1" >دوم مخابراتی</vs-checkbox>
              
              </div>
            </div>
            <div class="right-item p-3 border-cool-100 border rounded-lg relative mb-4">
              <div class="title-sidebar relative"> 
                <h3 class="text-center border-b-2 border-cool-600 pb-3 relative block px-1 lg:px-8  "> برندها </h3>
              </div>
              <div class="content-side text-right mt-5">
                <vs-checkbox class="text-sm text-cool-600 mb-1" icon-pack="fal" icon=" fa-check" v-model="checkBox1" >سامسونگ</vs-checkbox>
                <vs-checkbox class="text-sm text-cool-600 mb-1" icon-pack="fal" icon=" fa-check" v-model="checkBox1" >ال جی</vs-checkbox>
                <vs-checkbox class="text-sm text-cool-600 mb-1" icon-pack="fal" icon=" fa-check" v-model="checkBox1" >سامسونگ</vs-checkbox>
                <vs-checkbox class="text-sm text-cool-600 mb-1" icon-pack="fal" icon=" fa-check" v-model="checkBox1" >دلند</vs-checkbox>
                <vs-checkbox class="text-sm text-cool-600 mb-1" icon-pack="fal" icon=" fa-check" v-model="checkBox1" >اسمارت</vs-checkbox>
                <vs-checkbox class="text-sm text-cool-600 mb-1" icon-pack="fal" icon=" fa-check" v-model="checkBox1" >تی سی ال</vs-checkbox>
                <vs-checkbox class="text-sm text-cool-600 mb-1" icon-pack="fal" icon=" fa-check" v-model="checkBox1" >اسوس</vs-checkbox>
                <vs-checkbox class="text-sm text-cool-600 mb-1" icon-pack="fal" icon=" fa-check" v-model="checkBox1" >اچ پی </vs-checkbox>
             
              </div>
            </div>

          </div>
          <div class="left-box col-span-12 md:col-span-8 lg:col-span-9 p-3 border-cool-100 border rounded-lg">
            <div class="order-area mb-5">
              <h4 class="inline-block text-cool-500 font-medium md:text-xs lg:text-base">مرتب سازی براساس :</h4>
              <a class="inline-block px-1 lg:px-3 py-1 mx-1 text-cool-700 font-thin md:text-xs lg:text-sm bg-ff rounded-lg hover:bg-orange-400 hover:text-cool-50" href="">گران ترین</a>
              <a class="inline-block px-1 lg:px-3 py-1 mx-1 text-cool-700 font-thin md:text-xs lg:text-sm bg-ff rounded-lg hover:bg-orange-400 hover:text-cool-50" href="">ارزان ترین</a>
              <a class="inline-block px-1 lg:px-3 py-1 mx-1 text-cool-700 font-thin md:text-xs lg:text-sm bg-ff rounded-lg hover:bg-orange-400 hover:text-cool-50" href="">محبوب ترین</a>
              <a class="inline-block px-1 lg:px-3 py-1 mx-1 text-cool-700 font-thin md:text-xs lg:text-sm bg-ff rounded-lg hover:bg-orange-400 hover:text-cool-50" href="">پرفروش ترین</a>
            </div>
            <div class="itemes-area">
              <div class="grid grid-cols-12 gap-5">
                <div class="col-span-6 lg:col-span-4 ">
                  <div class="item-pro border border-cool-100 rounded-lg p-2 relative block">
                    <div class="saving absolute z-10">
                      <vs-button
                      class="save-product"
                      color="#D1D5DB"
                      type="flat"
                      icon-pack="fal"
                      icon=" fa-bookmark"
                      ></vs-button>
                    </div>
                    <div class="img-product mb-4">
                        <a class="img-thum" href="#">
                          <img class="rounded-lg  mx-auto" src="@/assets/img/product/02.png" alt="" />
                        </a>
                    </div>
                    <div class="title-product h-12 overflow-hidden">
                      <a href="">
                        <h3 class="text-sm mt-1 text-cool-600 text-center font-bold">آموزش صفرتاصد طراحی سایت</h3>
                      </a>
                    </div>
                    <div class="null-stock px-4 mt-2 h-16">
                      <p
                        class="tag-stock text-center m-auto text-cool-400 relative top-3"
                      >
                      نــــاموجود
                      </p>
                    </div>                 
                  </div>
                </div>
                
                <div class="col-span-6 lg:col-span-4 ">
                  <div class="item-pro border border-cool-100 rounded-lg p-2 relative block">
                    <div class="saving absolute z-10">
                      <vs-button
                      class="save-product"
                      color="#D1D5DB"
                      type="flat"
                      icon-pack="fal"
                      icon=" fa-bookmark"
                      ></vs-button>
                    </div>
                    <div class="img-product mb-4">
                        <a class="img-thum" href="#">
                          <img class="rounded-lg mx-auto" src="@/assets/img/product/img-p02.jpg" alt="" />
                        </a>
                    </div>
                    <div class="title-product h-12 overflow-hidden">
                      <a href="">
                        <h3 class="text-sm mt-1 text-cool-600 text-center font-bold">آموزش صفرتاصد طراحی سایت</h3>
                      </a>
                    </div>
                    <div class="price-product px-4 mt-2 h-16 ltr">
                      <div class="price-old">
                        <span
                          class="value-discount bg-red-600 text-cool-50 text-sm px-2 rounded-xl"
                        >
                          50%</span
                        >
                        <del
                          class="value-old text-sm text-cool-400 line-through mx-1"
                        >
                          130,000</del
                        >
                      </div>
                      <div class="price-new">
                        <div class="price-new-area relative">
                          <span class="unit-price text-xs absolute top-1 left-0"
                            >تومان</span
                          >
                          <ins class="text-base font-medium ml-9">121,000</ins>
                        </div>
                      </div>
                    </div>               
                  </div>
                </div>

                <div class="col-span-6 lg:col-span-4 ">
                  <div class="item-pro border border-cool-100 rounded-lg p-2 relative block">
                    <div class="saving absolute z-10">
                      <vs-button
                      class="save-product"
                      color="#D1D5DB"
                      type="flat"
                      icon-pack="fal"
                      icon=" fa-bookmark"
                      ></vs-button>
                    </div>
                    <div class="img-product mb-4">
                        <a class="img-thum" href="#">
                          <img class="rounded-lg mx-auto" src="@/assets/img/product/img-p02.jpg" alt="" />
                        </a>
                    </div>
                    <div class="title-product h-12 overflow-hidden">
                      <a href="">
                        <h3 class="text-sm mt-1 text-cool-600 text-center font-bold">آموزش صفرتاصد طراحی سایت</h3>
                      </a>
                    </div>
                    
                    <div class="price-product px-4 mt-2 h-16 ">
                      <div class="price-final text-center">
                        <div class="area-price relative top-3">
                          <ins class="text-base font-medium before-toman">120000</ins>
                        </div>
                      </div>
                    </div>              
                  </div>
                </div>

                 <div class="col-span-6 lg:col-span-4 ">
                  <div class="item-pro border border-cool-100 rounded-lg p-2 relative block">
                    <div class="saving absolute z-10">
                      <vs-button
                      class="save-product"
                      color="#D1D5DB"
                      type="flat"
                      icon-pack="fal"
                      icon=" fa-bookmark"
                      ></vs-button>
                    </div>
                    <div class="img-product mb-4">
                        <a class="img-thum" href="#">
                          <img class="rounded-lg mx-auto" src="@/assets/img/product/img-p02.jpg" alt="" />
                        </a>
                    </div>
                    <div class="title-product h-12 overflow-hidden">
                      <a href="">
                        <h3 class="text-sm mt-1 text-cool-600 text-center font-bold">آموزش صفرتاصد طراحی سایت</h3>
                      </a>
                    </div>
                    
                    <div class="show-product text-center px-1 lg:px-4 h-16 ">
                      <vs-button
                        class="show-product-btn text-sm"
                        color="#F97316"
                        type="border"
                        href="#"
                      >
                        مشاهـــــده جزئیات</vs-button
                      >
                    </div>            
                  </div>
                </div>

               
              </div>
            </div>
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
.before-toman:after{
  content: "تومان";
  margin-right: 5px;
  font-size: 12px;
}
.img-product{
  border: 1px solid #eee;
  border-radius: 8px;
}
.item-pro:hover{
  transform: translateY(-5px);
  @apply shadow-lg;
}
.vs-pagination--mb{
  justify-content: center !important;
}
.archive-product .img-product img{
  max-height: 159px;
  max-width: 100%;
}
</style>
<script>
export default {
  data() {
    return {
      colorx:'#F97316',
      currentx: 5 ,
    };
  },
  
  components: {
    
  },
};
</script>