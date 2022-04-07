<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <nav class="bg-[#201A3C] text-white space-y-3" aria-label="Sidebar">
    <p
      class="
        grid grid-cols-1
        px-5
        py-5
        gap-4
        place-items-end
        border-b-2 border-[#393063]
      "
    >
      الملف الشخصي
    </p>

    <a
      class="
        flex
        justify-between
        flex-row-reverse
        px-5
        py-3
        text-[16px]
        font-shamelBold
        rounded-md
        border-b-2 border-[#393063]
      "
      v-for="item in navigation"
      :key="item.name"
      :href="item.href"
      :aria-current="item.current ? 'page' : undefined"
    >
      <span class="truncate hover:text-gold">
        {{ item.name }}
      </span>
      <svg
        width="11"
        height="17"
        viewBox="0 0 11 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.1582 16.1799L10.1582 0.820002C10.1582 0.0931492 9.28049 -0.277135 8.75934 0.244005L1.07932 7.92396C0.763893 8.23939 0.763893 8.76053 1.07932 9.07609L8.75934 16.7561C9.28049 17.2771 10.1582 16.9068 10.1582 16.1799Z"
          fill="white"
        />
      </svg>
    </a>

    <a
      href=""
      class="
        flex
        justify-between
        flex-row-reverse
        px-5
        pl-3
        py-3
        text-sm
        font-medium
        rounded-md
      "
    >
      <span class="hover:text-gold"> تسيجل خروج </span>

      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.73828 17.6094V19.4062C6.73828 21.3879 8.35038 23 10.332 23H19.3613C21.343 23 22.9551 21.3879 22.9551 19.4062V3.59375C22.9551 1.6121 21.343 0 19.3613 0H10.332C8.35038 0 6.73828 1.6121 6.73828 3.59375V5.39062C6.73828 5.88687 7.14047 6.28906 7.63672 6.28906C8.13297 6.28906 8.53516 5.88687 8.53516 5.39062V3.59375C8.53516 2.60301 9.34129 1.79688 10.332 1.79688H19.3613C20.3521 1.79688 21.1582 2.60301 21.1582 3.59375V19.4062C21.1582 20.397 20.3521 21.2031 19.3613 21.2031H10.332C9.34129 21.2031 8.53516 20.397 8.53516 19.4062V17.6094C8.53516 17.1131 8.13297 16.7109 7.63672 16.7109C7.14047 16.7109 6.73828 17.1131 6.73828 17.6094ZM0.612938 9.95669L2.62477 7.94485C2.97572 7.5939 3.54462 7.5939 3.89539 7.94485C4.24635 8.29563 4.24635 8.86452 3.89539 9.2153L2.46439 10.6465H13.252C13.7482 10.6465 14.1504 11.0487 14.1504 11.5449C14.1504 12.0412 13.7482 12.4434 13.252 12.4434H2.46439L3.89539 13.8745C4.24635 14.2253 4.24635 14.7942 3.89539 15.145C3.71992 15.3205 3.49004 15.4082 3.26017 15.4082C3.03012 15.4082 2.80025 15.3205 2.62477 15.145L0.612938 13.1332C-0.262863 12.2574 -0.262863 10.8325 0.612938 9.95669Z"
          fill="white"
        />
      </svg>
    </a>
  </nav>
</template>

<script>
const navigation = [
  { name: "حسابي ", href: "#" },
  { name: "طلباتي ", href: "#" },
  { name: "تتبع الطلب", href: "#" },
  { name: "عنواني ", href: "#" },
  { name: "خدمة العملاء  ", href: "#" },
];

export default {
  setup() {
    return {
      navigation,
    };
  },
};
</script>