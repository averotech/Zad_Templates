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
          sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full sm:p-6
        "
      >
        <div>
          <div
            class="
              mx-auto
              flex
              items-center
              justify-center
            "
          >
            <!-- Heroicon name: outline/check -->
          </div>
          <div class="mt-3 text-right sm:mt-5">
            <h3
              class="font-FlatBold leading-4 text-[30px] text-[#201A3C]"
              id="modal-title"
            >
                 سياسة الأرجاع 
            </h3>
            <div class="w-full bg-[#FAFAFA] mt-7 p-7" dir="rtl">
<p class="text-right font-FlatBold  text-[20px] text-[#201A3C]">ضماننا</p>
<p class="text-right font-Flatnormal text-[18px] pt-2 text-[#201A3C]">للأرجاع او للأستبدال خلال 15 يوما من تاريخ الأستلام</p>
<p class="text-right font-Flatnormal text-[20px]  pt-2 text-[#201A3C]">المطلوب</p>

<p class="text-right font-Flatnormal text-[18px] text-[#201A3C]">1.ان يكون خلال 15 يوما من تاريخ الأستلام </p>
<p class="text-right font-Flatnormal text-[18px]  text-[#201A3C]">2. ان تكون المنتجات غير مستخدمة, غير تالفة وفي الطرد الأصلي </p>
<p class="text-right font-Flatnormal text-[18px]  text-[#201A3C]">3.رسوم الشحن للأرجاع يتحملها المشتري. </p>
<a href="#" class="text-right font-shamelnormal text-[16px] pt-2 flex items-end text-[#0156FF]">بتقاصيل </a>




            </div>
          </div>
       </div>
       
      
         <!-- <div
          class="
            mt-5
            sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-1 sm:grid-flow-row-dense
          "
        >
          <button
            type="button"
            class="
              inline-flex
              justify-center
              rounded-[10px]
              border border-transparent
              shadow-sm
              px-2
              max-w-[190px]
              py-3
              pt-4
              bg-[#CC9933]
              text-[18px]
              text-white
              sm:col-start-2 
            "
          >
            الغاء
          </button>
          <button
            type="button"
            class="
              mt-3
              ml-10
              inline-flex
              justify-center
              rounded-[10px]
              border border-[#CC9933]
              max-w-[180px]
              shadow-sm
              px-4
              py-3
              pt-5
              bg-transparent
              text-base
              font-medium
              text-[#201A3C]
              hover:bg-[#CC9933]
              hover:text-white
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-indigo-500
              sm:mt-0 sm:col-start-1 sm:text-sm
            "
          >
            تأكيد
          </button>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {},
  components: { },
};
</script>
