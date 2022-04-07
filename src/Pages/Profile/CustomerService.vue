<template>
  <div class="container max-w-7xl mx-auto sm:px-6 lg:px-8 mt-10 px-2">
    <div class="flex flex-row-reverse">
      <ul
        class="
          list-reset
          breadcrumbs
          flex flex-row-reverse
          font-shamelnormal
          text-[16px]
        "
      >
        <li>
          <a>الرئيسية</a>
        </li>
        <li>/</li>
        <li>الملف الشخصي</li>
        <li>/</li>
<li>خدمة العملاء</li>
      </ul>
    </div>
  </div>
  <div
    class="
      lg:flex lg:flex-row-reverse
      flex flex-col
      mx-auto
      px-4
      my-4
      sm:px-6
      lg:max-w-7xl
    "
  >
    <div class="lg:basis-1/4 min-w-[300px] lg:block hidden">
      <ProfileBar />
    </div>
    <div class="lg:basis-3/4">
      <div class="flex flex-col px-12  justify-end items-end">
        <div class="flex flex-row-reverse items-center justify-between w-full py-7">
          <p class="text-[#201A3C] text-[21px]"> خدمة العملاء</p>
        </div>
        <!--Message details -->
            <div class="mt-1">
              <textarea id="message" name="message" rows="6"  cols="45" placeholder="رسالتك" 
              class="py-3 px-4 block w-full shadow-sm focus:ring-[#9A92CC] placeholder-[#201A3C] text-right border border-[#9A92CC] rounded-[15px]" />
            </div>
                     <button
              type="submit"
              class="
                w-full
                border border-[#CC9933]
                rounded-[10px]
                shadow-sm
                bg-[#CC9933]
                text-[18px]
                py-3
                pt-4
                px-4
                mt-4
                max-w-[250px]
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
      </div>
    </div>
  </div>
</template>
<script>
import ProfileBar from "../../components/ProfileBar.vue";
import StepperOrder from "../../components/StepperOrder.vue";
import StepperPayment from "../../components/StepperPayment.vue";
import ProfileTabel from "../../components/ProfileTabel.vue";
export default {
  data() {
    return {};
  },
  components: {
    ProfileBar,
    StepperOrder,
    StepperPayment,
    ProfileTabel,
  },
};
</script>
