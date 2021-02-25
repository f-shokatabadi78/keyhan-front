<template>
  <div class="cart-page">
    <section class="cart-itemes">
      <div class="container mx-auto">
        <div class="grid grid-cols-12 gap-30">
          <div class="col-span-12 lg:col-span-9">
            <div class="title-section mt-3 mb-2 relative">
              <h3
                class="title-border relative text-xl font-black text-cool-800 inline-block border-b-2 border-cool-800 pb-2 pl-5 "
              >
                <i class="fal fa-credit-card-front text-3xl relative top-3"></i>
                آدرس ها و فاکتورها
              </h3>
            </div>
            <div class="checkout-area rounded-lg border border-cool-200 px-5 pb-6">
              <div class="add-address bg-cool-300 rounded-lg m-auto text-center p-5 mt-5" @click="popupActivo=true">
                <i class="fal fa-map-marker-plus text-9xl text-cool-500"></i>
                <h3 class="mt-3 text-cool-500 font-bold">افزودن آدرس جدید</h3>
              </div>
              <vs-popup class="address-popup"  title="اطلاعات خود را وارد کنید" :active.sync="popupActivo" icon-pack="fal" icon-close="fa-times">
                <div class="grid grid-cols-2 gap-5">
                  <div class="first-name col-span-1 md:col-span-1">
                    <vs-input size="default" placeholder="تکتم" v-model="value2" />
                  </div>
                  <div class="last-name col-span-1">
                    <vs-input size="default" placeholder="حیدرزاده" v-model="value1" />
                  </div>
                  <div class="mobile-num col-span-1">
                    <vs-input size="default" placeholder=" 09150760345" v-model="value3" />
                  </div>
                   <div class="phone-num col-span-1">
                    <vs-input size="default" placeholder=" شماره تماس ثابت" v-model="value4" />
                  </div>
                  <div class="ostan">
                    <vs-select
                      class="selectostan"
                      label="استان"
                      v-model="select1"
                      icon="fa-arrow-down" 
                      icon-pack="fal"
                      width="100%"
                      >
                      <vs-select-item   :key="index" :value="item.value" :text="item.text" v-for="item,index in options1" />
                    </vs-select>
                  </div>
                    <div class="city">
                    <vs-select
                      class="selectcity"
                      label="شهرستان"
                      v-model="select2"
                      icon="fa-arrow-down" 
                      icon-pack="fal"
                      width="100%"
                      >
                      <vs-select-item   :key="index" :value="item.value" :text="item.text" v-for="item,index in options2" />
                    </vs-select>
                  </div>
                  <div class="lyouraddress col-span-2">
                    <vs-input size="default" placeholder=" آدرس پستی شما" v-model="value4" />
                  </div>
                   <div class="codeposti col-span-2">
                    <vs-input size="default" placeholder=" کد پستی ده رقمی" v-model="value4" />
                  </div>
                  <div class="note-address col-span-2" >
                    <vs-textarea label="یادداشت" v-model="textarea"  />
                  </div>

                </div>
              </vs-popup>
              <div class="addreses grid grid-cols-12 gap-5 md:gap-30 mt-5 ">
                <div class="col-span-12 md:col-span-4">
                  <vs-button class="block-btn text-right text-sm" color="#4B5563" type="border">
                    <div class="name">تکتم حیدرزاده</div>
                    <div class="address">خراسان جنوبی - بیرجند- خیابان مطهری - مطهری 5 پلاک15</div>
                    <div class="codeposti">1234569875</div>
                    <div class="phone">09150848985</div>
                  </vs-button>
                </div>
                <div class="col-span-12 md:col-span-4">
                  <vs-button class="block-btn text-right text-sm" color="#4B5563" type="border">
                    <div class="name">تکتم حیدرزاده</div>
                    <div class="address">خراسان جنوبی - بیرجند- خیابان مطهری - مطهری 5 پلاک15</div>
                    <div class="codeposti">1234569875</div>
                    <div class="phone">09150848985</div>
                  </vs-button>
                </div>
                <div class="col-span-12 md:col-span-4">
                  <vs-button class="block-btn text-right text-sm" color="#4B5563" type="border">
                    <div class="name">تکتم حیدرزاده</div>
                    <div class="address">خراسان جنوبی - بیرجند- خیابان مطهری - مطهری 5 پلاک15</div>
                    <div class="codeposti">1234569875</div>
                    <div class="phone">09150848985</div>
                  </vs-button>
                </div>
              </div>
              
            </div>
           
          </div>
          <div class="col-span-12 lg:col-span-3">
            <div
              class="sidebar-product rounded-lg border border-cool-200 p-5 lg:mt-16 relative"
            >
            <div class="price-checkout h-7">
              <span class="cart-kalaha text-cool-600 text-sm font-normal float-right mt-0.5">
                جمع سبد خرید</span
              >
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
            <div
              class="sidebar-product rounded-lg border border-cool-200 p-5 mt-5 relative"
            >
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
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      number1:1,
      number2:1,
      radios1:'primary',
      radios2:'primary',
      radios3:'primary',
      value1:"",
      value2:"",
      value3:"",
      value4:"",
      popupActivo:false,

      select1Normal:'',
      select1:2,
      select2:3,
     
      options1:[
      {text:'خراسان جنوبی',value:0},
      {text:'خراسان رضوی',value:2},
      {text:'خراسان شمالی',value:3},
      ],
      options2:[
      {text:'خراسان جنوبی',value:0},
      {text:'خراسان رضوی',value:2},
      {text:'خراسان شمالی',value:3},
      ],
    };
  },
  components: {
  },
};
</script>