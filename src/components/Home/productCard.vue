<template>
    <div class="item-product border border-cool-100 rounded-lg hover:shadow-xl mb-10 mt-2"
              >
                <vs-button
                  class="save-product"
                  color="#D1D5DB"
                  type="flat"
                  icon-pack="fal"
                  icon=" fa-bookmark"
                ></vs-button>
                <div class="img-product">
                  <a class="img-thum" :href="ps.href">
                    <img :src="ps.img" alt="" />
                  </a>
                </div>
                <div class="title-product px-2 mb-4">
                  <a
                    class="title-p text-cool-800 hover:text-orange-600"
                    :href="ps.href"
                  >
                    <h3 class="text-center font-black text-sm">
                      {{ps.title}}
                    </h3>
                  </a>
                </div>
                <div v-if="ps.status==1"  class="price-product px-4 pb-4 h-16 ">
                  <div class="price-old">
                    <span
                      class="value-discount bg-red-600 text-cool-50 text-sm px-2 rounded-xl"
                    >
                      {{ps.discount}}</span
                    >
                    <del
                      class="value-old text-sm text-cool-400 line-through mx-1"
                    >
                      {{ps.oldprice}}</del
                    >
                  </div>
                  <div class="price-new">
                    <div class="price-new-area relative">
                      <span class="unit-price text-xs absolute top-1 left-0"
                        >تومان</span
                      >
                      <ins class="text-base font-medium ml-9">{{ps.newprice}}</ins>
                    </div>
                  </div>
                </div>

                <div v-if="ps.status==2" class="null-stock px-4 pb-4 h-16 ">
                  <p
                    class="tag-stock text-center m-auto text-cool-400 relative top-3"
                  >
                   {{ps.text}}
                  </p>
                </div>

                <div v-if="ps.status==3"  class="price-product px-4 pb-4 h-16 ">
                  <div class="price-final text-center pl-4">
                    <div class="area-price relative top-3">
                      <ins class="text-base font-medium ml-5">{{ps.price}}</ins>
                      <span class="unit-price text-xs absolute top-1 left-0 md:left-4 lg:left-7"
                        >تومان</span
                      >
                    </div>
                  </div>
                </div>

                <div v-if="ps.status==4"  class="show-product text-center px-4 pb-4 h-16 ">
                  <vs-button
                    class="show-product-btn text-sm"
                    color="#F97316"
                    type="border"
                    :href="ps.href"
                  >
                    مشاهـــــده جزئیات</vs-button
                  >
                </div>
              </div>
</template>
<script>
export default {
    name:"product-card",
    props:{
        psdata:{
        required:true
        }
    },
    data(){
        return {
            ps:{}
        }
    },
    created(){
        this.ps = this.$props.psdata
    }
}
</script>