<template>
  <div class="dashboard">
      <div class="items-dash grid grid-cols-12 gap-5">
        <div class="item-dash col-span-12 md:col-span-6 lg:col-span-4 p-5 border-orange-400 border rounded-lg grid grid-cols-3 gap-1">
          <div class="col-span-1 md:col-span-3 lg:col-span-1 mx-auto">
            <i class="fal fa-shopping-cart text-orange-500 text-5xl md:text-3xl lg:text-5xl"></i>
          </div>
          <div class="col-span-2 md:col-span-3 lg:col-span-2">
            <a href="">
              <h5 class="text-center text-cool-600">
                تعداد سفارش ها
              </h5>
            </a>

            <span class="text-center text-cool-600 block mt-2">20</span>
          </div>
        </div>
        <div class="item-dash col-span-12 md:col-span-6 lg:col-span-4 p-5 border-orange-400 border rounded-lg grid grid-cols-3 gap-1">
          <div class="md:col-span-3 lg:col-span-1  mx-auto">
            <i class="fal fa-sack-dollar text-orange-500 text-5xl md:text-3xl lg:text-5xl"></i>
          </div>
          <div class="col-span-2 md:col-span-3 lg:col-span-2">
            <h5 class="text-center text-cool-600">مبلغ کل سفارش ها</h5>
            <span class="text-center text-cool-600 block mt-2">‏2,000,000 تومان</span>
          </div>
        </div>
        <div class="item-dash col-span-12 md:col-span-12 lg:col-span-4 p-5 border-orange-400 border rounded-lg grid grid-cols-3 gap-1">
          <div class="md:col-span-3 lg:col-span-1  mx-auto">
            <i class="fal fa-comment text-orange-500 text-5xl md:text-3xl lg:text-5xl"></i>
          </div>
          <div class="col-span-2 md:col-span-3 lg:col-span-2">
            <h5 class="text-center text-cool-600">تعداد نظرات من</h5>
            <span class="text-center text-cool-600 block mt-2">500</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-12 gap-30 mt-5">
        <div class="right-dash col-span-12 lg:col-span-6 ">
          <div class="list-item rounded-lg border border-cool-200 p-3">
          <mywishlist/>
          </div>
          <div class="list-item rounded-lg border border-cool-200 p-3 mt-5">
           <mycourse/>
          </div>
        </div>

        <div class="left-dash col-span-12 lg:col-span-6">
          <div class="list-item rounded-lg border border-cool-200 p-3">
            <myorder/>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import Mywishlist from "../../../components/profile/lastmywishlist";
import Myorder from "../../../components/profile/lastmyorder";
import Mycourse from "../../../components/profile/lastmycourse";
export default {
  data() {
    return {
      number1:1,
      colorx:'#F97316'
    };
  },
  components: {
    Mycourse,
    Myorder,
    Mywishlist
  },
};
</script>
