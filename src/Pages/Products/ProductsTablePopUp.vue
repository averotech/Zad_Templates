<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="
        flex
        items-end
        justify-center
        min-h-screen
        pt-4
        px-4
        pb-20
        text-center
        sm:block sm:p-0
      "
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >

      <div
        class="
          relative
          inline-block
          align-bottom
          bg-white
          rounded-lg
          px-4
          pt-5
          pb-4
          text-left
          overflow-hidden
          shadow-xl
          transform
          transition-all
          sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full sm:p-6 sm:px-12
        "
      >
        <div
          class="
            flex flex-row-reverse
            items-center
            justify-between
            bg-[#FAFAFA]
          "
        >
          <div class="font-shamelnormal text-[#201A3C] text-[18px]">
            التبديل الى
          </div>
          <div class="flex flex-row-reverse items-center">
            <button
              type="submit"
              class="
                max-w-screen-xl
                bg-[#201A3C]
                mt-2
                text-white text-[18px]
                border border-[#201A3C]
                rounded-tr-[8px] rounded-br-[8px]
                py-2.5
                pt-4
                px-5
                flex
                items-center
                justify-center
                text-base
                font-bold
                hover:bg-[#CC9933]
              "
            >
              CM
            </button>
            <button
              type="submit"
              class="
                max-w-screen-xl
                bg-transparent
                mt-2
                text-[18px]
                border border-[#201A3C]
                rounded-tl-[8px] rounded-bl-[8px]
                py-2.5
                text-[#201A3C]
                pt-4
                px-5
                ml-2
                flex
                items-center
                justify-center
                text-base
                font-bold
                hover:bg-[#CC9933]
              "
            >
              IN
            </button>
          </div>
        </div>
        <div class="flex justify-center flex-row-reverse pt-6">
          <div>
            <button
              type="button"
              class="
                mx-2
                text-[#201A3C]
                font-shamelBold
                text-[18px]
                border-b-4 border-gold
                rounded-[1px]
              "
            >
              قياس المنتجات
            </button>
          </div>
          <div>
            <button
              type="button"
              :class="[
                table2 == true ? 'border-b-4 border-gold  ' : ' ',
                'mx-2 text-[#201A3C] font-shamelnormal text-[18px]',
              ]"
            >
              مقاسات الجسم
            </button>
          </div>
        </div>
        <Tabel />
        <div class="mt-4 flex flex-col font-shamelnormal" dir="rtl">
          <p
            class="text-right text-[#201A3C] font-shamelnormal text-[14px] pt-5"
          >
            تم الحصول على هذة البيانات عبر قياس المنتج يدويا, وقد تتباين
            القياسات بمقدار 2-1 سم
          </p>
          <p class="text-right text-[#201A3C] font-shamelBold text-[18px] pt-7">
            كيف تقيس جسمك
          </p>
          <div class="flex justify-between pt-7">
            <div class="text-right flex flex-col justify-start items-start">
              <div class="flex flex-row justify-start items-center mt-2">
                <div class="self-center border rounded-full">
                  <span
                    class="
                      flex-shrink-0
                      w-6
                      h-6
                      flex
                      items-center
                      justify-center
                      border-2 border-gold
                      bg-gold
                      rounded-full
                    "
                  >
                    <span class="text-[#201A3C] text-[17px] pt-1.5">1</span>
                  </span>
                </div>
                <div class="px-2">
                  <p class="text-[#201A3C] font-shamelBold text-[16px]">
                    الصدر
                  </p>
                  <p class="text-[#201A3C] text-[16px] pt-1">
                    يتم قياس محيط اكبر جزء في الصدر
                  </p>
                </div>
              </div>
              <div class="flex flex-row justify-start items-center mt-2">
                <div class="self-center border rounded-full">
                  <span
                    class="
                      flex-shrink-0
                      w-6
                      h-6
                      flex
                      items-center
                      justify-center
                      border-2 border-gold
                      bg-gold
                      rounded-full
                    "
                  >
                    <span class="text-[#201A3C] text-[17px] pt-1.5">1</span>
                  </span>
                </div>
                <div class="px-2">
                  <p class="text-[#201A3C] font-shamelBold text-[16px]">
                    الخصر
                  </p>
                  <p class="text-[#201A3C] text-[16px] pt-1">
                    قياس محيط الخصر عند انحف جزء
                  </p>
                </div>
              </div>
              <div class="flex flex-row justify-start items-center mt-2">
                <div class="self-center border rounded-full">
                  <span
                    class="
                      flex-shrink-0
                      w-6
                      h-6
                      flex
                      items-center
                      justify-center
                      border-2 border-gold
                      bg-gold
                      rounded-full
                    "
                  >
                    <span class="text-[#201A3C] text-[17px] pt-1.5">1</span>
                  </span>
                </div>
                <div class="px-2">
                  <p class="text-[#201A3C] font-shamelBold text-[16px]">
                    الوركين
                  </p>
                  <p class="text-[#201A3C] text-[16px] pt-1">
                    قياس اكبر جزء من الوركين
                  </p>
                </div>
              </div>
            </div>

            <HijabMeausrmentTabel />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tabel from "../../components/Tabel.vue";
import HijabMeausrmentTabel from "../../assets/icons/HijabMeausrmentTabel.vue";

export default {
  setup() {},
  components: { Tabel, HijabMeausrmentTabel },
};
</script>
