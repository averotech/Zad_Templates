<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div class="bg-white">
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div class="lg:grid lg:grid-cols-3 lg:gap-x-8 lg:items-start">
        <!-- Product info -->
        <div class="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0 col-span-1">
          <h1
            class="
              text-[19px]
              font-bold
              tracking-tight
              text-[#201A3C] text-right
            "
          >
            {{ product.name }}
          </h1>
          <!-- 
          <div class="mt-3">
            <h2 class="sr-only">Product information</h2>
            <p class="text-3xl text-gray-900">{{ product.price }}</p>
          </div> -->

          <!-- Reviews -->
          <div class="mt-3 flex flex-row justify-between items-center">
            <div class="ml-4 flex">
              <a
                href="#"
                class="
                  text-sm
                  font-medium
                  text-[#CC9933] text-[14px]
                  font-shamelnormal
                "
                dir="rtl"
              >
                ({{ product.ReviewCount }} تعليقات )</a
              >
            </div>
            <div class="flex items-center">
              <StarIcon
                v-for="rating in [0, 1, 2, 3, 4]"
                :key="rating"
                :class="[
                  product.rating > rating ? 'text-[#FFC107]' : 'text-gray-300',
                  'h-5 w-5 flex-shrink-0',
                ]"
                aria-hidden="true"
              />
            </div>
            <h3 class="text-[#9B9994] text-[14px] font-shamelnormal">
              SKU:{{ product.SKU }}
            </h3>
          </div>

          <!-- price -->
          <div
            class="
              mt-3
              flex flex-row
              justify-end
              items-center
              border-b-[1px] border-[#201B3D66]
              pb-2
            "
          >
            <h3 class="text-[#29A71A] text-[16px] font-bold">
              {{ product.discount }}خصم
            </h3>
            <h3 class="text-[#C4C4C4] text-[23px] font-bold px-4 relative">
              <div
                class="
                  absolute
                  border-b-2
                  rounded-[4px]
                  border-b-[#C4C4C4]
                  top-3
                  w-16
                "
              ></div>
              {{ product.priceBeforeDiscount }}
            </h3>
            <h3 class="text-[#CC9933] text-[38px] font-bold">
              {{ product.price }}
            </h3>
          </div>

          <!-- <div class="mt-6 text-right">
            <h3 class="sr-only ">Description</h3>

            <div
              class="text-base text-gray-700 space-y-6"
              v-html="product.description"
            />
          </div> -->

          <form class="mt-6">
            <!-- Colors -->
            <div class="flex flex-col items-end">
              <h3 class="text-[16px] font-bold text-[#201A3C]">الألوان</h3>

              <!-- dynamic color -->

              <!-- <RadioGroup v-model="selectedColor" class="mt-2">
                <RadioGroupLabel class="sr-only">
                  Choose a color
                </RadioGroupLabel>
                <div class="flex items-center space-x-3">
                  <RadioGroupOption
                    as="template"
                    v-for="color in product.colors"
                    :key="color.name"
                    :value="color"
                    v-slot="{ active, checked }"
                  >
                    <div
                      :class="[
                        color.selectedColor,
                        active && checked ? 'ring ring-offset-1' : '',
                        !active && checked ? 'ring-2' : '',
                        '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none',
                      ]"
                    >
                      <RadioGroupLabel as="p" class="sr-only">
                        {{ color.name }}
                      </RadioGroupLabel>
                      <span
                        aria-hidden="true"
                        :class="[
                          color.bgColor,
                          'h-8 w-8 border border-black border-opacity-10 rounded-full',
                        ]"
                      />
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup> -->
              <!-- Static Color with Radio Input -->
              <div>
                <h3 class="text-sm text-gray-600">Color</h3>

                <fieldset class="mt-2">
                  <legend class="sr-only">Choose a color</legend>
                  <div class="flex items-center space-x-3">
                    <!--
                  Active and Checked: "ring ring-offset-1"
                  Not Active and Checked: "ring-2"
                -->
                    <label
                      class="
                        -m-0.5
                        relative
                        p-0.5
                        rounded-full
                        flex
                        items-center
                        justify-center
                        cursor-pointer
                        focus:outline-none
                        ring-gray-700
                      "
                    >
                      <input
                        type="radio"
                        name="color-choice"
                        value="Washed Black"
                        class="sr-only"
                        aria-labelledby="color-choice-0-label"
                      />
                      <p id="color-choice-0-label" class="sr-only">
                        Washed Black
                      </p>
                      <span
                        aria-hidden="true"
                        class="
                          h-8
                          w-8
                          bg-[#E250FA]
                          border border-black border-opacity-10
                          rounded-full
                        "
                      ></span>
                    </label>

                    <label
                      class="
                        -m-0.5
                        relative
                        p-0.5
                        rounded-full
                        flex
                        items-center
                        justify-center
                        cursor-pointer
                        focus:outline-none
                        ring-gray-700
                      "
                    >
                      <input
                        type="radio"
                        name="color-choice"
                        value="Washed Black"
                        class="sr-only"
                        aria-labelledby="color-choice-0-label"
                      />
                      <p id="color-choice-0-label" class="sr-only">
                        Washed Black
                      </p>
                      <span
                        aria-hidden="true"
                        class="
                          h-8
                          w-8
                          bg-[#FAB150]
                          border border-black border-opacity-10
                          rounded-full
                        "
                      ></span>
                    </label>
                    <!--
                  Active and Checked: "ring ring-offset-1"
                  Not Active and Checked: "ring-2"
                -->
                    <label
                      class="
                        -m-0.5
                        relative
                        p-0.5
                        rounded-full
                        flex
                        items-center
                        justify-center
                        cursor-pointer
                        focus:outline-none
                        ring-gray-400
                      "
                    >
                      <input
                        type="radio"
                        name="color-choice"
                        value="White"
                        class="sr-only"
                        aria-labelledby="color-choice-1-label"
                      />
                      <p id="color-choice-1-label" class="sr-only">White</p>
                      <span
                        aria-hidden="true"
                        class="
                          h-8
                          w-8
                          bg-[#D58397]
                          border border-black border-opacity-10
                          rounded-full
                        "
                      ></span>
                    </label>

                    <!--
                  Active and Checked: "ring ring-offset-1"
                  Not Active and Checked: "ring-2"
                -->
                    <label
                      class="
                        -m-0.5
                        relative
                        p-0.5
                        rounded-full
                        flex
                        items-center
                        justify-center
                        cursor-pointer
                        focus:outline-none
                        ring-gray-500
                      "
                    >
                      <input
                        type="radio"
                        name="color-choice"
                        value="Washed Gray"
                        class="sr-only"
                        aria-labelledby="color-choice-2-label"
                      />
                      <p id="color-choice-2-label" class="sr-only">
                        Washed Gray
                      </p>
                      <span
                        aria-hidden="true"
                        class="
                          h-8
                          w-8
                          bg-[#6AACC8]
                          border border-black border-opacity-10
                          rounded-full
                        "
                      ></span>
                    </label>
                  </div>
                </fieldset>
              </div>
            </div>
            <!-- Size picker -->
            <div class="mt-8">
              <div class="flex items-center justify-between">
                <a href="#" class="text-sm font-bold text-[#CC9933]"
                  >مرجع المقاس</a
                >
                <h2 class="text-[17px] font-bold text-[#201A3C]">المقاس</h2>
              </div>
              <!-- dynamic Size -->
              <!-- <RadioGroup v-model="selectedSize" class="mt-2">
                <RadioGroupLabel class="sr-only">
                  Choose a size
                </RadioGroupLabel>
                <div class="grid grid-cols-3 gap-3 sm:grid-cols-6">
                  <RadioGroupOption
                    as="template"
                    v-for="size in product.sizes"
                    :key="size.name"
                    :value="size"
                    :disabled="!size.inStock"
                    v-slot="{ active, checked }"
                  >
                    <div
                      :class="[
                        size.inStock
                          ? 'cursor-pointer focus:outline-none'
                          : 'opacity-25 cursor-not-allowed',
                        active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                        checked
                          ? 'bg-[#CC9933] border-transparent text-white hover:bg-[#CC9933]'
                          : 'bg-white border-[#201A3C] text-[#201A3C]  text-[16px] pt-4 hover:bg-gray-50',
                        'border rounded-[10px] py-3 px-3 flex items-center justify-center text-sm font-shamelBold uppercase sm:flex-1',
                      ]"
                    >
                      <RadioGroupLabel as="p">
                        {{ size.name }}
                      </RadioGroupLabel>
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup> -->

              <!--static Size  -->
              <fieldset class="mt-2">
                <legend class="sr-only">Choose a size</legend>
                <div class="grid grid-cols-3 gap-3 sm:grid-cols-6">
                  <!--
                    In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
                    Active: "ring-2 ring-offset-2 ring-indigo-500"
                    Checked: "bg-indigo-600 border-transparent text-white hover:bg-indigo-700", Not Checked: "bg-white border-gray-200 text-gray-900 hover:bg-gray-50"
                  -->
                  <label
                    class="
                      bg-white
                      border-[#201A3C]
                      text-[#201A3C] text-[16px]
                      pt-4
                      hover:bg-[#CC9933]
                      border
                      rounded-[10px]
                      py-3
                      px-3
                      flex
                      items-center
                      justify-center
                      text-sm
                      font-shamelBold
                      uppercase
                      sm:flex-1
                      rounded-md
                      opacity-25
                      cursor-not-allowed
                    "
                  >
                    <input
                      type="radio"
                      name="size-choice"
                      value="XL"
                      disabled
                      class="sr-only"
                      aria-labelledby="size-choice-5-label"
                    />
                    <p id="size-choice-5-label">XL</p>
                  </label>

                  <!--
                    In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
                    Active: "ring-2 ring-offset-2 ring-indigo-500"
                    Checked: "bg-indigo-600 border-transparent text-white hover:bg-indigo-700", Not Checked: "bg-white border-gray-200 text-gray-900 hover:bg-[#CC9933]"
                  -->
                  <label
                    class="
                      bg-white
                      border-[#201A3C]
                      text-[#201A3C] text-[16px]
                      pt-4
                      hover:bg-[#CC9933]
                      border
                      rounded-[10px]
                      py-3
                      px-3
                      flex
                      items-center
                      justify-center
                      text-sm
                      font-shamelBold
                      uppercase
                      sm:flex-1
                    "
                  >
                    <input
                      type="radio"
                      name="size-choice"
                      value="L"
                      class="sr-only"
                      aria-labelledby="size-choice-4-label"
                    />
                    <p id="size-choice-4-label">L</p>
                  </label>

                  <!--
                    In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
                    Active: "ring-2 ring-offset-2 ring-indigo-500"
                    Checked: "bg-indigo-600 border-transparent text-white hover:bg-indigo-700", Not Checked: "bg-white border-gray-200 text-gray-900 hover:bg-gray-50"
                  -->
                  <label
                    class="
                      bg-[#CC9933]
                      border-transparent
                      text-white
                      hover:bg-[#CC9933]
                      border
                      rounded-[10px]
                      py-3
                      px-3
                      flex
                      items-center
                      justify-center
                      text-sm
                      font-shamelBold
                      uppercase
                      sm:flex-1
                    "
                  >
                    <input
                      type="radio"
                      name="size-choice"
                      value="M"
                      class="sr-only"
                      aria-labelledby="size-choice-3-label"
                    />
                    <p id="size-choice-3-label">M</p>
                  </label>

                  <!--
                    In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
                    Active: "ring-2 ring-offset-2 ring-indigo-500"
                    Checked: "bg-indigo-600 border-transparent text-white hover:bg-indigo-700", Not Checked: "bg-white border-gray-200 text-gray-900 hover:bg-gray-50"
                  -->
                  <label
                    class="
                      bg-white
                      border-[#201A3C]
                      text-[#201A3C] text-[16px]
                      pt-4
                      hover:bg-[#CC9933]
                      border
                      rounded-[10px]
                      py-3
                      px-3
                      flex
                      items-center
                      justify-center
                      text-sm
                      font-shamelBold
                      uppercase
                      sm:flex-1
                    "
                  >
                    <input
                      type="radio"
                      name="size-choice"
                      value="S"
                      class="sr-only"
                      aria-labelledby="size-choice-2-label"
                    />
                    <p id="size-choice-2-label">S</p>
                  </label>
                  <!--
                    In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
                    Active: "ring-2 ring-offset-2 ring-indigo-500"
                    Checked: "bg-indigo-600 border-transparent text-white hover:bg-indigo-700", Not Checked: "bg-white border-gray-200 text-gray-900 hover:bg-gray-50"
                  -->
                  <label
                    class="
                      bg-white
                      border-[#201A3C]
                      text-[#201A3C] text-[16px]
                      pt-4
                      hover:bg-[#CC9933]
                      border
                      rounded-[10px]
                      py-3
                      px-3
                      flex
                      items-center
                      justify-center
                      text-sm
                      font-shamelBold
                      uppercase
                      sm:flex-1
                    "
                  >
                    <input
                      type="radio"
                      name="size-choice"
                      value="XS"
                      class="sr-only"
                      aria-labelledby="size-choice-1-label"
                    />
                    <p id="size-choice-1-label">XS</p>
                  </label>
                  <!--
                    In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
                    Active: "ring-2 ring-offset-2 ring-indigo-500"
                    Checked: "bg-indigo-600 border-transparent text-white hover:bg-indigo-700", Not Checked: "bg-white border-gray-200 text-gray-900 hover:bg-gray-50"
                  -->
                  <label
                    class="
                      bg-white
                      border-[#201A3C]
                      text-[#201A3C] text-[16px]
                      pt-4
                      hover:bg-[#CC9933]
                      border
                      rounded-[10px]
                      py-3
                      px-3
                      flex
                      items-center
                      justify-center
                      text-sm
                      font-shamelBold
                      uppercase
                      sm:flex-1
                    "
                  >
                    <input
                      type="radio"
                      name="size-choice"
                      value="XXS"
                      class="sr-only"
                      aria-labelledby="size-choice-0-label"
                    />
                    <p id="size-choice-0-label">XXS</p>
                  </label>
                </div>
              </fieldset>
            </div>

            <!-- Submit Buttons -->
            <div
              class="
                mt-10
                flex flex-row
                items-center
                justify-between
                sm:flex-col1
              "
            >
              <button
                type="button"
                class="
                  ml-4
                  py-3
                  px-4
                  rounded-[15px]
                  text-[#201A3C]
                  border border-[#201A3C]
                  flex
                  items-center
                  justify-center
                  hover:bg-gray-100 hover:text-gray-500
                "
              >
                <HeartIcon />
              </button>
              <button
                type="submit"
                class="
                  max-w-screen-xl
                  bg-transparent
                  text-[#201A3C]
                  border border-[#201A3C]
                  rounded-[15px]
                  py-3
                  px-8
                  sm:px-24
                  lg:px-16
                  w-full
                  text-[16px]
                  ml-2
                  flex
                  items-center
                  justify-center
                  text-base
                  font-medium
                  hover:bg-[#CC9933]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-offset-gray-50
                  focus:ring-indigo-500
                "
              >
                أضف الى السلة
              </button>
            </div>
            <div class="flex items-end justify-center">
              <button
                type="submit"
                class="
                  max-w-screen-xl
                  bg-[#201A3C]
                  mt-2
                  text-white text-[18px]
                  border border-[#201A3C]
                  rounded-[15px]
                  py-3
                  w-full
                  ml-2
                  flex
                  items-center
                  justify-center
                  text-base
                  font-bold
                  hover:bg-[#CC9933]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-offset-gray-50
                  focus:ring-indigo-500
                "
              >
                أشتري الان
              </button>
            </div>
            <!-- Services -->
            <div class="bg-[#F6F6F6] rounded-[20px] flex flex-col mt-6">
              <div
                v-for="service in product.srevices"
                :key="service"
                :class="[
                  service.borderBottom == true
                    ? 'flex flex-col items-end border-b-[1px] border-b-[#565656] p-4 ml-8'
                    : 'flex flex-col items-end p-4',
                ]"
              >
                <div class="flex flex-row justify-end items-center pr-4">
                  <div class="text-right">
                    <h3 class="text-[#201A3C] text-[17px] font-bold">
                      {{ service.type }}
                    </h3>
                    <h6
                      class="
                        text-[#201A3C] text-[13px]
                        font-shamelnormal
                        text-right
                        font-normal
                      "
                    >
                      {{ service.description }}
                    </h6>
                  </div>
                  <div v-if="service.icon == 0"><Shopping class="ml-3" /></div>
                  <div v-else-if="service.icon == 1"><Coin class="ml-3" /></div>
                  <div v-else-if="service.icon == 2">
                    <ReturnProduct class="ml-3" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <!-- Image gallery -->
        <div as="div" class="grid col-span-2">
          <!-- Image selector -->
          <div
            class="
              w-auto
              h-[600px]
              flex
              mx-6
              pt-4
              mobile:pt-0 mobile:mx-0 mobile:flex
              gap-3
            "
          >
            <img
              :src="product.Image.src"
              :alt="product.Image.src"
              class="
                w-full
                h-full
                object-center object-cover
                sm:rounded-lg
                flex-[0.8]
              "
            />
            <div class="hidden mobile:flex flex-col flex-[0.2] justify-between">
              <img
                v-for="image in product.images"
                :key="image.src"
                :src="image.src"
                :alt="image.src"
                class="w-full h-[19%] object-center object-cover sm:rounded-lg"
              />
              <!-- <img
              :src="product.Image.src"
              :alt="product.Image.src"
              class="w-full h-[19%] object-center object-cover sm:rounded-lg"
            />
            <img
              :src="product.Image.src"
              :alt="product.Image.src"
              class="w-full h-[19%] object-center object-cover sm:rounded-lg"
            />
            <img
              :src="product.Image.src"
              :alt="product.Image.src"
              class="w-full h-[19%] object-center object-cover sm:rounded-lg"
            />
            <img
              :src="product.Image.src"
              :alt="product.Image.src"
              class="w-full h-[19%] object-center object-cover sm:rounded-lg"
            /> -->
            </div>
          </div>
          <div class="hidden w-full max-w-2xl mx-auto sm:block lg:max-w-none">
            <!-- <TabList class="grid grid-row-4 gap-6">
              <Tab
                v-for="image in product.images"
                :key="image.id"
                class="
                  relative
                  h-24
                  bg-white
                  rounded-md
                  flex
                  items-center
                  justify-center
                  text-sm
                  font-medium
                  uppercase
                  text-gray-900
                  cursor-pointer
                  hover:bg-gray-50
                  focus:outline-none
                  focus:ring
                  focus:ring-offset-4
                  focus:ring-opacity-50
                "
                v-slot="{ selected }"
              >
                <span class="sr-only">
                  {{ image.name }}
                </span>
                <span class="absolute inset-0 rounded-md overflow-hidden">
                  <img
                    :src="image.src"
                    alt=""
                    class="w-full h-full object-center object-cover"
                  />
                </span>
                <span
                  :class="[
                    selected ? 'ring-indigo-500' : 'ring-transparent',
                    'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none',
                  ]"
                  aria-hidden="true"
                />
              </Tab>
            </TabList> -->
          </div>
          <section aria-labelledby="details-heading" class="mt-12">
            <h2 id="details-heading" class="sr-only">Additional details</h2>

            <div>
              <Disclosure
                as="div"
                v-for="detail in product.details"
                :key="detail.name"
                v-slot="{ open }"
              >
                <h3>
                  <DisclosureButton
                    class="
                      group
                      relative
                      w-full
                      flex
                      justify-between
                      items-center
                      text-left
                    "
                  >
                    <span class="ml-6 flex items-center">
                      <PlusSmIcon
                        v-if="!open"
                        class="
                          block
                          h-6
                          w-6
                          text-gray-400
                          group-hover:text-gray-500
                        "
                        aria-hidden="true"
                      />
                      <MinusSmIcon
                        v-else
                        class="
                          block
                          h-6
                          w-6
                          text-indigo-400
                          group-hover:text-indigo-500
                        "
                        aria-hidden="true"
                      />
                    </span>
                    <span class="text-[#201A3C] text-[16px] font-bold">
                      {{ detail.name }}
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel
                  as="div"
                  class="
                    pt-2
                    pl-16
                    text-[16px]
                    font-normal
                    text-[#201A3C] text-right
                  "
                >
                  <ul role="list">
                    <li
                      class="font-shamelnormal text-[16px]"
                      v-for="item in detail.items"
                      :key="item"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </DisclosurePanel>
              </Disclosure>
            </div>
            <!-- <div class="flex flex-col justify-end items-end">
              <h3 class="text-[#201A3C] text-[18px] font-bold pt-8">الحجم والمقاس</h3>
          </div> -->
            <div class="pt-8">
              <Disclosure
                as="div"
                v-for="Measure in product.Measurment"
                :key="Measure.type"
                v-slot="{ open }"
              >
                <h3>
                  <DisclosureButton
                    class="
                      group
                      relative
                      w-full
                      flex
                      justify-between
                      items-center
                      text-left
                    "
                  >
                    <span class="ml-6 flex items-center">
                      <PlusSmIcon
                        v-if="!open"
                        class="
                          block
                          h-6
                          w-6
                          text-gray-400
                          group-hover:text-gray-500
                        "
                        aria-hidden="true"
                      />
                      <MinusSmIcon
                        v-else
                        class="
                          block
                          h-6
                          w-6
                          text-indigo-400
                          group-hover:text-indigo-500
                        "
                        aria-hidden="true"
                      />
                    </span>
                    <span class="text-[#201A3C] text-[16px] font-bold">
                      {{ Measure.type }}
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel
                  as="div"
                  class="
                    pt-2
                    pl-16
                    text-[14px]
                    font-shamelnormal
                    text-[#201A3C] text-right
                  "
                >
                  <!-- <ul role="list">
                    <li v-for="item in detail.items" :key="item" >{{ item }}</li>
                  </ul> -->
                  <div>
                    <p class="text-[#CC9933] text-lg font-bold">
                      {{ Measure.wear }}
                    </p>
                    <div
                      class="
                        flex flex-row
                        justify-between
                        pt-4
                        ml-24
                        max-w-screen-sm
                        items-end
                        text-[15px] text-[#201A3C]
                      "
                    >
                      <p>{{ Measure.breast }} :الصدر</p>
                      <p class="text-right">{{ Measure.height }} :الطول</p>
                    </div>
                    <div
                      class="
                        flex flex-row
                        justify-between
                        pt-4
                        ml-24
                        max-w-screen-sm
                        items-end
                        text-[15px] text-[#201A3C]
                      "
                    >
                      <p>{{ Measure.hips }} :الوركين</p>
                      <p class="text-right">{{ Measure.waist }} :الخصر</p>
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </section>
          <ProductTabel />
        </div>
      </div>
      <p class="text-[20px] font-bold text-[#201A3C] mt-14 text-right">
        ما ينظر اليه الأخرون
      </p>
      <ProductGrid />
      <div class="flex items-center justify-center mt-6">
        <button
          type="submit"
          class="
            bg-transparent
            text-[#201A3C]
            border border-[#201A3C]
            rounded-[15px]
            py-3
            px-8
            sm:px-24
            lg:px-16
            text-[16px]
            ml-2
            flex
            items-center
            justify-center
            text-base
            font-medium
            hover:bg-[#CC9933]
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-offset-gray-50
            focus:ring-indigo-500
          "
        >
          رؤية المزيد
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/vue";
import { StarIcon } from "@heroicons/vue/solid";
import { MinusSmIcon, PlusSmIcon } from "@heroicons/vue/outline";
import Shopping from "../../assets/icons/Shopping.vue";
import ReturnProduct from "../../assets/icons/ReturnProduct.vue";
import Coin from "../../assets/icons/Coin.vue";
import ProductTabel from "../../components/ProductTabel.vue";
import ProductGrid from "../../components/ProductGrid.vue";
import HeartIcon from "../../assets/icons/HeartIcon.vue";

const product = {
  name: "غير مبطن - الدراجة - نسيج أسود - ياقة فساتين",
  price: "120₪",
  priceBeforeDiscount: "180₪",
  discount: "30%",
  rating: 3,
  SKU: "sw2110099318000146",
  ReviewCount: 24,
  Image: {
    id: 1,
    name: "Angled view",
    src: "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
    alt: "Angled front view with bag zipped and handles upright.",
  },
  images: [
    {
      id: 1,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 2,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 3,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 4,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 5,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    // More images...
  ],
  colors: [
    {
      name: "Washed Black",
      bgColor: "bg-[#E250FA]",
      selectedColor: "#E250FA",
    },
    { name: "Washed Green", bgColor: "bg-[#FAB150]", selectedColor: "#FAB150" },
    {
      name: "Washed Gray",
      bgColor: "bg-[#D58397]",
      selectedColor: "#D58397",
    },
    {
      name: "Moonstone Blue",
      bgColor: "bg-[#6AACC8]",
      selectedColor: "#6AACC8",
    },
  ],
  sizes: [
    { name: "XL", inStock: false },
    { name: "L", inStock: true },
    { name: "M", inStock: true },
    { name: "S", inStock: true },
    { name: "XS", inStock: true },
    { name: "XXS", inStock: true },
  ],
  description: `
    <p>هناك حقيقة مثبته منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل هناك حقيقة مثبته منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل أو شطل توضع الفقرات بالصفحة التي يقرأها. الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. الخارجي للنص</p>
  `,
  details: [
    {
      name: "وصف",
      items: [
        "هناك حقيقة مثبته منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل هناك حقيقة مثبته منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل أو شطل توضع الفقرات بالصفحة التي يقرأها. الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. الخارجي للنص",
      ],
    },
  ],
  srevices: [
    {
      type: "شحن مجاني",
      description:
        "شحن سريع مجاني للطلبات أكثر من تاريخ التوصيل المحتمل في 13-04-2022",
      icon: 0,
      borderBottom: true,
    },
    {
      type: "خدمة الدفع عند الأستلام",
      description: "تعرف أكثر",
      icon: 1,
      borderBottom: true,
    },
    {
      type: "سياسة الأرجاع",
      description: "أرجاع أو أستبدال المنتجات ممكنة",
      icon: 2,
      borderBottom: false,
    },
  ],
  Measurment: [
    {
      type: "الحجم والمقاس",
      wear: "M: العارضه ترتدي",
      height: "167cm/65.7inch",
      breast: "84cm/33.1inch",
      waist: "62cm/24.4inch",
      hips: "62cm/24.4inch",
    },
  ],
  // More sections...
};

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    MinusSmIcon,
    PlusSmIcon,
    StarIcon,
    Shopping,
    ReturnProduct,
    Coin,
    ProductTabel,
    ProductGrid,
    HeartIcon,
  },
  setup() {
    const selectedColor = ref(product.colors[0]);
    const selectedSize = ref(product.sizes[2]);
    // console.log(product.images)
    return {
      product,
      selectedColor,
      selectedSize,
    };
  },
};
</script>