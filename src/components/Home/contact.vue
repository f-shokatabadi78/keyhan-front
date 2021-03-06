<template>
    <section class="contact-row">
      <div class="container mx-auto">
        <div
          class="grid grid-cols-12 gap-30 border-cool-100 border shadow-xl rounded-lg"
        >
          <div class="col-span-12 md:col-span-6 p-4">
            <h3 class="font-bold text-xl md:text-2xl">
              سوال دارم و میخوام با شما مشورت کنم
            </h3>
            <p class="font-thin text-xs md:text-base mt-2">
              :)برای اینکه بتونیم کمکت کنیم فرم زیر رو پر کن ،در اسرع وقت باهات
              تماس میگیریم
            </p>
            <div class="form-contact">
              <vs-input
                class="contactform mt-6"
                placeholder="نام و نام خانوادگی"
                v-model="value1"
                size="small"
              />
               <vs-input
                class="contactform mt-3"
                placeholder="شماره تماس شما"
                v-model="value1"
                size="small"
              />
               <vs-input
              class="contactform mt-3"
                placeholder="موضوع مورد سوال شما"
                v-model="value1"
                size="small"
              />
               <div class="mt-3 text-sm">
                <vs-button color="#F97316" type="filled">ثبت درخواست شما</vs-button>

               </div>
            </div>
          </div>
          <div class="col-span-12 md:col-span-6 bg-contact rounded-t-lg rounded-l-lg relative"></div>
        </div>
      </div>
    </section>
</template>