<template>
    <div class="tabs relative" >
  <div class="sm:hidden">
    <label for="tabs" class="sr-only">Select a tab</label>
    <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
    <select id="tabs" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
      <option>مجتمع زاد</option>

      <option>جديد</option>

      <option selected>تخفيضات</option>

      <option>الرئيسية</option>
    </select>
  </div>
  <div class="hidden sm:block">
    <nav class="flex justify-center space-x-4 items-center "  aria-label="Tabs">
      <!-- Current: "bg-gray-200 text-gray-800", Default: "text-gray-600 hover:text-gray-800" -->
      <a href="#" class=" hover:text-gray-800 px-3 py-2 text-white font-medium text-sm rounded-md">مجتمع زاد </a>
      <a href="#" class="text-white hover:text-gray-800 px-3 py-2 font-medium text-sm rounded-md"> جديد </a>
      <a href="#" class="text-white px-3 py-2 font-medium text-sm rounded-md" aria-current="page"> تخفيضات </a>
      <a href="#" class="border-white border-b-4  text-white hover:text-gray-800 px-3 py-2 font-medium text-sm rounded-md"> الرئيسية </a>
    </nav>
  </div>
  <LeftSideLogin />
</div>
</template>


<script>
import LeftSideLogin from './LeftSideLogin.vue'

export default {
  data() {
    return{
    }
  },
  components:{
    LeftSideLogin
  }
}
</script>

<style scoped>
.tabs{
background: #CC9933;
min-height: 60px;
}
.tabs nav{
min-height: 60px;
}
</style>