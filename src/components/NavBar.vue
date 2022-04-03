<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="bg-white">
    <div class="container max-w-7xl mx-auto sm:px-6 lg:px-8 ">
      <div class="relative flex items-center justify-between h-16 mx-6 sm:mx-0">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            type="button"
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-gray-400
              hover:text-white hover:bg-gray-700
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
            "
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>

            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="
            flex
            items-center
            justify-center
            sm:items-stretch sm:justify-start
          "
        >
          <div class="hidden sm:block sm:ml-6 md:ml-0">
            <div class="flex space-x-4">
              <button
                type="button"
                class="
                  login_button
                  inline-flex
                  items-center
                  px-3
                  py-2
                  border border-transparent
                  font-medium
                  rounded-md
                  shadow-sm
                  text-white
                  bg-login
                  hover:bg-indigo-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                  rounded-[10px]
                "
              >
                تسجيل الدخول
              </button>
            </div>
          </div>
        </div>
        <div class="hidden sm:flex">
          <Logo />
        </div>
        <div
          class="
            absolute
            inset-y-0
            right-0
            flex
            items-center
            pr-2
            sm:static sm:inset-auto sm:ml-6 sm:pr-0
          "
        >
          <!-- nav Bar Left Icons -->
          <!-- search -->
          <button
            type="button"
            class="
              p-1
              pl-3

              rounded-full
              text-gray-400
              hover:text-white
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-offset-gray-800
              focus:ring-white
            "
          >
            <Search />
          </button>
          <!-- cart -->
          <button
            type="button"
            class="
              p-1
              pl-3

              rounded-full
              text-gray-400
              hover:text-white
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-offset-gray-800
              focus:ring-white
            "
          >
            <Cart />
          </button>

          <!-- profile -->
          <button
            type="button"
            class="
              p-1
              pl-3
              rounded-full
              text-gray-400
              hover:text-white
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-offset-gray-800
              focus:ring-white
            "
          >
            <Profile />
          </button>
          <!-- favourite -->
          <button
            type="button"
            class="
              p-1
              pl-3
              rounded-full
              text-gray-400
              hover:text-white
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-offset-gray-800
              focus:ring-white
            "
          >
            <Favourite />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a
          href="#"
          class="
            bg-gray-900
            text-white
            block
            px-3
            py-2
            rounded-md
            text-base
            font-medium
          "
          aria-current="page"
          >تسجيل الدخول</a
        >
      </div>
    </div>
  </nav>
</template>
<script>
import Cart from "../assets/icons/Cart.vue";
import Profile from "../assets/icons/Profile.vue";
import Favourite from "../assets/icons/Favourite.vue";
import Search from "../assets/icons/Search.vue";
import Logo from "../assets/icons/Logo.vue";

export default {
  data() {
    return {};
  },
  components: { Cart, Profile, Favourite, Search, Logo },
};
</script>

<style scoped>

</style>

