<template>
    <div>
      <div class="sidebar-product rounded-lg border border-cool-200 p-5 lg:mt-16 relative">
        <div class="price-checkout h-7">
          <span class="cart-kalaha text-cool-600 text-sm font-normal float-right mt-0.5">جمع سبد خرید</span>
          <del class="text-sm font-bold text-cool-700 mx-1 float-left"> 316,000,000</del>
        </div>
        <div class="price-checkout h-7">
              <span class="cart-kalaha text-cool-600 text-sm font-normal float-right mt-0.5">
                هزینه ارسال</span
              >
          <del class="text-sm font-bold text-cool-700 mx-1 float-left"> 20,000</del>
        </div>
        <div class="price-cart h-7 pb-3 border-b border-dashed border-cool-300">
              <span class="text-cool-600 text-sm font-normal float-right mt-0.5">
                اعمال تخفیف</span
              >
          <span class="text-sm font-bold text-red-600 mx-1 float-left"> 12,000- </span>
        </div>
        <div class="coupon mt-3 pb-3 relative">
          <h4 class="text-cool-600 text-sm font-normal text-right mt-0.5 mb-4">
            کد تخفیف</h4
          >
          <vs-input class="w-full max-w-full" size="default" placeholder=" کد تخفیف را وارد کنید " v-model="value1" />
          <vs-button color="#9CA3AF" type="filled">اعمال تخفیف</vs-button>
        </div>
        <div class="price-checkout h-7 pt-3 border-t border-cool-300 border-dashed">
              <span class="cart-kalaha text-cool-600 text-sm font-normal float-right mt-0.5">
                هزینه نهایی</span
              >
          <del class="text-sm font-bold text-cool-700 mx-1 float-left"> 331,000,000</del>
        </div>
      </div>
      <div class="sidebar-product rounded-lg border border-cool-200 p-5 mt-5 relative">
        <h3 class="font-bold text-cool-700 mb-4">انتخاب روش پرداخت</h3>
        <div class="pay-model text-right">
          <vs-radio class="mb-2" color="#f97416" v-model="radios1" vs-value="HEX">درگاه بانک ملت</vs-radio>
          <vs-radio class="mb-2" color="#f97416" v-model="radios2" vs-value="HEX">درگاه بانک پاسارگاد</vs-radio>
          <vs-radio class="mb-2" color="#f97416" v-model="radios3" vs-value="HEX">درگاه زرین پال </vs-radio>

        </div>
        <div class="cart-btn block-btn mt-8">
          <vs-button color="var(--cart)">پرداخت</vs-button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped>

</style>
