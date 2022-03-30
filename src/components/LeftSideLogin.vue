<template>
  <div
    class="absolute top-52 left-12 flex-col items-center justify-center hidden lg:flex"
  >
    <button ><FaceBook /></button>
    <button class="mt-10"><Twitter  /></button>
    <button class="mt-10"><Inestegram  /></button>
    <button class="mt-10"><Paintrest  /></button>
    <button class="mt-10"><NewsLetter  /></button>
  </div>
</template>

<script>
import FaceBook from "../assets/icons/FaceBook.vue";
import Twitter from "../assets/icons/Twitter.vue";
import Inestegram from "../assets/icons/Inestegram.vue";
import Paintrest from "../assets/icons/Pinterest.vue";
import NewsLetter from "../assets/icons/NewsLetter.vue";
import Burger from "../assets/icons/Burger.vue";

export default {
  data() {
    return {};
  },
  components: { FaceBook, Twitter, Inestegram, Paintrest, NewsLetter, Burger },
};
</script>
