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
         <Tabel />
                  
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
