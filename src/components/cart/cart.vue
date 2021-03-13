<template>
<div>
  <div class="title-section mt-3 mb-2 relative">
    <h3
      class="title-border relative text-xl font-black text-cool-800 inline-block border-b-2 border-cool-600 pb-2 pl-5 "
    >
      <i class="fal fa-shopping-cart text-3xl relative top-3"></i>
      سبد خرید شما
    </h3>
  </div>
  <div class="cart-area rounded-lg border border-cool-200 px-8 pb-6">
    <div class="cart-item grid grid-cols-6 gap-4 border-b border-cool-400 border-dashed py-4">
      <div class="col-span-12 md:col-span-3 ">
        <h5 class="h-5"></h5>
      </div>
      <div class="col-span-6 md:col-span-1 text-center ">
        <h5>قیمت واحد</h5>
      </div>
      <div class="col-span-6 md:col-span-1 text-center">
        <h5> تعداد</h5>
      </div>
      <div class="col-span-12 md:col-span-1 text-center">
        <h5>قیمت کل</h5>
      </div>
    </div>
    <div class="cart-item grid grid-cols-6 gap-4 border-b border-cool-400 border-dashed py-4">
      <div class="col-span-6 md:col-span-3 ">
        <div class="product-cart grid grid-cols-12 gap-2 border-b pb-2 border-dashed border-cool-200 md:pb-0 md:border-b-0">
          <div class="trash-cart col-span-1 md:col-span-1 lg:col-span-1 lg:m-auto relative top-8 md:top-9 lg:top-0">
            <a href=""><i class="fal fa-trash text-cool-500 hover:text-orange-400"></i></a>
          </div>
          <div class="col-span-3 md:col-span-4 lg:col-span-3">
            <a href="">
              <img class="pimg-cart w-full border-cool-200 border rounded-lg" src="@/assets/img/product/img-p02.jpg" alt="">
            </a>
          </div>
          <div class="col-span-8 md:col-span-7 lg:col-span-8">
            <a href="">
              <h3 class="ptitle-cart text-cool-600 text-sm font-bold inline-block">B13IMICMSXJ دوربین مداربسته تحت شبکه شیائومی مدل</h3>
            </a>
            <div class="sp-cart" >
              <span class="text-xs text-cool-500">طول</span>
              <span class="text-xs text-cool-500"> 500متری</span>
            </div>
            <div class="sp-cart inline-block " >
              <span class="text-xs text-cool-500">رنگ</span>
              <span class="text-xs text-cool-500"> <button class=" w-4 h-4 border-blue-400 border-2 rounded-3xl mr-1 relative lg:-top-1 top-0"></button></span>
            </div>
            <div class="holesale-tag lg:float-left mt-1.5"><p class="text-red-500 text-xs">عمده محاسبه شده است</p></div>
          </div>
        </div>
      </div>
      <div class="col-span-6 md:col-span-1 text-center ">
        <div class="area-unitprice border-b pb-2 border-dashed md:border-b-0 border-cool-200 md:border-l md:border-r md:border-dashed md:border-cool-300 min-h-90 flex items-center align-middle">
          <div class="block md:hidden">
            <h5>قیمت واحد: </h5>
          </div>
          <div class=" m-auto">
            <span class=" m-auto text-cool-400 line-through block text-right">55,000,000</span>
            <span class="text-center m-auto text-cool-800 inline-block ">35,000,000</span>
            <span class="text-center m-auto text-xs text-cool-800 inline-block mr-1">تومان</span>
          </div>

        </div>
      </div>
      <div class="col-span-6 md:col-span-1 text-center">
        <div class="unit-cart border-b pb-2 border-dashed md:border-b-0 border-cool-200 min-h-90 m-auto flex items-center align-middle">
          <div class="block md:hidden">
            <h5>تعداد: </h5>
          </div>
          <div class=" text-center m-auto px-2">
            <vs-input-number class="ltr md:left-5 lg:left-0" color="var(--dd)" icon-pack="fal" icon-dec="fa-minus" icon-inc="fa-plus" v-model="number2"/>
          </div>
        </div>
      </div>
      <div class="col-span-6 md:col-span-1  text-center">
        <div class="hole-cart md:border-r md:border-dashed md:border-cool-300 m-auto min-h-90 flex items-center align-middle">
          <div class="block md:hidden">
            <h5>قیمت کل: </h5>
          </div>
          <div class=" m-auto">
            <span class=" m-auto text-cool-400 line-through block text-right">55,000,000</span>
            <span class="text-center m-auto  text-red-500 font-bold inline-block ">35,000,000</span>
            <span class="text-center m-auto text-xs text-cool-800 inline-block mr-1">تومان</span>
          </div>
        </div>
      </div>
    </div>
    <div class="cart-item grid grid-cols-6 gap-4 border-b border-cool-400 border-dashed py-4">
      <div class="col-span-6 md:col-span-3 ">
        <div class="product-cart grid grid-cols-12 gap-2 border-b pb-2 border-dashed border-cool-200 md:pb-0 md:border-b-0">
          <div class="trash-cart col-span-1 md:col-span-1 lg:col-span-1 lg:m-auto relative top-8 md:top-9 lg:top-0">
            <a href=""><i class="fal fa-trash text-cool-500 hover:text-orange-400"></i></a>
          </div>
          <div class="col-span-3 md:col-span-4 lg:col-span-3">
            <a href="">
              <img class="pimg-cart w-full border-cool-200 border rounded-lg" src="@/assets/img/product/img-p02.jpg" alt="">
            </a>
          </div>
          <div class="col-span-8 md:col-span-7 lg:col-span-8">
            <a href="">
              <h3 class="ptitle-cart text-cool-600 text-sm font-bold inline-block">B13IMICMSXJ دوربین مداربسته تحت شبکه شیائومی مدل</h3>
            </a>
            <div class="sp-cart" >
              <span class="text-xs text-cool-500">طول</span>
              <span class="text-xs text-cool-500"> 500متری</span>
            </div>
            <div class="sp-cart inline-block " >
              <span class="text-xs text-cool-500">رنگ</span>
              <span class="text-xs text-cool-500"> <button class=" w-4 h-4 border-blue-400 border-2 rounded-3xl mr-1 relative lg:-top-1 top-0"></button></span>
            </div>
            <div class="holesale-tag lg:float-left mt-1.5"><p class="text-red-500 text-xs">عمده محاسبه شده است</p></div>
          </div>
        </div>
      </div>
      <div class="col-span-6 md:col-span-1 text-center ">
        <div class="area-unitprice border-b pb-2 border-dashed md:border-b-0 border-cool-200 md:border-l md:border-r md:border-dashed md:border-cool-300 min-h-90 flex items-center align-middle">
          <div class="block md:hidden">
            <h5>قیمت واحد: </h5>
          </div>
          <div class=" m-auto">
            <span class=" m-auto text-cool-400 line-through block text-right">55,000,000</span>
            <span class="text-center m-auto text-cool-800 inline-block ">35,000,000</span>
            <span class="text-center m-auto text-xs text-cool-800 inline-block mr-1">تومان</span>
          </div>

        </div>
      </div>
      <div class="col-span-6 md:col-span-1 text-center">
        <div class="unit-cart border-b pb-2 border-dashed md:border-b-0 border-cool-200 min-h-90 m-auto flex items-center align-middle">
          <div class="block md:hidden">
            <h5>تعداد: </h5>
          </div>
          <div class=" text-center m-auto px-2">
            <vs-input-number class="ltr md:left-5 lg:left-0" color="var(--dd)" icon-pack="fal" icon-dec="fa-minus" icon-inc="fa-plus" v-model="number2"/>
          </div>
        </div>
      </div>
      <div class="col-span-6 md:col-span-1  text-center">
        <div class="hole-cart md:border-r md:border-dashed md:border-cool-300 m-auto min-h-90 flex items-center align-middle">
          <div class="block md:hidden">
            <h5>قیمت کل: </h5>
          </div>
          <div class=" m-auto">
            <span class=" m-auto text-cool-400 line-through block text-right">55,000,000</span>
            <span class="text-center m-auto  text-red-500 font-bold inline-block ">35,000,000</span>
            <span class="text-center m-auto text-xs text-cool-800 inline-block mr-1">تومان</span>
          </div>
        </div>
      </div>
    </div>


  </div>
  <div class="btn-go-back text-center -mt-3">
    <a class="btn-border" href="">بازگشت به آرشیو محصولات</a>
  </div>
</div>
</template>

<script>
    export default {
        name: "cart"
    }
</script>

<style scoped>

</style>
