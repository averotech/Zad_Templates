<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
<div class=" bg-gray-50 overflow-hidden ">
  <div class="bg-[#201A3C]  h-[600px] relative">
    <div class="flex flex-row-reverse relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <ul
        class="
          list-reset
          breadcrumbs
          flex flex-row-reverse
          font-shamelnormal
          text-[17px]
          mt-10
          text-white
        "
      >
        <li>
          <a>الرئيسية</a>
        </li>
        <li>/</li>
        <li> من نحن</li>
      </ul>
    </div>
    <div class="flex flex-col items-center w-full justify-center mt-14">
   <img class="max-w-[145px] max-h-[180px]" src="../../assets/LogoSvg.svg" />
   <p class="text-[30px] text-white pt-10 text-center">هناك حقيقة مثبتة منذ زمن طويل</p>
   <p class="text-[14px] font-shamelBold text-white pt-4 text-center max-w-[630px]">هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها</p>
   </div>
</div>
  <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">

    <div class="relative ">
      <h2 class="text-[28px] leading-8 text-right pt-20 text-[#201A3C] sm:text-[28px]"> هدفنا</h2>
      <p dir="rtl" class="mt-7 mb-8 text-right font-shamelnormal text-[#201A3C] text-[16px]">{{data1}}</p>
      <!-- <p dir="rtl" class="mb-14  text-right font-shamelnormal text-[#201A3C]  text-[16px]">{{data1}}</p>
      <p dir="rtl" class="mb-14 text-right font-shamelnormal text-[#201A3C] text-[16px]">{{data1}}</p>
      <p dir="rtl" class="mb-20 text-right font-shamelnormal text-[#201A3C] text-[16px]">{{data1}}</p>
      <p dir="rtl" class="mb-14 text-right  text-[#201A3C] text-[16px]">{{data1}}</p> -->
    </div>

<div class="contents sm:flex flex-row-reverse lg:flex-nowrap flex-wrap  md:items-center justify-between px-20 gap-16 pb-24">
<p dir="rtl" class="mt-4  text-right font-shamelnormal text-[#201A3C] text-[15px]">{{data1}}</p>
<p dir="rtl" class="mt-4  text-right font-shamelnormal text-[#201A3C] text-[15px]">{{data1}}</p>
<p dir="rtl" class="mt-4  text-right font-shamelnormal text-[#201A3C] text-[15px]">{{data1}}</p>
</div>

<div class="contents sm:flex flex-row-reverse flex-wrap  lg:flex-nowrap gap-1 lg:gap-0 items-center justify-center  lg:justify-between pb-24">
    <div class="flex flex-col justify-start items-end basis-full lg:basis-1/2">
      <h2 class="text-[28px] leading-8 text-right pt-20 text-[#201A3C] sm:text-[28px]"> هدفنا</h2>
      <p dir="rtl" class="mt-7 mb-8 text-right font-shamelnormal text-[#201A3C] text-[16px] ">{{data1}}</p>
    </div>
    <div class="relative basis-full  lg:basis-1/2 flex justify-center md:block">
<img class=" lg:w-[400px] lg:h-[440px] object-cover" src="../../assets/websitePicture/32.png" />
<img class="w-[325px] h-[352px] hidden laptop:block absolute top-11 right-7 " src="../../assets/websitePicture/32.png" />
    </div>
</div>

    


  </div>
</div>
</template>
<script>
import Logo from '../../assets/icons/Logo.vue'
const data1= "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم أيبسوم لأنها تعطي توزيعا طبيعيا_الى حد ما للأحرف عوضا عن استخدام "
export default {
    setup() {
        return{
          data1
        }
    },
    components:{Logo}
}
</script>
