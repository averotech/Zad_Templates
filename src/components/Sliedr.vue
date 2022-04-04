<template>
  <div class="max-w-7xl mx-auto container px-6 lg:px-8 pt-16">
    <div
      class="
        text-[#201A3C] text-[36px]
        font-shamelBold
        flex
        justify-center
        items-center
        relative
        mb-6
      "
    >
      <WhatsApp class="absolute left-4 -top-5" />
      <p>رأي زبونتنا</p>
    </div>
    <div
      class="
        flex flex-col
        items-center
        justify-center
        border-2 border-[#E424532E]
        min-h-[450px]
        rounded-[20px]
        shadow-2xl
      "
    >
      <p class="text-[#CC9933] text-[27px] font-shamelBold">امل عماد</p>
      <p
        class="text-[16px] text-[#201A3C] max-w-[400px] text-center font-shamelnormal"
      >
        هناك حقيقة مثبته منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
        القارئ عن التركيز على الشكل الخارجي للنص او شكل توضع الفقرات في
        الصفحةالتي يقرأها
      </p>
      <div class="flex flex-row items-center justify-center pt-8">
      <span class="h-[17px] w-[17px] bg-[white] rounded-[50%] border-[#201A3C] border-[1px] "></span>
      <span class="h-[17px] w-[17px]  rounded-[50%] bg-[#CC9933] mx-2"></span>
      <span class="h-[17px] w-[17px] bg-[white] rounded-[50%] border-[#201A3C] border-[1px]"></span>
      </div>
    </div>
  </div>
</template>

<script>
import WhatsApp from "../assets/icons/Whatsapp.vue";
export default {
  setup() {
    return {};
  },
  components: { WhatsApp },
};
</script>
