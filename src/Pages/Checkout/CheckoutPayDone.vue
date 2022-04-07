<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div class="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-2">
    <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-white">
    <body class="h-full">
    ```
  -->
    <nav
      class="
        flex flex-row-reverse
        justify-start
        items-center
        font-shamelnormal
        text-[#201A3C]
        pb-3
      "
    >
      <p>/الرئيسية</p>
      <p>عودة الى التسوق</p>
    </nav>
    <div class="flex flex-row-reverse justify-between items-center px-4 pb-8">
      <p class="text-[#201A3C] text-[22px] text-right">شراء المنتجات</p>
      <button
        type="button"
        class="
          items-center
          flex
          py-3
          pt-4
          px-8
          border
          rounded-[10px]
          border-[#9A92CC]
          text-[14px]
          font-shamelBold
          text-[#201A3C]
          bg-transparent
          focus:outline-none
          market_button
        "
      >
        <LeftArrow class="pr-2 pb-1" />
        العودة الى التسوق
      </button>
    </div>
    <StepprtPayment />

    <main
      class="
        lg:min-h-full lg:overflow-hidden lg:flex lg:flex-col
        mt-11
        justify-center
        items-center
      "
    >
      <div class="px-4 py-6 sm:px-6 lg:hidden">
        <div class="max-w-lg mx-auto flex"></div>
      </div>

      <!-- Mobile order summary -->
      <!-- <section
        aria-labelledby="order-heading"
        class="bg-gray-50 px-4 py-6 sm:px-6 lg:hidden"
      >
        <Disclosure as="div" class="max-w-lg mx-auto" v-slot="{ open }">
          <div class="flex items-center justify-between">
            <h2 id="order-heading" class="text-lg font-medium text-gray-900">
              Your Order
            </h2>
            <DisclosureButton
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              <span v-if="open">Hide full summary</span>
              <span v-if="!open">Show full summary</span>
            </DisclosureButton>
          </div>

          <DisclosurePanel>
            <ul
              role="list"
              class="divide-y divide-gray-200 border-b border-gray-200"
            >
              <li
                v-for="product in products"
                :key="product.id"
                class="flex py-6 space-x-6"
              >
                <img
                  :src="product.imageSrc"
                  :alt="product.imageAlt"
                  class="
                    flex-none
                    w-40
                    h-40
                    object-center object-cover
                    bg-gray-200
                    rounded-md
                  "
                />
                <div class="flex flex-col justify-between space-y-4">
                  <div class="text-sm font-medium space-y-1">
                    <h3 class="text-gray-900">{{ product.name }}</h3>
                    <p class="text-gray-900">{{ product.price }}</p>
                    <p class="text-gray-500">{{ product.color }}</p>
                    <p class="text-gray-500">{{ product.size }}</p>
                  </div>
                  <div class="flex space-x-4">
                    <button
                      type="button"
                      class="
                        text-sm
                        font-medium
                        text-indigo-600
                        hover:text-indigo-500
                      "
                    >
                      Edit
                    </button>
                    <div class="flex border-l border-gray-300 pl-4">
                      <button
                        type="button"
                        class="
                          text-sm
                          font-medium
                          text-indigo-600
                          hover:text-indigo-500
                        "
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <form class="mt-10">
              <label
                for="discount-code-mobile"
                class="block text-sm font-medium text-gray-700"
                >Discount code</label
              >
              <div class="flex space-x-4 mt-1">
                <input
                  type="text"
                  id="discount-code-mobile"
                  name="discount-code-mobile"
                  class="
                    block
                    w-full
                    border-gray-300
                    rounded-md
                    shadow-sm
                    focus:ring-indigo-500 focus:border-indigo-500
                    sm:text-sm
                  "
                />
                <button
                  type="submit"
                  class="
                    bg-gray-200
                    text-sm
                    font-medium
                    text-gray-600
                    rounded-md
                    px-4
                    hover:bg-gray-300
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-offset-gray-50
                    focus:ring-indigo-500
                  "
                >
                  Apply
                </button>
              </div>
            </form>

            <dl class="text-sm font-medium text-gray-500 mt-10 space-y-6">
              <div class="flex justify-between">
                <dt>Subtotal</dt>
                <dd class="text-gray-900">{{ subtotal }}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="flex">
                  Discount
                  <span
                    class="
                      ml-2
                      rounded-full
                      bg-gray-200
                      text-xs text-gray-600
                      py-0.5
                      px-2
                      tracking-wide
                    "
                    >{{ discount.code }}</span
                  >
                </dt>
                <dd class="text-gray-900">-{{ discount.amount }}</dd>
              </div>
              <div class="flex justify-between">
                <dt>Taxes</dt>
                <dd class="text-gray-900">{{ taxes }}</dd>
              </div>
              <div class="flex justify-between">
                <dt>Shipping</dt>
                <dd class="text-gray-900">{{ shipping }}</dd>
              </div>
            </dl>
          </DisclosurePanel>

          <p
            class="
              flex
              items-center
              justify-between
              text-sm
              font-medium
              text-gray-900
              border-t border-gray-200
              pt-6
              mt-6
            "
          >
            <span class="text-base">Total</span>
            <span class="text-base">{{ total }}</span>
          </p>
        </Disclosure>
      </section> -->
      <!-- Checkout form -->

      <!-- payDone -->
      <div class="mt-20 flex flex-col items-center justify-center mb-16">
        <PaymentDont />
        <p class="text-[#201A3C] text-[32px] max-w-[300px] text-center">
          لقد تم تجهيز طلبك بنجاح
        </p>
        <button
          type="button"
          class="
            items-center
            flex
            rounded-[10px]
            mt-8
            px-5
            py-3
            pt-4
            border border-[#CC9933]
            hover:bg-[#CC9933] hover:text-white
            text-[18px]
            font-shamelBold
            text-white
            bg-[#CC9933]
            market_button
          "
        >
          اكمل التسوق
        </button>
      </div>

      <!-- Order summary -->
      <section
        aria-labelledby="summary-heading"
        class="bg-gray-50 w-full  flex-col lg:flex max-w-[700px]"
      >
        <h2 id="summary-heading" class="sr-only">Order summary</h2>
        <ul
          role="list"
          class="flex-auto border border-[#E424532E] rounded-20px px-6"
        >
          <p class="text-right text-[#201A3C] text-[21px] pt-5 pb-3">
            موجز الطلب
          </p>
          <div
            class="
              flex flex-row-reverse
              justify-start
              items-center
              text-[#201A3C]
            "
          >
            <p class="text-right text-[18px]">السعر الأجمالي</p>
            <p class="text-right text-[24px] text-[#CC9933]">240₪</p>
          </div>
          <li
            v-for="product in products"
            :key="product.id"
            class="
              flex flex-row-reverse
              py-6
              space-x-6
              border-b border-b-[#9A92CC66]
            "
          >
            <img
              :src="product.imageSrc"
              :alt="product.imageAlt"
              class="
                flex-none
                w-32
                h-32
                object-center object-cover
                bg-gray-200
                rounded-[15px]
              "
            />
            <div class="flex flex-col justify-start pt-6 items-end space-y-4">
              <div class="text-right space-y-1 pr-4">
                <h3 class="text-[#201A3C] text-[17px] font-shamelnormal">
                  {{ product.name }}
                </h3>
              </div>
              <div
                class="
                  flex flex-row-reverse
                  items-center
                  justify-start
                  px-4
                  w-64
                "
              >
                <p class="text-[14px] text-[#201A3C] font-shamelnormal">
                  {{ product.applied }}
                </p>
                <p class="text-[18px] text-[#201A3C] pr-2">
                  {{ product.price }}
                </p>
              </div>
            </div>
          </li>
          <li class="flex flex-col justify-end items-end">
            <p class="text-[#201A3C] text-[16px] pt-6">عنوان التوصيل</p>
            <p
              class="
                text-[#201A3C] text-[16px]
                font-shamelnormal
                text-right
                pl-8
              "
            >
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي
            </p>
            <p class="text-[#201A3C] text-[16px] pt-6">طريقة الدفع والتوصيل</p>
            <div
              class="
                flex flex-row-reverse
                items-center
                justify-start
                font-shamelnormal
              "
            >
              <p
                class="
                  text-[#201A3C] text-[16px]
                  font-shamelnormal
                  text-right
                  pl-2
                "
              >
                بيبال
              </p>
              <img src="../../assets/Paypal.svg" class="pl-3 pb-1" />
            </div>
            <p
              class="
                text-[#201A3C] text-[16px]
                font-shamelnormal
                text-right
                pl-8
                mb-8
              "
            >
              التوصيل عند الأستلام
            </p>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>




<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { LockClosedIcon } from "@heroicons/vue/solid";
import DeleteIcon from "../../assets/icons/CartDelete.vue";
import HomePay from "../../assets/icons/Paypal.vue";
import Visa from "../../assets/icons/Visa.vue";
import LeftArrow from "../../assets/icons/LeftArrow.vue";
import StepprtPayment from "../../components/StepperPayment.vue";
import PaymentDont from "../../assets/icons/PaymentDone.vue";

const subtotal = "$210.00";
const discount = { code: "CHEAPSKATE", amount: "$24.00" };
const taxes = "$23.68";
const shipping = "$22.00";
const total = "$341.68";
const products = [
  {
    id: 1,
    name: "أسود - ياقة الدراجة -نسيج غير مبطن -فساتين",
    href: "#",
    price: "120₪",
    applied: "2 طلب",
    color: "Moss",
    size: "5L",
    imageSrc:
      "https://i.pinimg.com/originals/e7/d4/79/e7d4795eb553d7c257c63378ca3fd817.jpg",
    imageAlt:
      "Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.",
  },
  {
    id: 2,
    name: "أسود - ياقة الدراجة -نسيج غير مبطن -فساتين",
    href: "#",
    price: "120₪",
    applied: "2 طلب",
    color: "Moss",
    size: "5L",
    imageSrc:
      "https://i.pinimg.com/originals/e7/d4/79/e7d4795eb553d7c257c63378ca3fd817.jpg",
    imageAlt:
      "Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.",
  },
  {
    id: 3,
    name: "أسود - ياقة الدراجة -نسيج غير مبطن -فساتين",
    href: "#",
    price: "120₪",
    applied: "2 طلب",
    color: "Moss",
    size: "5L",
    imageSrc:
      "https://i.pinimg.com/originals/e7/d4/79/e7d4795eb553d7c257c63378ca3fd817.jpg",
    imageAlt:
      "Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.",
  },
  // More products...
];

const PayValueRadio = [
  { id: "visa", title: "فيزا", icon: 1 },
  { id: "payPal", title: "بيبال", icon: 2 },
  { id: "recived", title: "الدفع عند الأستلام", icon: 3 },
];
const DeliveryValueRadio = [
  { id: "recived", title: "نقطة استلام", price: 20 },
  { id: "payPal", title: "التوصيل الى البيت", price: 20 },
];

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    LockClosedIcon,
    Visa,
    HomePay,
    DeleteIcon,
    LeftArrow,
    StepprtPayment,
    PaymentDont,
  },
  setup() {
    return {
      subtotal,
      discount,
      taxes,
      shipping,
      total,
      products,
      PayValueRadio,
      DeliveryValueRadio,
    };
  },
};
</script>