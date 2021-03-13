<template>
    <div>
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
</template>

<script>
    export default {
        name: "editaddress"
    }
</script>

<style scoped>

</style>
