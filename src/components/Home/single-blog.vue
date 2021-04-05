<template>
<div class=" grid grid-cols-12 gap-5 md:gap-4">
<article v-for="(blog , index ) in $props.singleblogprops" :key="index"
class=" overflow-hidden item-blog border border-cool-100 rounded-lg hover:shadow-xl mb-5 col-span-6 " :class="'md:col-span-'+blog.responsivMd +' lg:col-span-'+blog.responsivLg" 
>
<div class="img-blog">
    <a class="img-thum" :href="blog.href">
    <img :src="blog.img" alt="" />
    </a>
</div>
<div class="title-blog px-4 my-4 h-13 overflow-hidden">
    <a class="title-blog text-cool-800" href="">
    <h3 class="text-right font-black text-xs md:text-sm">
        {{blog.title}}
    </h3>
    </a>
</div>
<div class="des-course px-4 pb-4 h-15 overflow-hidden ">
    <p class="hidden md:block text-xs text-cool-600 font-thin text-right">
    {{blog.desc}}
    </p>
</div>
</article>
</div>


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