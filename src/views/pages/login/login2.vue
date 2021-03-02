<template>
    <div class="content-form">
        <h3 class="font-bold text-cool-700 text-lg">رمز عبور را وارد کنید</h3>
        <p class="text-sm text-cool-500 font-thin mt-3"> برای ورود به حساب کاربری رمز عبور خود را وارد کنید</p>
        <vs-input
                class="contactform mt-6"
                placeholder="رمز عبور ارسال شده را وارد کنید"
                v-model="value1"
                size="large"
                icon-pack="fal"
                icon="fa-eye"
                icon-after= "true"
        />        
        <vs-button class="mt-5 mx-auto block" color="#F97316" type="filled"> برو بــعــدی</vs-button>
        <div class="fp-link mt-5">
            <a class="text-blue-400 text-xs hover:text-blue-600" href=""> رمز عبور خود را فراموش کرده ام</a>
        </div>
    </div>
</template>