<template>
  <div class="cart-page">
    <section class="cart-itemes">
      <div class="container mx-auto">
        <div class="grid grid-cols-12 gap-30">
          <div class="col-span-12 lg:col-span-9">
           <Address/>
          </div>
          <div class="col-span-12 lg:col-span-3">
            <navbar/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import Navbar from "../../components/checkout/navbar";
  import Address from "../../components/checkout/address";

  export default {
    data() {
      return {
        number1: 1,
        number2: 1,
        radios1: 'primary',
        radios2: 'primary',
        radios3: 'primary',
        value1: "",
        value2: "",
        value3: "",
        value4: "",
        value6: "",
        popupActivo: false,

        select1Normal: '',
        select1: 2,
        select2: 3,

        options1: [
          {text: 'خراسان جنوبی', value: 0},
          {text: 'خراسان رضوی', value: 2},
          {text: 'خراسان شمالی', value: 3},
        ],
        options2: [
          {text: 'خراسان جنوبی', value: 0},
          {text: 'خراسان رضوی', value: 2},
          {text: 'خراسان شمالی', value: 3},
        ],
      };
    },
    components: {
      Address,
      Navbar
    },
  };
</script>
