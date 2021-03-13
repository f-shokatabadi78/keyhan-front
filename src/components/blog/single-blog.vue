<template>
    <section class="blog-row">
      <div class="container mx-auto">
        <div class=" grid grid-cols-12 gap-5 md:gap-30">
          <article v-for="(blog , index ) in $props.singleblogprops" :key="index"
            class="col-span-6 md:col-span-4 lg:col-span-3 overflow-hidden item-blog border border-cool-100 rounded-lg hover:shadow-xl mb-5">
            <div class="img-blog">
                <a class="img-thum" :href="blog.href">
                <img :src="blog.img" alt="" />
                </a>
            </div>
            <div class="title-blog px-4 my-4 h-13 overflow-hidden">
                <a class="title-blog text-cool-800" href="">
                <h3 class="text-right font-black text-sm">
                    {{blog.title}}
                </h3>
                </a>
            </div>
            <div class="des-course px-4 pb-4 h-15 overflow-hidden ">
                <p class="text-xs text-cool-600 font-thin text-right">
                {{blog.desc}}
                </p>
            </div>
          </article>
        </div>

      </div>
    </section>
</template>
<script>
export default {
    props:{
        singleblogprops:{
            type: Array,
        }
    },
  components: {
  },
};
</script>
