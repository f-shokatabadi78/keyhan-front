<template>
<div>
  <div
    class="sidebar-product circle rounded-lg border border-cool-200 p-5 lg:mt-14 relative"
  >
    <div class="price-product py-3 h-16 text-left ">
      <div class="price-old ltr">
                <span
                  class="value-discount bg-red-600 text-cool-50 text-sm px-2 rounded-xl"
                >
                  %5</span
                >
        <del class="value-old text-sm text-cool-400 line-through mx-1">
          54,000,000
        </del
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
    <div class="addtocart block-btn my-4">
      <vs-button color="var(--cart)">افزودن به سبدخرید</vs-button>
    </div>
    <div class="vote-display h-6">
      <p class="text-sm text-cool-700 font-thin float-right">امتیاز <span>4</span> از <span>60</span> رای</p>
      <div class="star-area float-left text-cool-400"><i class="fal fa-star "></i><i
        class="fal fa-star text-orange-500"></i><i class="fal fa-star text-orange-500"></i><i
        class="fal fa-star text-orange-500"></i><i class="fal fa-star text-orange-500"></i></div>
    </div>
  </div>
  <div
    class="sidebar-product rounded-lg border border-cool-200 p-5 mt-4 relative"
  >
    <div class="info-downloud">
      <figure class="mb-3">
        <i class="fal fa-file text-cool-400 ml-2"></i>
        <span class="text-cool-600 text-sm font-bold"> فـایل تمرین :</span>
        <span class="text-cool-500 text-sm font-thin"> دارد </span>
      </figure>
      <figure class="mb-3">
        <i class="fal fa-chalkboard-teacher text-cool-400 ml-2"></i>
        <span class="text-cool-600 text-sm font-bold"> نوع دوره :</span>
        <span class="text-cool-500 text-sm font-thin"> غیرحضوری </span>
      </figure>
      <figure class="mb-3">
        <i class="fal fa-angle-double-right text-cool-400 ml-2"></i>
        <span class="text-cool-600 text-sm font-bold"> پیش نیاز :</span>
        <span class="text-cool-500 text-sm font-thin"> لیسانس برق یا کامپیوتر </span>
      </figure>
      <figure class="mb-3">
        <i class="fal fa-calendar-day text-cool-400 ml-2"></i>
        <span class="text-cool-600 text-sm font-bold"> آخرین بروزرسانی :</span>
        <span class="text-cool-500 text-sm font-thin"> 6 اسفند 99 </span>
      </figure>
      <figure class="mb-3">
        <i class="fal fa-language text-cool-400 ml-2"></i>
        <span class="text-cool-600 text-sm font-bold"> زبان :</span>
        <span class="text-cool-500 text-sm font-thin"> فارسی </span>
      </figure>
      <figure class="mb-3">
        <i class="fal fa-user-edit text-cool-400 ml-2"></i>
        <span class="text-cool-600 text-sm font-bold"> نوع فایل :</span>
        <span class="text-cool-500 text-sm font-thin"> کتاب </span>
      </figure>
      <figure class="mb-3">
        <i class="fal fa-clock text-cool-400 ml-2"></i>
        <span class="text-cool-600 text-sm font-bold"> مدت زمان :</span>
        <span class="text-cool-500 text-sm font-thin"> 2 ساعت 20 دقیقه </span>
      </figure>

      <figure class="mb-3">
        <i class="fal fa-server text-cool-400 ml-2"></i>
        <span class="text-cool-600 text-sm font-bold"> حجم :</span>
        <span class="text-cool-500 text-sm font-thin"> 500 مگابایت </span>
      </figure>
      <figure class="mb-3">
        <i class="fal fa-download text-cool-400 ml-2"></i>
        <span class="text-cool-600 text-sm font-bold"> روش دریافتی :</span>
        <span class="text-cool-500 text-sm font-thin"> دانلودی </span>
      </figure>
      <figure class="mb-0">
        <i class="fal fa-user-headset text-cool-400 ml-2"></i>
        <span class="text-cool-600 text-sm font-bold"> روش پشتیبانی :</span>
        <span class="text-cool-500 text-sm font-thin"> تلگرام </span>
      </figure>
    </div>
  </div>
  <div
    class="sidebar-product circle rounded-lg border border-cool-200 px-5 pt-4 pb-3 mt-4 relative"
  >
    <div class="reviw-box text-center">
      <figure class=" text-cool-400 my-auto inline-block p-3">
        <i class="fal fa-eye text-xl ml-2"></i>
        <span class="text-sm font-thin relative -top-1"
        >20 بازدید</span
        >
      </figure>
      <figure class=" text-cool-400 my-auto inline-block p-3 border-dashed border-r border-cool-300">
        <i class="fal fa-folder-open text-xl ml-2"></i>
        <span class="text-sm font-thin relative -top-1"
        >دانشنامه</span
        >
      </figure>


    </div>


  </div>
  <div
    class="sidebar-product rounded-lg border border-cool-200 px-5 pt-4 pb-3 mt-4 relative"
  >
    <div class="category-box text-right">
      <figure class=" text-cool-400 pb-2 border-cool-300 border-b border-dashed">
        <i class="fal fa-list-ul text-xl ml-3"></i>
        <span class="text-sm font-thin relative -top-1"
        >
                    <a class="hover:text-blue-400" href="">آموزش</a>
                    <span> , </span>
                    <a class="hover:text-blue-400" href="">سمینار</a>
                    </span
                    >
      </figure>
      <vs-input class="mt-5 text-center m-auto block  min-w-full" icon-pack="fal" icon="fa-copy"
                placeholder="Search" v-model="value1"/>
      <div class="social-btn text-center mt-3">
        <a
          class="mx-0.5 text-xl p-1.5 w-9 h-9 text-center rounded-lg text-cool-400 border border-cool-400 inline-block"
          href=""
        ><i class="fab fa-whatsapp "></i
        ></a>
        <a
          class="mx-0.5 text-xl p-1.5 w-9 h-9 text-center rounded-lg text-cool-400 border border-cool-400 inline-block"
          href=""
        ><i class="fab fa-instagram "></i
        ></a>
        <a
          class="mx-0.5 text-xl p-1.5 w-9 h-9 text-center rounded-lg text-cool-400 border border-cool-400 inline-block"
          href=""
        ><i class="fal fa-paper-plane "></i
        ></a>

      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "sidbardownload"
    }
</script>

<style scoped>

</style>
