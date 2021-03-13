<template>
    <div>
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
      <div class="vote-area border border-cool-200 rounded-lg p-3 mt-4 grid grid-cols-4 gap-4 md:gap-30">
        <div class="col-span-4 lg:col-span-3">
          <h3 >
            امتیاز خودتان را در مورد این محصول ثبت کنید
          </h3>
        </div>
        <div class="col-span-4 text-center lg:col-span-1">
                    <span class="starRating ml-2">
                        <input id="rating5" type="radio" name="rating" value="5">
                        <label for="rating5">5</label>
                        <input id="rating4" type="radio" name="rating" value="4">
                        <label for="rating4">4</label>
                        <input id="rating3" type="radio" name="rating" value="3">
                        <label for="rating3">3</label>
                        <input id="rating2" type="radio" name="rating" value="2">
                        <label for="rating2">2</label>
                        <input id="rating1" type="radio" name="rating" value="1">
                        <label for="rating1">1</label>
                    </span>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "formcomment"
    }
</script>

<style scoped>

</style>
