<template>
  <div class="container max-w-7xl mx-auto sm:px-6 lg:px-8 mt-10 px-2">
    <div class="flex flex-row-reverse justify-start items-start gap-8">
      <img
        src="../assets/websitePicture/32.png"
        class="w-[400px] h-[300px] basis-1/3"
      />

      <div class="flex flex-col basis-2/3 justify-end mt-20" dir="rtl">
        <p class="text-[22px] text-[#201A3C]">
          هناك العديد من الأنواع المتوفرة لنصوص لوريم أيبسوم
        </p>
        <p class="text-[17px] font-shamelnormal text-[#201A3C]">20/4/2022</p>
        <p
          class="
          pt-2
            mb-8
            text-right
            font-shamelnormal
            text-[#201A3C] text-[16px]
          "
        >
          {{ data1 }}
        </p>
      </div>
    </div>

    <!-- third Page -->
    <div class="flex flex-row-reverse justify-start items-start gap-8">
      <img
        src="../assets/websitePicture/32.png"
       class="w-[400px] h-[300px] basis-1/3"
      />

      <div class="flex flex-col basis-2/3 justify-end mt-20" dir="rtl">
        <p class="text-[22px] text-[#201A3C]">
          هناك العديد من الأنواع المتوفرة لنصوص لوريم أيبسوم
        </p>
        <p class="text-[17px] font-shamelnormal text-[#201A3C]">20/4/2022</p>
        <p
          class="
            mb-8
            pt-2
            text-right
            font-shamelnormal
            text-[#201A3C] text-[16px]
          "
        >
          {{ data1 }}
        </p>
      </div>
    </div>
    <!-- second Page -->
    <div class="flex flex-row-reverse justify-start items-start gap-8">
      <img
        src="../assets/websitePicture/32.png"
         class="w-[400px] h-[300px] basis-1/3"
      />

      <div class="flex flex-col basis-2/3 justify-end mt-20" dir="rtl">
        <p class="text-[22px] text-[#201A3C]">
          هناك العديد من الأنواع المتوفرة لنصوص لوريم أيبسوم
        </p>
        <p class="text-[17px] font-shamelnormal text-[#201A3C]">20/4/2022</p>
        <p
          class="
            mb-8
            pt-2
            text-right
            font-shamelnormal
            text-[#201A3C] text-[16px]
          "
        >
          {{ data1 }}
        </p>
      </div>
    </div>

  </div>
</template>

<script>
const data1 =
  "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم أيبسوم لأنها تعطي توزيعا طبيعيا_الى حد ما _ للأحرف عوضا عن استخدام ";

export default {
  setup() {
    return {
      data1,
    };
  },
};
</script>
