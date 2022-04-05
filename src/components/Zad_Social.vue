<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-[#E424532E] mt-28">
    <div class="mx-auto pt-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:pt-12">
      <div class="space-y-8">
        <div
          class="
            space-y-5
            sm:space-y-4
            flex flex-col
            items-center
            justify-center
          "
        >
          <span
            class="
              text-[45px]
              leading-10
              font-extrabold
              text-[#201A3C]
              tracking-tight
              sm:text-4xl
              spanTitle
              drop-shadow-none
            "
            >مجتمع زاد</span
          >
        </div>
        <div
          class="
            space-y-0
            sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0
            lg:grid-cols-3 lg:gap-3
          "
        >
            <div v-for="person in people" :key="person.imageUrl" class="space-y-6 xl:space-y-10 relative">
              <img
                class=" w-full max-h-[500px]  rounded-[20px] "
                :src="person.imageUrl"
                alt=""
              />
              <div class="flex flex-col items-end justify-end absolute  bottom-16 right-8 sm:max-w-[275px] leading-[30px]">
                <h3 class="text-white text-[14px] font-normal">{{person.date}}</h3>
                <h3 class="text-white 
                text-[22px] font-bold xl:text-[22px]  sm:text-[18px]  text-right">{{person.details}}</h3>

              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.spanTitle {
  text-shadow: 0 2px #e42453;
}
</style>
<script>
const people = [
  {
    date: "20/04/2022",
    details: `لنصوص لوريم أيبسوم,
    العديد من الأنواع المتوفره هنالك`,
    imageUrl:"https://media.discordapp.net/attachments/938405759996276806/960086943893446716/32.png",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    date: "20/04/2022",
    details: "لنصوص لوريم أيبسوم,العديد من الأنواع المتوفره هنالك",
    imageUrl:"https://media.discordapp.net/attachments/938405759996276806/960086943654355014/233.png",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    date: "20/04/2022",
    details: "لنصوص لوريم أيبسوم,العديد من الأنواع المتوفره هنالك",
    imageUrl:"https://media.discordapp.net/attachments/938405759996276806/960086943893446716/32.png",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
];

export default {
  setup() {
    return {
      people,
    };
  },
};
</script>