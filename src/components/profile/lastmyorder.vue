<template>
<div>
  <div class="title-section mb-2 relative">
    <h3
      class="title-border relative text-base font-black text-cool-800 inline-block border-b-2 border-cool-800 pb-2 pl-10 "
    >
      لیست سفارش های من
    </h3>
  </div>
  <div class="order-list mt-5 ">
    <div class="num-order text-sm text-cool-600 inline-block">
      <span>شماره سفارش : </span>
      <span class="font-thin">241598</span>
    </div>
    <div class="num-order text-sm text-cool-600 inline-block mr-5">
      <span>تاریخ ثبت : </span>
      <span class="font-thin">7 اسفند 99</span>
    </div>
    <div class="num-order text-sm text-cool-600 my-3">
      <span>مبلغ کل : </span>
      <span class="font-thin">40,000,000 تومان</span>
    </div>
    <div class="num-order text-sm text-cool-600 my-3">
      <span>محصولات : </span>
      <div class="product-list mt-3 pb-3 border-b border-dashed border-cool-200">
        <a href="">
          <img class="w-11 border rounded-lg border-solid border-cool-300 inline-block mx-1" src="@/assets/img/product/img-p02.jpg" alt="">
        </a>
        <a href="">
          <img class="w-11 border rounded-lg border-solid border-cool-300 inline-block mx-1" src="@/assets/img/product/img-p02.jpg" alt="">
        </a>
        <a href="">
          <img class="w-11 border rounded-lg border-solid border-cool-300 inline-block mx-1" src="@/assets/img/product/img-p02.jpg" alt="">
        </a>
        <a href="">
          <img class="w-11 border rounded-lg border-solid border-cool-300 inline-block mx-1" src="@/assets/img/product/img-p02.jpg" alt="">
        </a>
        <a href="">
          <img class="w-11 border rounded-lg border-solid border-cool-300 inline-block mx-1" src="@/assets/img/product/img-p02.jpg" alt="">
        </a>
        <span> و...</span>
        <vs-button class="text-xs mx-auto block mt-4" color="#F97316" type="border">مشاهده جزئیات</vs-button>

      </div>

    </div>
  </div>
  <div class="order-list mt-5 ">
    <div class="num-order text-sm text-cool-600 inline-block">
      <span>شماره سفارش : </span>
      <span class="font-thin">241598</span>
    </div>
    <div class="num-order text-sm text-cool-600 inline-block mr-5">
      <span>تاریخ ثبت : </span>
      <span class="font-thin">7 اسفند 99</span>
    </div>
    <div class="num-order text-sm text-cool-600 my-3">
      <span>مبلغ کل : </span>
      <span class="font-thin">40,000,000 تومان</span>
    </div>
    <div class="num-order text-sm text-cool-600 my-3">
      <span>محصولات : </span>
      <div class="product-list mt-3 pb-3 border-b border-dashed border-cool-200">
        <a href="">
          <img class="w-11 border rounded-lg border-solid border-cool-300 inline-block mx-1" src="@/assets/img/product/img-p02.jpg" alt="">
        </a>
        <a href="">
          <img class="w-11 border rounded-lg border-solid border-cool-300 inline-block mx-1" src="@/assets/img/product/img-p02.jpg" alt="">
        </a>
        <a href="">
          <img class="w-11 border rounded-lg border-solid border-cool-300 inline-block mx-1" src="@/assets/img/product/img-p02.jpg" alt="">
        </a>
        <a href="">
          <img class="w-11 border rounded-lg border-solid border-cool-300 inline-block mx-1" src="@/assets/img/product/img-p02.jpg" alt="">
        </a>
        <a href="">
          <img class="w-11 border rounded-lg border-solid border-cool-300 inline-block mx-1" src="@/assets/img/product/img-p02.jpg" alt="">
        </a>
        <span> و...</span>
        <vs-button class="text-xs mx-auto block mt-4" color="#F97316" type="border">مشاهده جزئیات</vs-button>

      </div>

    </div>
  </div>

  <div class="paganition profile mt-6 mx-auto">
    <vs-pagination :total="5" icon-pack="fal" prev-icon="fa-arrow-right" next-icon="fa-arrow-left" :color="colorx" v-model="currentx"></vs-pagination>
  </div>
  <div class="more text-left mb-3 mt-9">
    <a class=" text-cool-600 text-sm px-3 pb-2 border-cool-600 border-b border-dashed" href="">مشاهده همه</a>
  </div>
</div>
</template>

<script>
    export default {
        name: "myorder"
    }
</script>

<style scoped>

</style>
