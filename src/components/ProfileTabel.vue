<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
    </div>
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-0 ">
            <table class="min-w-full ] bg-[#FFFFFF]">
              <thead class="text-right">
                <tr class="border-b border-[#9A92CC] ">
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-center text-[17px] text-[#201A3C] sm:pl-6">الحدث</th>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-center text-[17px] text-[#201A3C] sm:pl-6">السعر</th>
                  <th scope="col" class="px-3 py-3.5 text-center text-[17px] text-[#201A3C]">تاريخ الطلب</th>
                  <th scope="col" class="px-3 py-3.5 text-center text-[17px] text-[#201A3C]">الحالة</th>
                  <th scope="col" class="px-3 py-3.5 text-center text-[17px] text-[#201A3C]">الطلب</th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white" v-if="people.length>0">
                <tr  v-for="(person, personIdx) in people" :key="person.email" :class="personIdx % 2 === 0 ? undefined : 'bg-gray-50'"  >
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm  text-[#201A3C] sm:pl-6">
                      <div class="flex flex-row-reverse items-center justify-center  ">
                      <Edit class="ml-4"/>
                      <CartDelete />
                      </div>
                  </td>
                  <td class="whitespace-nowrap px-3 text-center py-4 text-sm text-[#201A3C]">{{ person.price }}</td>
                  <td class="whitespace-nowrap px-3 text-center py-4 text-sm text-[#201A3C]">{{ person.date }}</td>
                  <td class="whitespace-nowrap px-3 text-center py-4 text-sm text-[#201A3C]">{{ person.status }}</td>
                  <td class="whitespace-nowrap px-3 text-center flex items-center justify-center py-4 text-sm text-[#201A3C]">
                      <img class="w-12 h-12 object-fill " :src="person.photo" alt="person.photo">
                  </td>
                  <!-- <td class="relative whitespace-nowrap text-center py-4 pl-3 pr-4 text-sm  sm:pr-6">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900"
                      >Edit<span class="sr-only">, {{ person.name }}</span></a
                    >
                  </td> -->
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <p class="text-center pt-[17%] text-[20px] text-[#201A3C]" v-if="people.length==0">لم يتم العثور على طلب</p>
    </div>
  </div>
</template>
<script>
const people = [
  { event: 'Lindsay Walton', price: '120₪', date: '12-02-2022', status: 'مكتمل', photo:'https://i.pinimg.com/originals/77/a6/f0/77a6f051a7c3170e6c1e092e22242e40.jpg' },
  { event: 'Lindsay Walton', price: '120₪', date: '12-02-2022', status: 'مكتمل', photo:'https://i.pinimg.com/originals/77/a6/f0/77a6f051a7c3170e6c1e092e22242e40.jpg' },
  { event: 'Lindsay Walton', price: '120₪', date: '12-02-2022', status: 'مكتمل', photo:'https://i.pinimg.com/originals/77/a6/f0/77a6f051a7c3170e6c1e092e22242e40.jpg' },
  { event: 'Lindsay Walton', price: '120₪', date: '12-02-2022', status: 'مكتمل', photo:'https://i.pinimg.com/originals/77/a6/f0/77a6f051a7c3170e6c1e092e22242e40.jpg' },

  // More people...
]
import Edit from '../assets/icons/Edit.vue'
import CartDelete from '../assets/icons/CartDelete.vue'
export default {
  setup() {
    return {
      people,
    }
  },
  components:{Edit,CartDelete}
}
</script>