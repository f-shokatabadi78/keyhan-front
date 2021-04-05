<template>
  <header id="#header" class="header-area">
    <section class="header py-8 bg-cool-50 ">
      <div class="container m-auto">
        <div class="grid grid-cols-12 gap-30">
          <div
            class="col-span-12 md:col-span-2 lg:col-span-1 text-center md:text-right m-auto logo"
          >
            <div class="logo-area">
              <a class="m-auto" href="">
                <img src="../assets/img/logo.svg" alt="لوگو کیهان" />
              </a>
            </div>
          </div>
          <div
            class="col-span-12 md:col-span-5 lg:col-span-5 font-fd my-auto mr-0 lg:mr-5 search"
          >
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
          <div
            class="col-span-12 md:col-span-5 lg:col-span-6 my-auto text-center md:text-left sign"
          >
            <div class="btnlogin inline-block ml-3">
              <a class="btn-border" href="">ورود به حساب کاربری</a>
            </div>
            <div class=" btncart inline-block relative">
              <a
                class="p-2 h-16 w-16 bg-ff border border-cool-100 rounded-lg"
                href="/"
              >
                <span>
                  <i
                    class="fal fa-shopping-cart text-xl text-cool-400 relative top-1"
                  ></i>
                </span>
              </a>
              <span class="num-cart absolute font-fd">6</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="navmenu py-4 border-cool-100 border">
      <div class="container m-auto relative">
        <div class="grid grid-cols-12 gap-30 ">
          <div class="mobile-menu col-span-6 md:hidden mt-1">
            <a class=" px-5 pt-2.5 pb-1.5 bg-cool-600 text-ff rounded-lg md:text-xs lg:text-base " href="#mmenu">
              <i class="text-cool-50 fal fa-bars"></i>
            </a>
            <div id="mmenu" class="content-memu p-5 bg-ff shadow-lg fixed right-0 top-0 z-50 w-10/12 h-screen overflow-y-scroll">
              <a class="close absolute left-5 top-5" href="##header">
                <i class="fal fa-times-circle text-xl text-cool-400 hover:text-cool-600"></i>
              </a>
              <div class="logo-area">
                <a  href="">
                  <img class="mx-auto" src="../assets/img/logo.svg" alt="لوگو کیهان" />
                </a>
              </div>
              <div class="title-menu mt-5 p-3 border-orange-400 border-r-2 border-l-2 font-black rounded-lg">
                <h3>دسته بندی کالاها</h3>
              </div>
              <div class="">
                <vs-collapse>
                  <vs-collapse-item icon-pack="fal" icon-arrow="fa-chevron-down" accordion="true">
                    <div class="font-bold text-cool-600" slot="header">
                      تجهیزات مخابراتی
                    </div>
                    <a class="all-cat py-2 block text-blue-400" href="">مشاهده دسته تجهیزات مخابراتی </a>
                    <a class="level-2-mobile py-2 block text-cool-600" href="#"> لول دوم منو</a>
                    <a class="level-2-mobile py-2 block text-cool-600" href="##"> لول دوم منو</a>
                    <a class="level-2-mobile py-2 block text-cool-600" href="###"> لول دوم منو</a>
                  </vs-collapse-item>
                </vs-collapse>
              </div>
            </div>
          </div>
          <div class="hidden md:block md:col-span-12 lg:col-span-10">
            <div class="btn-collaps inline-block">
              <a class="md:px-2 lg:px-6 py-2 bg-cool-600 text-ff rounded-lg md:text-xs lg:text-base " href="#"
                >دسته بندی ها<i class="mr-2 text-cool-50 fal fa-bars"></i
              ></a>
              <div class="mega-araea shadow-lg text-sm text-cool-700 rounded-lg top-8 border border-cool-100 bg-ff z-10 ">
                <vs-tabs  :color="colorx" position="left">
                  <!-- داینامیک سازی رو از همین آیتم انجام بدین که ریسپانسیو هم شد -->
                  <vs-tab @click="colorx = '#F97316'" label="تجهیزات مخابراتی">
                    <div class="con-tab-ejemplo bg-cool-50 py-2 px-3 rounded-lg">
                      <div class="item-level-one-link ">
                        <a class="text-blue-400" href="">
                          مشاهده دسته تجهیزات مخابراتی
                        </a>
                      </div>
                      <div class="item-level-two inline-block  md:w-6/12 lg:w-2/12 mt-4">
                        <a class="block " href="#"> عنوان سطح دوم</a>
                        <div class="item-level-three block">
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>

                        </div>
                      </div>
                      <div class="item-level-two inline-block  md:w-6/12 lg:w-2/12 mt-4">
                        <a href="#"> عنوان سطح دوم</a>
                        <div class="item-level-three">
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>

                        </div>
                      </div>
                      <div class="item-level-two inline-block  md:w-6/12 lg:w-2/12 mt-4">
                        <a href="#"> عنوان سطح دوم</a>
                        <div class="item-level-three">
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>

                        </div>
                      </div>
                      <div class="item-level-two inline-block md:w-6/12 lg:w-2/12 mt-4">
                        <a class="block " href="#"> عنوان سطح دوم</a>
                        <div class="item-level-three block">
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>

                        </div>
                      </div>
                      <div class="item-level-two inline-block  md:w-6/12 lg:w-2/12 mt-4">
                        <a href="#"> عنوان سطح دوم</a>
                        <div class="item-level-three">
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>

                        </div>
                      </div>
                      <div class="item-level-two inline-block  md:w-6/12 lg:w-2/12 mt-4">
                        <a href="#"> عنوان سطح دوم</a>
                        <div class="item-level-three">
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>

                        </div>
                      </div>
                    </div>
                  </vs-tab>
                  <vs-tab @click="colorx = '#F97316'" label="تجهیزات شبکه">
                    <div class="con-tab-ejemplo bg-cool-50 py-2 px-3 rounded-lg">
                      <div class="item-level-one-link ">
                        <a class="text-blue-400" href="">
                          مشاهده دسته تجهیزات مخابراتی
                        </a>
                      </div>
                      <div class="item-level-two inline-block ml-4 w-2/12 mt-4">
                        <a class="block " href="#"> عنوان سطح دوم</a>
                        <div class="item-level-three block">
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>

                        </div>
                      </div>
                      <div class="item-level-two inline-block  ml-4 w-2/12 mt-4">
                        <a href="#"> عنوان سطح دوم</a>
                        <div class="item-level-three">
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>

                        </div>
                      </div>
                      <div class="item-level-two inline-block  ml-4 w-2/12 mt-4">
                        <a href="#"> عنوان سطح دوم</a>
                        <div class="item-level-three">
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>

                        </div>
                      </div>
                      <div class="item-level-two inline-block ml-4 w-2/12 mt-4">
                        <a class="block " href="#"> عنوان سطح دوم</a>
                        <div class="item-level-three block">
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>

                        </div>
                      </div>
                      <div class="item-level-two inline-block  ml-4 w-2/12 mt-4">
                        <a href="#"> عنوان سطح دوم</a>
                        <div class="item-level-three">
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>

                        </div>
                      </div>
                      <div class="item-level-two inline-block  ml-4 w-2/12 mt-4">
                        <a href="#"> عنوان سطح دوم</a>
                        <div class="item-level-three">
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>

                        </div>
                      </div>
                    </div>
                  </vs-tab>
                  <vs-tab @click="colorx = '#F97316'" label="تجهیزات برق صنعتی">
                    <div class="con-tab-ejemplo bg-cool-50 py-2 px-3 rounded-lg">
                      <div class="item-level-one-link ">
                        <a class="text-blue-400" href="">
                          مشاهده دسته تجهیزات مخابراتی
                        </a>
                      </div>
                      <div class="item-level-two inline-block  ml-4 w-2/12 mt-4">
                        <a href="#"> عنوان سطح دوم</a>
                        <div class="item-level-three">
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>

                        </div>
                      </div>
                      <div class="item-level-two inline-block  ml-4 w-2/12 mt-4">
                        <a href="#"> عنوان سطح دوم</a>
                        <div class="item-level-three">
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>

                        </div>
                      </div>
                      <div class="item-level-two inline-block ml-4 w-2/12 mt-4">
                        <a class="block " href="#"> عنوان سطح دوم</a>
                        <div class="item-level-three block">
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>

                        </div>
                      </div>
                      <div class="item-level-two inline-block  ml-4 w-2/12 mt-4">
                        <a href="#"> عنوان سطح دوم</a>
                        <div class="item-level-three">
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>

                        </div>
                      </div>
                      <div class="item-level-two inline-block  ml-4 w-2/12 mt-4">
                        <a href="#"> عنوان سطح دوم</a>
                        <div class="item-level-three">
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>

                        </div>
                      </div>
                    </div>
                  </vs-tab>
                  <vs-tab @click="colorx = '#F97316'" label="انرژی های پاک">
                    <div class="con-tab-ejemplo">
                      <div class="con-tab-ejemplo bg-cool-50 py-2 px-3 rounded-lg">
                      <div class="item-level-one-link ">
                        <a class="text-blue-400" href="">
                          مشاهده دسته تجهیزات مخابراتی
                        </a>
                      </div>
                      <div class="item-level-two inline-block ml-4 w-2/12 mt-4">
                        <a class="block " href="#"> عنوان سطح دوم</a>
                        <div class="item-level-three block">
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>

                        </div>
                      </div>
                      <div class="item-level-two inline-block  ml-4 w-2/12 mt-4">
                        <a href="#"> عنوان سطح دوم</a>
                        <div class="item-level-three">
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>

                        </div>
                      </div>
                      <div class="item-level-two inline-block  ml-4 w-2/12 mt-4">
                        <a href="#"> عنوان سطح دوم</a>
                        <div class="item-level-three">
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>

                        </div>
                      </div>
                      <div class="item-level-two inline-block ml-4 w-2/12 mt-4">
                        <a class="block " href="#"> عنوان سطح دوم</a>
                        <div class="item-level-three block">
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>

                        </div>
                      </div>
                      <div class="item-level-two inline-block  ml-4 w-2/12 mt-4">
                        <a href="#"> عنوان سطح دوم</a>
                        <div class="item-level-three">
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>

                        </div>
                      </div>
                      <div class="item-level-two inline-block  ml-4 w-2/12 mt-4">
                        <a href="#"> عنوان سطح دوم</a>
                        <div class="item-level-three">
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>

                        </div>
                      </div>
                    </div>
                    </div>
                  </vs-tab>
                  <vs-tab
                    @click="colorx = '#F97316'"
                    label="تجهیزات جانبی"
                  >
                    <div class="con-tab-ejemplo">
                      <div class="con-tab-ejemplo bg-cool-50 py-2 px-3 rounded-lg">
                      <div class="item-level-one-link ">
                        <a class="text-blue-400" href="">
                          مشاهده دسته تجهیزات مخابراتی
                        </a>
                      </div>
                      <div class="item-level-two inline-block ml-4 w-2/12 mt-4">
                        <a class="block " href="#"> عنوان سطح دوم</a>
                        <div class="item-level-three block">
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>

                        </div>
                      </div>
                      <div class="item-level-two inline-block  ml-4 w-2/12 mt-4">
                        <a href="#"> عنوان سطح دوم</a>
                        <div class="item-level-three">
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح اول</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح دوم</a>
                          <a class="block font-thin text-sm my-1" href="">زیرسطح سوم</a>

                        </div>
                      </div>
                    </div>
                    </div>
                  </vs-tab>
                </vs-tabs>
              </div>
            </div>
            <div class="main-menu inline-block md:text-sm text-base ">
              <ul>
                <li>
                  <a href="" class="text-cool-800 hover:text-orange-600 ">
                    صفحه اصلی
                  </a>
                </li>
                <li>
                  <a href="" class="text-cool-800 hover:text-orange-600 ">
                    درباره ما
                  </a>
                </li>
                <li>
                  <a href="" class="text-cool-800 hover:text-orange-600 ">
                    تماس با ما
                  </a>
                </li>
                <li>
                  <a href="" class="text-cool-800 hover:text-orange-600 ">
                    با ما همکار شو
                  </a>
                </li>
                <li>
                  <a href="" class="text-cool-800 hover:text-orange-600 ">
                    وبلاگ
                  </a>
                </li>
                <li>
                  <a href="" class="text-orange-500">
                    جشنواره
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="block col-span-6 md:hidden lg:block lg:col-span-2 lg:text-left">
            <figure>
              <span class="font-thin text-cool-600">09120760345</span>
              <i class="fal fa-phone mr-2 text-xl text-cool-600"></i>
            </figure>
          </div>

        </div>
      </div>
    </section>
  </header>
</template>
<script>
//import carousel from 'vue-owl-carousel'
//import HelloWorld from "./HelloWorld.vue";
export default {
  data() {
    return {
      value1: "",
      colorx: "rgb(249 115 22)",
    };
  },
  components: {
    // HelloWorld: HelloWorld,
  },
};
</script>
<style>
.mega-araea .con-slot-tabs{
  width: 100%;
  padding: 0 15px;
}
.mega-araea .vs-tabs--ul{
  min-width: 165px;
  box-shadow: 0 0 0 0 #333  !important;
}
.item-level-two .item-level-three a:hover{
  transform: translateX(-5px);
}
.item-level-two{
  padding-right: 15px;
  font-weight: 600;
}
.item-level-two > a::before{
  content: ">";
  font-weight: 900;

}
#mmenu{
  transform: translateX(150%);
  
}
#mmenu:target{
  transform: translateX(0%);
}
</style>