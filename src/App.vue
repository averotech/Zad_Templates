<template>
<div>
  <NavBar /> 
   <TopMenu /> 
  <HomePage />
  <Footer />
</div>
</template>

<script>
import HomePage from './Pages/HomePage.vue'
import NavBar from './components/NavBar.vue'
import TopMenu from './components/TopMenu.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components: {
HomePage,NavBar,TopMenu,Footer
  }
}
</script>

<style>

</style>
