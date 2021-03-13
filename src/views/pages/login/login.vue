<template>
    <div class="login-page bg-cool-200 lg:bg-ff">
        <div class="container mx-auto ">
            <div class="grid grid-cols-12 gap-30 relative z-10">
                <div class="hidden md:block  md:col-span-3 lg:col-span-4" ></div>
                <div class="col-span-12 md:col-span-6 lg:col-span-4 h-screen my-auto grid content-center md:mt-16 lg:mt-0" >
                    <div class="content-logon bg-ff border border-cool-100 shadow-xl rounded-lg p-5 ">
                        <div class="col-span-3 text-center">
                            <div class="img-login border border-cool-100 shadow-lg inline-block p-3 rounded-full -mt-20 bg-ff mb-8">
                                <a href="">
                                    <img src="@/assets/img/logo.svg" alt="">
                                </a>
                            </div>
                        </div>
                        <div class="login-form">
                            <router-view/>
                        </div>
                    </div>
                </div>
                <div class="hidden md:block md:col-span-3 lg:col-span-4" ></div>
            </div>
        </div>
    </div>
</template>
