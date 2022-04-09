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
          <div class="mt-3 text-center sm:mt-12">
            <h3
              class=" leading-4 text-[21px] text-[#201A3C]"
              id="modal-title"
            >
                    معلومات الشحن  
            </h3>
            <div class="w-full mt-7 p-7 " dir="rtl">
                <div class="bg-[#FAFAFA]">
<p class="text-right text-[17px] mt-14 py-4 px-12 text-[#201A3C]">   الشحن الى: </p>
</div>
<div>
  <select id="location"  class="mt-1  block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 max-w-xs focus:border-indigo-500 sm:text-sm rounded-md">
    <option selected>المدينة او المحافظة</option>
    <option>يافا</option>
    <option>يافا</option>
    <option>يافا</option>
    <option>يافا</option>
    <option>يافا</option>
    <option>يافا</option>
  </select>
</div>
       <div class="flex items-end justify-center mt-48">
              <button
                type="submit"
                class="
                  bg-[#201A3C]
                  mt-2
                  text-white text-[18px]
                  border border-[#201A3C]
                  rounded-[15px]
                  py-3
                  w-full
                  max-w-[150px]
                  ml-2
                  flex
                  items-center
                  justify-center
                  text-base
                  font-bold
                  hover:bg-[#CC9933]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-offset-gray-50
                  focus:ring-indigo-500
                "
              >
                أشتري الان
              </button>
       </div>




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
