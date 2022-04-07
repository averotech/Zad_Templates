<template>
  <div class="fixed inset-0 flex items-center justify-center">
    <button
      type="button"
      @click="openModal"
      class="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      Open dialog
    </button>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
        
            <div
              class="inline-block mx-20 p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
            >
          
             
              <div class="mt-2">
                <div class="text-sm text-gray-500">
                 <div class="lg:grid lg:grid-cols-3 lg:gap-x-8 lg:items-start">
        <!-- Product info -->
        <div class="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0 col-span-1">
          <h1
            class="
              text-[22px]
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
          <div class="mt-3 flex flex-row justify-between">
            <div class="ml-4 flex">
              <a
                href="#"
                class="text-sm font-medium text-[#CC9933] text-[14px]"
              >
                ({{ product.ReviewCount }} تعليقات)</a
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
            <h3 class="text-[#9B9994] text-[16px]">SKU:{{ product.SKU }}</h3>
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
            <h3 class="text-[#C4C4C4] text-[24px] font-bold px-4">
              {{ product.priceBeforeDiscount }}
            </h3>
            <h3 class="text-[#CC9933] text-[38px] font-bold">
              {{ product.price }}
            </h3>
          </div>


          <form class="mt-6">
            <!-- Colors -->
            <div class="flex flex-col items-end">
              <h3 class="text-[16px] font-bold text-[#201A3C]">الألوان</h3>

              <RadioGroup v-model="selectedColor" class="mt-2">
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
              </RadioGroup>
            </div>
            <!-- Size picker -->
            <div class="mt-8">
              <div class="flex items-center justify-between">
                <a href="#" class="text-sm font-bold text-[#CC9933]"
                  >مرجع المقاس</a
                >
                <h2 class="text-[17px] font-bold text-[#201A3C]">المقاس</h2>
              </div>

              <RadioGroup v-model="selectedSize" class="mt-2">
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
                <HeartIcon class="h-6 w-6 flex-shrink-0" aria-hidden="true" />
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
         
          </form>
        </div>
        <!-- Image gallery -->
        <TabGroup as="div" class="grid col-span-2">
          <!-- Image selector -->
          <TabPanels class="w-auto h-[500px] flex gap-3">
            <img
              :src="product.Image.src"
              :alt="product.Image.src"
              class="w-full h-full object-center object-cover sm:rounded-lg flex-[0.8]"
            />
            <div class="flex flex-col flex-[0.2] justify-between" >
             
              <img
              v-for="image in product.images" :key="image.src"
              :src="image.src"
              :alt="image.src"
              class="w-full h-[23%] object-center object-cover sm:rounded-lg"
            />
          
            </div>
          </TabPanels>
          
       
       
        </TabGroup>
      </div>
                  
                </div>
              </div>

           
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script >

import { ref } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from '@headlessui/vue'
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
import { HeartIcon, MinusSmIcon, PlusSmIcon } from "@heroicons/vue/outline";
import Shopping from "../../assets/icons/Shopping.vue";
import ReturnProduct from "../../assets/icons/ReturnProduct.vue";
import Coin from "../../assets/icons/Coin.vue";
import Tabel from '../../components/Tabel.vue'
import ProductGrid from '../../components/ProductGrid.vue'
const isOpen = ref(true)
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
      TransitionChild,
 TransitionRoot,
  Dialog,
  DialogOverlay,
  DialogTitle,
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
    HeartIcon,
    MinusSmIcon,
    PlusSmIcon,
    StarIcon,
    Shopping,
    ReturnProduct,
    Coin,
    Tabel,
    ProductGrid
  },
  
    methods: {
    closeModal() {
  isOpen.value = false
},
 openModal() {
  isOpen.value = true
}
    },
  setup() {

    const selectedColor = ref(product.colors[0]);
    const selectedSize = ref(product.sizes[2]);
    return {
 isOpen,
  product,
      selectedColor,
      selectedSize,
    };
  },
};
</script>
