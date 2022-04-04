<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <footer class="bg-[#201A3C] " aria-labelledby="footer-heading ">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-8 lg:px-8 ">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-4 xl:col-span-1">
          <Logo />
          <!-- <img class="h-10" src="https://tailwindui.com/img/logos/workflow-mark-gray-300.svg" alt="Company name" /> -->
          <div class="flex flex-row items-center justify-start">
            <Email />
            <p class="text-white text-[17px] font-shamelnormal pl-1.5  font-normal">customer@zadshopping.com</p>
          </div>
          <div class="flex flex-row items-center justify-start">
            <Telephone />
            <p class="text-white pl-1 text-[17px] font-shamelnormal">0545965577</p>
          </div>
        </div>
        <div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-14">
            <div>
              <h3
                class="
                  text-[18px]
                  font-shamelBold
                  text-white
                  tracking-wider
                  uppercase
                  text-right
                "
              >
                التصنيفات
              </h3>
              <ul role="list" class="mt-4 space-y-4  text-right">
                <li v-for="item in navigation.Category" :key="item.name">
                  <a
                    :href="item.href"
                    class="
                      text-[16px]
                      font-shamelnormal
                      text-white
                      hover:text-[#CC9933]
                    

                    "
                  >
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3
                class="
                  text-[18px]
                  font-shamelBold
                  text-white
                  tracking-wider
                  uppercase
                  text-right
                "
              >
                روابط سريعة
              </h3>
              <ul role="list" class="mt-4 space-y-4 text-right">
                <li v-for="item in navigation.links" :key="item.name">
                  <a
                    :href="item.href"
                    class="
                      text-[16px]
                      font-shamelnormal
                      text-white
                      hover:text-[#CC9933]
                     
                    "
                  >
                    {{ item.name }}
                  </a>
                </li>
              </ul>
              
            </div>
            
          </div>
          <div >
            <p class="text-right text-white text-[18px] font-bold pb-4" > تابعنا على</p>
        <div class="flex  space-x-6 items-end justify-end">
            <a
              v-for="item in navigation.social"
              :key="item.name"
              :href="item.href"
              class="text-white hover:text-[#CC9933]"
            >
              <span class="sr-only">{{ item.name }}</span>
              <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
          </div>
        </div>
      </div>
      <div class="mt-12 border-t border-gray-200 pt-8">
        <p class="text-[16px] font-shamelnormal text-white xl:text-center">
          Copyright 2021 Zaad . All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent, h } from "vue";
import Logo from "../assets/icons/Logo.vue";
import Email from "../assets/icons/Email.vue";
import Telephone from '../assets/icons/Telephone.vue'
const navigation = {
  Category: [
    { name: "جلابيب", href: "#" },
    { name: "فساتين", href: "#" },
    { name: "شالات وأخمرة", href: "#" },
  ],
  links: [
    { name: "من نحن", href: "#" },
    { name: "أسئلة متكرره", href: "#" },
    { name: "السياسة والخصوصية", href: "#" },
    { name: "سياسة الشحن والاسترجاع", href: "#" },
    { name: "متابعة الطلبية", href: "#" },
  ],

  social: [
    {
      name: "Facebook",
      href: "#",
      icon: defineComponent({
        render: () =>
  <svg
    width="20"
    height="22"
    viewBox="0 0 16 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.9964 4.98125H15.7351V0.21125C15.2626 0.14625 13.6376 0 11.7451 0C7.79639 0 5.09139 2.48375 5.09139 7.04875V11.25H0.733887V16.5825H5.09139V30H10.4339V16.5837H14.6151L15.2789 11.2512H10.4326V7.5775C10.4339 6.03625 10.8489 4.98125 12.9964 4.98125Z"
      fill="white"
    />
  </svg>

      }),
    },

    {
      name: "Twitter",
      href: "#",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
            }),
          ]),
      }),
    },
    {
      name: "Painteriest",
      href: "#",
      icon: defineComponent({
        render: () =>

  <svg
    width="20"
    height="23"
    viewBox="0 0 26 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.4075 0C5.18375 0.00125 0.8125 5.27 0.8125 11.015C0.8125 13.6787 2.30125 17.0025 4.685 18.0562C5.365 18.3625 5.275 17.9887 5.86 15.7512C5.90625 15.565 5.8825 15.4037 5.7325 15.23C2.325 11.2887 5.0675 3.18625 12.9212 3.18625C24.2875 3.18625 22.1637 18.9137 14.8987 18.9137C13.0262 18.9137 11.6312 17.4437 12.0725 15.625C12.6075 13.4587 13.655 11.13 13.655 9.56875C13.655 5.63375 7.7925 6.2175 7.7925 11.4312C7.7925 13.0425 8.3625 14.13 8.3625 14.13C8.3625 14.13 6.47625 21.75 6.12625 23.1737C5.53375 25.5837 6.20625 29.485 6.265 29.8212C6.30125 30.0062 6.50875 30.065 6.625 29.9125C6.81125 29.6687 9.09125 26.4162 9.73 24.065C9.9625 23.2087 10.9162 19.7337 10.9162 19.7337C11.545 20.8687 13.3575 21.8187 15.2887 21.8187C21.0337 21.8187 25.1862 16.7687 25.1862 10.5025C25.1662 4.495 20.025 0 13.4075 0V0Z"
      fill="white"
    />
  </svg>

      }),
    },

        {
      name: "Instagram",
      href: "#",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    },
  ],
};

export default {
  setup() {
    return {
      navigation,
    };
  },
  components: { Logo, Email,Telephone },
};
</script>