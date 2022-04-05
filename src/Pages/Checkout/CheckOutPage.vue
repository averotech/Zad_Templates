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
  <main class="lg:min-h-full lg:overflow-hidden lg:flex lg:flex-row-reverse mt-14">
    <div class="px-4 py-6 sm:px-6 lg:hidden">
      <div class="max-w-lg mx-auto flex">
      </div>
    </div>


    <!-- Mobile order summary -->
    <section aria-labelledby="order-heading" class="bg-gray-50 px-4 py-6 sm:px-6 lg:hidden">
      <Disclosure as="div" class="max-w-lg mx-auto" v-slot="{ open }">
        <div class="flex items-center justify-between">
          <h2 id="order-heading" class="text-lg font-medium text-gray-900">Your Order</h2>
          <DisclosureButton class="font-medium text-indigo-600 hover:text-indigo-500">
            <span v-if="open">Hide full summary</span>
            <span v-if="!open">Show full summary</span>
          </DisclosureButton>
        </div>

        <DisclosurePanel>
          <ul role="list" class="divide-y divide-gray-200 border-b border-gray-200">
            <li v-for="product in products" :key="product.id" class="flex py-6 space-x-6">
              <img :src="product.imageSrc" :alt="product.imageAlt" class="flex-none w-40 h-40 object-center object-cover bg-gray-200 rounded-md" />
              <div class="flex flex-col justify-between space-y-4">
                <div class="text-sm font-medium space-y-1">
                  <h3 class="text-gray-900">{{ product.name }}</h3>
                  <p class="text-gray-900">{{ product.price }}</p>
                  <p class="text-gray-500">{{ product.color }}</p>
                  <p class="text-gray-500">{{ product.size }}</p>
                </div>
                <div class="flex space-x-4">
                  <button type="button" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Edit</button>
                  <div class="flex border-l border-gray-300 pl-4">
                    <button type="button" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <form class="mt-10">
            <label for="discount-code-mobile" class="block text-sm font-medium text-gray-700">Discount code</label>
            <div class="flex space-x-4 mt-1">
              <input type="text" id="discount-code-mobile" name="discount-code-mobile" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              <button type="submit" class="bg-gray-200 text-sm font-medium text-gray-600 rounded-md px-4 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Apply</button>
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
                <span class="ml-2 rounded-full bg-gray-200 text-xs text-gray-600 py-0.5 px-2 tracking-wide">{{ discount.code }}</span>
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

        <p class="flex items-center justify-between text-sm font-medium text-gray-900 border-t border-gray-200 pt-6 mt-6">
          <span class="text-base">Total</span>
          <span class="text-base">{{ total }}</span>
        </p>
      </Disclosure>
    </section>
    <!-- Checkout form -->
    <section aria-labelledby="payment-heading" class="flex basis-[86%] overflow-y-auto px-4 pt-12 pb-16 sm:px-6 sm:pt-16  lg:pt-0 lg:pb-24">
      <div class="w-screen mx-auto border border-[#E424532E] rounded-20px">
       
        <div class="relative mt-8 flex flex-row-reverse justify-between items-center px-10">
