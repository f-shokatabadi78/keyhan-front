<template>

  <div class="profile-page">
    <div class="profile">
      <div class="container mx-auto">
        <div class="grid grid-cols-12 md:gap-5 lg:gap-30">
          <div class="col-span-12 md:col-span-4 lg:col-span-3">
           <profile/>
          </div>
          <div class="col-span-12 md:col-span-8 lg:col-span-9">
            <div class="content-profile rounded-lg shadow-p border border-cool-100 p-4 mt-8 relative">
            <router-view />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import profile from "../../components/profile/profile";
  export default {
    components:{
      profile
    }
  }
</script>
