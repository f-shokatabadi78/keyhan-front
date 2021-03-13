<template>
  <div class="single-downloud-page mt-5">
    <div class="container mx-auto">
      <div class="grid grid-cols-12 gap-30">
        <div class="col-span-12 md:col-span-8 lg:col-span-9 relative">
          <productd/>
        </div>

        <div class="col-span-12 md:col-span-4 lg:col-span-3">
          <sidbardownload/>
          <div class="sidebar-product rounded-lg border border-cool-200 p-3 mt-4 relative">
            <div class="ads-box text-center">
              <a href=""><img class="max-w-full rounded-lg m-auto" src="@/assets/img/banner/okok.jpg" alt=""></a>

            </div>
          </div>
        </div>
      </div>
    </div>
    <comment/>
  </div>
</template>
<script>
  import productd from "../../components/productd/singledownload.vue";
  import comment from "../../components/productd/comment"
  import sidbardownload from "../../components/productd/sidbardownload";

  export default {
    data: () => ({
      category: [
        {title: 'برق صنعتی'}
      ],
      productd: {
        category: [],
        title: 'آموزش نصب کلید و پریزهای لمسی در ویلاها',
        video: 'https://hajifirouz2.cdn.asset.aparat.com/aparat-video/33e55eca5fa462d0a38c9e62ddb28ce530332844-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjBiMWE2MjU2ZGRiNGI2ZmVkZWNkNDI1ZjE4YzRjOTVkIiwiZXhwIjoxNjE0MTk3NTQ1LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.eElZwLaEt1ecoxryUeDHgYq5LSQxNdmSFgXs_HrAzrM',
        description: 'در این مکان مطلب شما در اینجا به صورت کامل قرار میگیرد لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،  کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و.متخصصان را می طلبد\n' +
          '              در این مکان خلاصه و چکیده مطلب شما در حد چند خط قرار میگیرد لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،  کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و.متخصصان را می طلبد در این مکان خلاصه و چکیده مطلب شما در حد چند خط قرار میگیرد لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،  کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و.متخصصان را می طلبد\n' +
          '              در این مکان خلاصه و چکیده مطلب شما در حد چند خط قرار میگیرد لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،  کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و.متخصصان را می طلبد\n' +
          '',
      },
      colorx: '#F97316',
      value1: "",
    }),
    components: {
      productd,
      comment,
      sidbardownload
    },
  }
</script>

