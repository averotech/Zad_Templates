<template>
  <div class="container max-w-7xl mx-auto sm:px-6 lg:px-8 mt-10">
    <h2
      class="
        px-6
        flex
        items-center
        justify-center
        lg:px-8
        xl:px-0
        text-4xl
        font-extrabold
        tracking-tight
        text-gray-900
        pb-8
      "
    >
      الفئات
    </h2>

    <div class="grid mx-6 sm:mx-0  md:grid-cols-3 md:gap-x-6 grid-cols-1 gap-y-6">
      <div
        class="
          bg-white
          flex flex-row
          justify-between
          py-10
          px-4
          border-[2px]
          rounded-[20px]
          items-center
          border-[#e424532e]
          text-[28px]
          font-bold
        "
      >
        <MuslimHijab />
        <h2>شالات وأخمرة</h2>
      </div>
      <div
        class="
          bg-white
          flex flex-row
          justify-between
          py-10
          px-4
          border-[2px]
          rounded-[20px]
          items-center
          border-[#e424532e]
          text-[28px]
          font-bold
        "
      >
        <muslim-dress />
        <h2>فساتين</h2>
      </div>
      <div
        class="
          bg-white
          flex flex-row
          justify-between
          py-10
          px-4
          border-[2px]
          rounded-[20px]
          items-center
          border-[#e424532e]
          text-[28px]
          font-bold
        "
      >
        <MuslimRobe />
        <h2>جلابيب</h2>
      </div>
    </div>
    <!-- <div class="grid grid-cols-2 gap-10 ">
      <div >
        <div class=" ">
          <h2 class="text-right text-[32px] font-bold border-b-8 border-[#F7A9E1]">توصيل خلال 24 ساعه</h2>
        </div>
        <h2 class="text-right text-[18px] font-normal">افضل خدمات التوصيل</h2>
      </div>
      <p class="text-left text-[32px] font-bold">تسوق على حسب السعر</p>
    </div> -->
  </div>
</template>

<script>
import MuslimHijab from "../assets/icons/MuslimHijab.vue";
import MuslimDress from "../assets/icons/MuslimDress.vue";
import MuslimRobe from "../assets/icons/MuslimRobe.vue";
export default {
  data() {
    return {};
  },
  components: {
    MuslimHijab,
    MuslimDress,
    MuslimRobe,
  },
};
</script>
