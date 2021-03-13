<template>
  <div class="address-profile">
    <div class="title-section mb-6 relative">
        <h3
          class="title-border relative text-base font-black text-cool-800 inline-block border-b-2 border-cool-800 pb-2 pl-10"
        >
        افزودن و ویرایش آدرس ها
        </h3>
    </div>
     <div class="checkout-area rounded-lg border border-cool-200 px-5 pb-6">
             <editaddress/>
            </div>
  </div>
</template>
<script>
import Editaddress from "../../../components/profile/editaddress";
export default {
  data() {
    return {
      number1:1,
      number2:1,
      radios1:'primary',
      radios2:'primary',
      radios3:'primary',
      value1:"",
      value2:"",
      value3:"",
      value4:"",
      value6:"",
      popupActivo:false,

      select1Normal:'',
      select1:2,
      select2:3,

      options1:[
      {text:'خراسان جنوبی',value:0},
      {text:'خراسان رضوی',value:2},
      {text:'خراسان شمالی',value:3},
      ],
      options2:[
      {text:'خراسان جنوبی',value:0},
      {text:'خراسان رضوی',value:2},
      {text:'خراسان شمالی',value:3},
      ],
    };
  },
  components: {
    Editaddress
  },
};
</script>
