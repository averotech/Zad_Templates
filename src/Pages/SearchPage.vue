<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div
    class="fixed z-10 inset-0 top-[14%] max-w-7xl mx-auto container sm:px-6 lg:px-8"
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



      <div
      dir="rtl"
        class="
          relative
          flex items-center
           justify-start
          align-bottom
          bg-white
          rounded-br-[6px] rounded-bl-[6px]
          min-h-[135px]
          px-4
          pt-5
          pb-4
          text-left
          overflow-hidden
          shadow-xl
          transform
          transition-all
          sm:my-8 sm:align-middle
          sm:max-w-7xl
          sm:w-full sm:p-6
        "
      >
        <div>
            <div  class=" flex flex-row items-center justify-center pr-36 ">
              <SearchPage class="max-w-8 max-h-8" />
              <!-- <input dir="rtl" class="max-w-8 max-h-8 text-[#201A3C] text-[24px] pr-3 font-shamelnormal" />   -->
  
      
                
                  <input
                    id="search"
                    name="search"
                    type="text"
                    placeholder="انا ابحث عن"
                    class="
                      flex  
                      items-center
                      justify-center
                      mx-2
                      px-9
                      pt-2
                      shadow-sm
                      lg:w-[750px]
                      md:w-[550px]
                      border-2 border-white
                      text-[#201A3C]
                      placeholder-[#201A3C]
                      text-[20px]
                      font-shamelnormal
                      bg-white
                     focus:ring-0
                    "
                  />
              </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import SearchPage from '../assets/icons/Search.vue'
export default {
  setup() {},
  components: {SearchPage},
};
</script>
