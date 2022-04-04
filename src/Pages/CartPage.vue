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
  <div class="bg-white">
    <div
      class="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h1
        class="
          text-3xl
          font-extrabold
          tracking-tight
          text-[#201A3C]
          sm:text-4xl
          text-center
        "
      >
        اكمل حقيبة الشراء
      </h1>
      <form
        class="
          mt-12
          lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start
          xl:gap-x-16
          md:flex md:flex-col-reverse
        "
      >
        <!-- Order summary -->
        <section
          aria-labelledby="summary-heading"
          class="
            mt-16
            border border-[#CC99334D]
            rounded-[10px]
            px-4
            py-6
            sm:p-6
            lg:p-8 lg:mt-0 lg:col-span-4
          "
        >
          <h2
            id="summary-heading"
            class="text-[21px] text-[#201A3C] text-right"
          >
            موجز الطلب
          </h2>

          <dl class="mt-6 space-y-4">
            <div class="flex items-center justify-between">
              <dd class="text-[25px] font-shamelBold text-[#CC9933]">99₪</dd>
              <dt class="text-[14px] font-shamelnormal text-[#201A3C]">
                اجمالي المبلغ
              </dt>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-[19px] font-shamelBold text-[#201A3C]"
                >10₪</span
              >
              <span class="text-[14px] font-shamelnormal text-[#201A3C]"
                >اجمالي التوفير</span
              >
            </div>
            <div class="flex items-center justify-end">
              <p
                class="text-[14px] text-[#201A3C] font-shamelnormal text-right"
              >
                مكافأة <span class="font-shamelBold">46 نقاط </span> من زاد
              </p>
            </div>
          </dl>

          <div class="mt-6">
            <button
              type="submit"
              class="
                w-full
                border border-[#CC9933]
                rounded-[10px]
                shadow-sm
                text-[18px]
                py-3
                pt-4
                px-4
                text-base
                font-medium
                text-[#CC9933]
                hover:bg-[#CC9933] hover:text-white
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-offset-gray-50
              "
            >
              اتمام الشراء
            </button>
          </div>
        </section>
        <section aria-labelledby="cart-heading" class="lg:col-span-7">
          <ul
            role="list"
            class="
              border border-[#E424532E]
              rounded-[20px]
              divide-y divide-gray-200
            "
          >
            <li
              v-for="(product, productIdx) in products"
              :key="product.id"
              class="grid grid-cols-4 gap-x-6 items-center py-6 sm:py-10"
            >
              <div class="ml-4 col-span-3 justify-center sm:ml-6">
                <div
                  class="
                    relative
                    pr-9
                    sm:flex
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    sm:gap-x-6
                    sm:pr-0
                  
                
                  "
                >
                  <p class="text-[24px] text-[#CC9933] font-shamelBold hidden laptop:flex ">
                    {{ product.price }}
                  </p>
                  <div class="mt-4 sm:mt-0 sm:pr-9">
                    <label :for="`quantity-${productIdx}`" class="sr-only"
                      >Quantity, {{ product.name }}</label
                    >
                    <select
                      :id="`quantity-${productIdx}`"
                      :name="`quantity-${productIdx}`"
                      class="
                        max-w-full
                        rounded-[10px]
                        border border-gray-300
                        py-2
                        pt-3
                        px-4
                        text-base
                        leading-5
                        font-medium
                        text-[#201A3C] text-left
                        shadow-sm
                        focus:outline-none
                        focus:ring-1
                        focus:ring-[#9A92CC]
                        focus:border-[#9A92CC]
                        sm:text-sm
                      "
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div class="flex flex-col justify-center items-end">
                    <div class="flex flex-row justify-between items-center">
                      <div class="relative">
                        <p class="text-[20px] text-[#C4C4C4] font-shamelBold">
                          {{ product.priceBeforeDiscount }}
                        </p>
                        <div
                          class="
                            border-b-2 border-[#C4C4C4]
                            w-14
                            absolute
                            top-2.5
                          "
                        ></div>
                      </div>
                      <p
                        class="text-[24px] text-[#CC9933] font-shamelBold pl-4"
                      >
                        {{ product.price }}
                      </p>
                      <p
                        class="
                        text-[14px]
                          md:text-[18px]
                          font-shamelnormal
                          max-w-[180px]
                          text-[#201A3C] text-right
                          pr-2
                        "
                      >
                        {{ product.desc }}
                      </p>
                    </div>
                    <div class="pr-2 flex flex-row-reverse mt-4">
                        <div class="flex flex-row items-center">
                            <span class="font-shamelnormal text-[12px] ">حفظ الى وقت لاحق</span>
                            <CartFavourite />
                        </div>
                         <div class="flex flex-row items-center mr-2">
                            <span class="font-shamelnormal text-[12px] ">حذف</span>
                            <CartDelete />
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            
              <div class="flex-shrink-0">
                <img
                  :src="product.imageSrc"
                  :alt="product.imageAlt"
                  class="
                    w-35
                    h-35
                    rounded-md
                    object-center object-cover
                    sm:w-48 sm:h-48
                  "
                />
              </div>
            </li>
          </ul>
        </section>
      </form>
        <!-- <div class="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                  <div>
                    <div class="flex justify-between">
                      <h3 class="text-sm">
                        <a :href="product.href" class="font-medium text-gray-700 hover:text-gray-800">
                          {{ product.name }}
                        </a>
                      </h3>
                    </div>
                    <div class="mt-1 flex text-sm">
                      <p class="text-gray-500">
                        {{ product.color }}
                      </p>
                      <p v-if="product.size" class="ml-4 pl-4 border-l border-gray-200 text-gray-500">
                        {{ product.size }}
                      </p>
                    </div>
                    <p class="mt-1 text-sm font-medium text-gray-900">{{ product.price }}</p>
                  </div>

                  <div class="mt-4 sm:mt-0 sm:pr-9">
                    <label :for="`quantity-${productIdx}`" class="sr-only">Quantity, {{ product.name }}</label>
                    <select :id="`quantity-${productIdx}`" :name="`quantity-${productIdx}`" class="max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                    </select> -->

              <!-- <div class="absolute top-0 right-0">
                      <button type="button" class="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Remove</span>
                        <XIcon class="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div> -->
              <!-- </div>
                </div>

                <p class="mt-4 flex text-sm text-gray-700 space-x-2">
                  <CheckIcon v-if="product.inStock" class="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                  <ClockIcon v-else class="flex-shrink-0 h-5 w-5 text-gray-300" aria-hidden="true" />
                  <span>{{ product.inStock ? 'In stock' : `Ships in ${product.leadTime}` }}</span>
                </p>
              </div> -->
    </div>
  </div>
</template>

<script>
import {
  CheckIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from "@heroicons/vue/solid";
import CartFavourite from "../assets/icons/FavouriteCart.vue";
import CartDelete from "../assets/icons/CartDelete.vue";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    desc: "أسود-ياقة الدراجه-نسيج غير مبطن - فساتين",
    href: "#",
    price: "120₪",
    priceBeforeDiscount: "180₪",
    color: "Sienna",
    inStock: true,
    size: "Large",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in sienna.",
  },
  {
    id: 2,
    name: "Basic Tee",
    desc: "أسود-ياقة الدراجه-نسيج غير مبطن - فساتين",
    href: "#",
    price: "109₪",
    priceBeforeDiscount: "180₪",
    color: "Black",
    inStock: false,
    leadTime: "3–4 weeks",
    size: "Large",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 3,
    name: "Basic Tee",
    desc: "أسود-ياقة الدراجه-نسيج غير مبطن - فساتين",
    href: "#",
    price: "110₪",
    priceBeforeDiscount: "180₪",
    color: "White",
    inStock: true,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg",
    imageAlt: "Insulated bottle with white base and black snap lid.",
  },
];

export default {
  components: {
    CheckIcon,
    ClockIcon,
    QuestionMarkCircleIcon,
    XIcon,
    CartFavourite,
    CartDelete,
  },
  setup() {
    return {
      products,
    };
  },
};
</script>