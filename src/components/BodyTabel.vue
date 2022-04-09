<template>
  <div class="px-4 sm:px-6 lg:px-8 mt-6">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <!-- <h1 class="text-xl font-semibold text-gray-900">Users</h1> -->
        <!-- <p class="mt-2 text-sm text-gray-700">A list of all the users in your account including their name, title, email and role.</p> -->
      </div>
      <!-- <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Add user</button>
      </div> -->
    </div>

    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="min-w-2xl flex justify-center items-center py-2 align-middle md:px-0 lg:px-0">
          <div
            class="
              overflow-hidden
              shadow
              ring-1 ring-black ring-opacity-5
              md:rounded-lg
            "
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
                    حجم الورك
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
              <tbody class="divide-y divide-gray-200 bg-[#FAFAFA]">
                <tr
                  v-for="measure in Measurment"
                  :key="measure.measure"
                  class="divide-x divide-gray-200"
                >
                      <td
                    class="
                      whitespace-nowrap
                      p-4
                      text-sm
                      font-shamelnormal
                      text-center text-[#201A3C]
                    "
                  >
                    {{ measure.hipSize }}
                  </td>
                  <td
                    class="
                      whitespace-nowrap
                      p-4
                      text-sm
                      font-shamelnormal
                      text-center text-[#201A3C]
                    "
                  >
                    {{ measure.waistSize }}
                  </td>
                  <td
                    class="
                      whitespace-nowrap
                      p-4
                      text-sm
                      font-shamelnormal
                      text-center text-[#201A3C]
                    "
                  >
                    {{ measure.breastSize }}
                  </td>
                  <td
                    class="
                      whitespace-nowrap
                      p-4
                      text-sm
                      font-shamelnormal
                      text-center text-[#201A3C]
                    "
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
  </div>
</template>
<script>
const Measurment = [
  {
    measure: "s",
    breastSize: 60,
    waistSize: 65.4,
    hipSize: 51,

  },
  {
    measure: "m",
    breastSize: 80,
    waistSize: 85.4,
    hipSize: 71,

  },
  {
    measure: "l",
    breastSize: 100,
    waistSize: 95.4,
    hipSize: 81,

  },
  {
    measure: "xl",
    breastSize: 110,
    waistSize: 99.4,
    hipSize: 91,

  },
  // More people...
];
const showButton = false
export default {
  setup() {
    return {
      Measurment,
      showButton
    };
  },
};
</script>