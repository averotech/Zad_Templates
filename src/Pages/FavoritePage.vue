<template>
  <div class="bg-white">
    <div class="max-w-2xl mx-auto py-16 px-4 sm:pb-24 sm:pt-11 sm:px-6 lg:max-w-7xl lg:px-8 ">
    <div class="flex flex-row-reverse">
      <ul
        class="
          list-reset
          breadcrumbs
          flex flex-row-reverse
          font-shamelnormal
          text-[18px]
        "
      >
        <li>
          <a>الرئيسية</a>
        </li>
        <li>/</li>
        <li> المفضلة</li>
      </ul>
    </div>
    <p class="text-center text-[33px] text-[#201A3C] py-4">قائمة ما تتمناة</p>
    <p class="text-right text-[22px] text-[#201A3C] py-4"> المنتجات (2)</p>

  <div
    class="flex justify-between flex-row-reverse h-14 rounded-lg container max-w-7xl mx-auto sm:px-6 lg:px-8 mt-3 bg-login my-2 text-white px-2"
  >
  <div class="flex flex-row-reverse items-center justify-start ml-4 min-w-[60px] lg:min-w-[100px]">
    <p class="grid grid-cols-1 text-right  font-shamelnormal text-[14px] lg:text-[18px]">الفئات </p>
    <DownArrowIcon class="mr-4" />
    </div>
      <div class="flex flex-row-reverse items-center justify-start mx-6 min-w-[60px] lg:min-w-[100px]">
    <p class="grid grid-cols-1 text-right  font-shamelnormal text-[14px] lg:text-[18px]">الحالة </p>
    <DownArrowIcon class="mr-4" />
    </div>
      <div class="flex flex-row-reverse items-center justify-start ml-4 min-w-[100px] lg:min-w-[120px]">
    <p class="grid grid-cols-1 text-right  font-shamelnormal text-[14px] lg:text-[18px] "> كل الفلاتر </p>
    <DownArrowIcon class="mr-4" />
    </div>
    <div class="grid md:gap-2 md:grid-cols-2 w-72 md:w-full px-6 content-center">
      <div class="flex justify-start">
        <div class="mb-3 flex-row justify-start items-center pt-5 mr-10 min-w-[230px] hidden sm:flex">
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
      <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6  lg:grid-cols-4 xl:gap-x-4" dir="rtl">
        <a v-for="product in products" :key="product.id" :href="product.href" class="group ">
          <div class="w-full aspect-w-1 aspect-h-1 overflow-hidden sm:aspect-w-2 sm:aspect-h-3  relative">
            <img :src="product.imageSrc" :alt="product.imageAlt" class="relative w-full h-full object-center object-cover rounded-tl-[20px] rounded-tr-[20px] group-hover:opacity-75 md:h-[300px] " />
          <FavoiruteIcon class="absolute top-4 right-4"/>
          <div class="text-white text-[17px] font-bold absolute -bottom-1 left-0 w-24 pt-2.5 rounded-tr-[10px] rounded-br-[10px] bg-[#29A71A] text-center h-10"  v-show="product.new?true:false"><p>جديد</p></div>
          </div>
          <div class=" flex flex-col justify-start items-start text-base px-4 py-2 font-medium text-gray-900 border-[1px] border-[#E424532E] rounded-br-[20px] rounded-bl-[20px]">
            <h3 class="text-[18px] font-bold">
              {{ product.name }}
            </h3>
          <p class="mt-1 text-[16px] text-right font-shamelnormal text-[#201A3C]">
            {{ product.description }}
          </p>
            <p class="text-[#CC9933] font-bold text-xl ">
              {{ product.price }}
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import FavoiruteIcon from '../assets/icons/FavoiruteIcon.vue'
import DownArrowIcon from '../assets/icons/DownArrowIcon.vue'
const products = [
  {
    id: 1,
    name: 'فساتين',
    href: '#',
    price: '13₪',
    description: 'أسود - ياقة الدراجة - نسيج غير مبطن - فساتين',
    new:true,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 2,
    name: 'فساتين',
    href: '#',
    price: '64₪',
    new:true,
    description: 'أسود - ياقة الدراجة - نسيج غير مبطن - فساتين',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-02.jpg',
    imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
  },
  {
    id: 3,
    name: 'فساتين',
    href: '#',
    price: '32₪',
    new:true,
    description: 'أسود - ياقة الدراجة - نسيج غير مبطن - فساتين',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg',
    imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  },
    {
    id: 4,
    name: 'فساتين',
    href: '#',
    price: '13₪',
    new:false,
    description: 'أسود - ياقة الدراجة - نسيج غير مبطن - فساتين',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 5,
    name: 'فساتين',
    href: '#',
    price: '64₪',
    new:false,
    description: 'أسود - ياقة الدراجة - نسيج غير مبطن - فساتين',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-02.jpg',
    imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
  },
  {
    id: 6,
    name: 'فساتين',
    href: '#',
    price: '32₪',
    new:false,
    description: 'أسود - ياقة الدراجة - نسيج غير مبطن - فساتين',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg',
    imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  },
    {
    id: 7,
    name: 'فساتين',
    href: '#',
    price: '64₪',
    new:false,
    description: 'أسود - ياقة الدراجة - نسيج غير مبطن - فساتين',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-02.jpg',
    imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
  },
  // {
  //   id: 8,
  //   name: 'فساتين',
  //   href: '#',
  //   price: '32₪',
  //   new:false,
  //   description: 'أسود - ياقة الدراجة - نسيج غير مبطن - فساتين',
  //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg',
  //   imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  // },
  // More products...
]

export default {
  setup() {
    return {
      products,
    }
  },
  components:{
      FavoiruteIcon,DownArrowIcon
  }
}
</script>