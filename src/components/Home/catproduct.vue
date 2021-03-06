<template>
        <section class="ctg-services py-10 lg:py-16 relative">
      <div class="container mx-auto">
        <div class="grid grid-cols-12 gap-30">
          <div v-for="(c , index) in $props.catpro" class="col-span-6 md:col-span-4 lg:col-span-2 item-category text-center" :key="index" :class="'lg:mt-'+c.mt">
            <a class="link-cat" :href="c.link">
              <div
                class="item-category bg-ff shadow-my rounded-lg text-center px-4 py-8"
              >
                <img
                  class="inline-block"
                  :src="c.img"
                  alt=""
                />
                <h4 class="text-sm font-bold text-cool-600 mt-5">
                  {{c.title}}
                </h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
</template>
<style>
  .ctg-services::before{
    content: "";
    width: 100%;
    height: 500px;
    position: absolute;
    top: 180px;
    background: -moz-linear-gradient(to bottom,#f3f4f6 , #fff) ;
    background: -webkit-linear-gradient(to bottom,#f3f4f6 , #fff) ;
    z-index: -1;
    background: linear-gradient(to bottom,#f3f4f6 , #fff) ;

  }
</style>
<script>
export default {
    props:{
        catpro:{
            type: Array,
        },
    }
}
</script>