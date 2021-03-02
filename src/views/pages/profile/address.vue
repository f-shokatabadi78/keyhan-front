<template>
  <div class="address-profile">
    <div class="title-section mb-6 relative">
        <h3
          class="title-border relative text-base font-black text-cool-800 inline-block border-b-2 border-cool-800 pb-2 pl-10"
        >              
        افزودن و ویرایش آدرس ها
        </h3>
    </div>
     <div class="checkout-area rounded-lg border border-cool-200 px-5 pb-6">
              <div class="add-address bg-cool-200 rounded-lg m-auto text-center p-5 mt-5" @click="popupActivo=true">
                <i class="fal fa-map-marker-plus text-9xl text-cool-500"></i>
                <h3 class="mt-3 text-cool-500 font-bold">افزودن آدرس جدید</h3>
              </div>
              <vs-popup class="address-popup"  title="اطلاعات خود را وارد کنید"   :active.sync="popupActivo" icon-pack="fal" icon-close="fa-times">
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
                  <div class="youraddress col-span-2">
                    <vs-input size="default" placeholder=" آدرس پستی شما" v-model="value4" />
                  </div>
                   <div class="codeposti col-span-1">
                    <vs-input size="default" placeholder=" کد پستی ده رقمی" v-model="value4" />
                  </div>
                  <div class="codeposti col-span-1">
                    <vs-input size="default" placeholder=" ایمیل" v-model="value6" />
                  </div>
                  <div class="note-address col-span-2" >
                    <vs-textarea label="یادداشت" v-model="textarea"  />
                  </div>

                </div>
              </vs-popup>
              <div class="addreses grid grid-cols-12 gap-5 mt-5 ">
                <div class="col-span-12 lg:col-span-4">
                  <div class="block-btn text-right text-sm p-3 border border-cool-200 bg-ff rounded-lg text-cool-600">
                    <div class="name">تکتم حیدرزاده</div>
                    <div class="address">خراسان جنوبی - بیرجند- خیابان مطهری - مطهری 5 پلاک15</div>
                    <div class="codeposti">1234569875</div>
                    <div class="phone">09150848985</div>
                    <div class="edite-add text-left mt-5">
                      <div class="remove inline-block">
                        <vs-button color="#4B5563" type="flat">حــــذف</vs-button>
                      </div>
                      <div class="edite inline-block mr-2">
                        <vs-button color="#4B5563" type="border" @click="popupActivo=true">ویـــرایش</vs-button>
                      </div>
                    </div>
                    
                  </div>
                </div>
                <div class="col-span-12 lg:col-span-4">
                  <div class="block-btn text-right text-sm p-3 border border-cool-200 bg-ff rounded-lg text-cool-600">
                    <div class="name">تکتم حیدرزاده</div>
                    <div class="address">خراسان جنوبی - بیرجند- خیابان مطهری - مطهری 5 پلاک15</div>
                    <div class="codeposti">1234569875</div>
                    <div class="phone">09150848985</div>
                    <div class="edite-add text-left mt-5">
                      <div class="remove inline-block">
                        <vs-button color="#4B5563" type="flat">حــــذف</vs-button>
                      </div>
                      <div class="edite inline-block mr-2">
                        <vs-button color="#4B5563" type="border" @click="popupActivo=true">ویـــرایش</vs-button>
                      </div>
                    </div>
                    
                  </div>
                </div>
                <div class="col-span-12 lg:col-span-4">
                  <div class="block-btn text-right text-sm p-3 border border-cool-200 bg-ff rounded-lg text-cool-600">
                    <div class="name">تکتم حیدرزاده</div>
                    <div class="address">خراسان جنوبی - بیرجند- خیابان مطهری - مطهری 5 پلاک15</div>
                    <div class="codeposti">1234569875</div>
                    <div class="phone">09150848985</div>
                    <div class="edite-add text-left mt-5">
                      <div class="remove inline-block">
                        <vs-button color="#4B5563" type="flat">حــــذف</vs-button>
                      </div>
                      <div class="edite inline-block mr-2">
                        <vs-button color="#4B5563" type="border" @click="popupActivo=true">ویـــرایش</vs-button>
                      </div>
                    </div>
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
      number2:1,
      radios1:'primary',
      radios2:'primary',
      radios3:'primary',
      value1:"",
      value2:"",
      value3:"",
      value4:"",
      value6:"",
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