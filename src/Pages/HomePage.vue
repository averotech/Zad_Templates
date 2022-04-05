<template>
  <div>
    <!-- <Promo /> -->
    <!-- <Category /> -->
    <!-- <Login /> -->
    <!-- <SignUp /> -->
    <!-- <RestPassword /> -->
    <!-- <RestPasswordByPhone /> -->
    <!-- <RegistrationComplete /> -->
    <!-- <RegistrationCode /> -->
    <!-- <FavFilterNav /> -->
    <!-- <FavoritePage /> -->
    <!-- <Product /> -->
    <!-- <ZadSocial /> -->
    <ProductPage />
  </div>
</template>

<script>
import Promo from "../components/Promo.vue";
import Category from "../components/Category.vue";
import Login from "../Pages/LandingPage/LoginPage.vue";
// import SignUp from "../Pages/LandingPage/SignUpPage.vue";
import RestPassword from "./LandingPage/RestPassword.vue";
import RestPasswordByPhone from "../Pages/LandingPage/RestPasswordByPhone.vue";
import RegistrationComplete from "../Pages/LandingPage/RegistrationComplete.vue";
import RegistrationCode from "../Pages/LandingPage/RegistrationCode.vue";
import FavoritePage from '../Pages/FavoritePage.vue';
// import FavFilterNav from '../components/FavFilterNav.vue'
import Product from './Products/ProductDetails.vue'
import ZadSocial from '../components/ZadSocial.vue'
import ProductPage from '../Pages/Products/Products.vue'

export default {
  data() {
    return {};
  },
  components: {
    Promo,
    Category,
    Login,
    // SignUp,
    RestPassword,
    RestPasswordByPhone,
    RegistrationComplete,
    RegistrationCode,
    FavoritePage,
    // FavFilterNav,
    Product,
    ZadSocial,
    ProductPage
  },
};
</script>