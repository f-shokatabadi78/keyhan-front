<template>
  <div class="home-page">
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
    <section class="ctg-services py-10 lg:py-20 relative">
      <div class="container mx-auto">
        <div class="grid grid-cols-12 gap-30">
          <div class="col-span-6 md:col-span-4  lg:col-span-2 items-category text-center lg:mt-20">
            <a class="link-cat" href="">
              <div
                class="item-category bg-ff shadow-my rounded-lg text-center px-4 py-8"
              >
                <img
                  class="inline-block"
                  src="@/assets/img/technology.svg"
                  alt=""
                />
                <h4 class="text-sm font-bold text-cool-600 mt-5">
                  تجهیزات شبکه ای
                </h4>
              </div>
            </a>
          </div>
          <div class="col-span-6 md:col-span-4 lg:col-span-2 item-category text-center lg:mt-10">
            <a class="link-cat" href="">
              <div
                class="item-category bg-ff shadow-my rounded-lg text-center px-4 py-8"
              >
                <img
                  class="inline-block"
                  src="@/assets/img/transmitting.svg"
                  alt=""
                />
                <h4 class="text-sm font-bold text-cool-600 mt-5">
                  تجهیزات مخابراتی
                </h4>
              </div>
            </a>
          </div>
          <div class="col-span-6 md:col-span-4 lg:col-span-2 item-category text-center">
            <a class="link-cat" href="">
              <div
                class="item-category bg-ff shadow-my rounded-lg text-center px-4 py-8"
              >
                <img
                  class="inline-block"
                  src="@/assets/img/electrical-panel.svg"
                  alt=""
                />
                <h4 class="text-sm font-bold text-cool-600 mt-5">
                  تجهیزات برق صنعتی
                </h4>
              </div>
            </a>
          </div>
          <div class="col-span-6 md:col-span-4  lg:col-span-2 item-category text-center">
            <a class="link-cat" href="">
              <div
                class="item-category bg-ff shadow-my rounded-lg text-center px-4 py-8"
              >
                <img
                  class="inline-block"
                  src="@/assets/img/power-plant.svg"
                  alt=""
                />
                <h4 class="text-sm font-bold text-cool-600 mt-5">
                  تجهیزات برق ساختمان
                </h4>
              </div>
            </a>
          </div>
          <div class="col-span-6 md:col-span-4 lg:col-span-2 item-category text-center lg:mt-10">
            <a class="link-cat" href="">
              <div
                class="item-category bg-ff shadow-my rounded-lg text-center px-4 py-8"
              >
                <img
                  class="inline-block"
                  src="@/assets/img/smarthouse.svg"
                  alt=""
                />
                <h4 class="text-sm font-bold text-cool-600 mt-5">
                  تجهیزات خانه هوشمند
                </h4>
              </div>
            </a>
          </div>
          <div class="col-span-6 md:col-span-4 lg:col-span-2 item-category text-center lg:mt-20">
            <a class="link-cat" href="">
              <div
                class="item-category bg-ff shadow-my rounded-lg text-center px-4 py-8"
              >
                <img
                  class="inline-block"
                  src="@/assets/img/energy.svg"
                  alt=""
                />
                <h4 class="text-sm font-bold text-cool-600 mt-5">
                  انـــرژی های پاک
                </h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="brands-row">
      <div class="container mx-auto">
        <div class="grid grid-cols-12 gap-4 md:gap-30">
          <div class="col-span-4 md:col-span-4 lg:col-span-2">
            <a class="brands-item" href="">
              <img
                class="rounded-lg border border-cool-100 border-solid shadow-my"
                src="@/assets/img/brands/Ansee.png"
                alt=""
              />
            </a>
          </div>
          <div class="col-span-4 md:col-span-4 lg:col-span-2">
            <a class="brands-item" href="">
              <img
                class="rounded-lg border border-cool-100 border-solid shadow-my"
                src="@/assets/img/brands/cantonk.png"
                alt=""
              />
            </a>
          </div>
          <div class="col-span-4 md:col-span-4 lg:col-span-2">
            <a class="brands-item" href="">
              <img
                class="rounded-lg border border-cool-100 border-solid shadow-my"
                src="@/assets/img/brands/farahoosh.png"
                alt=""
              />
            </a>
          </div>
          <div class="col-span-4 md:col-span-4 lg:col-span-2">
            <a class="brands-item" href="">
              <img
                class="rounded-lg border border-cool-100 border-solid shadow-my"
                src="@/assets/img/brands/mrsmart.png"
                alt=""
              />
            </a>
          </div>
          <div class="col-span-4 md:col-span-4 lg:col-span-2">
            <a class="brands-item" href="">
              <img
                class="rounded-lg border border-cool-100 border-solid shadow-my"
                src="@/assets/img/brands/Ansee.png"
                alt=""
              />
            </a>
          </div>
          <div class="col-span-4 md:col-span-4 lg:col-span-2">
            <a class="brands-item" href="">
              <img
                class="rounded-lg border border-cool-100 border-solid shadow-my"
                src="@/assets/img/brands/starvedia.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </section>
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
              <div
                class="item-product border border-cool-100 rounded-lg hover:shadow-xl mb-10 mt-2"
              >
                <vs-button
                  class="save-product"
                  color="#D1D5DB"
                  type="flat"
                  icon-pack="fal"
                  icon=" fa-bookmark"
                ></vs-button>
                <div class="img-product">
                  <a class="img-thum" href="">
                    <img src="@/assets/img/product/img-p01.jpg" alt="" />
                  </a>
                </div>
                <div class="title-product px-2 mb-4">
                  <a
                    class="title-p text-cool-800 hover:text-orange-600"
                    href=""
                  >
                    <h3 class="text-center font-black text-sm">
                      دوربین مداربسته تحت شبکه شیائومی مدل IMICMSXJ13B
                    </h3>
                  </a>
                </div>
                <div class="price-product px-4 pb-4 h-16 ">
                  <div class="price-old">
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
              </div>
              <div
                class="item-product border border-cool-100 rounded-lg hover:shadow-xl mb-10 mt-2"
              >
                <vs-button
                  class="save-product absolute"
                  color="#D1D5DB"
                  type="flat"
                  icon-pack="fal"
                  icon=" fa-bookmark"
                ></vs-button>
                <div class="img-product">
                  <a class="img-thum" href="">
                    <img src="@/assets/img/product/img-p01.jpg" alt="" />
                  </a>
                </div>
                <div class="title-product px-2 mb-4">
                  <a
                    class="title-p text-cool-800 hover:text-orange-600"
                    href=""
                  >
                    <h3 class="text-center font-black text-sm">
                      دوربین مداربسته تحت شبکه شیائومی مدل IMICMSXJ13B
                    </h3>
                  </a>
                </div>
                <div class="null-stock px-4 pb-4 h-16 ">
                  <p
                    class="tag-stock text-center m-auto text-cool-400 relative top-3"
                  >
                    نـــاموجود
                  </p>
                </div>
              </div>
              <div
                class="item-product border border-cool-100 rounded-lg hover:shadow-xl mb-10 mt-2"
              >
                <vs-button
                  class="save-product"
                  color="#D1D5DB"
                  type="flat"
                  icon-pack="fal"
                  icon=" fa-bookmark"
                ></vs-button>
                <div class="img-product">
                  <a class="img-thum" href="">
                    <img src="@/assets/img/product/img-p01.jpg" alt="" />
                  </a>
                </div>
                <div class="title-product px-2 mb-4">
                  <a
                    class="title-p text-cool-800 hover:text-orange-600"
                    href=""
                  >
                    <h3 class="text-center font-black text-sm">
                      دوربین مداربسته تحت شبکه شیائومی مدل IMICMSXJ13B
                    </h3>
                  </a>
                </div>
                <div class="price-product px-4 pb-4 h-16 ">
                  <div class="price-final text-center pl-4">
                    <div class="area-price relative top-3">
                      <ins class="text-base font-medium ml-5">35,000,000</ins>
                      <span class="unit-price text-xs absolute top-1 left-0 md:left-4 lg:left-7"
                        >تومان</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="item-product border border-cool-100 rounded-lg hover:shadow-xl mb-10 mt-2"
              >
                <vs-button
                  class="save-product"
                  color="#D1D5DB"
                  type="flat"
                  icon-pack="fal"
                  icon=" fa-bookmark"
                ></vs-button>
                <div class="img-product">
                  <a class="img-thum" href="">
                    <img src="@/assets/img/product/img-p01.jpg" alt="" />
                  </a>
                </div>
                <div class="title-product px-2 mb-4">
                  <a
                    class="title-p text-cool-800 hover:text-orange-600"
                    href=""
                  >
                    <h3 class="text-center font-black text-sm">
                      دوربین مداربسته تحت شبکه شیائومی مدل IMICMSXJ13B
                    </h3>
                  </a>
                </div>
                <div class="show-product text-center px-4 pb-4 h-16 ">
                  <vs-button
                    class="show-product-btn text-sm"
                    color="#F97316"
                    type="border"
                  >
                    مشاهـــــده جزئیات</vs-button
                  >
                </div>
              </div>
              <div
                class="item-product border border-cool-100 rounded-lg hover:shadow-xl mb-10 mt-2"
              >
                <vs-button
                  class="save-product"
                  color="#D1D5DB"
                  type="flat"
                  icon-pack="fal"
                  icon=" fa-bookmark"
                ></vs-button>
                <div class="img-product">
                  <a class="img-thum" href="">
                    <img src="@/assets/img/product/img-p01.jpg" alt="" />
                  </a>
                </div>
                <div class="title-product px-2 mb-4">
                  <a
                    class="title-p text-cool-800 hover:text-orange-600"
                    href=""
                  >
                    <h3 class="text-center font-black text-sm">
                      دوربین مداربسته تحت شبکه شیائومی مدل IMICMSXJ13B
                    </h3>
                  </a>
                </div>
                <div class="price-product px-4 pb-4 h-16 ">
                  <div class="price-old">
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
              </div>
              <div
                class="item-product border border-cool-100 rounded-lg hover:shadow-xl mb-10 mt-2"
              >
                <vs-button
                  class="save-product"
                  color="#D1D5DB"
                  type="flat"
                  icon-pack="fal"
                  icon=" fa-bookmark"
                ></vs-button>
                <div class="img-product">
                  <a class="img-thum" href="">
                    <img src="@/assets/img/product/img-p01.jpg" alt="" />
                  </a>
                </div>
                <div class="title-product px-2 mb-4">
                  <a
                    class="title-p text-cool-800 hover:text-orange-600"
                    href=""
                  >
                    <h3 class="text-center font-black text-sm">
                      دوربین مداربسته تحت شبکه شیائومی مدل IMICMSXJ13B
                    </h3>
                  </a>
                </div>
                <div class="price-product px-4 pb-4 h-16 ">
                  <div class="price-old">
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
              </div>
            </carousel>
          </div>
        </div>
      </div>
    </section>
    <section class="title-section mt-24 relative">
      <div class="container mx-auto">
        <div class=" grid grid-cols-2 gap-30">
          <div class="col-span-1">
            <h3
              class="title-border relative text-xl font-black text-cool-800 inline-block border-b-2 border-cool-600 pb-2 pl-5 "
            >
              آخرین آموزش ها
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
                  <a class="img-thum" href="">
                    <img src="@/assets/img/product/02.png" alt="" />
                  </a>
                </div>
                <div class="title-course px-4 my-4 h-13 overflow-hidden">
                  <a class="title-p text-cool-800" href="">
                    <h3 class="text-right font-black text-sm">
                      ۰ تا ۱۰۰ آموزش کسب و کار اینترنتی، دوره جامع وبمستران
                      هوشمند
                    </h3>
                  </a>
                </div>
                <div class="des-course px-4 pb-4 h-15 overflow-hidden ">
                  <p class="text-xs text-cool-600 font-thin text-right">
                    آموزش جامع ساخت و مدیریت کسب و کار اینترنتی، اصول بازاریابی
                    و رساندن سایت و
                  </p>
                </div>
              </div>
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
                  <a class="img-thum" href="">
                    <img src="@/assets/img/product/02.png" alt="" />
                  </a>
                </div>
                <div class="title-course px-4 my-4 h-13 overflow-hidden">
                  <a class="title-p text-cool-800" href="">
                    <h3 class="text-right font-black text-sm">
                      ۰ تا ۱۰۰ آموزش کسب و کار اینترنتی، دوره جامع وبمستران
                      هوشمند
                    </h3>
                  </a>
                </div>
                <div class="des-course px-4 pb-4 h-15 overflow-hidden ">
                  <p class="text-xs text-cool-600 font-thin text-right">
                    آموزش جامع ساخت و مدیریت کسب و کار اینترنتی، اصول بازاریابی
                    و رساندن سایت و
                  </p>
                </div>
              </div>
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
                  <a class="img-thum" href="">
                    <img src="@/assets/img/product/02.png" alt="" />
                  </a>
                </div>
                <div class="title-course px-4 my-4 h-13 overflow-hidden">
                  <a class="title-p text-cool-800" href="">
                    <h3 class="text-right font-black text-sm">
                      ۰ تا ۱۰۰ آموزش کسب و کار اینترنتی، دوره جامع وبمستران
                      هوشمند
                    </h3>
                  </a>
                </div>
                <div class="des-course px-4 pb-4 h-15 overflow-hidden ">
                  <p class="text-xs text-cool-600 font-thin text-right">
                    آموزش جامع ساخت و مدیریت کسب و کار اینترنتی، اصول بازاریابی
                    و رساندن سایت و
                  </p>
                </div>
              </div>
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
                  <a class="img-thum" href="">
                    <img src="@/assets/img/product/02.png" alt="" />
                  </a>
                </div>
                <div class="title-course px-4 my-4 h-13 overflow-hidden">
                  <a class="title-p text-cool-800" href="">
                    <h3 class="text-right font-black text-sm">
                      ۰ تا ۱۰۰ آموزش کسب و کار اینترنتی، دوره جامع وبمستران
                      هوشمند
                    </h3>
                  </a>
                </div>
                <div class="des-course px-4 pb-4 h-15 overflow-hidden ">
                  <p class="text-xs text-cool-600 font-thin text-right">
                    آموزش جامع ساخت و مدیریت کسب و کار اینترنتی، اصول بازاریابی
                    و رساندن سایت و
                  </p>
                </div>
              </div>
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
                  <a class="img-thum" href="">
                    <img src="@/assets/img/product/02.png" alt="" />
                  </a>
                </div>
                <div class="title-course px-4 my-4 h-13 overflow-hidden">
                  <a class="title-p text-cool-800" href="">
                    <h3 class="text-right font-black text-sm">
                      ۰ تا ۱۰۰ آموزش کسب و کار اینترنتی، دوره جامع وبمستران
                      هوشمند
                    </h3>
                  </a>
                </div>
                <div class="des-course px-4 pb-4 h-15 overflow-hidden ">
                  <p class="text-xs text-cool-600 font-thin text-right">
                    آموزش جامع ساخت و مدیریت کسب و کار اینترنتی، اصول بازاریابی
                    و رساندن سایت و
                  </p>
                </div>
              </div>
              
              
            </carousel>
          </div>
        </div>
      </div>
    </section>
    <section class="contact-row">
      <div class="container mx-auto">
        <div
          class="grid grid-cols-12 gap-30 border-cool-100 border shadow-xl rounded-lg"
        >
          <div class="col-span-12 md:col-span-6 p-4">
            <h3 class="font-bold text-xl md:text-2xl">
              سوال دارم و میخوام با شما مشورت کنم
            </h3>
            <p class="font-thin text-xs md:text-base mt-2">
              :)برای اینکه بتونیم کمکت کنیم فرم زیر رو پر کن ،در اسرع وقت باهات
              تماس میگیریم
            </p>
            <div class="form-contact">
              <vs-input
                class="contactform mt-6"
                placeholder="نام و نام خانوادگی"
                v-model="value1"
                size="small"
              />
               <vs-input
                class="contactform mt-3"
                placeholder="شماره تماس شما"
                v-model="value1"
                size="small"
              />
               <vs-input
              class="contactform mt-3"
                placeholder="موضوع مورد سوال شما"
                v-model="value1"
                size="small"
              />
               <div class="mt-3 text-sm">
                <vs-button color="#F97316" type="filled">ثبت درخواست شما</vs-button>

               </div>
            </div>
          </div>
          <div class="col-span-12 md:col-span-6 bg-contact rounded-t-lg rounded-l-lg relative"></div>
        </div>
      </div>
    </section>
    <section class="title-section mt-24 mb-8 relative">
      <div class="container mx-auto">
        <div class=" grid grid-cols-2 gap-30">
          <div class="col-span-2">
            <h3
              class="title-border relative text-xl font-black text-cool-800 inline-block border-b-2 border-cool-600 pb-2 pl-5 "
            >
              وبـــلاگ
            </h3>
          </div>
         
        </div>
      </div>
    </section>
    <section class="blog-row">
      <div class="container mx-auto">
        <div class="grid grid-cols-12 gap-5 md:gap-30">
              <article
                class="col-span-6 md:col-span-4 lg:col-span-3 overflow-hidden item-blog border border-cool-100 rounded-lg hover:shadow-xl"
              >
                <div class="img-blog">
                  <a class="img-thum" href="">
                    <img src="@/assets/img/product/02.png" alt="" />
                  </a>
                </div>
                <div class="title-blog px-4 my-4 h-13 overflow-hidden">
                  <a class="title-blog text-cool-800" href="">
                    <h3 class="text-right font-black text-sm">
                      ۰ تا ۱۰۰ آموزش کسب و کار اینترنتی، دوره جامع وبمستران
                      هوشمند
                    </h3>
                  </a>
                </div>
                <div class="des-course px-4 pb-4 h-15 overflow-hidden ">
                  <p class="text-xs text-cool-600 font-thin text-right">
                    آموزش جامع ساخت و مدیریت کسب و کار اینترنتی، اصول بازاریابی
                    و رساندن سایت و
                  </p>
                </div>
              </article>
              <article
                class="col-span-6 md:col-span-4 lg:col-span-3 overflow-hidden item-blog border border-cool-100 rounded-lg hover:shadow-xl"
              >
                <div class="img-blog">
                  <a class="img-thum" href="">
                    <img src="@/assets/img/product/02.png" alt="" />
                  </a>
                </div>
                <div class="title-blog px-4 my-4 h-13 overflow-hidden">
                  <a class="title-blog text-cool-800" href="">
                    <h3 class="text-right font-black text-sm">
                      ۰ تا ۱۰۰ آموزش کسب و کار اینترنتی، دوره جامع وبمستران
                      هوشمند
                    </h3>
                  </a>
                </div>
                <div class="des-course px-4 pb-4 h-15 overflow-hidden ">
                  <p class="text-xs text-cool-600 font-thin text-right">
                    آموزش جامع ساخت و مدیریت کسب و کار اینترنتی، اصول بازاریابی
                    و رساندن سایت و
                  </p>
                </div>
              </article>
              <article
                class="col-span-6 md:col-span-4 lg:col-span-3 overflow-hidden item-blog border border-cool-100 rounded-lg hover:shadow-xl"
              >
                <div class="img-blog">
                  <a class="img-thum" href="">
                    <img src="@/assets/img/product/02.png" alt="" />
                  </a>
                </div>
                <div class="title-blog px-4 my-4 h-13 overflow-hidden">
                  <a class="title-blog text-cool-800" href="">
                    <h3 class="text-right font-black text-sm">
                      ۰ تا ۱۰۰ آموزش کسب و کار اینترنتی، دوره جامع وبمستران
                      هوشمند
                    </h3>
                  </a>
                </div>
                <div class="des-course px-4 pb-4 h-15 overflow-hidden ">
                  <p class="text-xs text-cool-600 font-thin text-right">
                    آموزش جامع ساخت و مدیریت کسب و کار اینترنتی، اصول بازاریابی
                    و رساندن سایت و
                  </p>
                </div>
              </article>
              <article
                class="col-span-6 md:col-span-4 lg:col-span-3 overflow-hidden item-blog border border-cool-100 rounded-lg hover:shadow-xl"
              >
                <div class="img-blog">
                  <a class="img-thum" href="">
                    <img src="@/assets/img/product/02.png" alt="" />
                  </a>
                </div>
                <div class="title-blog px-4 my-4 h-13 overflow-hidden">
                  <a class="title-blog text-cool-800" href="">
                    <h3 class="text-right font-black text-sm">
                      ۰ تا ۱۰۰ آموزش کسب و کار اینترنتی، دوره جامع وبمستران
                      هوشمند
                    </h3>
                  </a>
                </div>
                <div class="des-course px-4 pb-4 h-15 overflow-hidden ">
                  <p class="text-xs text-cool-600 font-thin text-right">
                    آموزش جامع ساخت و مدیریت کسب و کار اینترنتی، اصول بازاریابی
                    و رساندن سایت و
                  </p>
                </div>
              </article>
          
          <div class="col-span-12 text-center">
              <a
                class="more-border relative text-xs lg:text-base font-thin text-cool-700 border-b-2 border-cool-600 pb-3 px-6"
                href=""
              >مشاهـــــده هـــمــــه
              </a>
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
      value1: "",
      colorx: "success",
    };
  },
  name: "Home",
  components: {
    carousel,
  },
};
</script>


