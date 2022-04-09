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
            "
          >
            <!-- Heroicon name: outline/check -->
            <Logo class="w-[75px] h-[96px]" />
          </div>
          <div class="mt-3 text-center sm:mt-5">
            <h3
              class=" leading-6 text-[23px] text-[#201A3C]"
              id="modal-title"
            >
               شاركنا رأيك عن المنتج
            </h3>
            <div class="mt-2 flex flex-row justify-center py-5">
                <EmptyStar />
                <EmptyStar />
                <EmptyStar />
                <EmptyStar />
                <EmptyStar />

            </div>
          </div>
       </div>
       

       <!--Message details -->
            <div class="mt-1">
                <p class="text-right text-[#201B3D] text-[21px] font-shamelBold">رايك الخاص</p>
              <textarea id="message" name="message" rows="6"  cols="45"
              class="py-3 px-4 block w-full shadow-sm focus:ring-[#9A92CC] placeholder-[#201A3C] text-right border border-[#9A92CC] rounded-[15px]" />
            </div>
                     <button
              type="submit"
              class="
                w-full
                border border-[#CC9933]
                rounded-[10px]
                shadow-sm
                bg-[#201B3D]
                text-[18px]
                py-3
                pt-4
                px-4
                mt-4
                text-base
                font-medium
                text-white
                hover:bg-[#CC9933] hover:text-white
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-offset-gray-50
              "
            >
               ارسال
            </button>

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
import Logo from "../../assets/icons/Logo.vue";
import EmptyStar from '../../assets/icons/EmptyStar.vue'
export default {
  setup() {},
  components: { Logo,EmptyStar },
};
</script>
