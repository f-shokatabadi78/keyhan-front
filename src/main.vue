<template>
  <div class="body">
    <vheader> </vheader>
    <router-view />
    <vfooter></vfooter>

  </div>
</template>
<script>
import VHeader from "@/components/Header.vue";
import VFooter from "@/components/Footer.vue";
export default {
  components: {
    vheader: VHeader,
    vfooter: VFooter,
  },
};
</script>
