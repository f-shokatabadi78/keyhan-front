<template>
  <div class="all-order">
    <div class="title-section mb-6 relative">
      <h3
        class="title-border relative text-base font-black text-cool-800 inline-block border-b-2 border-cool-800 pb-2 pl-10"
      >              
      همه سفارش ها
      </h3>
    </div>
    <div class="title-order grid-cols-12 gap-4 mb-6 hidden lg:grid text-center">
      <div class="col-span-2">
        <h5>شماره سفارش</h5>
      </div>
      <div class="col-span-2">
        <h5>تاریخ ثبت</h5>
      </div>
      <div class="col-span-2">
        <h5>وضعیت تحویل</h5>
      </div>
      <div class="col-span-2">
        <h5>مبلغ</h5>
      </div>
      <div class="col-span-2">
        <h5>عملیات پرداخت</h5>
      </div>
      <div class="col-span-2">
        <h5>جزئیات</h5>
      </div>
    </div>
    <div class="item-order grid grid-cols-12 gap-4 my-3 text-center">
      <div class="col-span-6 md:col-span-4 lg:col-span-2">
        <h5 class="block lg:hidden mb-2">شماره سفارش</h5>
        <a href="">
          <span class="text-cool-500 text-sm font-thin">1265489</span>
        </a>
      </div>
      <div class="col-span-6 md:col-span-4 lg:col-span-2">
        <h5 class="block lg:hidden mb-2">تاریخ ثبت</h5>
        <span class="text-cool-500 text-sm font-thin">9 اسفند 99</span>
      </div>
      <div class="col-span-6 md:col-span-4 lg:col-span-2">
        <h5 class="block lg:hidden mb-2">وضعیت تحویل</h5>
        <span class="border-blue-500 border text-blue-500 py-1 px-3 text-xs rounded-lg bg-blue-100">در حال پردازش</span>
      </div>
      <div class="col-span-6 md:col-span-4 lg:col-span-2">
        <h5 class="block lg:hidden mb-2">مبلغ</h5>
        <span class="text-cool-700 text-sm font-thin">154,000,000</span>
      </div>
      <div class="col-span-6 md:col-span-4 lg:col-span-2">
        <h5 class="block lg:hidden mb-2">عملیات پرداخت</h5>
        <span class="text-green-500 py-1 px-3 text-xs rounded-lg">پرداخت موفق</span>
      </div>
      <div class="col-span-6 md:col-span-4 lg:col-span-2">
        <h5 class="block lg:hidden mb-2">جزئیات</h5>
        <a class="text-xs text-cool-500 hover:text-orange-500" href=""> مشاهده جزئیات</a>
      </div>
      <hr class="col-span-full border-cool-200 border-dashed">
    </div>
    <div class="item-order grid grid-cols-12 gap-4 my-3 text-center">
      <div class="col-span-6 md:col-span-4 lg:col-span-2">
        <h5 class="block lg:hidden mb-2">شماره سفارش</h5>
        <a href="">
          <span class="text-cool-500 text-sm font-thin">1265489</span>
        </a>
      </div>
      <div class="col-span-6 md:col-span-4 lg:col-span-2">
        <h5 class="block lg:hidden mb-2">تاریخ ثبت</h5>
        <span class="text-cool-500 text-sm font-thin">9 اسفند 99</span>
      </div>
      <div class="col-span-6 md:col-span-4 lg:col-span-2">
        <h5 class="block lg:hidden mb-2">وضعیت تحویل</h5>
        <span class="border-green-500 border text-green-500 py-1 px-3 text-xs rounded-lg bg-green-50"> ارسال شد</span>
      </div>
      <div class="col-span-6 md:col-span-4 lg:col-span-2">
        <h5 class="block lg:hidden mb-2">مبلغ</h5>
        <span class="text-cool-700 text-sm font-thin">154,000,000</span>
      </div>
      <div class="col-span-6 md:col-span-4 lg:col-span-2">
        <h5 class="block lg:hidden mb-2">عملیات پرداخت</h5>
        <span class="text-red-400 py-1 px-3 text-xs rounded-lg">در انتظار پرداخت</span>
      </div>
      <div class="col-span-6 md:col-span-4 lg:col-span-2">
        <h5 class="block lg:hidden mb-2">جزئیات</h5>
        <a class="text-xs text-cool-500 hover:text-orange-500" href=""> مشاهده جزئیات</a>
      </div>
      <hr class="col-span-full border-cool-200 border-dashed">
    </div>
    <div class="item-order grid grid-cols-12 gap-4 my-3 text-center">
      <div class="col-span-6 md:col-span-4 lg:col-span-2">
        <h5 class="block lg:hidden mb-2">شماره سفارش</h5>
        <a href="">
          <span class="text-cool-500 text-sm font-thin">1265489</span>
        </a>
      </div>
      <div class="col-span-6 md:col-span-4 lg:col-span-2">
        <h5 class="block lg:hidden mb-2">تاریخ ثبت</h5>
        <span class="text-cool-500 text-sm font-thin">9 اسفند 99</span>
      </div>
      <div class="col-span-6 md:col-span-4 lg:col-span-2">
        <h5 class="block lg:hidden mb-2">وضعیت تحویل</h5>
        <span class="border-red-500 border text-red-500 py-1 px-3 text-xs rounded-lg bg-red-50"> لغو شد</span>
      </div>
      <div class="col-span-6 md:col-span-4 lg:col-span-2">
        <h5 class="block lg:hidden mb-2">مبلغ</h5>
        <span class="text-cool-700 text-sm font-thin">154,000,000</span>
      </div>
      <div class="col-span-6 md:col-span-4 lg:col-span-2">
        <h5 class="block lg:hidden mb-2">عملیات پرداخت</h5>
        <span class="text-red-400 py-1 px-3 text-xs rounded-lg">در انتظار پرداخت</span>
      </div>
      <div class="col-span-6 md:col-span-4 lg:col-span-2">
        <h5 class="block lg:hidden mb-2">جزئیات</h5>
        <a class="text-xs text-cool-500 hover:text-orange-500" href=""> مشاهده جزئیات</a>
      </div>
      <hr class="col-span-full border-cool-200 border-dashed">
    </div>
    <div class="paganition profile mt-10 mx-auto">
      <vs-pagination :total="5" icon-pack="fal" prev-icon="fa-arrow-right" next-icon="fa-arrow-left" :color="colorx" v-model="currentx"></vs-pagination>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      number1:1,
      colorx:'#F97316'
    };
  },
  components: {
  },
};
</script>