<template>
    <div>
      <div class="col-span-12 lg:col-span-3">
        <div class="sidebar-product rounded-lg border border-cool-200 p-5 lg:mt-16 relative">
          <div class="price-cart h-5">
            <span class="cart-kalaha text-cool-600 text-sm font-normal float-right mt-0.5">قیمت کالاها</span>
            <span class="cart-kalaha text-cool-600 text-sm font-normal float-right mt-0.5">
                (3)</span
            >
            <del class="text-sm font-bold text-cool-700 mx-1 float-left"> 35,000,000</del>
          </div>
          <div class="price-cart mt-3 h-10 pb-3 border-b border-dashed border-cool-300">
              <span class="text-cool-600 text-sm font-normal float-right mt-0.5">
                تخفیف کالاها</span
              >

            <span class="text-sm font-bold text-red-600 mx-1 float-left"> 12,000</span>
            <span class="text-sm font-bold text-red-600 mx-1 float-left"> (12%)</span>
          </div>
          <div class="price-cart mt-3 h-7 ">
              <span class="text-cool-600 text-sm font-normal float-right mt-0.5">
                جمع کل سبد خرید :</span
              >

            <span class="text-sm font-bold text-blue-500 mx-1 float-left"> 12,000,000</span>
          </div>
          <div class="text-send text-cool-500 text-xs mt-3">
            هزینه‌ی ارسال در ادامه بر اساس موارد انتخابی شما‌ محاسبه و به این مبلغ اضافه خواهد شد
          </div>
          <div class="cart-btn block-btn mt-4">
            <vs-button color="var(--cart)">ادامه فرآیند خرید</vs-button>
          </div>

        </div>
        <div class="note mt-4">
          <figure>
            <i class="fal fa-exclamation text-3xl text-red-500"></i>
            <p class="text-cool-500 text-xs relative -top-6 lg:-top-9 pr-6">
              کالاهای موجود در سبد شما ثبت و رزرو نشده‌اند، برای ثبت
              .سفارش مراحل بعدی را تکمیل کنید
            </p>

          </figure>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "sidbar"
    }
</script>

<style scoped>

</style>
