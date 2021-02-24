<template>
  <div class="single-product-page mt-2">
    
    <section class="landing-product">
      <div class="container mx-auto">
        <div class="grid grid-cols-12 gap-30">
          <div class="col-span-12 md:col-span-12 lg:col-span-9 grid grid-cols-11 gap-30">
            <div class="col-span-11 md:col-span-5 lg:col-span-5 relative">
              
              <div class="breadcumb text-sm mb-2">
                  <vs-breadcrumb color="#eee">
                    <li>
                      <a href="#" title="Home">صفحه اصلی</a
                      ><span class="vs-breadcrum--separator">/</span>
                    </li>
                    <li>
                      <a href="#" title="blogcat">محصولات</a
                      ><span class="vs-breadcrum--separator">/</span>
                    </li>
                    <li>
                      <a href="#" title="bargh">برق صنعتی</a
                      >
                    </li>
                  </vs-breadcrumb>
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
                :items="1"
                :autoplayHoverPause="true"
                :autoplay="true"
                :nav="true"
                :margin="30"
                :loop="true"
                :dots="false"
              >
                
                <img src="@/assets/img/product/img-p02.jpg" />
                <img src="@/assets/img/product/img-p02.jpg" />
                <img src="@/assets/img/product/img-p02.jpg" />
                
                
              </carousel>
              </div>
            </div>
            <div class="col-span-11 md:col-span-6 lg:col-span-6">
              <div class="title-single md:mt-12">
                  <h1 class="text-lg font-bold text-cool-600">
                    B13IMICMSXJ دوربین مداربسته تحت شبکه شیائومی مدل
                  </h1>
              </div>
              <div class="custom-field mt-2">
                <div class="cf-item inline-block">
                  <span class="text-sm text-cool-700 font-normal">برند :</span>
                  <a class="text-sm text-cool-500 mr-2 font-thin hover:text-blue-400" href="">مستراسمارت</a>
                </div>
                <div class="cf-item inline-block mr-20">
                  <span class="text-sm text-cool-700 font-normal">دسته بندی :</span>
                  <a class="text-sm mr-2 font-thin text-blue-400" href="">آخرین دسته</a>
                </div>
              </div>
              <div class="specific-row mt-4">
                <h4 class="text-sm text-cool-700 font-normal">انتخاب رنگ : </h4>
                <div class="colors mt-1">
                  <vs-tooltip class="inline-block" text="آبی" position="top">
                    <button class="selected w-6 h-6 border-blue-400 hover:shadow-lg border-4 inline-block rounded-3xl ml-1"></button>
                  </vs-tooltip>
                  <vs-tooltip class="inline-block" text="نارنجی" position="top">
                    <button class="w-6 h-6 border-orange-600 hover:shadow-lg border-4 inline-block rounded-3xl ml-1"></button>
                  </vs-tooltip>
                </div>
              </div>
              <div class="specific-row mt-4">
                <h4 class="text-sm text-cool-700 font-normal">انتخاب طول : </h4>
                <div class="spec-item mt-2">
                  <button class="px-5 py-1 border border-cool-300 focus:border-cool-700 text-cool-500 rounded-lg ml-4">100 متری</button>
                  <button class="px-5 py-1 border border-cool-300 focus:border-cool-700 text-cool-600 rounded-lg ml-4">500 متری</button>
                </div>
              </div>
              <div class="des-product mt-4">
                <h5 class="mb-1">ویژگی ها</h5>
                <ul>
                  <li>رابط‌‌ها: پورت اترنت ، پورت فلاااااان</li>
                  <li>تعداد پورت اترنت : چهار عدد</li>
                  <li>فرکانس قابل پشتیبانی: 2.4 گیگاهرتز</li>
                  <li>تعداد آنتن: دو عدد</li>
                </ul>
              </div>
              <div class="holesale mt-4">
                <h5 class="inline-block"> حداقل مقدار برای محاسبه خرید عمده :</h5>
                <span class="num-holesale text-sm text-blue-400"> 1500 </span>
                <span class="unit-holesale text-sm text-blue-400">متر</span>
              </div>

            </div>
            <div class="sidebar-product md:hidden col-span-full lg:hidden rounded-lg border border-cool-200 p-3 lg:mt-14">
              <div class="btn-customize block-btn pb-2 border-cool-300 border-dashed border-b">
                <vs-button class="block" @click="popupActivo=true" color="#4B5563" type="border">سفارشی سازی</vs-button>
                <vs-popup class="customize-popup"  title="فرم زیر را پر کنید با شما تماس میگیریم" :active.sync="popupActivo" icon-pack="fal" icon-close="fa-times">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </vs-popup>
              </div>
              <div class="grantee mt-2 pb-2 border-cool-300 border-dashed border-b">
                <figure>
                  <i class="fal fa-check-square ml-3 text-blue-500 text-base"></i>
                  <span class="text-sm text-cool-600 font-thin">گارانتی 2 ساله و توضیح بُلد شما</span>
                </figure>
              </div>
              <div class="send  mt-2 pb-2 border-cool-300 border-dashed border-b">
                <figure>
                  <i class="fal fa-check-square ml-3 text-blue-500 text-base"></i>
                  <span class="text-sm text-cool-600 font-thin">قابل ارسال بعد از 1 هفته</span>
                </figure>
              </div>
               <div class="price-product py-4 h-16 text-left ">
                  <div class="price-old ltr">
                     
                    <span
                      class="value-discount bg-red-600 text-cool-50 text-sm px-2 rounded-xl"
                    >
                      %5</span
                    >
                    <del
                      class="value-old text-sm text-cool-400 line-through mx-1"
                    >
                      54,000,000</del
                    >
                    <span
                      class="value-discount text-cool-600 text-sm font-bold float-right"
                    >
                      قیمت محصول</span
                    >
                  </div>
                  <div class="price-new">
                    <div class="price-new-area relative">
                      <span class="unit-price text-xs absolute top-1 left-0"
                        >تومان</span
                      >
                      <ins class="text-base font-medium ml-9">35,000,000</ins>
                    </div>
                  </div>
                </div>
                <div class="addtocart block-btn mt-4 pb-2 border-cool-300 border-dashed border-b">
                  <vs-button color="var(--cart)">افزودن به سبدخرید</vs-button>
                </div>
                <div class="num-pro mt-4">
                  <p class="text-xs text-cool-500">اگر قصد خرید عمده دارید و یا همکار هستید تعداد را وارد کنید.</p>
                  <div class=" text-center m-auto">
                       <vs-input-number class="ltr" color="var(--dd)" icon-pack="fal" icon-dec="fa-minus" icon-inc="fa-plus" v-model="number1"/>
                  </div>
                </div>
            </div>
            <div class="col-span-11 md:col-span-11 lg:col-span-11">
              <div class="tab-area">
              <vs-tabs :color="colorx" position="top">
                <vs-tab @click="colorx = '#EF4444'" label="مشخصات">
                  <div class="con-tab-ejemplo">
                    <div class="grid grid-cols-5 gap-3">
                      <div class="col-span-2 md:col-span-1 bg-cool-100 px-2 py-2 text-cool-700 text-center rounded-sm text-xs md:text-sm font-black">وزن محصول</div>
                      <div class="col-span-3 md:col-span-4 bg-cool-100 px-2 py-2 text-cool-700 text-right rounded-sm text-xs md:text-sm font-thin">220 تا 230 گرم می باشد</div>
                      <div class="col-span-2 md:col-span-1 bg-cool-100 px-2 py-2 text-cool-700 text-center rounded-sm text-sm font-black">وزن محصول</div>
                      <div class="col-span-3 md:col-span-4 bg-cool-100 px-2 py-2 text-cool-700 text-right rounded-sm text-xs md:text-sm font-thin">220 تا 230 گرم می باشد</div>
                      <div class="col-span-2 md:col-span-1 bg-cool-100 px-2 py-2 text-cool-700 text-center rounded-sm text-xs md:text-sm font-black">وزن محصول</div>
                      <div class="col-span-3 md:col-span-4 bg-cool-100 px-2 py-2 text-cool-700 text-right rounded-sm text-xs md:text-sm font-thin">220 تا 230 گرم می باشد</div>
                      <div class="col-span-2 md:col-span-1 bg-cool-100 px-2 py-2 text-cool-700 text-center rounded-sm text-xs md:text-sm font-black">وزن محصول</div>
                      <div class="col-span-3 md:col-span-4 bg-cool-100 px-2 py-2 text-cool-700 text-right rounded-sm text-xs md:text-sm font-thin">220 تا 230 گرم می باشد</div>
                    </div>
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
                      <div class="comment-item level-1 relative grid md:grid-cols-5 gap-4 rounded-lg bg-cool-100 p-4">
                        <div class="img-comment md:col-span-1">
                          <img class="inline-block rounded-lg" src="@/assets/img/product/avatar.jpg" alt="">
                        </div>
                        <div class="info-comment md:col-span-4">
                          <h5 class="inline-block text-base font-bold">تکتم حیدرزاده</h5>
                          <p class="commment-text text-sm font-thin mt-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و </p>
                          <a class="reply absolute top-3 left-3 text-cool-500 hover:text-orange-500" href=""><i class="fal fa-reply"></i></a>
                        </div>
                      </div>
                      <div class="comment-item level-2 relative grid md:grid-cols-5 gap-4 rounded-lg bg-cool-100 p-4 mr-10 mt-3">
                        <div class="img-comment md:col-span-1">
                          <img class="inline-block rounded-lg" src="@/assets/img/product/avatar.jpg" alt="">
                        </div>
                        <div class="info-comment md:col-span-4">
                          <h5 class="inline-block text-base font-bold">تکتم حیدرزاده</h5>
                          <p class="commment-text text-sm font-thin mt-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و </p>
                          <a class="reply absolute top-3 left-3 text-cool-500 hover:text-orange-500" href=""><i class="fal fa-reply"></i></a>
                        </div>
                      </div>
                      <div class="comment-item level-3 relative grid md:grid-cols-5 gap-4 rounded-lg bg-cool-100 p-4 mr-10 mt-3">
                        <div class="opacity-comment opacity-50 border-cool-400 border-b pb-4 border-dashed col-span-5 grid grid-cols-5 gap-15">
                            <div class="img-comment col-span-1">
                              <img class="inline-block rounded-lg image-comment" src="@/assets/img/product/avatar.jpg" alt="">
                            </div>
                            <div class="info-comment col-span-4">
                              <h5 class="inline-block text-base font-bold">تکتم حیدرزاده</h5>
                              <p class="commment-text text-sm font-thin mt-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و </p>
                            </div>
                        </div>
                        
                        <div class="comment-item relative col-span-5 grid md:grid-cols-5 gap-4 rounded-lg bg-cool-100">
                        <div class="img-comment md:col-span-1">
                          <img class="inline-block rounded-lg" src="@/assets/img/product/avatar.jpg" alt="">
                        </div>
                        <div class="info-comment md:col-span-4">
                          <h5 class="inline-block text-base font-bold">تکتم حیدرزاده</h5>
                          <p class="commment-text text-sm font-thin mt-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و </p>
                          <a class="reply absolute top-0 left-0 text-cool-500 hover:text-orange-500" href=""><i class="fal fa-reply"></i></a>
                        </div>
                      </div>
                        
                      </div>
                      <div class="paganition mt-5 mx-auto">
                            <vs-pagination :total="12" icon-pack="fal" 
                            prev-icon="fa-arrow-right" next-icon="fa-arrow-left" :color="colorx" v-model="currentx"></vs-pagination>
                      </div>
                    </div>
                    <div class="col-span-12 md:col-span-5">
                      <div class="form-contact">
                        <vs-input
                          class="contactform"
                          placeholder="نام و نام خانوادگی"
                          v-model="value1"
                          size="small"
                        />
                        <vs-input
                          class="contactform mt-3"
                          placeholder="پست الکترونیک شما"
                          v-model="value1"
                          size="small"
                        />
                        <vs-textarea  class="contactform mt-3" label="دیدگـــاه شما" height="200px" />
                        <div class="mt-3 text-sm">
                          <vs-button color="#F97316" type="filled">ثبت نظـــر شما</vs-button>
                        </div>
                      </div>
                    
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
              <div class="btn-customize block-btn pb-2 border-cool-300 border-dashed border-b">
                <vs-button class="block" @click="popupActivo=true" color="#4B5563" type="border">سفارشی سازی</vs-button>
                <vs-popup class="customize-popup"  title="فرم زیر را پر کنید با شما تماس میگیریم" :active.sync="popupActivo" icon-pack="fal" icon-close="fa-times">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </vs-popup>
              </div>
              <div class="grantee mt-2 pb-2 border-cool-300 border-dashed border-b">
                <figure>
                  <i class="fal fa-check-square ml-3 text-blue-500 text-base"></i>
                  <span class="text-sm text-cool-600 font-thin">گارانتی 2 ساله و توضیح بُلد شما</span>
                </figure>
              </div>
              <div class="send  mt-2 pb-2 border-cool-300 border-dashed border-b">
                <figure>
                  <i class="fal fa-check-square ml-3 text-blue-500 text-base"></i>
                  <span class="text-sm text-cool-600 font-thin">قابل ارسال بعد از 1 هفته</span>
                </figure>
              </div>
               <div class="price-product py-4 h-16 text-left ">
                  <div class="price-old ltr">
                     
                    <span
                      class="value-discount bg-red-600 text-cool-50 text-sm px-2 rounded-xl"
                    >
                      %5</span
                    >
                    <del
                      class="value-old text-sm text-cool-400 line-through mx-1"
                    >
                      54,000,000</del
                    >
                    <span
                      class="value-discount text-cool-600 text-sm font-bold float-right"
                    >
                      قیمت محصول</span
                    >
                  </div>
                  <div class="price-new">
                    <div class="price-new-area relative">
                      <span class="unit-price text-xs absolute top-1 left-0"
                        >تومان</span
                      >
                      <ins class="text-base font-medium ml-9">35,000,000</ins>
                    </div>
                  </div>
                </div>
                <div class="addtocart block-btn mt-4 pb-2 border-cool-300 border-dashed border-b">
                  <vs-button color="var(--cart)">افزودن به سبدخرید</vs-button>
                </div>
                <div class="num-pro mt-4">
                  <p class="text-xs text-cool-500">اگر قصد خرید عمده دارید و یا همکار هستید تعداد را وارد کنید.</p>
                  <div class=" text-center m-auto">
                       <vs-input-number class="ltr" color="var(--dd)" icon-pack="fal" icon-dec="fa-minus" icon-inc="fa-plus" v-model="number1"/>
                  </div>
                </div>
            </div>
           
          </div>
        </div>
        
      </div>
    </section>
  </div>
</template>
<script>
import carousel from "vue-owl-carousel";
export default {
  data() {
    return {
      popupActivo:false,
      number1:1,
      colorx:'#F97316'
    };
  },
  name: "Home",
  components: {
    carousel,
  },
};
</script>