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
            <div class="title-section mb-2 relative">
              <h3
                class="title-border relative text-base font-black text-cool-800 inline-block border-b-2 border-cool-800 pb-2 pl-10 "
              >              
              لیست علاقه مندی های من
              </h3>
            </div>
            <div class="wishlist grid grid-cols-6 gap-4 py-2">
                <div class="col-span-6 md:col-span-5 ">
                  <div class="product-cart grid grid-cols-12 gap-2 ">
                    <div class="trash-cart col-span-1 md:col-span-1 lg:col-span-1 lg:m-auto relative top-6 md:top-9 lg:top-0">
                      <a href=""><i class="fal fa-trash text-cool-500 hover:text-orange-400"></i></a>
                    </div>
                    <div class="col-span-3 md:col-span-4 lg:col-span-3">
                    <a href="">
                    <img class="pimg-cart w-full border-cool-200 border rounded-lg" src="@/assets/img/product/img-p02.jpg" alt="">
                    </a>
                    </div>
                    <div class="col-span-8 md:col-span-7 lg:col-span-8 my-auto">
                      <a href="">
                      <h3 class="ptitle-cart text-cool-600 text-sm font-normal">B13IMICMSXJ دوربین مداربسته تحت شبکه شیائومی مدل</h3>
                    </a>
                    </div>
                  </div>
                </div>
            </div>
            <div class="wishlist grid grid-cols-6 gap-4 py-2">
                <div class="col-span-6 md:col-span-5 ">
                  <div class="product-cart grid grid-cols-12 gap-2 ">
                    <div class="trash-cart col-span-1 md:col-span-1 lg:col-span-1 lg:m-auto relative top-6 md:top-9 lg:top-0">
                      <a href=""><i class="fal fa-trash text-cool-500 hover:text-orange-400"></i></a>
                    </div>
                    <div class="col-span-3 md:col-span-4 lg:col-span-3">
                    <a href="">
                    <img class="pimg-cart w-full border-cool-200 border rounded-lg" src="@/assets/img/product/img-p02.jpg" alt="">
                    </a>
                    </div>
                    <div class="col-span-8 md:col-span-7 lg:col-span-8 my-auto">
                      <a href="">
                      <h3 class="ptitle-cart text-cool-600 text-sm font-normal">B13IMICMSXJ دوربین مداربسته تحت شبکه شیائومی مدل</h3>
                    </a>
                    </div>
                  </div>
                </div>
            </div>
            <div class="wishlist grid grid-cols-6 gap-4 py-2">
                <div class="col-span-6 md:col-span-5 ">
                  <div class="product-cart grid grid-cols-12 gap-2 ">
                    <div class="trash-cart col-span-1 md:col-span-1 lg:col-span-1 lg:m-auto relative top-6 md:top-9 lg:top-0">
                      <a href=""><i class="fal fa-trash text-cool-500 hover:text-orange-400"></i></a>
                    </div>
                    <div class="col-span-3 md:col-span-4 lg:col-span-3">
                    <a href="">
                    <img class="pimg-cart w-full border-cool-200 border rounded-lg" src="@/assets/img/product/img-p02.jpg" alt="">
                    </a>
                    </div>
                    <div class="col-span-8 md:col-span-7 lg:col-span-8 my-auto">
                      <a href="">
                      <h3 class="ptitle-cart text-cool-600 text-sm font-normal">B13IMICMSXJ دوربین مداربسته تحت شبکه شیائومی مدل</h3>
                    </a>
                    </div>
                  </div>
                </div>
            </div>
            <div class="more text-left mb-2">
              <a class=" text-cool-600 text-sm px-3 pb-2 border-cool-600 border-b border-dashed" href="">مشاهده همه</a>
            </div>         
          </div>
          <div class="list-item rounded-lg border border-cool-200 p-3 mt-5">
            <div class="title-section mb-4 relative">
              <h3
                class="title-border relative text-base font-black text-cool-800 inline-block border-b-2 border-cool-800 pb-2 pl-10 "
              >              
              لیست دوره های من
              </h3>
            </div>
            <div class="courses-list h-48 overflow-y-auto">
              <div class="courselist grid grid-cols-6 gap-4 py-2">
                  <div class="col-span-6 md:col-span-6">
                    <div class="product-cart grid grid-cols-12 gap-2 ">
                      <div class="col-span-4 md:col-span-4 lg:col-span-4">
                        <a href="">
                        <img class="pimg-cart w-full border-cool-200 border rounded-lg" src="@/assets/img/product/02.png" alt="">
                        </a>
                      </div>
                      <div class="col-span-8 md:col-span-8 lg:col-span-8 relative">
                        <a href="">
                          <h3 class="ptitle-cart text-cool-600 text-sm font-normal mt-1 md:pl-7">دوره 18 ام صفر تا صد وبمستران هوشمند</h3>
                        </a>
                        <a class="text-xs font-thin text-orange-400 absolute bottom-0 md:bottom-1" href="">
                          دانلود دوره
                        </a>
                      </div>
                    </div>
                  </div>
              </div>
              <div class="courselist grid grid-cols-6 gap-4 py-2">
                  <div class="col-span-6 md:col-span-6">
                    <div class="product-cart grid grid-cols-12 gap-2 ">
                      <div class="col-span-4 md:col-span-4 lg:col-span-4">
                      <a href="">
                      <img class="pimg-cart w-full border-cool-200 border rounded-lg" src="@/assets/img/product/02.png" alt="">
                      </a>
                      </div>
                      <div class="col-span-8 md:col-span-8 lg:col-span-8 relative">
                        <a href="">
                          <h3 class="ptitle-cart text-cool-600 text-sm font-normal mt-1 md:pl-7">دوره 18 ام صفر تا صد وبمستران هوشمند</h3>
                        </a>
                        <a class="text-xs font-thin text-orange-400 absolute bottom-0 md:bottom-1" href="">
                          دانلود دوره
                        </a>
                      </div>
                    </div>
                  </div>
              </div>
              <div class="courselist grid grid-cols-6 gap-4 py-2">
                  <div class="col-span-6 md:col-span-6">
                    <div class="product-cart grid grid-cols-12 gap-2 ">
                      <div class="col-span-4 md:col-span-4 lg:col-span-4">
                      <a href="">
                      <img class="pimg-cart w-full border-cool-200 border rounded-lg" src="@/assets/img/product/02.png" alt="">
                      </a>
                      </div>
                      <div class="col-span-8 md:col-span-8 lg:col-span-8 relative">
                        <a href="">
                          <h3 class="ptitle-cart text-cool-600 text-sm font-normal mt-1 md:pl-7">دوره 18 ام صفر تا صد وبمستران هوشمند</h3>
                        </a>
                        <a class="text-xs font-thin text-orange-400 absolute bottom-0 md:bottom-1" href="">
                          دانلود دوره
                        </a>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="left-dash col-span-12 lg:col-span-6">
          <div class="list-item rounded-lg border border-cool-200 p-3">
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
        </div>
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