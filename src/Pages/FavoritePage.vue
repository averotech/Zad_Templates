<template>
  <div class="bg-white">
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
      <h2 id="products-heading" class="sr-only">Products</h2>
      <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6  lg:grid-cols-4 xl:gap-x-4">
        <a v-for="product in products" :key="product.id" :href="product.href" class="group ">
          <div class="w-full aspect-w-1 aspect-h-1 overflow-hidden sm:aspect-w-2 sm:aspect-h-3  relative">
            <img :src="product.imageSrc" :alt="product.imageAlt" class="relative w-full h-full object-center object-cover rounded-tl-[20px] rounded-tr-[20px] group-hover:opacity-75 md:h-[300px] " />
          <FavoiruteIcon class="absolute top-4 right-4"/>
          <!-- <div class="text-white text-[17px] font-bold absolute bottom-0 w-20 rounded-tr-[20px] rounded-br-[20px] bg-[#29A71A] text-center h-10"  v-show="product.new?true:false"><p>جديد</p></div> -->
          </div>
          <div class=" flex flex-col justify-start items-end text-base px-4 py-2 font-medium text-gray-900 border-[1px] border-[#E424532E] rounded-br-[20px] rounded-bl-[20px]">
            <h3 class="text-[17px] font-bold">
              {{ product.name }}
            </h3>
          <p class="mt-1 text-[16px] text-right font-normal text-[#201A3C]">
            {{ product.description }}
          </p>
            <p class="text-[#CC9933] font-bold text-xl">
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
  {
    id: 8,
    name: 'فساتين',
    href: '#',
    price: '32₪',
    new:false,
    description: 'أسود - ياقة الدراجة - نسيج غير مبطن - فساتين',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg',
    imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  },
  // More products...
]

export default {
  setup() {
    return {
      products,
    }
  },
  components:{
      FavoiruteIcon
  }
}
</script>