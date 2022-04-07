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
        <li>عنواني</li>
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
          <p class="text-[#201A3C] text-[21px]">عنوان الشحن</p>
          <p class="text-[#CC9933] text-[17px]">تعديل</p>
        </div>
        <!-- Address details -->

        <div class="flex flex-row-reverse justify-start items-center pb-2.5">
          <div class="mt-1">
            <input
              id="city"
              name="city"
              type="name"
              placeholder="المدينة"
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
          <div class="mt-1 pr-3 ">
            <input
              id="countery"
              name="countery"
              type="name"
              placeholder="المحافظة"
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
        <div class="mt-3 pb-2.5">
          <input
            id="details"
            name="details"
            type="name"
            placeholder="تفاصيل العنوان(شارع-اسم شركة-عنوان)"
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
        <div class="mt-3 pb-2.5">
          <input
            id="name"
            name="name"
            type="name"
            placeholder="المعالم الرئيسية(شقة-مبنى-جناح)"
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
        <div class="mt-3">
          <input
            id="name"
            name="name"
            type="name"
            placeholder="الرمز البريد"
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
