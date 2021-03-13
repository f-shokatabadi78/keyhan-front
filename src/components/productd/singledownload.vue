<template>

        <div>
          <div class="title-single md:mt-12 text-center">
            <h1 class="text-lg font-bold text-cool-600">
             {{productd.title}}
            </h1>
          </div>
          <div class="breadcumb text-sm text-center m-auto">
            <vs-breadcrumb color="#eee">
              <li>
                <a href="#" title="Home">صفحه اصلی</a
                ><span class="vs-breadcrum--separator">/</span>
              </li>
              <li>
                <a href="#" title="blogcat">محصولات</a
                ><span class="vs-breadcrum--separator">/</span>
              </li>
              <li>
                <a href="#" title="bargh">{{category[0].title}}</a>
              </li>
            </vs-breadcrumb>
          </div>
          <vs-button
            class="save-product save-product-d top-7"
            color="#D1D5DB"
            type="flat"
            icon-pack="fal"
            icon=" fa-bookmark"
          ></vs-button>
          <div class="feature-img">
            <video class="rounded-lg mt-3" width="100%" controls>
              <source :src="productd.video" type="video/mp4">
              Your browser does not support HTML video.
            </video>
            <!--اگر ویدئو نداشت <img class="w-full rounded-lg mt-3" src="@/assets/img/product/02.png" alt=""> -->
          </div>
          <div class="content-box rounded-lg border border-cool-200 p-5 mt-5 text-cool-700 text-base">
            <p>
             {{productd.description}}
            </p>
          </div>
        </div>

</template>
<script>
  export default {
    data: ()=>({
      category:[
        {title: 'برق صنعتی'}
      ],
      productd:{
        category:[],
        title:'آموزش نصب کلید و پریزهای لمسی در ویلاها',
        video:'https://hajifirouz2.cdn.asset.aparat.com/aparat-video/33e55eca5fa462d0a38c9e62ddb28ce530332844-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjBiMWE2MjU2ZGRiNGI2ZmVkZWNkNDI1ZjE4YzRjOTVkIiwiZXhwIjoxNjE0MTk3NTQ1LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.eElZwLaEt1ecoxryUeDHgYq5LSQxNdmSFgXs_HrAzrM',
        description:'در این مکان مطلب شما در اینجا به صورت کامل قرار میگیرد لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،  کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و.متخصصان را می طلبد\n' +
          '              در این مکان خلاصه و چکیده مطلب شما در حد چند خط قرار میگیرد لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،  کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و.متخصصان را می طلبد در این مکان خلاصه و چکیده مطلب شما در حد چند خط قرار میگیرد لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،  کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و.متخصصان را می طلبد\n' +
          '              در این مکان خلاصه و چکیده مطلب شما در حد چند خط قرار میگیرد لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،  کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و.متخصصان را می طلبد\n' +
          '',
      },
      colorx: '#F97316',
      value1: "",
    })
  }
</script>

