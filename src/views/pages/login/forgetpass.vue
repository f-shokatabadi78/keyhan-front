<template>
    <div class="content-form">
        <h3 class="font-bold text-cool-700 text-lg">کد تایید را وارد کنید</h3>
        <p class="text-sm text-cool-500 font-thin mt-3"> کد تایید به <span>شماره همراه</span> <span>09120760345</span> ارسال گردید. </p>
        <vs-input
                class="contactform mt-6"
                placeholder=" کد ارسال شده را وارد کنید"
                v-model="value1"
                size="large"
                icon-pack="fal"
                icon="fa-eye"
                icon-after= "true"
        />        
        <vs-button class="mt-5 mx-auto block" color="#F97316" type="filled"> ادامــــــــه</vs-button>
        
    </div>
</template>