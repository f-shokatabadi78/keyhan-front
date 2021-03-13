<template>
  <div class="cart-page">
    <section class="cart-itemes">
      <div class="container mx-auto">
        <div class="grid grid-cols-12 gap-30">
          <div class="col-span-12 lg:col-span-9">
              <cart/>
          </div>
          <div class="col-span-12 lg:col-span-3">
              <sidbar/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import cart from '../../components/cart/cart'
  import Sidbar from "../../components/cart/sidbar";
export default {
  data() {
    return {
      number1:1,
      number2:1,
    };
  },
  components: {
    Sidbar,
    cart
  },
};
</script>
