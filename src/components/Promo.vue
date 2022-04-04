<template>
  <div class="max-w-7xl mx-auto container sm:px-6 lg:px-8">
    <div class="relative mx-6 sm:mx-0">
      <img src="../assets/websitePicture/Maskgroup.png" class="relative" />
      <div class="paragraph_text">
        <div class=" z-10 hidden blocs absolute lg:flex flex-col items-center right-16 bottom-36 rounded-[20px]">
          <p class="text-[16px] text-center text-white pt-10 font-shamelnormal">
            زادك في الدنيا
          </p>
          <p
            class="
              text text-center text-white
              pt-2
              font-shamelBold
              text-[32px]
              pr-74px
              pl-74px
              second_paragraph
            "
          >
            استمتعي باختيار احدث الموديلات النسائية
          </p>
          <button
            type="button"
            class="
              items-center
              flex
              mt-4
              px-9
              py-3
              pt-4
              border border-transparent
              text-[18px]
              font-shamelBold
              text-gold
              bg-white
              hover:bg-indigo-200
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-indigo-500
              market_button
            "
          >
            تسوق الان
          </button>
        </div>
      </div>
          <div class="flex flex-row items-center justify-center pt-8 absolute bottom-4 right-[50%]">
      <span class="h-[17px] w-[17px] rounded-[50%] border-[#201A3C] border-[1px] "></span>
      <span class="h-[17px] w-[17px]  rounded-[50%] bg-[#CC9933] mx-2"></span>
      <span class="h-[17px] w-[17px] rounded-[50%] border-[#201A3C] border-[1px]"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blocs {
  max-width: 430px;
  height: 360px;
  background: #201b3d;
}
.paragraph_text {
  max-width: 275px;
}
.second_paragraph {
  line-height: 50px;
  font-size: 34px;
  letter-spacing: 0.2px;
}
.market_button{
  border-radius: 10px;
}
</style>