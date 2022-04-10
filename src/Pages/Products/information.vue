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
           py-8
            px-4
             sm:px-6
            lg:max-w-7xl lg:px-8
          "
        >
  <div class="text-center ">
      معلومات الشحن

  </div>
        
<div class="flex  flex-row-reverse  space-x-2 bg-[#FAFAFA] mt-14">
    <div class="pt-4"> :   الشحن الى </div>
      <select name="category_id" id="category"
                                       
                                        class=" p-2 bg-grayscale block rounded-20px  bg-grey-lighter text-grey-darker border rounded ">
                                        <option value="">المدينة او المحافو</option>
                      
                                            <option    v-for="city in citys.citys">
                                          {{ city.name }}
                                             </option>
                                              
                                            
                                    </select>
  </div>  
  <div class="mt-4 flex  flex-row-reverse font-shamelnormal text-gold"> 
شحن سريع مجاني للطلبات اكثر من 333.85 sr

  </div>
  <div class="flex  justify-center m-6  " dir="rtl"> 
 <table class="text-center ">
    <thead>
        <tr>
      <th class="">وسيلة الشحن</th>
      <th class="border-x-2 border-[#958BC566]   ">زمن الشحن</th>
     <th class="">التكاليق</th>

    </tr>
  </thead>
  <tbody>
    <tr >
      <td class="border-t-2 border-[#958BC566] font-shamelnormal w-1/4">الشحن السريع</td>
      <td class="border-x-2  border-t-2 border-[#958BC566] font-shamelnormal  w-2/4   "> تاريخ التوصيل المحتمل في 2022/04/20 - 2022/04/15</td>
       <td class="border-t-2 border-[#958BC566]  font-shamelnormal  w-1/4">30.01</td>
   
    </tr>
   
  </tbody>
</table>
  </div>
    <div class="flex  flex-row-reverse font-shamelnormal"> 
موعد التوصيل =وقت النجهيو + وقت الشحن

  </div>
    <div class="flex  flex-row-reverse  font-shamelnormal  text-gold"> 
معلومات المزيدد
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
const citys = {
  citys: [
    { name: "يافا" },
     { name: "يافا" },
       { name: "يافا" },
         { name: "يافا" },
           { name: "يافا" },
             { name: "يافا" },

  ],

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
 
    return {
 
      citys,
    
    };
  },
};
</script>