<template>
  <header class="header-area">
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
      <div class="container m-auto">
        <div class="grid grid-cols-12 gap-30 ">
          <div class="lg:col-span-10">
            <div class="btn-collaps inline-block">
              <a class="px-6 py-2 bg-cool-600 text-ff rounded-lg" href="#"
                >دسته بندی ها<i class="mr-2 text-cool-50 fal fa-bars"></i
              ></a>
              <div class="mega-araea">
                <vs-tabs :color="colorx" position="left">
                  <vs-tab @click="colorx = 'success'" label="Success">
                    <div class="con-tab-ejemplo">
                      Success
                    </div>
                  </vs-tab>
                  <vs-tab @click="colorx = 'danger'" label="Danger">
                    <div class="con-tab-ejemplo">
                      Danger
                    </div>
                  </vs-tab>
                  <vs-tab @click="colorx = 'warning'" label="Warning">
                    <div class="con-tab-ejemplo">
                      Warning
                    </div>
                  </vs-tab>
                  <vs-tab @click="colorx = 'dark'" label="Dark">
                    <div class="con-tab-ejemplo">
                      Dark
                    </div>
                  </vs-tab>
                  <vs-tab
                    @click="colorx = 'rgb(16, 233, 179)'"
                    label="RGB | HEX"
                  >
                    <div class="con-tab-ejemplo">
                      RGB | HEX
                    </div>
                  </vs-tab>
                </vs-tabs>
              </div>
            </div>
            <div class="main-menu inline-block text-base ">
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
          <div class="lg:col-span-2 lg:text-left">
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
      colorx: "success",
    };
  },
  components: {
    // HelloWorld: HelloWorld,
  },
};
</script>
