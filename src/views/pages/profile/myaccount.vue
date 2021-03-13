<template>
  <div class="myaccount-profile">
<editmyaccount/>
  </div>
</template>
<script>
import Editmyaccount from "../../../components/profile/editmyaccount";
export default {
  methods:{
    successUpload(){
      this.$vs.notify({color:'success',title:'آپلود',text:'Lorem ipsum dolor sit amet, consectetur'})
    }
  },
  data() {
    return {
      number1:1,
      colorx:'#F97316'
    };
  },

  components: {
    Editmyaccount
  },
};
</script>
