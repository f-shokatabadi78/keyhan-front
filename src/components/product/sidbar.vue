<template>
<div>
  <div class="btn-customize block-btn pb-2 border-cool-300 border-dashed border-b">
    <vs-button class="block" @click="popupActivo=true" color="#4B5563" type="border">سفارشی سازی</vs-button>
    <vs-popup class="customize-popup" title="فرم زیر را پر کنید با شما تماس میگیریم"
              :active.sync="popupActivo" icon-pack="fal" icon-close="fa-times">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
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
  <div class="addtocart block-btn mt-4 pb-2 border-cool-300 border-dashed border-b">
    <vs-button color="var(--cart)">افزودن به سبدخرید</vs-button>
  </div>
  <div class="num-pro mt-4">
    <p class="text-xs text-cool-500">اگر قصد خرید عمده دارید و یا همکار هستید تعداد را وارد کنید.</p>
    <div class=" text-center m-auto">
      <vs-input-number class="ltr" color="var(--dd)" icon-pack="fal" icon-dec="fa-minus" icon-inc="fa-plus"
                       v-model="number1"/>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: ''
    }
</script>

<style scoped>

</style>
