<template>
  <div class="download-profile">
    <mydownload/>
  </div>
</template>
<script>
import Mydownload from "../../../components/profile/mydownload";
export default {
  data() {
    return {
      number1:1,
      colorx:'#F97316'
    };
  },
  components: {
    Mydownload
  },
};
</script>
