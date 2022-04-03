<template>
  <TransitionRoot as="template" :show="open">
    <Dialog
      as="div"
      class="fixed z-10 inset-0 overflow-y-auto"
      @close="open = false"
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
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
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
              sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6
              rounded-20px
              mx-auto
            "
          >
            <div>
              <Cross @click="open = false" ref="cancelButtonRef" />
              <div
                class="
                  mx-auto
                  flex
                  items-center
                  justify-center
                  h-12
                  w-12
                  rounded-full
                "
              >
                <Logo />
              </div>
            </div>

            <div class="flex flex-col justify-start items-center mt-4">
              <div class="flex flex-row justify-cener mt-4 mb-8">
                <button
                  type="button"
                  class="
           inline-flex
                    items-center
                    px-6
                    py-3
                    text-[12px]
                    md:text-[15px]
                    font-bolds
                    rounded-md
                    shadow-sm
                    text-white
                    bg-[#CC9933]
                    focus:ring-2 focus:ring-offset-2
                    rounded-[10px]
                  "
                >
                  تسجيل كعضو جديد
                </button>
                <button
                  type="button"
                  class="
                     inline-flex
                    items-center
                    px-6
                    py-3
                    text-[12px]
                    md:text-[15px]
                    font-bold
                    rounded-md
                    shadow-sm
                    rounded-[10px]
                    hover:text-[#CC9933]
                  "
                >
                  تسجيل الدخول الى زاد
                </button>
              </div>
              <button
                type="button"
                class="
                  inline-flex
                  items-center
                  justify-center
                  px-10
                  md:px-12
                  py-3
                  border border-[#9A92CC]
                  shadow-sm
                  text-[#201A3C]
                  font-medium
                  rounded-md
                  bg-white
                  hover:bg-[#CC9933] hover:text-white
                  rounded-[20px]
                  text-[14px]
                  md:text-[17px]
                  mb-4
                "
              >
                تسجيل الدخول بواسطة فيس بوك
                <!-- Heroicon name: solid/mail -->
                <FaceBookIcon class="pl-2" />
              </button>
              <button
                type="button"
                class="
                  inline-flex
                  items-center
                  justify-center
                  px-14
                  md:px-[64px]
                  py-3
                  border border-[#9A92CC]
                  shadow-sm
                  text-[#201A3C]
                  font-medium
                  rounded-md
                  bg-white
                  hover:bg-[#CC9933] hover:text-white
                  rounded-[20px]
                  text-[14px]
                  md:text-[17px]
                  mb-4
                "
              >
                تسجيل الدخول بواسطة أبل
                <!-- Heroicon name: solid/mail -->
                <AppleIcon class="pl-2" />
              </button>
              <button
                type="button"
                class="
                  inline-flex
                  items-center
                  justify-center
                  px-12
                  md:px-14
                  py-3
                  border border-[#9A92CC]
                  shadow-sm
                  text-[#201A3C]
                  font-medium
                  rounded-md
                  bg-white
                  hover:bg-[#CC9933] hover:text-white
                  rounded-[20px]
                  text-[14px]
                  md:text-[17px]
                "
              >
                تسجيل الدخول بواسطة جوجل
                <!-- Heroicon name: solid/mail -->
                <GoogleIcon class="pl-2" />
              </button>
            </div>
            <div
              class="
                flex flex-row
                justify-between
                items-center
                my-4
                sm:max-w-[290px]
                md:max-w-[342px]
                sm:ml-20
                md:ml-14
              "
            >
              <div class="border-b-2 border-[#CDCCD2] w-[45%]"></div>
              <span class="">او</span>
              <div class="border-b-2 border-[#CDCCD2] w-[45%]"></div>
            </div>

            <form class="space-y-2 flex flex-col items-center">
              <div class="-mt-2">
                <label
                  class="
                    block
                    text-xs
                    md:text-sm
                    text-right
                    font-medium
                    text-[#201A3C]
                  "
                >
                  عنوان البريد الالكتروني
                </label>
                <div class="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required=""
                    class="
                      inline-flex
                      items-center
                      justify-center
                      px-9
                      md:px-16
                      py-3
                      border border-[#9A92CC]
                      hover:border-[#CC9933]
                      shadow-sm
                      text-[#201A3C]
                      font-medium
                      bg-white
                      rounded-[20px]
                      text-[17px]
                      focus:border-[#CC9933] focus:outline-none
                    "
                  />
                </div>
              </div>

              <div>
                <label
                  for="phone-number"
                  class="
                    block
                    text-xs
                    md:text-sm
                    font-medium
                    text-right text-[#201A3C]
                    pr-1
                    pb-1
                  "
                  >رقم الهاتف</label
                >
                <div class="mt-1 relative rounded-md shadow-sm">
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
                    class="
                      inline-flex
                      items-center
                      justify-center
                      text-center
                      px-9
                      md:px-16
                      py-3
                      border border-[#9A92CC]
                      focus:border-[#CC9933] focus:outline-none
                      shadow-sm
                      text-[#201A3C]
                      font-medium
                      bg-white
                      rounded-[20px]
                      text-[17px]
                    "
                    placeholder="+1 (555) 987-6543"
                  />
                </div>
              </div>

              <div class="pb-2">
                <label
                  class="
                    block
                    text-xs
                    md:text-sm
                    font-medium
                    text-right text-[#201A3C]
                    pr-1
                    pb-1
                  "
                >
                  كلمة المرور
                </label>
                <div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required=""
                    class="
                      inline-flex
                      items-center
                      justify-center
                      px-9
                      md:px-16
                      py-3
                      border border-[#9A92CC]
                      focus:border-[#CC9933] focus:outline-none
                      shadow-sm
                      text-[#201A3C]
                      font-medium
                      bg-white
                      rounded-[20px]
                      text-[17px]
                    "
                  />
                </div>
              </div>
              <div class="pb-2">
                <label
                  class="
                    block
                    text-xs
                    md:text-sm
                    font-medium
                    text-right text-[#201A3C]
                    pr-1
                    pb-1
                  "
                >
                  تأكيد كلمة المرور
                </label>
                <div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required=""
                    class="
                      inline-flex
                      items-center
                      justify-center
                      px-9
                      md:px-16
                      py-3
                      border border-[#9A92CC]
                      shadow-sm
                      text-[#201A3C]
                      font-medium
                      bg-white
                      rounded-[20px]
                      text-[17px]
                      focus:border-[#CC9933] focus:outline-none
                    "
                  />
                </div>
              </div>
              <button
                type="submit"
                class="
                  inline-flex
                  items-center
                  justify-center
                  px-12
                  md:px-[120px]
                  py-3
                  border border-[#9A92CC]
                  shadow-sm
                  font-bold
                  rounded-md
                  text-white
                  bg-[#201A3C]
                  hover:bg-[#CC9933]
                  rounded-[20px]
                  text-[14px]
                  md:text-[17px]
                "
              >
                تسجيل الدخول
              </button>
            </form>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { CheckIcon } from "@heroicons/vue/outline";
import Logo from "../../assets/icons/Logo.vue";
import Cross from "../../assets/icons/Cross.vue";
import FaceBookIcon from "../../assets/icons/FaceBookIcon.vue";
import AppleIcon from "../../assets/icons/AppleIcon.vue";
import GoogleIcon from "../../assets/icons/GoogleIcon.vue";

export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    CheckIcon,
    Logo,
    Cross,
    FaceBookIcon,
    AppleIcon,
    GoogleIcon,
  },
  setup() {
    const open = ref(true);
    return {
      open,
    };
  },
};
</script>