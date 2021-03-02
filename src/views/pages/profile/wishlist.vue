<template>
  <div class="wishlist-profile">
    <div class="title-section mb-6 relative">
      <h3
        class="title-border relative text-base font-black text-cool-800 inline-block border-b-2 border-cool-800 pb-2 pl-10"
      >              
      لیست علاقه مندی های من
      </h3>
    </div>
    <div class="tab-wishlist">
      <vs-tabs :color="colorx" position="top">
        <vs-tab @click="colorx = '#EF4444'" label="محصولات">
          <div class="con-tab-ejemplo mt-5">
            <!-- <p class="empty-wish mt-5 text-sm text-cool-700"> محصولی هنوز مورد علاقه شما نیست</p> -->
            <div class="grid grid-cols-12 gap-5 p-3">
            <div
                class="item-product col-span-6 md:col-span-6 lg:col-span-3 border border-cool-100 rounded-lg hover:shadow-xl"
              >
              <vs-tooltip text="حذف" position="right">
                <vs-button
                  class="save-product relative block"
                  color="#EF4444"
                  type="flat"
                  icon-pack="fal"
                  icon=" fa-bookmark"    
                ></vs-button>
              </vs-tooltip>
                <div class="img-product">
                  <a class="img-thum" href="">
                    <img src="@/assets/img/product/img-p01.jpg" alt="" />
                  </a>
                </div>
                <div class="title-product px-2 mb-4">
                  <a
                    class="title-p text-cool-800"
                    href=""
                  >
                    <h3 class="text-center font-black text-sm">
                      دوربین مداربسته تحت شبکه شیائومی مدل IMICMSXJ13B
                    </h3>
                  </a>
                </div>
                
            </div>
            <div
                class="item-product col-span-6 md:col-span-6 lg:col-span-3 border border-cool-100 rounded-lg hover:shadow-xl"
              >
              <vs-tooltip text="حذف" position="right">
                <vs-button
                  class="save-product relative block"
                  color="#EF4444"
                  type="flat"
                  icon-pack="fal"
                  icon=" fa-bookmark"    
                ></vs-button>
              </vs-tooltip>
                <div class="img-product">
                  <a class="img-thum" href="">
                    <img src="@/assets/img/product/img-p01.jpg" alt="" />
                  </a>
                </div>
                <div class="title-product px-2 mb-4">
                  <a
                    class="title-p text-cool-800"
                    href=""
                  >
                    <h3 class="text-center font-black text-sm">
                      دوربین مداربسته تحت شبکه شیائومی مدل IMICMSXJ13B
                    </h3>
                  </a>
                </div>
                
            </div>
            <div
                class="item-product col-span-6 md:col-span-6 lg:col-span-3 border border-cool-100 rounded-lg hover:shadow-xl"
              > 
              <vs-tooltip text="حذف" position="right">
                <vs-button
                  class="save-product relative block"
                  color="#EF4444"
                  type="flat"
                  icon-pack="fal"
                  icon=" fa-bookmark"    
                ></vs-button>
              </vs-tooltip>
                <div class="img-product">
                  <a class="img-thum" href="">
                    <img src="@/assets/img/product/img-p01.jpg" alt="" />
                  </a>
                </div>
                <div class="title-product px-2 mb-4">
                  <a
                    class="title-p text-cool-800"
                    href=""
                  >
                    <h3 class="text-center font-black text-sm">
                      دوربین مداربسته تحت شبکه شیائومی مدل IMICMSXJ13B
                    </h3>
                  </a>
                </div>
                
            </div>
            <div
                class="item-product col-span-6 md:col-span-6 lg:col-span-3 border border-cool-100 rounded-lg hover:shadow-xl "
              >
              <vs-tooltip text="حذف" position="right">
                <vs-button
                  class="save-product relative block"
                  color="#EF4444"
                  type="flat"
                  icon-pack="fal"
                  icon=" fa-bookmark"    
                ></vs-button>
              </vs-tooltip>
                <div class="img-product">
                  <a class="img-thum" href="">
                    <img src="@/assets/img/product/img-p01.jpg" alt="" />
                  </a>
                </div>
                <div class="title-product px-2 mb-4">
                  <a
                    class="title-p text-cool-800"
                    href=""
                  >
                    <h3 class="text-center font-black text-sm">
                      دوربین مداربسته تحت شبکه شیائومی مدل IMICMSXJ13B
                    </h3>
                  </a>
                </div>
                
            </div>
            <div
                class="item-product col-span-6 md:col-span-6 lg:col-span-3 border border-cool-100 rounded-lg hover:shadow-xl"
              >
              <vs-tooltip text="حذف" position="right">
                <vs-button
                  class="save-product relative block"
                  color="#EF4444"
                  type="flat"
                  icon-pack="fal"
                  icon=" fa-bookmark"    
                ></vs-button>
              </vs-tooltip>
                <div class="img-product">
                  <a class="img-thum" href="">
                    <img src="@/assets/img/product/img-p01.jpg" alt="" />
                  </a>
                </div>
                <div class="title-product px-2 mb-4">
                  <a
                    class="title-p text-cool-800"
                    href=""
                  >
                    <h3 class="text-center font-black text-sm">
                      دوربین مداربسته تحت شبکه شیائومی مدل IMICMSXJ13B
                    </h3>
                  </a>
                </div>
                
            </div>
            </div>

          </div>
        </vs-tab>
        <vs-tab label="دوره ها">
          <div class="con-tab-ejemplo mt-5">
            <!-- <p class="empty-wish my-5 text-sm text-cool-700"> دوره ای مورد علاقه شما نیست</p> -->
            <div class="grid grid-cols-12 gap-5 px-3 pb-10 pt-3">
              <div
                class="item-course col-span-6 md:col-span-6 lg:col-span-3 border border-cool-100 rounded-lg hover:shadow-xl relative overflow-hidden"
              >
               <vs-button
                  class="save-product"
                  color="#EF4444"
                  type="flat"
                  icon-pack="fal"
                  icon=" fa-bookmark"    
                ></vs-button>
                <div class="img-course">
                  <a class="img-thum" href="">
                    <img src="@/assets/img/product/02.png" alt="" />
                  </a>
                </div>
                <div class="title-course px-4 my-4 h-13 overflow-hidden">
                  <a class="title-p text-cool-800" href="">
                    <h3 class="text-right font-black text-sm">
                      ۰ تا ۱۰۰ آموزش کسب و کار اینترنتی، دوره جامع وبمستران
                      هوشمند
                    </h3>
                  </a>
                </div>
              </div>
              <div
                class="item-course col-span-6 md:col-span-6 lg:col-span-3 border border-cool-100 rounded-lg hover:shadow-xl relative overflow-hidden"
              >
               <vs-button
                  class="save-product"
                  color="#EF4444"
                  type="flat"
                  icon-pack="fal"
                  icon=" fa-bookmark"    
                ></vs-button>
                <div class="img-course">
                  <a class="img-thum" href="">
                    <img src="@/assets/img/product/02.png" alt="" />
                  </a>
                </div>
                <div class="title-course px-4 my-4 h-13 overflow-hidden">
                  <a class="title-p text-cool-800" href="">
                    <h3 class="text-right font-black text-sm">
                      ۰ تا ۱۰۰ آموزش کسب و کار اینترنتی، دوره جامع وبمستران
                      هوشمند
                    </h3>
                  </a>
                </div>
              </div>
              <div
                class="item-course col-span-6 md:col-span-6 lg:col-span-3 border border-cool-100 rounded-lg hover:shadow-xl relative overflow-hidden"
              >
               <vs-button
                  class="save-product"
                  color="#EF4444"
                  type="flat"
                  icon-pack="fal"
                  icon=" fa-bookmark"    
                ></vs-button>
                <div class="img-course">
                  <a class="img-thum" href="">
                    <img src="@/assets/img/product/02.png" alt="" />
                  </a>
                </div>
                <div class="title-course px-4 my-4 h-13 overflow-hidden">
                  <a class="title-p text-cool-800" href="">
                    <h3 class="text-right font-black text-sm">
                      ۰ تا ۱۰۰ آموزش کسب و کار اینترنتی، دوره جامع وبمستران
                      هوشمند
                    </h3>
                  </a>
                </div>
              </div>
              <div
                class="item-course col-span-6 md:col-span-6 lg:col-span-3 border border-cool-100 rounded-lg hover:shadow-xl relative overflow-hidden"
              >
               <vs-button
                  class="save-product"
                  color="#EF4444"
                  type="flat"
                  icon-pack="fal"
                  icon=" fa-bookmark"    
                ></vs-button>
                <div class="img-course">
                  <a class="img-thum" href="">
                    <img src="@/assets/img/product/02.png" alt="" />
                  </a>
                </div>
                <div class="title-course px-4 my-4 h-13 overflow-hidden">
                  <a class="title-p text-cool-800" href="">
                    <h3 class="text-right font-black text-sm">
                      ۰ تا ۱۰۰ آموزش کسب و کار اینترنتی، دوره جامع وبمستران
                      هوشمند
                    </h3>
                  </a>
                </div>
              </div>
              <div
                class="item-course col-span-6 md:col-span-6 lg:col-span-3 border border-cool-100 rounded-lg hover:shadow-xl relative overflow-hidden"
              >
               <vs-button
                  class="save-product"
                  color="#EF4444"
                  type="flat"
                  icon-pack="fal"
                  icon=" fa-bookmark"    
                ></vs-button>
                <div class="img-course">
                  <a class="img-thum" href="">
                    <img src="@/assets/img/product/02.png" alt="" />
                  </a>
                </div>
                <div class="title-course px-4 my-4 h-13 overflow-hidden">
                  <a class="title-p text-cool-800" href="">
                    <h3 class="text-right font-black text-sm">
                      ۰ تا ۱۰۰ آموزش کسب و کار اینترنتی، دوره جامع وبمستران
                      هوشمند
                    </h3>
                  </a>
                </div>
              </div>
              <div
                class="item-course col-span-6 md:col-span-6 lg:col-span-3 border border-cool-100 rounded-lg hover:shadow-xl relative overflow-hidden"
              >
               <vs-button
                  class="save-product"
                  color="#EF4444"
                  type="flat"
                  icon-pack="fal"
                  icon=" fa-bookmark"    
                ></vs-button>
                <div class="img-course">
                  <a class="img-thum" href="">
                    <img src="@/assets/img/product/02.png" alt="" />
                  </a>
                </div>
                <div class="title-course px-4 my-4 h-13 overflow-hidden">
                  <a class="title-p text-cool-800" href="">
                    <h3 class="text-right font-black text-sm">
                      ۰ تا ۱۰۰ آموزش کسب و کار اینترنتی، دوره جامع وبمستران
                      هوشمند
                    </h3>
                  </a>
                </div>
              </div>
            </div>
           
            
          </div>
        </vs-tab>
      </vs-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      number1:1,
      colorx:'#EF4444'
    };
  },
  components: {
  },
};
</script>