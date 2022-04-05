<template>
<!-- heder -->
  <div class="container max-w-7xl mx-auto sm:px-6 lg:px-8 mt-10 px-2">
    <div class="flex flex-row-reverse">
      <ul class="list-reset breadcrumbs flex flex-row-reverse font-shamelnormal text-[16px]">
        <li>
          <a>الرئيسية</a>
        </li>
        <li>/</li>
        <li>جميع المنتجات</li>
      </ul>
    </div>
  </div>
<!-- nav bar  -->
  <div
    class="flex justify-between flex-row-reverse h-14 rounded-lg container max-w-7xl mx-auto sm:px-6 lg:px-8 mt-10 bg-login my-2 text-white px-2"
  >
    <div class="grid grid-cols-1 content-center md:w-52 font-shamelnormal text-[18px] pt-2 min-w-[170px]">جميع المنتجات</div>
    <div class="grid md:gap-2 md:grid-cols-2 w-72 md:w-full px-6 content-center">
      <div class="flex justify-start">
        <div class="mb-3 flex flex-row justify-start items-center pt-5 mr-10 min-w-[230px]">
          <select
            class="form-select appearance-none block  px-3 py-1.5 text-base font-shamelnormal bg-login bg-clip-padding bg-no-repeat text-white rounded transition ease-in-out m-0 focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option class=" text-[18px]" selected>تمت اضافتها حديثا</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
<span class="text-18px">          صنف ب
</span>
        </div>
      </div>
    </div>
  </div>
  
  <div
    class="flex flex-col-reverse md:flex-row container max-w-7xl mx-auto sm:px-6 lg:px-8 sm:my-10 sm:space-x-4 mb-2 p-2"
  >
  <!-- products show -->
    <div class="basis-3/4 ">
      <div
        class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8"
      >
      <div
      v-for="image in product.images" :key="image.src">
        <a href="#" class="group">
          <div
            class="w-full aspect-w-1 aspect-h-1 rounded-lg sm:aspect-w-2 sm:aspect-h-3"
          >
            <img
              :src="image.src"
              :alt="image.src"
              class="w-full h-full object-center object-cover group-hover:opacity-75"
            />
          </div>
          <div
            class="mt-4 flex justify-end text-base font-medium text-gray-900px-2"
          >
            <span class="text-[13px] text-[#201A3C] font-shamelnormal">{{image.description}}</span>
          </div>
          <div
            class="mt-4 flex justify-between text-base font-medium text-gray-900 px-2"
          >
            <div class="opacity-25">
              <del>{{image.PriceBeforeDiscount}}</del>
            </div>
            <div>{{image.price}}</div>
          </div>
        </a>
