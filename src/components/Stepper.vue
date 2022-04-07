<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <nav aria-label="Progress" class="my-11 mx-11">
    <ol role="list" class="flex flex-row-reverse items-center">
      <li v-for="(step, stepIdx) in steps" :key="step.name"  :class="[stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '', 'relative']">
        <template  v-if="step.status === 'complete'">
          <div class="absolute inset-0 flex  items-center" aria-hidden="true">
            <div class="" />
            <span class="text-[#CC9933]">{{step.descraption}}</span>
          </div>
          <a href="#" class="relative w-8 h-8 flex items-center justify-center bg-[#CC9933] rounded-full">
            <!-- <CheckIcon class="w-5 h-5 text-white" aria-hidden="true" /> -->
            <p class="pt-1">{{step.step}}</p>
            <span class="sr-only ">{{ step.name }}</span>
          </a>
        </template>
        <template v-else-if="step.status === 'current'" condition="step.status === 'current'">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="h-0.5 w-full bg-gray-200" />
          </div>
          <a href="#" class="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full" aria-current="step">
            <span class="h-2.5 w-2.5 bg-indigo-600 rounded-full" aria-hidden="true" />
            <span class="sr-only">{{ step.name }}</span>
          </a>
        </template>
        <template v-else>
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="h-0.5 w-full bg-gray-200" />
          </div>
          <a href="#" class="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400">
            <span class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" aria-hidden="true" />
            <span class="sr-only">{{ step.name }}</span>
          </a>
        </template>
      </li>
    </ol>
  </nav>
</template>

<script>
import { CheckIcon } from '@heroicons/vue/solid'

const steps = [
  { name: 'Step 1',step:1, href: '#',descraption:"حقيبة التسوق", status: 'complete' },
  { name: 'Step 2',step:3, href: '#',descraption:"تأكيد الطلب", status: 'current' },
  { name: 'Step 3',step:4, href: '#',descraption:"دفع", status: 'upcoming' },
  { name: 'Step 4',step:5, href: '#',descraption:"تم الطلب", status: 'upcoming' },
]

export default {
  components: {
    CheckIcon,
  },
  setup() {
    return {
      steps,
    }
  },
}
</script>