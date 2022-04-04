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
                <Logo class="pb-2" />
              </div>
            </div>
            <p class="text-center my-3 text-[18px] font-bold">
              اعادة تعين كلمة المرور
            </p>

            <form class="space-y-2 flex flex-col items-center">
              <div class="py-4">
                <label
                  class="
                    block
                    text-xs
                    md:text-[14px]
                    font-medium
                    text-right text-[#201A3C]
                    pr-1
                    pb-1
                  "
                >
                  رقم الهاتف
                </label>
                <div>
                  <input
                    id="text"
                    name="text"
                    type="text"
                    autocomplete="current-text"
                    required=""
                    class="
                      inline-flex
                      items-center
                      justify-center
                      px-[75px]
                      md:px-16
                      py-3
                      border border-[#9A92CC]
                      shadow-sm
                      text-[#201A3C]
                      font-medium
                      bg-white
                      rounded-[10px]
                      text-[14px]
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
                  px-16
                  md:px-[40px]
                  py-3
                  pt-4
                  border border-[#9A92CC]
                  shadow-sm
                  font-bold
                  rounded-md
                  text-white
                  bg-[#201A3C]
                  hover:bg-[#CC9933]
                  rounded-[10px]
                  text-[14px]
                  md:text-[16px]
                "
              >
                تأكيد اعادة تعين كلمة المرور
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