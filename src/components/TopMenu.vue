<template>
  <div class="tabs relative bg-[#CC9933] min-h-[60px]">
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <select
        id="tabs"
        name="tabs"
        class="
          block
          w-full
          focus:ring-indigo-500 focus:border-indigo-500
          border-gray-300
          rounded-md
        "
      >
        <option>مجتمع زاد</option>

        <option>جديد</option>

        <option selected>تخفيضات</option>

        <option>الرئيسية</option>
      </select>
    </div>
    <div class="hidden sm:block">
      <nav
        class="flex justify-center space-x-4 items-center min-h-[60px]"
        aria-label="Tabs"
      >
        <!-- Current: "bg-gray-200 text-gray-800", Default: "text-gray-600 hover:text-gray-800" -->
        <a
          href="#"
          class="
            hover:text-gray-800
            px-3
            py-2
            text-white
            font-shamelnormal
            text-[16px]
            rounded-md
          "
          >مجتمع زاد
        </a>
        
        <a
          href="#"
          class="
            text-white
            hover:text-gray-800
            px-3
            py-2
            font-shamelnormal
            text-[16px]
            rounded-md
            fontnnn
          "
        >
          جديد
        </a>
        <a
          href="#"
          class="
            text-white
            hover:text-gray-800
            px-3
            py-2
            font-shamelnormal
            text-[16px]
            rounded-md
            fontnnn
          "
        >
          تخفيضات
        </a>
        <a
          href="#"
          class="
            text-white
            hover:text-gray-800
            px-3
            py-2
            font-bold
            text-[16px]
            font-shamelBold
          "
        >
          <span> الرئيسية </span>
  <div
          class="
            absolute
            border border-white
            bg-white
            rounded-tl-[20px]
            rounded-bl-[20px]
            rounded-tr-[20px]
            rounded-br-[20px]
            w-16
            h-1
            bottom-2
            
          "
        ></div>
        </a>
      
      </nav>
    </div>
    <LeftSideLogin />
  </div>
</template>

<script>
import LeftSideLogin from "./LeftSideLogin.vue";

export default {
  data() {
    return {};
  },
  components: {
    LeftSideLogin,
  },
};
</script>
