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
        <li> الملف الشخصي</li>
        <li>/</li>
        <li>تتبع الطلبات</li>

      </ul>
    </div>
  </div>

  <div
    class="
      flex flex-col-reverse
      lg:flex-row
      mx-auto
      px-4
      my-4
      sm:px-6
      lg:max-w-7xl
    "
  >
    <div class="basis-3/4 ">
      <StepperOrder />
      <!-- flex justify-between  -->

      <div
        class="
          flex 
          flex-row-reverse
          justify-between
          items-start
          flex-wrap
          mx-12
          mt-7
          border
          rounded-lg
          text-white
          bg-[#201A3C]
          text-whites
        "
      >
        <div
          class="
            p-6
            w-1/2
            sm:w-1/5
            grid grid-cols-1
            gap-3
            place-content-center place-items-center
          "
        >
          <span class="text-[18px] text-center"> رقم الطلب </span>

          <span class="font-shamelnormal text-[15px]"> 10001 </span>
        </div>
        <div
          class="
            p-6
            w-1/2
            sm:w-1/5
            grid grid-cols-1
            gap-3
            place-content-center place-items-center
          "
        >
          <span class="text-[18px] text-center"> تاريخ الطلب </span>

          <span class="font-shamelnormal text-[14px]"> 12-12-2021 </span>
        </div>
        <div
          class="
            p-6
            w-1/2
            sm:w-2/5
            grid grid-cols-1
            gap-3
            place-content-center place-items-center
          "
        >
          <span class="text-[18px]  text-center"> عنوان الشحن </span>

          <p class=" text-center text-[10px]  sm:text-[16px] font-shamelnormal">
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
          </p>
        </div>
        <div
          class="
            p-6
            w-1/2
            sm:w-1/5
            grid grid-cols-1
            gap-3
            place-content-center place-items-center
          "
        >
          <span class="text-[18px] font-shamelBold"> السعر </span>

          <span class="flex ">
            <p class=" text-center text-[16px]">120</p>

            <svg
              class="mt-1"
              width="11"
              height="9"
              viewBox="0 0 11 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.519531 8.57383V0.425781H4.35781C6.21387 0.429102 7.71797 1.9332 7.72129 3.78926V5.79473H6.03457V3.91211C6.03457 2.91934 5.23105 2.1125 4.23828 2.1125H2.20625V8.57051H0.519531V8.57383Z"
                fill="white"
              />
              <path
                d="M6.6418 8.57383C4.78574 8.57051 3.27832 7.06641 3.27832 5.21035V3.20488H4.96504V5.09082C4.96504 6.08359 5.76855 6.88711 6.76133 6.88711H8.79336V0.425781H10.4801V8.57051H6.6418V8.57383Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
      </div>
      <div class="flex flex-row-reverse mx-12 mt-7 rounded-lg h-36">
        <img
          src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg"
          alt=""
          class="p-2"
        />
        <div class="my-auto text-right font-shamelnormal text-[17px] text-[#201A3C]" dir="rtl">
          
          أسود-ياقة الدراجية -نسيج غير <br />
          مبطن -فساتين <br />
          2طلب <span class="font-shamelBold text-[#201A3C] text-[20px] pr-2">₪120</span>
          
        </div>
      </div>
      <div
        class="
          grid
          justify-items-end
          gap-7
          mx-12
          mt-7
          rounded-lg
          p-2
          bg-[#FAFAFA]
        "
      >
        <div class="sm:w-1/3 w-full flex justify-between flex-row-reverse">
          <span class="text-[#201A3C] text-[16px] font-shamelnormal">العناصر</span>

          <span class="text-[#201A3C] text-[16px] font-shamelnormal">2</span>
        </div>
        <div class="sm:w-1/3 w-full flex justify-between flex-row-reverse">
          <span class="text-[#201A3C] text-[16px] font-shamelnormal">المبلغ</span>

          <span class="text-[#201A3C] text-[16px] font-shamelnormal">140</span>
        </div>
        <div class="sm:w-1/3 w-full flex justify-between flex-row-reverse">
          <span class="text-[#201A3C] text-[16px] font-shamelnormal">الضرائب</span>

          <span class="text-[#201A3C] text-[16px] font-shamelnormal">10%</span>
        </div>
        <div class="sm:w-1/3 w-full flex justify-between flex-row-reverse">
          <span class="text-[#201A3C] text-[16px] font-shamelnormal">خصم على المنتج</span>

          <span class="text-[#201A3C] text-[16px] font-shamelnormal">5.5</span>
        </div>
        <div class="sm:w-1/3 w-full flex justify-between flex-row-reverse">
          <span class="text-[#201A3C] text-[16px] font-shamelnormal">التوصيل</span>

          <span class="text-[#201A3C] text-[16px] font-shamelnormal">20</span>
        </div>
        <div class="sm:w-1/3 w-full flex justify-between flex-row-reverse">
          <span class="text-[#201A3C] text-[16px] font-shamelnormal">كوبون الخصم</span>

          <span class="text-[#201A3C] text-[16px] font-shamelnormal">3.5</span>
        </div>
        <div
          class="
            sm:w-1/3
            w-full
            flex
            justify-between
            flex-row-reverse
            border-t border-gray-200
            text-gray-900
            pt-6
          "
        >
          <span class="text-[#201A3C] text-[16px] font-shamelnormal">المبلغ الاجمالي</span>

          <div class="flex flex-row-reverse">
            <svg
              class="mt-1"
              width="13"
              height="11"
              viewBox="0 0 13 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.347656 10.5325V0.467285H5.08906C7.38184 0.471387 9.23984 2.32939 9.24394 4.62217V7.09951H7.16035V4.77393C7.16035 3.54756 6.16777 2.55088 4.94141 2.55088H2.43125V10.5284H0.347656V10.5325Z"
                fill="#201A3C"
              />
              <path
                d="M7.91074 10.5325C5.61797 10.5284 3.75586 8.67041 3.75586 6.37764V3.90029H5.83945V6.22998C5.83945 7.45635 6.83203 8.44893 8.0584 8.44893H10.5686V0.467285H12.6521V10.5284H7.91074V10.5325Z"
                fill="#201A3C"
              />
            </svg>
            120
          </div>
        </div>
        <div
          class="
            sm:w-2/3
            w-full
            flex
            justify-between
            flex-row-reverse
            border-t border-gray-200
            sm:border-none
            pb-6
          "
        >
          <div class="w-1/2 sm:border-t sm:border-gray-200 text-white pt-6">
            <button class="w-full h-14 rounded-lg bg-[#CC9933]">
              تتبع الطلب
            </button>
          </div>
          <a href="#" class="w-1/2 pt-12 text-center text-[#201A3C]">إنشاء الفاتورة</a>
        </div>
      </div>
    </div>

    <div class="basis-1/4 lg:block hidden">
      <ProfileBar />
    </div>
  </div>
</template>
<script>
import ProfileBar from "../components/ProfileBar.vue";
import StepperOrder from "../components/StepperOrder.vue";
import StepperPayment from "../components/StepperPayment.vue";
export default {
  data() {
    return {};
  },
  components: {
    ProfileBar,
    StepperOrder,
    StepperPayment,
  },
};
</script>
