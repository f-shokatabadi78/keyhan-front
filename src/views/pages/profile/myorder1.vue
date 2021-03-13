<template>
  <div class="all-order">
   <detailorder/>
    <orderfactor/>
  </div>
</template>
<script>
import Detailorder from "../../../components/profile/detailorder";
import Orderfactor from "../../../components/profile/factororder";
export default {
  data() {
    return {
      number1:1,
      colorx:'#F97316'
    };
  },
  components: {
    Orderfactor,
    Detailorder
  },
};
</script>
