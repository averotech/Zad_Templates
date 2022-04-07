<template>
<div class="container max-w-7xl mx-auto sm:px-6 lg:px-8 mt-10 px-2">
    <div class="flex flex-row-reverse">
      <ul class="list-reset breadcrumbs flex flex-row-reverse font-shamelnormal text-[16px]">
        <li>
          <a>الرئيسية</a>
        </li>
        <li>/</li>
        <li>جميع المنتجات</li>
      </ul>
    </div>
  </div>
<div class=" lg:flex lg:flex-row-reverse flex flex-col mx-auto  px-4 my-4 sm:px-6 lg:max-w-7xl ">
  <div class="lg:basis-1/4 min-w-[300px] lg:block hidden">
 <ProfileBar />
</div>
    <div class="lg:basis-3/4  ">
<ProfileTabel />
    </div>
</div>

</template>
<script>
import ProfileBar from "../../components/ProfileBar.vue";
import StepperOrder from "../../components/StepperOrder.vue";
import StepperPayment from "../../components/StepperPayment.vue";
import ProfileTabel from '../../components/ProfileTabel.vue'
export default {
  data() {
    return {};
  },
  components: {
  ProfileBar,
  StepperOrder,
  StepperPayment,
  ProfileTabel
  },
};
</script>
