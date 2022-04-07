<template>
  <div class="mx-auto pt-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:pt-20">
    <div
      class="
        grid grid-cols-1
        gap-12
        pl-48
        md:pl-0
        pt-10
        md:pt-0 md:grid-cols-2
        lg:grid-cols-2
        xl:grid-cols-4
        gap-y-16
        justify-between
        items-center
        pb-24
      "
    >
      <div
        class="
          text-[25px] text-center
          font-bold
          border-b-[18px] border-b-[#A9F7F7]
          max-w-[250px]
          relative
        "
      >
        <span class="absolute -top-[21px] right-5 text-[#201A3C] text-[24px] font-shamelBold"
          >توصيل سريع 3 ايام</span
        >
      </div>
      <div
        class="
          text-[25px] text-center
          font-bold
          border-b-[18px] border-b-[#A9F7F7]
          max-w-[250px]
          -pb-2
          relative
        "
      >
        <span class="absolute -top-[21px] right-4 text-[#201A3C] text-[24px] font-shamelBold"
          >توصيل مجاني +300
        </span>
      </div>
      <div
        class="
          text-[25px] text-center
          font-bold
          border-b-[18px] border-b-[#A9F7F7]
          max-w-[300px]
          relative
        "
      >
        <span class="absolute -top-5 right-14 text-[#201A3C] text-[24px] font-shamelBold"
  
          >تغليف مجاني
        </span>
      </div>
      <div
        class="
          text-[25px] text-center
          font-bold
          border-b-[18px] border-b-[#A9F7F7]
          max-w-[250px]
          relative
        "
      >
        <span class="absolute -top-5 right-8 text-[#201A3C] text-[24px] font-shamelBold"
          >تخفيض للطالبات
        </span>
      </div>
    </div>
    <img :src="DiscountImageUrl" />
    <div class="text-center pt-20">
      <p class="text-[#201A3C] font-bold text-[39px] font-shamelBold pb-4">
        احصلي على هدية مع اختيار التغليف#
      </p>
      <div
        class="
          space-y-0
          sm:grid sm:grid-cols-2 sm:gap-6  sm:space-y-0
          lg:grid-cols-3 lg:gap-3
        "
      >
        <div
          v-for="person in people"
          :key="person.imageUrl"
          class="space-y-6 xl:space-y-10 relative"
        >
          <img
            class="w-full max-h-[500px] rounded-[20px] mb-10 sm:mb-0"
            :src="person.imageUrl"
            alt=""
          />
          <div
            class="
              flex flex-col
              items-end
              justify-end
              absolute
              bottom-8
              right-8
              sm:max-w-[275px]
              leading-[30px]
            "
          >
            <div
              class="
                bg-[#201A3C]
                rounded-[10px]
                flex
                items-center
                justify-center
                mb-[2px]
              "
            >
              <h3
                class="text-white py-3 px-4 text-[27px] text-center font-shamelnormal"
              >
                {{ person.newAt }}
              </h3>
            </div>
            <div
              class="
                bg-[#201A3C]
                rounded-[10px]
                flex
                items-center
                justify-center
              "
            >
              <h3
                class="
                  text-white text-[27px]
                  font-shamelBold
                  xl:text-[22px]
                  py-3
                  pt-5
                  px-4
                  md:pl-14
                  xl:pl-18
                  sm:text-[27px]
                  text-right
                  leading-[50px]
                "
              >
                {{ person.details }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// const sales = ['توصيل سريع 3 ايام','توصيل مجاني +300','تغليف مجاني','تخفيض للطالبات']
const DiscountImageUrl =
  "https://media.discordapp.net/attachments/938405759996276806/960115851711873054/Group_99.png?width=1206&height=606";
const people = [
  {
    newAt: "جديدنا في",
    details: "جلابيب",
    imageUrl:
      "https://media.discordapp.net/attachments/938405759996276806/960134489357578260/unknown.png?width=389&height=607",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    newAt: "جديدنا في",
    details: "الفساتين",
    imageUrl:
     "https://media.discordapp.net/attachments/938405759996276806/960134488808099880/unknown.png?width=389&height=607",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    newAt: "جديدنا في",
    details: `الشالات والأخمرة`,
    imageUrl: "https://media.discordapp.net/attachments/938405759996276806/960134489101717554/unknown.png?width=389&height=607"
      ,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
];
export default {
  setup() {
    return {
      // sales,
      people,
      DiscountImageUrl,
    };
  },
};
</script>