</div>
    
        <!-- More products... -->
      </div>
    </div>
    <!-- filter -->
    <div
      class="hidden sm:flex flex-row-reverse justify-between md:justify-start md:flex-col mb-6 bg-gray-50"
    >
    <!--search -->
      <div class="mb-4">
        <p class="flex flex-row-reverse space-y-0 mb-2 text-[#201A3C] text[16px]">البحث</p>
        <div>
          <input
            type="text"
            name="name"
            id="name"
            class=" px-2 first-letter:  text-right border w-full h-12 block p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            placeholder="حلابيب"
          />
        </div>
      </div>
      <!-- Disclosure -->
  <div class="flex justify-center w-64 md:w-full">
        <div class="w-full pt-2">
          <div class="w-full max-w-md mx-auto bg-white rounded-2xl">
              <Disclosure v-slot="{ open }">
              <DisclosureButton
                class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left bg-gray-50 rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:bg-gray-100"
              >
                <ChevronUpIcon
                  :class="open ? 'transform rotate-180' : ''"
                  class="w-5 h-5 "
                />
                <span class="text-[#201A3C] text-[16px]">التاريح</span>
              </DisclosureButton>
              <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
              <div class="flex flex-col items-end text-right">
              
                  <RadioGroup v-model="selectedColor" class="mt-2">
                    <RadioGroupLabel class="sr-only">
                      Choose a color
                    </RadioGroupLabel>
                    <div class="flex flex-col items-end">
                      <RadioGroupOption
                        as="template"
                        v-for="date in product.dates"
                        :key="date.name"
                        :value="date"
                      >
                        <div
                          
                        >
                        
                         {{ date.name }}
                        </div>
                      </RadioGroupOption>
                    </div>
                  </RadioGroup>
                </div>
              </DisclosurePanel>
            </Disclosure>
            <Disclosure v-slot="{ open }">
              <DisclosureButton
                class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left bg-gray-50 rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:bg-gray-100"
              >
                <ChevronUpIcon
                  :class="open ? 'transform rotate-180' : ''"
                  class="w-5 h-5 "
                />
                <span class="text-[#201A3C] text-[16px]">الفئات</span>
              </DisclosureButton>
              <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
              <div class="flex flex-col items-end">
              

                  <RadioGroup v-model="selectedColor" class="mt-2">
                    <RadioGroupLabel class="sr-only">
                      Choose a color
                    </RadioGroupLabel>
                    <div class="flex flex-col items-end">
                      <RadioGroupOption
                        as="template"
                        v-for="type in product.types"
                        :key="type.name"
                        :value="type"
                        v-slot="{ active, checked }"
                      >
                        <div
                          :class="[
                            type.selectedtype,
                            active && checked ? 'ring ring-offset-1' : '',
                            !active && checked ? 'ring-2' : '',
                            '-m-0.5 relative p-0.5 rounded-full  flex items-end justify-center cursor-pointer focus:outline-none',
                          ]"
                        >
                        
                         {{ type.name }}
                        </div>
                      </RadioGroupOption>
                    </div>
                  </RadioGroup>
                </div>
              </DisclosurePanel>
            </Disclosure>
            <Disclosure as="div" class="mt-2" v-slot="{ open }">
              <DisclosureButton
                class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left bg-gray-50 rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:bg-gray-100"
              >
                <ChevronUpIcon
                  :class="open ? 'transform rotate-180' : ''"
                  class="w-5 h-5 purple-500"
                />
                <span class="text-[#201A3C] text-[16px]"> مقاسات</span>
              </DisclosureButton>
              <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div class="">
               

                  <fieldset class="mt-2">
                  
                    <div class="">
             
              <RadioGroup v-model="selectedSize" class="mt-2">
              
                <div class="grid grid-cols-3 gap-3 ">
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
                          : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                        'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1',
                      ]"
                    >
                      <RadioGroupLabel as="p">
                        {{ size.name }}
                      </RadioGroupLabel>
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup>
            </div>
                  </fieldset>
                </div>
              </DisclosurePanel>
            </Disclosure>
            <Disclosure as="div" class="mt-2" v-slot="{ open }">
              <DisclosureButton
                class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left bg-gray-50 rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:bg-gray-100"
              >
                <ChevronUpIcon
                  :class="open ? 'transform rotate-180' : ''"
                  class="w-5 h-5"
                />
                <span class="text-[#201A3C] text-[16px]">اللون</span>
              </DisclosureButton>
              <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div class="flex flex-col items-end">
                  <h3 class="text-[16px] font-bold text-[#201A3C]">الألوان</h3>

                  <RadioGroup v-model="selectedColor" class="mt-2">
                    <RadioGroupLabel class="sr-only">
                      Choose a color
                    </RadioGroupLabel>
                    <div class="grid grid-cols-6 gap-3">
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
                  </RadioGroup>
                </div>
              </DisclosurePanel>
            </Disclosure>
          </div>
        </div>
  </div>

  <!-- slider -->
      <div class="my-6">
        <div class="flex flex-row-reverse mt-4 text-[16px] text-[#201A3C] mr-3">السعر</div>
        <div class="flex justify-between mb-2">
          <div>10$</div>
          <div class="mr-3">300$</div>
        </div>
        <div class="grid grid-cols-1">
          <input
            type="range"
            value="10"
            min="10"
            max="300"
            oninput="this.nextElementSibling.value = this.value"
          />
          <!-- <output>10</output> -->
        </div>
      </div>

      <div class="hidden md:flex top-0">
        <div
          class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
        >
          <img
            src="../../assets/websitePicture/1.png"
            class="object-cover h-96 w-72"
          />
          <div class="absolute flex top-0 left-0 px-6 py-4 space-x-1">
            <h4 class="mb-3 text-4xl font-semibold tracking-tight text-white">
              50 % 
            </h4>
               <h4 class="grid self-end  mb-3  text-xl font-semibold tracking-tight text-white">
            off
            </h4>

          </div>
          <div class="absolute bottom-0 right-0 b px-6 py-4">
            <h4
              class="text-right mb-3 text-xl font-semibold tracking-tight text-white"
            >
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفح
            </h4>
          </div>
        </div>
      </div>
     

      
    </div>
  <!-- filter mopile -->
     <div class="w-full  flex sm:hidden">
    <div class="grid   w-full   bg-white rounded-2xl my-4">
     
      <Disclosure as="div" class=" w-full " v-slot="{ open }">
        <DisclosureButton
          class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left  rounded-lg  focus:outline-none  focus-visible:ring-opacity-75"
        >
         <ChevronUpIcon
            :class="open ? 'transform rotate-180' : ''"
            class="w-5 h-5 "
          />
          <span>فلتر</span>
         
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
          <div
      class=" mb-6 bg-gray-50"
    >
      <div class="mb-4">
        <p class="flex flex-row-reverse space-y-0 mb-2">البجث</p>
        <div>
          <input
            type="text"
            name="name"
            id="name"
            class=" px-2 first-letter:  text-right border w-full h-12 block p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            placeholder="حلابيب"
          />
        </div>
      </div>
  <div class="flex justify-center w-full">
        <div class="w-full pt-2">
          <div class="w-full mx-auto bg-white rounded-2xl">
            <Disclosure v-slot="{ open }">
              <DisclosureButton
                class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left bg-gray-50 rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:bg-gray-100"
              >
                <ChevronUpIcon
                  :class="open ? 'transform rotate-180' : ''"
                  class="w-5 h-5 "
                />
                <span>الفئات</span>
              </DisclosureButton>
              <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
              <div class="flex flex-col items-end">
              

                  <RadioGroup v-model="selectedColor" class="mt-2">
                    <RadioGroupLabel class="sr-only">
                      Choose a color
                    </RadioGroupLabel>
                    <div class="flex flex-col items-end">
                      <RadioGroupOption
                        as="template"
                        v-for="type in product.types"
                        :key="type.name"
                        :value="type"
                        v-slot="{ active, checked }"
                      >
                        <div
                          :class="[
                            type.selectedtype,
                            active && checked ? 'ring ring-offset-1' : '',
                            !active && checked ? 'ring-2' : '',
                            '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none',
                          ]"
                        >
                        
                        {{ type.name }}
                        </div>
                      </RadioGroupOption>
                    </div>
                  </RadioGroup>
                </div>
              </DisclosurePanel>
            </Disclosure>
            <Disclosure as="div" class="mt-2" v-slot="{ open }">
              <DisclosureButton
                class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left bg-gray-50 rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:bg-gray-100"
              >
                <ChevronUpIcon
                  :class="open ? 'transform rotate-180' : ''"
                  class="w-5 h-5 purple-500"
                />
                <span> مقاسات</span>
              </DisclosureButton>
              <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div class="">
               

                  <fieldset class="mt-2">
                  
                    <div class="">
             
              <RadioGroup v-model="selectedSize" class="mt-2">
              
                <div class="grid grid-cols-3 gap-3 ">
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
                          : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                        'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1',
                      ]"
                    >
                      <RadioGroupLabel as="p">
                        {{ size.name }}
                      </RadioGroupLabel>
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup>
            </div>
                  </fieldset>
                </div>
              </DisclosurePanel>
            </Disclosure>
            <Disclosure as="div" class="mt-2" v-slot="{ open }">
              <DisclosureButton
                class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left bg-gray-50 rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:bg-gray-100"
              >
                <ChevronUpIcon
                  :class="open ? 'transform rotate-180' : ''"
                  class="w-5 h-5"
                />
                <span>اللون</span>
              </DisclosureButton>
              <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div class="flex flex-col items-end">
                  <h3 class="text-[16px] font-bold text-[#201A3C]">الألوان</h3>

                  <RadioGroup v-model="selectedColor" class="mt-2">
                    <RadioGroupLabel class="sr-only">
                      Choose a color
                    </RadioGroupLabel>
                    <div class="grid grid-cols-10 gap-3">
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
                  </RadioGroup>
                </div>
              </DisclosurePanel>
            </Disclosure>
          </div>
        </div>
  </div>
      <div class="my-6">
        <div class="flex flex-row-reverse mt-4">السعر</div>
        <div class="flex justify-between mb-2">
          <div>10$</div>
          <div>300$</div>
        </div>
        <div class="grid grid-cols-1">
          <input
            type="range"
            value="10"
            min="10"
            max="300"
            oninput="this.nextElementSibling.value = this.value"
          />
          <!-- <output>10</output> -->
        </div>
      </div>

      <div class="hidden md:flex top-0">
        <div 
          class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
        >
          <img
            src="../../assets/websitePicture/1.png"
            class="object-cover h-96 w-72"
          />
          <div class="absolute flex top-0 left-0 px-6 py-4 space-x-1">
            <h4 class="mb-3 text-4xl font-semibold tracking-tight text-white">
              50 % 
            </h4>
               <h4 class="grid self-end  mb-3  text-xl font-semibold tracking-tight text-white">
            off
            </h4>

          </div>
          <div class="absolute bottom-0 right-0 b px-6 py-4">
            <h4
              class="text-right mb-3 text-xl font-semibold tracking-tight text-white"
            >
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفح
            </h4>
          </div>
        </div>
      </div>
     

      
    </div>
        </DisclosurePanel>
      </Disclosure>
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
  RadioGroupLabel,
  RadioGroupOption,
  RadioGroup,
} from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/solid";

