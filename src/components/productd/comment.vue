<template>
  <div>
    <section class="title-section mt-24 mb-3 relative">
      <div class="container mx-auto">
        <div class="grid grid-cols-2 gap-30">
          <div class="col-span-2">
            <h3 class="title-border relative text-xl font-black text-cool-800 inline-block border-b-2 border-cool-600 pb-2 pl-5 ">
              نظرات شما
            </h3>
          </div>
        </div>
      </div>
    </section>
    <section class="comment-row">
      <div class="container mx-auto">
        <div class="grid grid-cols-12 gap-30 p-4 rounded-lg rounded-r-none border border-cool-100 text-cool-600">
          <div class="col-span-12 md:col-span-6">
            <comments/>
          </div>
          <div class="col-span-12 md:col-span-6">
            <formcomment/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import formcomment from "../productd/formcomment";
  import Comments from "../product/comments";

  export default {
    name: "comment",
    components: {
      Comments,
      formcomment
    }
  }
</script>

<style scoped>

</style>
