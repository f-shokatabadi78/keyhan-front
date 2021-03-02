<template>
    <div class="content-form">
        <h3 class="font-bold text-cool-700 text-lg">کد تایید را وارد کنید</h3>
        <p class="text-sm text-cool-500 font-thin mt-3">شما حساب کاربری ندارید  و در حال ایجاد حساب کاربری هستید</p>
        <vs-input
                class="contactform mt-6"
                placeholder=" "
                v-model="value1"
                size="large"
        />
        <vs-button class="mt-5 mx-auto block" color="#F97316" type="filled">ارسال کد</vs-button>
        <p class="text-xs text-cool-500 font-thin mt-8 text-center">با ورود و یا ثبت نام در وبسایت ما شما شرایط و قوانین استفاده از سرویس های سایت ما و قوانین حریم خصوصی آن را می‌پذیرید. </p>
    </div>
</template>