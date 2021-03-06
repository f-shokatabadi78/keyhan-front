<template>
    <section class="comment-row">
      <div class="container mx-auto">
        <div class="grid grid-cols-12 gap-30 p-4 rounded-lg rounded-r-none border border-cool-100 text-cool-600">
          <div class="col-span-12 md:col-span-6">
            <div class="comment-item level-1 relative grid md:grid-cols-5 gap-4 rounded-lg bg-cool-100 p-4">
              <div class="img-comment md:col-span-1">
                <img class="inline-block rounded-lg" src="@/assets/img/product/avatar.jpg" alt="">
              </div>
              <div class="info-comment md:col-span-4">
                <h5 class="inline-block text-base font-bold">تکتم حیدرزاده</h5>
                <p class="commment-text text-sm font-thin mt-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و </p>
                <a class="reply absolute top-3 left-3 text-cool-500 hover:text-orange-500" href=""><i class="fal fa-reply"></i></a>
              </div>
            </div>
            <div class="comment-item level-2 relative grid md:grid-cols-5 gap-4 rounded-lg bg-cool-100 p-4 mr-10 mt-3">
              <div class="img-comment md:col-span-1">
                <img class="inline-block rounded-lg" src="@/assets/img/product/avatar.jpg" alt="">
              </div>
              <div class="info-comment md:col-span-4">
                <h5 class="inline-block text-base font-bold">تکتم حیدرزاده</h5>
                <p class="commment-text text-sm font-thin mt-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و </p>
                <a class="reply absolute top-3 left-3 text-cool-500 hover:text-orange-500" href=""><i class="fal fa-reply"></i></a>
              </div>
            </div>
             <div class="comment-item level-3 relative grid md:grid-cols-5 gap-4 rounded-lg bg-cool-100 p-4 mr-10 mt-3">
               <div class="opacity-comment opacity-50 border-cool-400 border-b pb-4 border-dashed col-span-5 grid grid-cols-5 gap-15">
                  <div class="img-comment col-span-1">
                    <img class="inline-block rounded-lg image-comment" src="@/assets/img/product/avatar.jpg" alt="">
                  </div>
                  <div class="info-comment col-span-4">
                    <h5 class="inline-block text-base font-bold">تکتم حیدرزاده</h5>
                    <p class="commment-text text-sm font-thin mt-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و </p>
                  </div>
               </div>
               
               <div class="comment-item relative col-span-5 grid md:grid-cols-5 gap-4 rounded-lg bg-cool-100">
              <div class="img-comment md:col-span-1">
                <img class="inline-block rounded-lg" src="@/assets/img/product/avatar.jpg" alt="">
              </div>
              <div class="info-comment md:col-span-4">
                <h5 class="inline-block text-base font-bold">تکتم حیدرزاده</h5>
                <p class="commment-text text-sm font-thin mt-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و </p>
                <a class="reply absolute top-0 left-0 text-cool-500 hover:text-orange-500" href=""><i class="fal fa-reply"></i></a>
              </div>
            </div>
              
            </div>
            <div class="paganition mt-5 mx-auto">
                  <vs-pagination :total="12" icon-pack="fal" 
                  prev-icon="fa-arrow-right" next-icon="fa-arrow-left" :color="colorx" v-model="currentx"></vs-pagination>
            </div>
          </div>
          <div class="col-span-12 md:col-span-6">
            <div class="form-contact">
              <vs-input
                class="contactform"
                placeholder="نام و نام خانوادگی"
                v-model="value1"
                size="small"
              />
               <vs-input
                class="contactform mt-3"
                placeholder="پست الکترونیک شما"
                v-model="value1"
                size="small"
              />
              <vs-textarea  class="contactform mt-3" label="دیدگـــاه شما" height="200px" />
               <div class="mt-3 text-sm">
                <vs-button color="#F97316" type="filled">ثبت نظـــر شما</vs-button>
               </div>
            </div>
          
          </div>
        </div>
      </div>
    </section>
</template>
<script>
export default {
    data(){
        return{
            colorx: '#F97316',
            currentx: 5,
        }
}
}
</script>