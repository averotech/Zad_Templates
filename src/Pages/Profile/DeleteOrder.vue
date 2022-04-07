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

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >

      <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
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
          sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6
        "
      >
        <div>
          <div
            class="
              mx-auto
              flex
              items-center
              justify-center
              h-12
              w-12
              rounded-full
              bg-green-100
            "
          >
            <!-- Heroicon name: outline/check -->
            <DeleteOrder />
          </div>
          <div class="mt-3 text-center sm:mt-5">
            <h3
              class="text-lg leading-6 text-[22px] text-[#201A3C]"
              id="modal-title"
            >
           هل تريد حذف هذا الطلب؟
            </h3>
            <div class="mt-2"></div>
          </div>
        </div>
        <div
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DeleteOrder from "../../assets/icons/DeleteOrder.vue";
export default {
  setup() {},
  components: { DeleteOrder },
};
</script>
