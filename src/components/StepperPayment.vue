<template>
  <div
    class="hidden mobile:block rounded-lg bg-[#201A3C] max-w-7xl mx-auto container sm:px-6 lg:px-8"
  >
    <div class="mx-4 p-4">
      <div class="flex items-center flex-row-reverse space-x-3">
        <div class="flex flex-row-reverse items-center justify-start mx-0 ml-1 lg:mx-3 lg:ml-4">
          <div
            class="
              flex
              justify-center
              items-center
              rounded-full
              transition
              duration-500
              ease-in-out
              w-[30px]
              h-[30px]
              py-3
              pt-[17px]
              mx-2.5
              bg-gold
              relative
            "
          >
            1
          </div>
          <div class="text-gold sm:text-[15px] text-[12px] font-shamelBold text-right pl-2 sm:min-w-max">حقيبة تسوق</div>
          
          <svg
            width="23"
            height="18"
            class="hidden lg:block  mb-1"
            viewBox="0 0 23 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.00065 10.1785L10.0283 16.3183C10.1901 16.4597 10.2891 16.6596 10.3035 16.8741C10.3179 17.0885 10.2466 17.2999 10.1051 17.4617C9.96367 17.6235 9.76374 17.7225 9.5493 17.7369C9.33486 17.7514 9.12349 17.68 8.96167 17.5385L0.328167 9.9894C0.229336 9.90497 0.152286 9.79798 0.103534 9.67749C0.0547816 9.55699 0.0357597 9.42653 0.0480765 9.29713C0.0603933 9.16773 0.103687 9.0432 0.174296 8.93407C0.244906 8.82494 0.340755 8.73441 0.45374 8.67014L8.96167 1.19191C9.04169 1.12178 9.13475 1.0681 9.23553 1.03393C9.3363 0.999758 9.44282 0.985772 9.549 0.992768C9.65518 0.999764 9.75894 1.02761 9.85436 1.0747C9.94978 1.1218 10.035 1.18723 10.1051 1.26726C10.1753 1.34728 10.2289 1.44034 10.2631 1.54111C10.2973 1.64189 10.3113 1.74841 10.3043 1.85459C10.2973 1.96077 10.2694 2.06453 10.2223 2.15995C10.1752 2.25537 10.1098 2.34057 10.0298 2.41071L3.02133 8.55787L22.1675 8.55787C22.383 8.55787 22.5897 8.64347 22.742 8.79585C22.8944 8.94823 22.98 9.1549 22.98 9.3704C22.98 9.58589 22.8944 9.79256 22.742 9.94494C22.5897 10.0973 22.383 10.1829 22.1675 10.1829L3.00065 10.1785Z"
              fill="#CC9933"
            />
          </svg>
          
        </div>
        <div class="flex flex-row-reverse items-center mx-3 ml-4">
          <div
            :class="[
              ConfirmnOrder == true ? 'bg-[#CC9933]' : 'bg-white',
              'flex justify-center items-center rounded-full transition duration-500 ease-in-out w-[30px] h-[30px] py-3 pt-[17px] mx-2.5 relative',
            ]"
          >
            2
          </div>
          <div
            :class="[
              ConfirmnOrder == true ? 'text-[#CC9933]' : 'text-white',
              'sm:text-[15px] text-right pl-2 text-[12px] min-w-max',
            ]"
          >
            تاكيد الطلب
          </div>
          <svg
            width="23"
            height="18"
            viewBox="0 0 23 18"
             class="hidden lg:block  mb-1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.00065 10.1785L10.0283 16.3183C10.1901 16.4597 10.2891 16.6596 10.3035 16.8741C10.3179 17.0885 10.2466 17.2999 10.1051 17.4617C9.96367 17.6235 9.76374 17.7225 9.5493 17.7369C9.33486 17.7514 9.12349 17.68 8.96167 17.5385L0.328167 9.9894C0.229336 9.90497 0.152286 9.79798 0.103534 9.67749C0.0547816 9.55699 0.0357597 9.42653 0.0480765 9.29713C0.0603933 9.16773 0.103687 9.0432 0.174296 8.93407C0.244906 8.82494 0.340755 8.73441 0.45374 8.67014L8.96167 1.19191C9.04169 1.12178 9.13475 1.0681 9.23553 1.03393C9.3363 0.999758 9.44282 0.985772 9.549 0.992768C9.65518 0.999764 9.75894 1.02761 9.85436 1.0747C9.94978 1.1218 10.035 1.18723 10.1051 1.26726C10.1753 1.34728 10.2289 1.44034 10.2631 1.54111C10.2973 1.64189 10.3113 1.74841 10.3043 1.85459C10.2973 1.96077 10.2694 2.06453 10.2223 2.15995C10.1752 2.25537 10.1098 2.34057 10.0298 2.41071L3.02133 8.55787L22.1675 8.55787C22.383 8.55787 22.5897 8.64347 22.742 8.79585C22.8944 8.94823 22.98 9.1549 22.98 9.3704C22.98 9.58589 22.8944 9.79256 22.742 9.94494C22.5897 10.0973 22.383 10.1829 22.1675 10.1829L3.00065 10.1785Z"
              :fill="[ConfirmnOrder == true ? '#CC9933' : 'white']"
            />
          </svg>
        </div>

        <div class="flex flex-row-reverse items-center mx-3 ml-4">
          <div
            :class="[
              ConfirmPay == true ? 'bg-[#CC9933]' : 'bg-white',
              'flex justify-center items-center rounded-full transition duration-500 ease-in-out w-[30px] h-[30px] py-3 pt-[17px] mx-2.5 relative',
            ]"
          >
            3
          </div>
          <div      :class="[
              ConfirmPay == true ? 'text-[#CC9933]' : 'text-white',
              'sm:text-[15px] text-right pl-2 text-[12px] sm:min-w-max',
            ]">دفع</div>
          <svg
            width="23"
            height="18"
             class="hidden lg:block  mb-1"
            viewBox="0 0 23 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.00065 10.1785L10.0283 16.3183C10.1901 16.4597 10.2891 16.6596 10.3035 16.8741C10.3179 17.0885 10.2466 17.2999 10.1051 17.4617C9.96367 17.6235 9.76374 17.7225 9.5493 17.7369C9.33486 17.7514 9.12349 17.68 8.96167 17.5385L0.328167 9.9894C0.229336 9.90497 0.152286 9.79798 0.103534 9.67749C0.0547816 9.55699 0.0357597 9.42653 0.0480765 9.29713C0.0603933 9.16773 0.103687 9.0432 0.174296 8.93407C0.244906 8.82494 0.340755 8.73441 0.45374 8.67014L8.96167 1.19191C9.04169 1.12178 9.13475 1.0681 9.23553 1.03393C9.3363 0.999758 9.44282 0.985772 9.549 0.992768C9.65518 0.999764 9.75894 1.02761 9.85436 1.0747C9.94978 1.1218 10.035 1.18723 10.1051 1.26726C10.1753 1.34728 10.2289 1.44034 10.2631 1.54111C10.2973 1.64189 10.3113 1.74841 10.3043 1.85459C10.2973 1.96077 10.2694 2.06453 10.2223 2.15995C10.1752 2.25537 10.1098 2.34057 10.0298 2.41071L3.02133 8.55787L22.1675 8.55787C22.383 8.55787 22.5897 8.64347 22.742 8.79585C22.8944 8.94823 22.98 9.1549 22.98 9.3704C22.98 9.58589 22.8944 9.79256 22.742 9.94494C22.5897 10.0973 22.383 10.1829 22.1675 10.1829L3.00065 10.1785Z"
              :fill="[ConfirmPay == true ? '#CC9933' : 'white']"
            />
          </svg>
        </div>
        <div class="flex flex-row-reverse items-center mx-3 ml-4">
          <div
            class="
              flex
              justify-center
              items-center
              rounded-full
              transition
              duration-500
              ease-in-out
              w-[30px]
              h-[30px]
              py-3
              pt-[17px]
              px-3.5
              mx-2.5
              bg-[#C4CDD5]
              relative
            "
          >
            4
          </div>
          <div class="text-white sm:text-[14px] text-[12px] pl-2 text-right min-w-max">تم الطلب</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const ConfirmnOrder = true;
const ConfirmPay = true;

export default {
  components: {},
  setup() {
    return {
      ConfirmnOrder,
      ConfirmPay,
    };
  },
};
</script>
