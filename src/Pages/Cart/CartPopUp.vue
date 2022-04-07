<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <header class="relative bg-white">
    <nav aria-label="Top" class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div
        class="
          relative
          border-b border-gray-200
          px-4
          pb-14
          sm:static sm:px-0 sm:pb-0
        "
      >
        <div class="h-16 flex items-center justify-between">
          <div class="flex-1 flex items-center justify-end">
            <!-- Cart -->
            <div class="ml-4 flow-root text-sm lg:relative lg:ml-8">
              <button
                type="button"
                class="group -m-2 p-2 flex items-center"
                aria-expanded="false"
              >
                <!-- Heroicon name: outline/shopping-bag -->
                <svg
                  class="
                    flex-shrink-0
                    h-6
                    w-6
                    text-gray-400
                    group-hover:text-gray-500
                  "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span
                  class="
                    ml-2
                    text-sm
                    font-medium
                    text-gray-700
                    group-hover:text-gray-800
                  "
                  >0</span
                >
                <span class="sr-only">items in cart, view bag</span>
              </button>
              <div
                class="
                  absolute
                  top-16
                  inset-x-0
                  mt-px
                  pb-6
                  bg-white
                  shadow-lg
                  sm:px-2
                  lg:top-full
                  lg:left-auto
                  lg:right-0
                  lg:mt-3
                  lg:-mr-1.5
                  lg:w-80
                  lg:rounded-lg
                  lg:ring-1
                  lg:ring-black
                  lg:ring-opacity-5
                "
              >
                <h2 class="sr-only">Shopping Cart</h2>

                <form class="max-w-3xl mx-auto px-4 ">
                  <ul role="list" class="divide-y divide-gray-200">
                    <li class="py-6 flex flex-row-reverse items-center">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg"
                        alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                        class="
                          flex-none
                          w-20
                          h-24
                          rounded-md
                          border border-gray-200
                        "
                      />
                      <div class="ml-4 flex-auto">
                        <h3
                          class="
                            font-shamelnormal
                            textt-[13px]
                            text-right
                            pr-2
                            text-[#201A3C]
                          "
                        >
                          <a href="#"
                            >اسود-ياقةالدراجة - نسيج غير مبطن - فساتين</a
                          >
                        </h3>
                        <div
                          class="
                            flex flex-row-reverse
                            justify-between
                            items-center
                          "
                        >
                          <p class="text-[#CC9933] text-[15px] text-right pr-2">
                            120₪
                          </p>
                          <CartDelete />
                        </div>
                        <div
                          dir="rtl"
                          class="
                            flex flex-row-reverse
                            justify-between
                            items-center
                            mt-3
                          "
                        >
                          <p
                            class="
                              text-[#201A3C] text-[12px]
                              font-shamelnormal
                              text-right
                              pr-2
                            "
                          >
                            اجمالي السعر
                            <span class="font-shamelBold text-[#201A3C]"
                              >₪240</span
                            >
                          </p>
                          <select
                      :id="`quantity-id`"
                      :name="`quantity-id`"
                      class="
                        mr-2
                        rounded-[10px]
                        border border-gray-300
                        py-2
                        pt-3
                        px-7
                        lg:px-2
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
                      </div>
                    </li>
                    <li class="pt-6 text-right text-[#201A3C] text-[16px]">
                        السعر اجمالي ₪240 
                    </li>

                    <!-- More products... -->
                  </ul>
<div class="flex justify-center">
                            <button
            type="button"
            class="
              items-center
              flex
              rounded-[10px]
              mt-4
              pl-[40%]
              lg:pl-20
              py-3
              w-full
              pt-4
              border border-[#CC9933]
              text-[15px]
              font-shamelBold
              text-[#CC9933]
              bg-transparent
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              market_button
            "
          >
             حقيبة التسوق
          </button>
</div>
                 
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import CartDelete from "../../assets/icons/CartDelete.vue";
export default {
  setup() {},
  components: { CartDelete },
};
</script>
