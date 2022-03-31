<template>
    <div >
    <Promo />
    <Category /> 
    <Login />
    </div>
</template>

<script>
import Promo from '../components/Promo.vue'
import Category from '../components/Category.vue'
import Login from '../Pages/LandingPage/LoginPage.vue'
export default {
    data(){
        return{

        }
    },
    components:{
        Promo,Category,Login
    }
};
</script>