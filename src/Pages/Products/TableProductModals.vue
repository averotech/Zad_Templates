<template>
  <div class="fixed inset-0 flex items-center justify-center">
    <button
      type="button"
      @click="openModal"
      class="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      Open dialog
    </button>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="w-1/2 inline-block mx-20 p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
                @click="closeModal"
              >
                x
              </DialogTitle>
              <DialogTitle
                as="h3"
                class="grid place-items-center text-lg font-medium leading-6 text-gray-900"
                @click="closeModal"
              >
                <div>مرجع المقاس</div>
              </DialogTitle>

              <div class="mt-2">
                <div class="text-sm text-gray-500">
                  <div class="px-4 sm:px-6 lg:px-8 mt-6">
                    <div
                      class="flex flex-row-reverse items-center justify-between bg-[#FAFAFA]"
                    >
                      <div class="font-shamelnormal">ىلا ليدبتلا</div>
                      <div class="flex flex-row-reverse items-center">
                        <button
                          type="submit"
                          class="max-w-screen-xl bg-[#201A3C] mt-2 text-white text-[18px] border border-[#201A3C] rounded-tr-[8px] rounded-br-[8px] py-2.5 pt-4 px-5 flex items-center justify-center text-base font-bold hover:bg-[#CC9933]"
                        >
                          CM
                        </button>
                        <button
                          type="submit"
                          class="max-w-screen-xl bg-transparent mt-2 text-[18px] border border-[#201A3C] rounded-tl-[8px] rounded-bl-[8px] py-2.5 text-[#201A3C] pt-4 px-5 ml-2 flex items-center justify-center text-base font-bold hover:bg-[#CC9933]"
                        >
                          IN
                        </button>
                      </div>
                    </div>
                    <div class="flex justify-center  flex-row-reverse ">
                      <div>
                        <button
                          class="mx-2 "
                          type="button"
                          :class="[table1==true?'border-b-4 border-gold  ':' ']"
                          @click="ProductSize()"
                        >
                          قياس المنتجات
                        </button>
                      </div>
                      <div >
                            <button
                          class="btn btn-primary "
                          type="button"
                          :class="[table2==true?'border-b-4 border-gold  ':' ']"
                          @click="BodeSize()"
                        >
                                                      قياس الحسم
                            </button>
                            </div>
                    </div>
                   
                   
                    <!-- table 1 -->
                    <div
                      appear
                      :show="table1"
                      as="template"
                      :class="[table1==true?'mt-8 flex flex-col ':' hidden']"
                    >
                      <div
                        class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"
                      >
                        <div
                          class="inline-block min-w-full py-2 align-middle md:px-0 lg:px-0"
                        >
                          <div
                            class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
                          >
                            <table class="min-w-full divide-y divide-gray-300">
                              <thead class="bg-[#FAFAFA]">
                                 <tr class="divide-x divide-gray-200">
                  <th
                    scope="col"
                    class="
                      py-3.5
                      text-center
                      pl-4
                      pr-4
                      text-sm
                      font-bold
                      text-[#201A3C]
                      sm:pl-6
                    "
                  >
                    قياس الخصر
                  </th>
                  <th
                    scope="col"
                    class="
                      px-4
                      py-3.5
                      text-center text-sm
                      font-bold
                      text-[#201A3C]
                    "
                  >
                    قياس الصدر
                  </th>
                  <th
                    scope="col"
                    class="
                      px-4
                      py-3.5
                      text-center text-sm
                      font-bold
                      text-[#201A3C]
                    "
                  >
                    طول الأكمام
                  </th>
                  <th
                    scope="col"
                    class="
                      py-3.5
                      pl-4
                      pr-4
                      text-center text-sm
                      font-bold
                      text-[#201A3C]
                      sm:pr-6
                    "
                  >
                    الطول
                  </th>
                  <th
                    scope="col"
                    class="
                      py-3.5
                      pl-4
                      pr-4
                      text-center text-sm
                      font-bold
                      text-[#201A3C]
                      sm:pr-6
                    "
                  >
                    كتف
                  </th>
                  <th
                    scope="col"
                    class="
                      py-3.5
                      pl-4
                      pr-4
                      text-center text-sm
                      font-bold
                      text-[#201A3C]
                      sm:pr-6
                    "
                  >
                    المقاس
                  </th>
                </tr>
                              </thead>
                              <tbody
                                class="divide-y divide-gray-200 bg-[#FAFAFA]"
                              >
                                <tr
                                  v-for="measure in Measurment"
                                  :key="measure.measure"
                                  class="divide-x divide-gray-200"
                                >
                                  <td
                                    class="whitespace-nowrap p-4 text-sm font-shamelnormal text-center text-[#201A3C]"
                                  >
                                    {{ measure.waistMeasurement }}
                                  </td>
                                  <td
                                    class="whitespace-nowrap p-4 text-sm font-shamelnormal text-center text-[#201A3C]"
                                  >
                                    {{ measure.breastMeasure }}
                                  </td>
                                  <td
                                    class="whitespace-nowrap p-4 text-sm font-shamelnormal text-center text-[#201A3C]"
                                  >
                                    {{ measure.sleeveLength }}
                                  </td>
                                  <td
                                    class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-shamelnormal text-center text-[#201A3C] sm:pr-6"
                                  >
                                    {{ measure.height }}
                                  </td>
                                  <td
                                    class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-shamelnormal text-center text-[#201A3C] sm:pr-6"
                                  >
                                    {{ measure.shoulder }}
                                  </td>
                                  <td
                                    class="whitespace-nowrap py-4 pl-4 pr-4 text-[17px] font-shamelnormal text-center text-[#201A3C] sm:pr-6"
                                  >
                                    {{ measure.measure }}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- table 2 -->

                    <div 
                   :class="[table2==true?'mt-8 flex flex-col ':' hidden']"
                     >
                      <div
                        class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"
                      >
                        <div
                          class="inline-block min-w-full py-2 align-middle md:px-0 lg:px-0"
                        >
                          <div
                            class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
                          >
                            <table class="min-w-full divide-y divide-gray-300">
                              <thead class="bg-[#FAFAFA]">
                                <tr class="divide-x divide-gray-200">
                                  <th
                                    scope="col"
                                    class="py-3.5 text-center pl-4 pr-4 text-sm font-bold text-[#201A3C] sm:pl-6"
                                  >
                                    قياس الوركين
                                  </th>
                                  <th
                                    scope="col"
                                    class="px-4 py-3.5 text-center text-sm font-bold text-[#201A3C]"
                                  >
                                    قياس الخصر
                                  </th>
                                  <th
                                    scope="col"
                                    class="px-4 py-3.5 text-center text-sm font-bold text-[#201A3C]"
                                  >
                                    قياس الصدر
                                  </th>
                                  <th
                                    scope="col"
                                    class="py-3.5 pl-4 pr-4 text-center text-sm font-bold text-[#201A3C] sm:pr-6"
                                  >
                                    المقاس
                                  </th>
                                </tr>
                              </thead>
                              <tbody
                                class="divide-y divide-gray-200 bg-[#FAFAFA]"
                              >
                                <tr
                                  v-for="measure in Measurment"
                                  :key="measure.measure"
                                  class="divide-x divide-gray-200"
                                >
                                  <td
                                    class="whitespace-nowrap p-4 text-sm font-shamelnormal text-center text-[#201A3C]"
                                  >
                                    {{ measure.hips }}
                                  </td>
                                  <td
                                    class="whitespace-nowrap p-4 text-sm font-shamelnormal text-center text-[#201A3C]"
                                  >
                                    {{ measure.waistMeasurement }}
                                  </td>
                                  <td
                                    class="whitespace-nowrap p-4 text-sm font-shamelnormal text-center text-[#201A3C]"
                                  >
                                    {{ measure.breastMeasure }}
                                  </td>

                                  <td
                                    class="whitespace-nowrap py-4 pl-4 pr-4 text-[17px] font-shamelnormal text-center text-[#201A3C] sm:pr-6"
                                  >
                                    {{ measure.measure }}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>



                    <div class="mt-4 flex flex-col font-shamelnormal" dir="rtl">
                      <p class="text-right">كتاغ</p>

                      <div class="flex justify-between">
                        <div class="text-right">
                          <div class="flex items-stretch mt-2">
                            <div class="self-center border rounded-full">
                              <span
                                class="flex-shrink-0 w-6 h-6 flex items-center justify-center border-2 border-gold bg-gold rounded-full"
                              >
                                <span class="text-black">1</span>
                              </span>
                            </div>
                            <div class="px-2">
                              <p>الصدر</p>
                              <p>يتم قياس اكبر</p>
                            </div>
                          </div>
                          <div class="flex items-stretch mt-2">
                            <div class="self-center border rounded-full">
                              <span
                                class="flex-shrink-0 w-6 h-6 flex items-center justify-center border-2 border-gold bg-gold rounded-full"
                              >
                                <span class="text-black">1</span>
                              </span>
                            </div>
                            <div class="px-2">
                              <p>الخصر</p>
                              <p>قياس محيط الخصر عند انحف جزء</p>
                            </div>
                          </div>
                          <div class="flex items-stretch mt-2">
                            <div class="self-center border rounded-full">
                              <span
                                class="flex-shrink-0 w-6 h-6 flex items-center justify-center border-2 border-gold bg-gold rounded-full"
                              >
                                <span class="text-black">1</span>
                              </span>
                            </div>
                            <div class="px-2">
                              <p>الوركين</p>
                              <p>قياس اكبر جزء من الوركين</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <svg
                            width="117"
                            height="340"
                            viewBox="0 0 117 340"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M99.2221 173.482C99.2221 173.482 98.0065 199.368 99.9818 198.914C101.805 198.611 101.653 191.042 102.869 190.891C103.629 190.739 103.932 196.037 103.629 200.579C103.325 204.969 104.084 209.056 105.756 209.208C107.579 209.51 109.099 204.666 109.403 203.909C110.922 199.216 110.922 195.735 110.77 194.675C110.01 189.68 106.516 173.936 106.516 173.936L99.2221 173.482Z"
                              fill="#FDC486"
                            />
                            <path
                              d="M96.0312 69.3322C103.477 94.3099 107.275 131.549 113.657 183.927C113.657 183.927 103.932 184.835 94.6636 178.326C94.6636 178.326 88.2818 100.062 83.5714 100.516C83.5714 100.516 67.7688 89.6171 72.3273 116.563C73.8468 125.646 62.9065 112.021 62.9065 112.021L57.8922 72.8139L96.0312 69.3322Z"
                              fill="#212F40"
                            />
                            <path
                              d="M18.0818 173.482C18.0818 173.482 19.2974 199.368 17.322 198.914C15.4987 198.611 15.6506 191.042 14.435 190.891C13.6753 190.739 13.3714 196.037 13.6753 200.579C13.9792 204.969 13.2194 209.056 11.548 209.208C9.72463 209.51 8.20515 204.666 7.90126 203.909C6.38178 199.216 6.38178 195.735 6.53372 194.675C7.29346 189.68 10.7883 173.936 10.7883 173.936L18.0818 173.482Z"
                              fill="#FDC486"
                            />
                            <path
                              d="M21.2727 69.3322C13.9792 94.3099 10.1805 131.549 3.64673 183.927C3.64673 183.927 13.3714 184.835 22.6402 178.326C22.6402 178.326 29.0221 100.062 33.7324 100.516C33.7324 100.516 49.535 89.6171 44.9766 116.563C43.4571 125.646 54.3974 112.021 54.3974 112.021L59.4117 72.8139L21.2727 69.3322Z"
                              fill="#212F40"
                            />
                            <path
                              d="M58.6519 139.875L58.5 55.1024L96.0312 69.1808C79.7727 81.2912 98.1585 109.751 80.3805 114.595C80.3805 114.595 73.5429 125.04 81.1403 139.875H58.6519Z"
                              fill="#212F40"
                            />
                            <path
                              d="M58.6519 139.875V57.8273L21.2727 69.1808C37.5311 81.2912 19.1454 109.751 36.9233 114.595C36.9233 114.595 43.761 125.04 36.1636 139.875H58.6519Z"
                              fill="#212F40"
                            />
                            <path
                              d="M20.2091 321.683C20.2091 329.101 37.2273 335.156 58.3481 335.156V308.21C37.3792 308.21 20.2091 314.265 20.2091 321.683Z"
                              fill="#212F40"
                            />
                            <path
                              d="M58.6519 308.21C58.5 308.21 58.5 308.21 58.6519 308.21L58.5 335.156H58.6519C79.7727 335.156 96.9429 329.101 96.9429 321.683C96.9429 314.265 79.7727 308.21 58.6519 308.21Z"
                              fill="#212F40"
                            />
                            <path
                              d="M56.8285 124.586C46.0402 110.205 36.3155 103.393 36.3155 112.324C36.3155 150.623 21.5766 162.28 22.4883 195.735C22.4883 196.492 22.4883 197.097 22.4883 197.854C22.4883 200.882 22.7922 203.758 23.4 206.785C23.5519 207.694 23.5519 208.602 23.7038 209.51C28.5662 245.085 28.4142 266.278 28.1103 274.906C26.287 302.004 20.5129 319.715 20.5129 321.532C20.5129 324.408 37.6831 326.679 58.8038 326.679V119.59C57.8922 120.196 57.2844 123.98 56.8285 124.586Z"
                              fill="#212F40"
                            />
                            <path
                              d="M60.3233 124.586C71.1117 110.205 80.8363 103.393 80.8363 112.324C80.8363 150.623 95.5753 162.28 94.6636 195.735C94.6636 196.492 94.6636 197.097 94.6636 197.854C94.6636 200.882 94.3597 203.758 93.7519 206.785C93.6 207.694 93.6 208.602 93.448 209.51C88.5857 245.085 88.7376 266.278 89.0415 274.906C90.8649 302.004 96.6389 319.715 96.6389 321.532C96.6389 324.408 79.4688 326.679 58.348 326.679V119.59C59.1078 120.196 59.7156 123.98 60.3233 124.586Z"
                              fill="#212F40"
                            />
                            <path
                              d="M34.796 28.9136C34.796 44.9599 45.4324 57.8272 58.6519 57.8272V0C45.5843 0 34.796 13.0187 34.796 28.9136Z"
                              fill="#E75026"
                            />
                            <path
                              d="M58.6519 0V57.9786C71.8713 57.9786 82.5077 44.9599 82.5077 29.065C82.5077 13.0187 71.8713 0 58.6519 0Z"
                              fill="#AD2C17"
                            />
                            <path
                              d="M84.787 52.6803C84.787 59.4924 79.7727 65.0934 73.6947 65.0934C67.6168 65.0934 62.6025 59.4924 62.6025 52.6803C62.6025 45.8682 67.6168 40.2671 73.6947 40.2671C79.7727 40.2671 84.787 45.8682 84.787 52.6803Z"
                              fill="#AD2C17"
                            />
                            <path
                              d="M31.6052 59.6438C31.6052 66.4559 37.3793 65.2448 43.4572 65.2448C49.5351 65.2448 54.5494 59.6438 54.5494 52.8317C54.5494 46.0196 49.5351 40.4185 43.4572 40.4185C37.3793 40.2671 31.6052 52.6803 31.6052 59.6438Z"
                              fill="#E75026"
                            />
                            <path
                              d="M58.6519 52.6803V89.4657C58.6519 89.4657 50.2948 90.9795 43.0012 81.2912C43.0012 81.2912 31.6051 79.7774 27.6545 71.3001C27.6545 71.3001 25.2233 67.0614 21.1207 69.1807C21.1207 69.1807 22.7922 62.9742 28.1103 61.309C28.1103 61.309 28.4142 56.9189 33.4285 55.1024C38.5948 53.5886 58.6519 52.6803 58.6519 52.6803Z"
                              fill="#E75026"
                            />
                            <path
                              d="M58.652 51.0151V89.6171C58.652 89.6171 67.0091 91.1309 74.3026 81.4426C74.3026 81.4426 85.6987 79.9288 89.6494 71.4515C89.6494 71.4515 92.0806 67.2128 96.1832 69.3321C96.1832 69.3321 94.5117 63.1256 89.1935 61.4604C89.1935 61.4604 88.8896 57.0703 83.8754 55.2538C78.7091 53.5886 58.652 51.0151 58.652 51.0151Z"
                              fill="#AD2C17"
                            />
                            <path
                              d="M76.8857 30.1247C76.8857 42.3865 68.6805 52.3776 58.652 52.3776C48.6234 52.3776 40.4182 42.3865 40.4182 30.1247C40.4182 17.8629 48.6234 7.87183 58.652 7.87183C68.6805 7.87183 76.8857 17.8629 76.8857 30.1247Z"
                              fill="#AD2C17"
                            />
                            <path
                              d="M73.8468 25.2805C73.8468 14.9867 66.8572 8.32593 58.652 8.32593V49.8041C66.4013 49.8041 73.8468 37.9965 73.8468 25.2805Z"
                              fill="#DCAD79"
                            />
                            <path
                              d="M43.3052 25.2805C43.3052 14.9867 50.2948 8.32593 58.5 8.32593V49.8041C50.7506 49.8041 43.3052 37.9965 43.3052 25.2805Z"
                              fill="#E3BD94"
                            />
                            <path
                              d="M53.1818 39.6616C53.1818 39.6616 54.0934 42.992 58.4999 42.992V39.9644L53.1818 39.6616Z"
                              fill="#B98560"
                            />
                            <path
                              d="M57.2844 38.2992C56.5246 38.2992 53.9415 39.6616 53.3337 39.6616C53.3337 39.6616 53.4857 40.2671 55.7649 40.1158C57.5883 39.9644 57.5883 40.7213 58.6519 40.7213V38.9047C58.1961 38.9047 58.0441 38.2992 57.2844 38.2992Z"
                              fill="#B98560"
                            />
                            <path
                              d="M63.97 39.6616C63.97 39.6616 63.0584 42.992 58.6519 42.992V39.9644L63.97 39.6616Z"
                              fill="#A86638"
                            />
                            <path
                              d="M60.0194 38.2992C60.7791 38.2992 63.3622 39.6616 63.97 39.6616C63.97 39.6616 63.8181 40.2671 61.5389 40.1158C59.7155 39.9644 59.7155 40.7213 58.6519 40.7213V38.9047C58.9558 38.9047 59.1077 38.2992 60.0194 38.2992Z"
                              fill="#A86638"
                            />
                            <path
                              d="M64.5778 22.8584C70.048 21.496 70.6558 24.3722 70.6558 24.3722C67.4649 21.7988 63.9701 24.3722 61.8428 24.8264C60.0194 25.2805 60.1714 23.7667 60.3233 23.3126C60.4752 23.4639 61.083 23.7667 64.5778 22.8584Z"
                              fill="black"
                            />
                            <path
                              d="M52.574 22.8584C47.1039 21.496 46.4961 24.3722 46.4961 24.3722C49.687 21.7988 53.1818 24.3722 55.3091 24.8264C57.1325 25.2805 56.9805 23.7667 56.8286 23.3126C56.6766 23.4639 55.9169 23.7667 52.574 22.8584Z"
                              fill="black"
                            />
                            <path
                              d="M59.2597 34.5147C59.5635 34.0606 60.3233 33.3037 60.9311 33.7578C61.5389 34.3634 58.6519 35.423 59.2597 34.5147Z"
                              fill="#A86638"
                            />
                            <path
                              d="M57.5883 34.5147C57.2844 34.0606 56.5246 33.3037 55.9168 33.7578C55.1571 34.3634 58.1961 35.423 57.5883 34.5147Z"
                              fill="#B98560"
                            />
                            <path
                              d="M58.652 18.0142C64.5779 18.0142 70.0481 20.5877 73.8468 24.9777C73.6948 14.9866 67.4649 7.72034 58.652 7.72034C49.3831 7.72034 43.6091 14.9866 43.4572 24.9777C47.2559 20.5877 52.574 18.0142 58.652 18.0142Z"
                              fill="#212F40"
                            />
                            <circle
                              cx="42.5"
                              cy="105.5"
                              r="7.5"
                              fill="#CC9933"
                            />
                            <circle
                              cx="66.5"
                              cy="137.5"
                              r="7.5"
                              fill="#CC9933"
                            />
                            <circle
                              cx="40.5"
                              cy="174.5"
                              r="7.5"
                              fill="#CC9933"
                            />
                            <path
                              d="M40.4805 103.772L40.0965 102.26L42.5085 101.54H43.7685V110H41.9445V103.412L40.4805 103.772Z"
                              fill="#201A3C"
                            />
                            <path
                              d="M65.9074 138.244C66.4594 137.788 66.8394 137.424 67.0474 137.152C67.2554 136.872 67.3594 136.564 67.3594 136.228C67.3594 135.884 67.2554 135.616 67.0474 135.424C66.8394 135.232 66.5674 135.136 66.2314 135.136C65.9194 135.136 65.6354 135.224 65.3794 135.4C65.1314 135.568 64.8434 135.856 64.5154 136.264L63.2194 135.22C63.6594 134.62 64.1114 134.18 64.5754 133.9C65.0474 133.62 65.6394 133.48 66.3514 133.48C66.9274 133.48 67.4314 133.588 67.8634 133.804C68.3034 134.012 68.6434 134.312 68.8834 134.704C69.1234 135.096 69.2434 135.552 69.2434 136.072V136.096C69.2434 136.552 69.1634 136.952 69.0034 137.296C68.8514 137.632 68.6234 137.952 68.3194 138.256C68.0234 138.552 67.5954 138.916 67.0354 139.348L65.6674 140.404H69.3274V142H63.1114V140.536L65.9074 138.244Z"
                              fill="#201A3C"
                            />
                            <path
                              d="M40.2789 179.144C38.9109 179.144 37.8189 178.66 37.0029 177.692L38.2749 176.48C38.5789 176.816 38.8909 177.068 39.2109 177.236C39.5309 177.404 39.8949 177.488 40.3029 177.488C40.6549 177.488 40.9389 177.396 41.1549 177.212C41.3789 177.028 41.4909 176.78 41.4909 176.468V176.444C41.4909 176.1 41.3469 175.836 41.0589 175.652C40.7709 175.468 40.3669 175.376 39.8469 175.376H39.0789L38.7909 174.2L40.7949 172.184H37.4949V170.6H43.1709V171.992L41.0469 174.02C41.7029 174.132 42.2429 174.372 42.6669 174.74C43.0909 175.108 43.3029 175.652 43.3029 176.372V176.396C43.3029 176.924 43.1789 177.396 42.9309 177.812C42.6909 178.228 42.3389 178.556 41.8749 178.796C41.4189 179.028 40.8869 179.144 40.2789 179.144Z"
                              fill="#201A3C"
                            />
                            <path
                              d="M31 111C40.5 120.5 74.3774 121.867 86 111"
                              stroke="#CC9933"
                            />
                            <path
                              d="M24 177C35.9182 186.94 78.4189 188.37 93 177"
                              stroke="#CC9933"
                            />
                            <path
                              d="M33 141C42.5 150.5 72.3774 151.367 84 140.5"
                              stroke="#CC9933"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/vue";
import { StarIcon } from "@heroicons/vue/solid";
import { HeartIcon, MinusSmIcon, PlusSmIcon } from "@heroicons/vue/outline";
import Shopping from "../../assets/icons/Shopping.vue";
import ReturnProduct from "../../assets/icons/ReturnProduct.vue";
import Coin from "../../assets/icons/Coin.vue";
import Tabel from "../../components/Tabel.vue";
import ProductGrid from "../../components/ProductGrid.vue";
const isOpen = ref(true);
const table1 = true;
const table2 = false;
const product = {
  name: "غير مبطن - الدراجة - نسيج أسود - ياقة فساتين",
  price: "120₪",
  priceBeforeDiscount: "180₪",
  discount: "30%",
  rating: 3,
  SKU: "sw2110099318000146",
  ReviewCount: 24,
  Image: {
    id: 1,
    name: "Angled view",
    src: "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
    alt: "Angled front view with bag zipped and handles upright.",
  },
  images: [
    {
      id: 1,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 2,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 3,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 4,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },

    // More images...
  ],
  colors: [
    {
      name: "Washed Black",
      bgColor: "bg-[#E250FA]",
      selectedColor: "#E250FA",
    },
    { name: "Washed Green", bgColor: "bg-[#FAB150]", selectedColor: "#FAB150" },
    {
      name: "Washed Gray",
      bgColor: "bg-[#D58397]",
      selectedColor: "#D58397",
    },
    {
      name: "Moonstone Blue",
      bgColor: "bg-[#6AACC8]",
      selectedColor: "#6AACC8",
    },
  ],
  sizes: [
    { name: "XL", inStock: false },
    { name: "L", inStock: true },
    { name: "M", inStock: true },
    { name: "S", inStock: true },
    { name: "XS", inStock: true },
    { name: "XXS", inStock: true },
  ],
  description: `
    <p>هناك حقيقة مثبته منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل هناك حقيقة مثبته منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل أو شطل توضع الفقرات بالصفحة التي يقرأها. الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. الخارجي للنص</p>
  `,
  details: [
    {
      name: "وصف",
      items: [
        "هناك حقيقة مثبته منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل هناك حقيقة مثبته منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل أو شطل توضع الفقرات بالصفحة التي يقرأها. الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. الخارجي للنص",
      ],
    },
  ],
  srevices: [
    {
      type: "شحن مجاني",
      description:
        "شحن سريع مجاني للطلبات أكثر من تاريخ التوصيل المحتمل في 13-04-2022",
      icon: 0,
      borderBottom: true,
    },
    {
      type: "خدمة الدفع عند الأستلام",
      description: "تعرف أكثر",
      icon: 1,
      borderBottom: true,
    },
    {
      type: "سياسة الأرجاع",
      description: "أرجاع أو أستبدال المنتجات ممكنة",
      icon: 2,
      borderBottom: false,
    },
  ],
  Measurment: [
    {
      type: "الحجم والمقاس",
      wear: "M: العارضه ترتدي",
      height: "167cm/65.7inch",
      breast: "84cm/33.1inch",
      waist: "62cm/24.4inch",
      hips: "62cm/24.4inch",
    },
  ],
  // More sections...
};
const Measurment = [
  {
    measure: "s",
    hips: 51,
    breastMeasure: 127,
    waistMeasurement: 51,
    shoulder: 60,
    height: 65.4,
    sleeveLength: 51,
  },
  {
    measure: "m",

    hips: 71,
    breastMeasure: 127,
    waistMeasurement: 71,
     shoulder: 60,
    height: 65.4,
    sleeveLength: 51,
  },
  {
    measure: "l",

    hips: 81,
    breastMeasure: 127,
    waistMeasurement: 81,
     shoulder: 60,
    height: 65.4,
    sleeveLength: 51,
  },
  {
    measure: "xl",

    hips: 91,
    breastMeasure: 128,
    waistMeasurement: 91,
     shoulder: 60,
    height: 65.4,
    sleeveLength: 51,
  },
  // More people...
];

export default {
  components: {
    TransitionChild,
    TransitionRoot,
    Dialog,
    DialogOverlay,
    DialogTitle,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    HeartIcon,
    MinusSmIcon,
    PlusSmIcon,
    StarIcon,
    Shopping,
    ReturnProduct,
    Coin,
    Tabel,
    ProductGrid,
  },

  methods: {
    closeModal() {
      isOpen.value = false;
    },
    openModal() {
      isOpen.value = true;
    },
  },
  setup() {
    const selectedColor = ref(product.colors[0]);
    const selectedSize = ref(product.sizes[2]);
    return {
      isOpen,
      table1,
      table2,
      product,
      selectedColor,
      selectedSize,
      Measurment,
    };
  },
};
</script>
