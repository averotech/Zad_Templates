<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
<div class="py-16 bg-gray-50 overflow-hidden lg:py-24">
  <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
<div class="bg-[#201A3C] h-[608px] relative">
    <div class="flex flex-row-reverse">
      <ul
        class="
          list-reset
          breadcrumbs
          flex flex-row-reverse
          font-shamelnormal
          text-[17px]
          mt-10
          px-20
          text-white
        "
      >
        <li>
          <a>الرئيسية</a>
        </li>
        <li>/</li>
        <li> سياسة الشحن والارجاع</li>
      </ul>
    </div>
    <div class="flex flex-col items-center w-full justify-center mt-14">
   <img class="max-w-[130px] max-h-[135px]" src="../../assets/LogoSvg.svg" />
   <p class="text-[28px] text-white pt-8 text-center">هناك حقيقة مثبتة منذ زمن طويل</p>
   <p class="text-[15px] font-shamelBold text-white pt-4 text-center max-w-[630px]">هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها</p>
   </div>
</div>

    <div class="relative px-20">
      <h2 class="text-[28px] leading-8 text-right pt-16 text-[#201A3C] sm:text-[28px]">سياسة الشحن والارجاع</h2>
      <p dir="rtl" class="mt-8 mb-10 text-right font-shamelnormal text-[#201A3C] text-[16px]">{{data1}}</p>
      <p dir="rtl" class="mb-8  text-right font-shamelnormal text-[#201A3C]  text-[16px]">{{data1}}</p>
      <p dir="rtl" class="mb-8 text-right font-shamelnormal text-[#201A3C] text-[16px]">{{data1}}</p>
      <p dir="rtl" class="mb-16 text-right font-shamelnormal text-[#201A3C] text-[16px]">{{data1}}</p>
      <p dir="rtl" class="mb-16 text-right  text-[#201A3C] text-[16px]">{{data1}}</p>
    </div>

<div class="flex flex-row-reverse lg:flex-nowrap flex-wrap  items-center justify-between px-20 gap-16">
<p dir="rtl" class="mt-4  text-right font-shamelnormal text-[#201A3C] text-[16px]">{{data1}}</p>
<p dir="rtl" class="mt-4  text-right font-shamelnormal text-[#201A3C] text-[16px]">{{data1}}</p>
<p dir="rtl" class="mt-4  text-right font-shamelnormal text-[#201A3C] text-[16px]">{{data1}}</p>

</div>

    


  </div>
</div>
</template>
<script>
import Logo from '../../assets/icons/Logo.vue'
const data1= "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم أيبسوم لأنها تعطي توزيعا طبيعيا_الى حد ما _ للأحرف عوضا عن استخدام "
export default {
    setup() {
        return{
          data1
        }
    },
    components:{Logo}
}
</script>
