<template>
  <div>
    <!-- homePage -->
    <!-- <Promo />
    <Category />
    <HomePageSales />
    <Slider />
    <ZadSocial /> -->

    <!--LandingPage  -->
    <!-- <Login /> -->
    <!-- <LoginModal /> -->
    <!-- <SignupModal /> -->
    <SignUp />
    <!-- <RestPassword />
    <RestPasswordByPhone />
    <RegistrationComplete />
    <RegistrationCode /> -->
    
    <!--Products  -->
    <!-- <ProductDetails /> -->
    <!-- <ProductPage /> -->
    <!-- <NewMainProductModals /> -->
    <!-- <PaiementWhenRecieving /> -->
    <!-- <ShippingInformation /> -->
    <!-- <ReviewUs /> -->
    <!-- <ReturnPolicy /> -->
    <!-- <ProductTabelPopUp /> -->

<!-- CheckOut -->
<!-- <Checkout />   -->
<!-- <CheckOutPayDone /> -->
<!-- <ConfirmCheckOut /> -->

<!-- Cart -->
    <!-- <CartPage /> -->
<<<<<<< HEAD
    <!-- <Checkout />   -->
    <!-- <ConfirmCheckOut /> -->
     <!-- <Discounts /> -->
          <!-- <New /> -->
 <!-- <Order /> -->
  <!-- <Profile /> -->
  <!-- <DeleteOrder />` -->
  <!-- <NewMainProductModals /> -->
  <!-- <ReviewUs /> -->
  <!-- <ProductTabelPopUp /> -->
  <!-- <SideBar /> -->
  <!-- <ProfileAddress /> -->
  <!-- <MyProfile /> -->
  <!-- <CustomerService /> -->
  <!-- <ProfileOrder /> -->
  <!-- <CartPopUp /> -->
  <!-- <ShippingAndReturn /> -->
  <!-- <PolicyAndPrivacy /> -->
  <!-- <AboutUs /> -->
  <!-- <RepeatedQuestion /> -->
  <!-- <ReturnPolicy /> -->
  <!-- <PaiementWhenRecieving /> -->
  <!-- <ShippingInformation /> -->
  <!-- <Ppp /> -->
=======
    <!-- <CartPopUp /> -->

<!-- profile -->
    <!-- <MyProfile /> -->
    <!-- <Profile /> -->
    <!-- <CustomerService /> -->
    <!-- <DeleteOrder /> -->
    <!-- <ProfileAddress /> -->
    <!-- <ProfileOrder /> -->

<!-- order -->
    <!-- <Order /> -->

<!-- PrivecyAndPolicy -->
    <!-- <AboutUs /> -->
    <!-- <PolicyAndPrivacy /> -->
    <!-- <ShippingAndReturn /> -->
    <!-- <RepeatedQuestion /> -->

<!-- Blog -->
    <!-- <Blog /> -->

<!-- Favorite -->
    <!-- <FavoritePage /> -->

<!-- SearchPage -->
<!-- <SearchPage /> -->

<!-- categoryPopUp -->
<!-- <CategoryPopUpVue /> -->
    <!-- <Discounts /> -->
    <!-- <New /> -->
    <!-- <SideBar /> -->
    <!-- <Ppp /> -->
>>>>>>> 861198a5c41c6ebaef25932c6965aef0f8525024
  </div>
</template>

<script>
import Promo from "../components/Promo.vue";
import Category from "../components/Category.vue";
import LoginModal from "./LandingPage/LoginPageModal.vue";
import SignUp from "../Pages/LandingPage/SignUpPage.vue";
import RestPassword from "./LandingPage/RestPassword.vue";
import RestPasswordByPhone from "../Pages/LandingPage/RestPasswordByPhone.vue";
import RegistrationComplete from "../Pages/LandingPage/RegistrationComplete.vue";
import RegistrationCode from "../Pages/LandingPage/RegistrationCode.vue";
import FavoritePage from "../Pages/FavoritePage.vue";
// import FavFilterNav from '../components/FavFilterNav.vue'
import ZadSocial from "../components/Zad_Social.vue";
import ProductPage from "../Pages/Products/Products.vue";
import ProductDetails from "../Pages/Products/ProductDetails.vue";
import HomePageSales from "../components/HomePageSales.vue";
import Slider from "../components/Sliedr.vue";
import CartPage from "./Cart/CartPage.vue";
import Discounts from "../Pages/Discounts.vue";
import New from "../Pages/New.vue";
import Stepper from "../components/Stepper.vue";
import Order from "../Pages/Order.vue";
// import Stepper from '../components/Stepper.vue'
import ConfirmCheckOut from "../Pages/Checkout/ConfirmCheckOut.vue";
import CheckOutPayDone from "../Pages/Checkout/CheckoutPayDone.vue";
import ProfileBar from "../components/ProfileBar.vue";
import Checkout from "../Pages/Checkout/CheckOutPage.vue";
import Profile from "./Profile/Profile.vue";
import NewMainProductModals from "./Products/MainProductPopUp.vue";

// import SideBar from '../components/SideBar.vue'
<<<<<<< HEAD
import ProfileAddress from '../Pages/Profile/ProfileAddress.vue'
import MyProfile from '../Pages/Profile/MyProfile.vue'
import CustomerService from '../Pages/Profile/CustomerService.vue'
import ProfileOrder from '../Pages/Profile/ProfileOrders.vue'
import DeleteOrder from '../Pages/Profile/DeleteOrder.vue'
import CartPopUp from '../Pages/Cart/CartPopUp.vue'
import ShippingAndReturn from '../Pages/Privecy/Shipping_and_return_policy.vue'
import PolicyAndPrivacy from '../Pages/Privecy/Policy_And_Privacy.vue'
import AboutUs from '../Pages/Privecy/AboutUs.vue'
import RepeatedQuestion from '../Pages/Privecy/RepeatedQuestion.vue'
import ProductTabelPopUp from '../Pages/Products/ProductsTablePopUp.vue'
import ReviewUs from '../Pages/Products/ReviewUs.vue'
import ReturnPolicy from '../Pages/Products/ReturnPolicy.vue'
import PaiementWhenRecieving from '../Pages/Products/PaiementwhenRecieving.vue'
import ShippingInformation from '../Pages/Products/ShippingInformation.vue'
=======
import ProfileAddress from "../Pages/Profile/ProfileAddress.vue";
import MyProfile from "../Pages/Profile/MyProfile.vue";
import CustomerService from "../Pages/Profile/CustomerService.vue";
import ProfileOrder from "../Pages/Profile/ProfileOrders.vue";
import DeleteOrder from "../Pages/Profile/DeleteOrder.vue";
import CartPopUp from "../Pages/Cart/CartPopUp.vue";
import ShippingAndReturn from "../Pages/Privecy/Shipping_and_return_policy.vue";
import PolicyAndPrivacy from "../Pages/Privecy/Policy_And_Privacy.vue";
import AboutUs from "../Pages/Privecy/AboutUs.vue";
import RepeatedQuestion from "../Pages/Privecy/RepeatedQuestion.vue";
import ProductTabelPopUp from "../Pages/Products/ProductsTablePopUp.vue";
import ReviewUs from "../Pages/Products/ReviewUs.vue";
import ReturnPolicy from "../Pages/Products/ReturnPolicy.vue";
import PaiementWhenRecieving from "../Pages/Products/PaiementwhenRecieving.vue";
import ShippingInformation from "../Pages/Products/ShippingInformation.vue";
import SearchPage from '../Pages/SearchPage.vue'
import Blog from "../Pages/Blog.vue";
import CategoryPopUpVue from '../Pages/CategoryPopUp.vue'
import Login from '../Pages/LandingPage/LoginPage.vue'
import SignupModal from '../Pages/LandingPage/SignUpModal.vue'
>>>>>>> 861198a5c41c6ebaef25932c6965aef0f8525024
// import Ppp from '../Pages/Products/Ppp.vue'
export default {
  data() {
    return {};
  },
  components: {
    Promo,
    Category,
    LoginModal,
    SignUp,
    RestPassword,
    RestPasswordByPhone,
    RegistrationComplete,
    RegistrationCode,
    FavoritePage,
    ProductDetails,
    ZadSocial,
    ProductPage,
    HomePageSales,
    Slider,
    CartPage,
    Discounts,
    New,
    Profile,
    Order,
    Checkout,
    ConfirmCheckOut,
    CheckOutPayDone,
    ProfileBar,
    NewMainProductModals,
    ProfileAddress,
    MyProfile,
    CustomerService,
    ProfileOrder,
    DeleteOrder,
    CartPopUp,
    ShippingAndReturn,
    PolicyAndPrivacy,
    AboutUs,
    RepeatedQuestion,
    ProductTabelPopUp,
    ReviewUs,
    ReturnPolicy,
    PaiementWhenRecieving,
    ShippingInformation,
<<<<<<< HEAD
    // Ppp,
    // SideBar  
=======
    Blog,
    SearchPage,
    CategoryPopUpVue,
    Login,
    SignupModal
    // Ppp,
    // SideBar
>>>>>>> 861198a5c41c6ebaef25932c6965aef0f8525024
  },
};
</script>