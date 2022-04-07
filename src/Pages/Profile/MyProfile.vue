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
          <p class="text-[#201A3C] text-[21px]"> معلوماتك الشخصية</p>
          <p class="text-[#CC9933] text-[17px]">تعديل</p>
        </div>
        <!-- Address details -->
<div class="flex flex-row-reverse justify-start items-center">
                <div class="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    placeholder="الأسم"
                    required=""
                    class="
                      inline-flex
                      items-center
                      text-right
                      justify-center
                      placeholder-[#201A3C]
                      px-4
                      py-3
                      pt-4
                      border border-[#9A92CC]
                      shadow-sm
                      text-[#201A3C]
                      font-medium
                      bg-white
                      rounded-[15px]
                      text-[16px]
                      focus:border-[#CC9933] focus:outline-none
                    "
                  />
                </div>
                <div class="mt-1 pr-3">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    placeholder="أسم الأسرة"
                    required=""
                    class="
                      inline-flex
                      items-center
                      text-right
                      justify-center
                      placeholder-[#201A3C]
                      px-5
                      py-3
                      pt-4
                      border border-[#9A92CC]
                      shadow-sm
                      text-[#201A3C]
                      font-medium
                      bg-white
                      rounded-[15px]
                      text-[16px]
                      focus:border-[#CC9933] focus:outline-none
                    "
                  />
                </div>
              </div>
              <div class="mt-3">
                <input
                  id="name"
                  name="name"
                  type="name"
                  placeholder="البريد الألكتروني"
                  required=""
                  class="
                    inline-flex
                    items-center
                    text-right
                    justify-center
                    placeholder-[#201A3C]
                    px-6
                    w-[490px]
                    max-w-[550px]
                    py-3
                    pt-4
                    border border-[#9A92CC]
                    shadow-sm
                    text-[#201A3C]
                    font-medium
                    bg-white
                    rounded-[15px]
                    text-[16px]
                    focus:border-[#CC9933] focus:outline-none
                  "
                />
              </div>
              <div>
                <div class="mt-3 relative rounded-md shadow-sm">
                  <div class="absolute inset-y-0 left-0 flex items-center">
                    <label for="country" class="sr-only">Country</label>
                    <select
                      id="country"
                      name="country"
                      autocomplete="country"
                      class="
                        focus:ring-indigo-500 focus:border-indigo-500
                        h-full
                        py-0
                        pl-3
                        pr-7
                        border-transparent
                        bg-transparent
                        text-black
                        sm:text-base
                        font-bold
                        rounded-md
                        hidden
                        md:flex
                      "
                    >
                      <option>+972</option>
                      <option>+970</option>
                      <option>+666</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    name="phone-number"
                    id="phone-number"
                    placeholder="رقم الهاتف"
                    class="
                      inline-flex
                      items-center
                      justify-center
                      text-right
                      px-6
                      w-[490px]
                      max-w-[550px]
                      py-3
                      pt-4
                      border border-[#9A92CC]
                      focus:border-[#CC9933] focus:outline-none
                      shadow-sm
                      text-[#201A3C]
                      font-medium
                      bg-white
                      rounded-[15px]
                      text-[16px]
                      placeholder-[#201A3C]
                    "
                  />
                </div>
              </div>
       
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
