<template>
  <div>
    <!-- <Promo /> -->
    <!-- <Stepper /> -->
    <!-- <Category /> -->
    <!-- <Login /> -->
    <!-- <SignUp /> -->
    <!-- <RestPassword /> -->
    <!-- <RestPasswordByPhone /> -->
    <!-- <RegistrationComplete /> -->
    <!-- <RegistrationCode /> -->
    <!-- <FavFilterNav /> -->
    <!-- <FavoritePage /> -->
    <!-- <ProductPage /> -->
    <!-- <ProductDetails /> -->
    <!-- <HomePageSales /> -->
    <!-- <Slider /> -->
    <!-- <ZadSocial /> -->
    <!-- <CartPage /> -->
    <Checkout />
     <!-- <Discounts /> -->
          <!-- <New /> -->

  </div>
</template>

<script>
import Promo from "../components/Promo.vue";
import Category from "../components/Category.vue";
import Login from "../Pages/LandingPage/LoginPage.vue";
import SignUp from "../Pages/LandingPage/SignUpPage.vue";
import RestPassword from "./LandingPage/RestPassword.vue";
import RestPasswordByPhone from "../Pages/LandingPage/RestPasswordByPhone.vue";
import RegistrationComplete from "../Pages/LandingPage/RegistrationComplete.vue";
import RegistrationCode from "../Pages/LandingPage/RegistrationCode.vue";
import FavoritePage from "../Pages/FavoritePage.vue";
// import FavFilterNav from '../components/FavFilterNav.vue'
import ZadSocial from '../components/Zad_Social.vue'
import ProductPage from '../Pages/Products/Products.vue'
import ProductDetails from "../Pages/Products/ProductDetails.vue";
import HomePageSales from "../components/HomePageSales.vue";
import Slider from "../components/Sliedr.vue";
import CartPage from "../Pages/CartPage.vue";
import Discounts from "../Pages/Discounts.vue";
import New from "../Pages/New.vue";
import Stepper from '../components/Stepper.vue'
import Checkout from '../Pages/Checkout/CheckOutPage.vue'

export default {
  data() {
    return {};
  },
  components: {
    Promo,
    Category,
    Login,
    SignUp,
    RestPassword,
    RestPasswordByPhone,
    RegistrationComplete,
    RegistrationCode,
    FavoritePage,
    // FavFilterNav,
    ProductDetails,
    ZadSocial,
    ProductPage,
    HomePageSales,
    Slider,
    CartPage,
    Discounts,
    New,
    Stepper,
    Checkout
  },
};
</script>