<span class="text-24px text-[#201A3C]">معلوماتك الشخصية</span>
<span class="text-13px text-[#CC9933] ">هل تريد حفظ هذة المعلومات</span>

        </div>

        <form class="mt-6">
            <!-- first Paragraph -->
        <div class="flex flex-col items-end justify-center px-6  pb-10 border-b border-[#201B3D66] mx-2">
         <div class="flex flex-row-reverse justify-start items-center ">
                <div class="mt-1">
                  <input id="name"
                    name="name"
                    type="name"
                    placeholder="الأسم"
                    required=""
                    class="inline-flex items-center text-right justify-center
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
                  <input id="name"
                    name="name"
                    type="name"
                    placeholder="أسم الأسرة"
                    required=""
                    class="inline-flex items-center text-right justify-center
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
                  <input id="name"
                    name="name"
                    type="name"
                    placeholder="البريد الألكتروني"
                    required=""
                    class="inline-flex items-center text-right justify-center
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
                        hidden md:flex
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

    <div class="flex flex-col items-end justify-center px-6  pb-10 border-b border-[#201B3D66] mx-2 mt-6">
        <p class="text-[#201A3C] tet-[22px] pb-6">عنوان الشحن</p>
         <div class="flex flex-row-reverse justify-start items-center ">
                <div class="mt-1">
                  <input id="name"
                    name="name"
                    type="name"
                    placeholder="المدينة"
                    required=""
                    class="inline-flex items-center text-right justify-center
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
                  <input id="name"
                    name="name"
                    type="name"
                    placeholder="المحافظة"
                    required=""
                    class="inline-flex items-center text-right justify-center
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
                  <input id="name"
                    name="name"
                    type="name"
                    placeholder="تفاصيل العنوان(شارع-اسم شركة-عنوان)"
                    required=""
                    class="inline-flex items-center text-right justify-center
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
                  <input id="name"
                    name="name"
                    type="name"
                    placeholder="المعالم الرئيسية(شقة-مبنى-جناح)"
                    required=""
                    class="inline-flex items-center text-right justify-center
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
                  <input id="name"
                    name="name"
                    type="name"
                    placeholder="الرمز البريد"
                    required=""
                    class="inline-flex items-center text-right justify-center
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
            <!-- <div class="">
              <label for="name-on-card" class="block text-sm font-medium text-gray-700">Name on card</label>
              <div class="mt-1">
                <input type="text" id="name-on-card" name="name-on-card" autocomplete="cc-name" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div> -->

            <!-- <div class="col-span-full">
              <label for="card-number" class="block text-sm font-medium text-gray-700">Card number</label>
              <div class="mt-1">
                <input type="text" id="card-number" name="card-number" autocomplete="cc-number" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div> -->

            <!-- <div class="col-span-8 sm:col-span-9">
              <label for="expiration-date" class="block text-sm font-medium text-gray-700">Expiration date (MM/YY)</label>
              <div class="mt-1">
                <input type="text" name="expiration-date" id="expiration-date" autocomplete="cc-exp" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div> -->

            <!-- <div class="col-span-4 sm:col-span-3">
              <label for="cvc" class="block text-sm font-medium text-gray-700">CVC</label>
              <div class="mt-1">
                <input type="text" name="cvc" id="cvc" autocomplete="csc" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div> -->

            <!-- <div class="col-span-full">
              <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
              <div class="mt-1">
                <input type="text" id="address" name="address" autocomplete="street-address" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div> -->

            <!-- <div class="col-span-full sm:col-span-4">
              <label for="city" class="block text-sm font-medium text-gray-700">City</label>
              <div class="mt-1">
                <input type="text" id="city" name="city" autocomplete="address-level2" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div> -->

            <!-- <div class="col-span-full sm:col-span-4">
              <label for="region" class="block text-sm font-medium text-gray-700">State / Province</label>
              <div class="mt-1">
                <input type="text" id="region" name="region" autocomplete="address-level1" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div> -->

            <!-- <div class="col-span-full sm:col-span-4">
              <label for="postal-code" class="block text-sm font-medium text-gray-700">Postal code</label>
              <div class="mt-1">
                <input type="text" id="postal-code" name="postal-code" autocomplete="postal-code" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div> -->
          <!-- </div> -->

          <!-- <div class="mt-6 flex space-x-2">
            <div class="flex items-center h-5">
              <input id="same-as-shipping" name="same-as-shipping" type="checkbox" checked="" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
            </div>
            <label for="same-as-shipping" class="text-sm font-medium text-gray-900">Billing address is the same as shipping address</label>
          </div> -->

          <button type="submit" class="w-full mt-6 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Pay {{ total }}</button>

          <p class="flex justify-center text-sm font-medium text-gray-500 mt-6">
            <LockClosedIcon class="w-5 h-5 text-gray-400 mr-1.5" aria-hidden="true" />
            Payment details stored in plain text
          </p>
        </form>
      </div>
    </section>
    <!-- Order summary -->
    <section aria-labelledby="summary-heading" class="hidden bg-gray-50 w-full max-w-md flex-col lg:flex">
      <h2 id="summary-heading" class="sr-only">Order summary</h2>

      <ul role="list" class="flex-auto overflow-y-auto divide-y divide-gray-200 px-6">
        <li v-for="product in products" :key="product.id" class="flex py-6 space-x-6">
          <img :src="product.imageSrc" :alt="product.imageAlt" class="flex-none w-40 h-40 object-center object-cover bg-gray-200 rounded-md" />
          <div class="flex flex-col justify-between space-y-4">
            <div class="text-sm font-medium space-y-1">
              <h3 class="text-gray-900">{{ product.name }}</h3>
              <p class="text-gray-900">{{ product.price }}</p>
              <p class="text-gray-500">{{ product.color }}</p>
              <p class="text-gray-500">{{ product.size }}</p>
            </div>
            <div class="flex space-x-4">
              <button type="button" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Edit</button>
              <div class="flex border-l border-gray-300 pl-4">
                <button type="button" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div class="sticky bottom-0 flex-none bg-gray-50 border-t border-gray-200 p-6">
        <form>
          <label for="discount-code" class="block text-sm font-medium text-gray-700">Discount code</label>
          <div class="flex space-x-4 mt-1">
            <input type="text" id="discount-code" name="discount-code" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            <button type="submit" class="bg-gray-200 text-sm font-medium text-gray-600 rounded-md px-4 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Apply</button>
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
              <span class="ml-2 rounded-full bg-gray-200 text-xs text-gray-600 py-0.5 px-2 tracking-wide">{{ discount.code }}</span>
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
          <div class="flex items-center justify-between border-t border-gray-200 text-gray-900 pt-6">
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
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { LockClosedIcon } from '@heroicons/vue/solid'

const subtotal = '$210.00'
const discount = { code: 'CHEAPSKATE', amount: '$24.00' }
const taxes = '$23.68'
const shipping = '$22.00'
const total = '$341.68'
const products = [
  {
    id: 1,
    name: 'Micro Backpack',
    href: '#',
    price: '$70.00',
    color: 'Moss',
    size: '5L',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-04-product-01.jpg',
    imageAlt:
      'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
  },
    {
    id: 2,
    name: 'Micro Backpack',
    href: '#',
    price: '$70.00',
    color: 'Moss',
    size: '5L',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-04-product-01.jpg',
    imageAlt:
      'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
  },
    {
    id: 3,
    name: 'Micro Backpack',
    href: '#',
    price: '$70.00',
    color: 'Moss',
    size: '5L',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-04-product-01.jpg',
    imageAlt:
      'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
  },
  // More products...
]

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    LockClosedIcon,
  },
  setup() {
    return {
      subtotal,
      discount,
      taxes,
      shipping,
      total,
      products,
    }
  },
}
</script>