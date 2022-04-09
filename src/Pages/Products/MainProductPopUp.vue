<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="
        flex
        items-end
        justify-center
        min-h-screen
        pt-4
        px-4
        pb-20
        text-center
        sm:block sm:p-0
      "
    >
      <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >

      <div
        class="
          relative
          inline-block
          align-bottom
          bg-white
          rounded-lg
          px-4
          pt-5
          pb-4
          text-left
          overflow-hidden
          shadow-xl
          transform
          transition-all
          sm:my-8 sm:align-middle sm:max-w-7xl sm:w-full sm:p-6
        "
      >
        <div
          class="
            max-w-2xl
            mx-auto
            py-16
            px-4
            sm:py-24 sm:px-6
            lg:max-w-7xl lg:px-8
          "
        >
          <div class="lg:grid lg:grid-cols-3 lg:gap-x-8 lg:items-start">
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
              <div class="mt-3 flex flex-row justify-between items-center">
                <div class="ml-4 flex">
                  <a
                    href="#"
                    class="
                      text-sm
                      font-medium
                      text-[#CC9933] text-[11px]
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
                      product.rating > rating
                        ? 'text-[#FFC107]'
                        : 'text-gray-300',
                      'h-5 w-5 flex-shrink-0',
                    ]"
                    aria-hidden="true"
                  />
                </div>
                <h3 class="text-[#9B9994] text-[14px] font-shamelnormal">
                  SKU:{{ product.SKU }}
                </h3>
              </div>
              <form class="mt-6">
                <!-- Colors -->
                <div class="flex flex-col items-end">
                  <h3 class="text-[16px] font-bold text-[#201A3C]">الألوان</h3>
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
                          hover:bg-[#CC9933]
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
                    Checked: "bg-indigo-600 border-transparent text-white hover:bg-indigo-700", Not Checked: "bg-white border-gray-200 text-gray-900 hover:bg-gray-50"
                  -->
                      <label
                        class="
                          bg-white
                          border-[#201A3C]
                          text-[#201A3C] text-[16px]
                          pt-4
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
                          hover:bg-[#CC9933]
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
              </form>
            </div>
            <!-- Image gallery -->
            <div as="div" class="grid col-span-2">
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
                <div
                  class="hidden mobile:flex flex-col flex-[0.2] justify-between"
                >
                  <img
                    v-for="image in product.images"
                    :key="image.src"
                    :src="image.src"
                    :alt="image.src"
                    class="
                      w-full
                      h-[19%]
                      object-center object-cover
                      sm:rounded-lg
                    "
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
            </div>
          </div>
        </div>
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