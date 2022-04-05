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
    <main
      class="lg:min-h-full lg:overflow-hidden lg:flex lg:flex-row-reverse mt-14"
    >
      <div class="px-4 py-6 sm:px-6 lg:hidden">
        <div class="max-w-lg mx-auto flex"></div>
      </div>

      <!-- Mobile order summary -->
      <section
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
      </section>
      <!-- Checkout form -->
      <section
        aria-labelledby="payment-heading"
        class="
          flex
          basis-[86%]
          overflow-y-auto
          px-4
          pt-12
          pb-16
          sm:px-6 sm:pt-16
          lg:pt-0 lg:pb-24
        "
      >
        <div class="w-screen mx-auto border border-[#E424532E] rounded-20px">
          <div
            class="
              relative
              mt-8
              flex flex-row-reverse
              justify-between
              items-center
              px-10
            "
          >
            <span class="text-[22px] text-[#201A3C]">معلوماتك الشخصية</span>
            <span class="text-13px text-[#CC9933]"
              >هل تريد حفظ هذة المعلومات</span
            >
          </div>

          <form class="mt-6">
            <!-- first Paragraph -->
            <div
              class="
                flex flex-col
                items-end
                justify-center
                px-6
                pb-10
                border-b border-[#201B3D66]
                mx-2
              "
            >
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

            <!-- second Pargraph -->

            <div
              class="
                flex flex-col
                items-end
                justify-center
                px-6
                pb-10
                border-b border-[#201B3D66]
                mx-2
                mt-6
              "
            >
              <p class="text-[#201A3C] text-[22px] pb-6">عنوان الشحن</p>
              <div class="flex flex-row-reverse justify-start items-center">
                <div class="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    placeholder="المدينة"
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
                <div class="mt-1 pr-3">
                  <input
                    id="name"
                    name="name"
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
              <div class="mt-3">
                <input
                  id="name"
                  name="name"
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
              <div class="mt-3">
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
            <!-- third Pargraph -->
            <div class="mt-6 pb-10 border-b border-[#201B3D66] mx-2">
              <p class="text-[#201A3C] text-[22px] text-right px-6 mx-2 mt-6">
                طرق الدفع
              </p>
              <div
                class="flex flex-row-reverse justify-between items-center pl-24"
              >
                <div
                  v-for="notificationMethod in PayValueRadio"
                  :key="notificationMethod.id"
                  class="flex flex-row-reverse pr-6 items-center"
                >
                  <input
                    :id="notificationMethod.id"
                    name="notification-method"
                    type="radio"
                    :checked="notificationMethod.id === 'visa'"
                    class="
                      focus:ring-[#CC9933]
                      bg-[#CC9933]
                      h-4
                      w-4
                      text-[#CC9933]
                      border-gray-300
                    "
                  />
                  <label
                    :for="notificationMethod.id"
                    class="
                      ml-3
                      text-sm
                      font-medium
                      text-[#201A3C]
                      pr-2
                      pt-1
                      flex flex-row-reverse
                      items-center
                    "
                  >
                    <Visa v-if="notificationMethod.icon == 1" class="pl-2" />
                    <img
                      src="../../assets/Paypal.svg"
                      v-else-if="notificationMethod.icon == 2"
                      class="pl-3"
                    />
                    <HomePay v-if="notificationMethod.icon == 3" />
                    {{ notificationMethod.title }}
                  </label>
                </div>
              </div>
            </div>

            <!-- delivery way -->
            <div>
              <p class="text-[#201A3C] text-[22px] text-right px-6 mx-2 mt-6">
                طرق التوصيل
              </p>
              <div
                class="
                  flex flex-row-reverse
                  items-center
                  justify-start
                  py-6
                  px-9
                "
              >
                <div
                  class="
                    flex flex-col
                    justify-center
                    items-center
                    border border-[#CC9933]
                    rounded-[15px]
                    min-w-[250px] min-h-[130px]
                  "
                >
                  <div class="flex flex-row-reverse items-center justify-start">
                    <input
                      type="radio"
                      class="
                        focus:ring-[#CC9933]
                        bg-[#CC9933]
                        h-4
                        w-4
                        text-[#CC9933]
                        border-gray-300
                      "
                    />
                    <span class="text-[#201A3C] text-18px text-right pr-2"
                      >نقطة الأستلام</span
                    >
                  </div>
                  <span class="text-[#2B3872] text-[22px] text-right pl-10"
                    >120₪</span
                  >
                </div>
                <div
                  class="
                    flex flex-col
                    justify-center
                    items-center
                    border border-[#CC9933]
                    rounded-[15px]
                    min-w-[250px] min-h-[130px]
                    mr-2.5
                  "
                >
                  <div class="flex flex-row-reverse items-center justify-start">
                    <input
                      type="radio"
                      class="
                        focus:ring-[#CC9933]
                        bg-[#CC9933]
                        h-4
                        w-4
                        text-[#CC9933]
                        border-gray-300
                      "
                    />
                    <span class="text-[#201A3C] text-18px text-right pr-2"
                      >نقطة الأستلام</span
                    >
                  </div>
                  <span class="text-[#2B3872] text-[22px] text-right pl-10"
                    >120₪</span
                  >
                </div>
                <div
                  class="flex flex-col justify-center border border-[#CC9933]"
                ></div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <!-- Order summary -->
      <section
        aria-labelledby="summary-heading"
        class="hidden bg-gray-50 w-full max-w-md flex-col lg:flex"
      >
        <h2 id="summary-heading" class="sr-only">Order summary</h2>

        <ul
          role="list"
          class="flex-auto overflow-y-auto divide-y divide-gray-200 px-6"
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

        <div
          class="
            sticky
            bottom-0
            flex-none
            bg-gray-50
            border-t border-gray-200
            p-6
          "
        >
          <form>
            <label
              for="discount-code"
              class="block text-sm font-medium text-gray-700"
              >Discount code</label
            >
            <div class="flex space-x-4 mt-1">
              <input
                type="text"
                id="discount-code"
                name="discount-code"
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
            <div
              class="
                flex
                items-center
                justify-between
                border-t border-gray-200
                text-gray-900
                pt-6
              "
            >
              <dt class="text-base">Total</dt>
              <dd class="text-base">{{ total }}</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { LockClosedIcon } from "@heroicons/vue/solid";
import Visa from "../../assets/icons/Visa.vue";
import HomePay from "../../assets/icons/Paypal.vue";

const subtotal = "$210.00";
const discount = { code: "CHEAPSKATE", amount: "$24.00" };
const taxes = "$23.68";
const shipping = "$22.00";
const total = "$341.68";
const products = [
  {
    id: 1,
    name: "Micro Backpack",
    href: "#",
    price: "$70.00",
    color: "Moss",
    size: "5L",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/checkout-page-04-product-01.jpg",
    imageAlt:
      "Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.",
  },
  {
    id: 2,
    name: "Micro Backpack",
    href: "#",
    price: "$70.00",
    color: "Moss",
    size: "5L",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/checkout-page-04-product-01.jpg",
    imageAlt:
      "Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.",
  },
  {
    id: 3,
    name: "Micro Backpack",
    href: "#",
    price: "$70.00",
    color: "Moss",
    size: "5L",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/checkout-page-04-product-01.jpg",
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