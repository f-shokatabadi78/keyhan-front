<template>
    <div>
      <div class="area-account grid grid-cols-12 gap-5">
        <div class="right-info col-span-12 lg:col-span-6">
          <div class="title-section mb-6 relative">
            <h3
              class="title-border relative text-base font-black text-cool-800 inline-block border-b-2 border-cool-800 pb-2 pl-10"
            >
              ویرایش حساب من
            </h3>
          </div>
          <div class="form-info">
            <div class="grid grid-cols-2 gap-5">
              <div class="first-name col-span-2 md:col-span-1">
                <vs-input size="default" placeholder="تکتم" v-model="value2" />
              </div>
              <div class="last-name col-span-2 md:col-span-1">
                <vs-input size="default" placeholder="حیدرزاده" v-model="value1" />
              </div>
              <div class="mobile-num col-span-2 md:col-span-1">
                <vs-input size="default" placeholder=" تلفن همراه" v-model="value3" />
              </div>
              <div class="phone-num col-span-2 md:col-span-1">
                <vs-input size="default" placeholder=" شماره تماس ثابت" v-model="value4" />
              </div>
              <div class="email-p col-span-2 md:col-span-1">
                <vs-input size="default" placeholder=" ایمیل" v-model="value4" />
              </div>
              <div class="codemelli col-span-2 md:col-span-1">
                <vs-input size="default" placeholder=" کد ملی  " v-model="value4" />
              </div>
              <div class="avatar-profile col-span-2" >
                <vs-upload icon-pack="fal" icon="fa-shopping-cart" limit="1" text="آپلود تصویر پروفایل" action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" />
              </div>
              <div class="send-btn col-span-2">
                <vs-button color="#F97316" type="filled"> ثبت ویرایش حساب </vs-button>
              </div>
            </div>
          </div>
        </div>
        <div class="left-info col-span-12 lg:col-span-6">
          <div class="title-section mb-6 relative">
            <h3
              class="title-border relative text-base font-black text-cool-800 inline-block border-b-2 border-cool-800 pb-2 pl-10"
            >
              تغییر رمز عبور
            </h3>
          </div>
          <div class="grid grid-cols-2 gap-5">
            <div class="first-name col-span-2">
              <vs-input class="w-auto block" size="default" placeholder="رمز عبور کنونی" v-model="value2" />
            </div>
            <div class="last-name col-span-2">
              <vs-input size="default" placeholder="رمز عبور جدید" v-model="value1" />
            </div>
            <div class="mobile-num col-span-2">
              <vs-input size="default" placeholder=" تکرار رمز عبور جدید" v-model="value3" />
            </div>
            <div class="btn-send col-span-2">
              <vs-button color="#6B7280" type="border">ثبت رمز عبور</vs-button>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "editmyaccount"
    }
</script>

<style scoped>

</style>