const product = {
  colors: [
    {
      name: "Washed Black",
      bgColor: "bg-[#E250FA]",
      selectedColor: "#E250FA",
    },
    { name: "Washed Green", bgColor: "bg-[#FAB150]", selectedColor: "#FAB150" },
     { name: "Washed Green", bgColor: "bg-[#FAB150]", selectedColor: "#FAB150" },
      { name: "Washed Green", bgColor: "bg-[#FAB150]", selectedColor: "#FAB150" },
       { name: "Washed Green", bgColor: "bg-[#FAB150]", selectedColor: "#FAB150" },
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
    types: [
    { name: "جلابيب"},
    { name: "فساتين" },
    { name: "أخمرة وشالات" },
  ],
     dates: [
    { name: "30-3-2012"},
    { name: "15-12-2015" },
    { name: "30-12-1998" },
    { name: "21-5-1887" },
    { name: "5-5-2005" },
    { name: "3-4-2005" },
  ],
   images: [
    {
      id: 1,
      price:"120₪",
      name: "Angled view",
      PriceBeforeDiscount:"180₪",
      description:"غير مبطن الدراجة - نسيج اسود - ياقة",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 2,
      name: "Angled view",
      price:"120₪",
      PriceBeforeDiscount:"180₪",
      description:"غير مبطن الدراجة - نسيج اسود - ياقة",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 3,
      name: "Angled view",
      price:"120₪",
      PriceBeforeDiscount:"180₪",
      description:"غير مبطن الدراجة - نسيج اسود - ياقة",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 4,
      name: "Angled view",
      price:"120₪",
      PriceBeforeDiscount:"180₪",
      description:"غير مبطن الدراجة - نسيج اسود - ياقة",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 5,
      name: "Angled view",
      price:"120₪",
      PriceBeforeDiscount:"180₪",
      description:"غير مبطن الدراجة - نسيج اسود - ياقة",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },]
 
 
  // More sections...
};

export default {
  setup() {
    const selectedColor = ref(product.colors[0]);
    const selectedSize = ref(product.sizes[2]);
    const selectedtyps = ref(product.types[1]);
    return {
      product,selectedSize,selectedColor,selectedtyps
    };
  },
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    RadioGroupLabel,
    ChevronUpIcon,
    RadioGroupOption,
    RadioGroup,
  },
};
</script>
<style scoped>
@media screen and (-webkit-min-device-pixel-ratio:0) {
    input[type='range'] {
      overflow: hidden;
      -webkit-appearance: none;
     background-color: #F3F3F3;
    
    }
    
    input[type='range']::-webkit-slider-runnable-track {
      height: 10px;
      -webkit-appearance: none;
      color: #13bba4;
      margin-top: -1px;
    }
    
    input[type='range']::-webkit-slider-thumb {
      width: 10px;
      -webkit-appearance: none;
      height: 10px;
      cursor: ew-resize;
      background: #9a905d;
      box-shadow: -1000px 0 0 1000px #9a905d;
    }

}
</style>