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
        text-[38px]
        font-shamelBold
        tracking-tight
        text-gray-900
        pb-8
      "
    >
      الفئات
    </h2>

    <div
      class="grid mx-6 sm:mx-0 md:grid-cols-3 md:gap-x-6 grid-cols-1 gap-y-6"
    >
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
          font-shamelBold
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
          font-shamelBold
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
          font-shamelBold
        "
      >
        <MuslimRobe />
        <h2>جلابيب</h2>
      </div>
    </div>
    <div
      class="
        border-[1px]
        bg-[#FADBDA]
        border-[#FADBDA]
        rounded-[20px]
        mt-24
        flex flex-row flex-wrap
        justify-center
        xl:justify-between
        items-center
        max-h-[490px]
        xl:max-h-[650px]
        pb-14
      "
    >
      <div class="pl-10 relative hidden xl:flex">
        <CustomCircular class="-mt-32"/>
        <div
          class="
            absolute
            top-[7%]
            left-[33%]
            flex flex-col
            justify-center
            items-center
          "
        >
          <p class="text-sm text-[#201A3C] font-shamelnormal">زادك في الدنيا</p>
          <p class="text-[40px] text-[#201A3C] font-bold">ما جديدنا#</p>
          <p class="text-[17px] text-[#201A3C] font-shamelnormal">سجلي بياناتك</p>
          <p class="text-[17px] text-[#201A3C] font-shamelnormal pb-2">
            وانضمي لعائلة زاد
          </p>
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              class="
                bg-[#201A3C]
                text-white
                block
                px-3
                py-3
                pt-4
                rounded-[10px]
                text-[16px]
                font-bold
              "
              aria-current="page"
              >انضمي الان</a
            >
          </div>
        </div>
      </div>
      <div class="pr-20 -mt-8 xl:mt-0 pb-0 xl:pt-14 xl:pb-28">
        <!-- <img class="shadoww" :src="HijabImage" /> -->
        <BoxShadow />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import MuslimHijab from "../assets/icons/MuslimHijab.vue";
import MuslimDress from "../assets/icons/MuslimDress.vue";
import MuslimRobe from "../assets/icons/MuslimRobe.vue";
import CustomCircular from "../assets/icons/CustomCircular.vue";
import BoxShadow from "../assets/icons/ImageBoxShadow.vue";

const HijabImage =
  "https://media.discordapp.net/attachments/938405759996276806/960167429508591626/image_9.png";
export default {
  data() {
    return { HijabImage };
  },
  components: {
    MuslimHijab,
    MuslimDress,
    MuslimRobe,
    CustomCircular,
    BoxShadow,
  },
};
</script>
