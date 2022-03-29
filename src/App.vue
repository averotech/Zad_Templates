<template>
<div>
  <NavBar /> 
   <TopMenu /> 
  <HomePage />
</div>
</template>

<script>
import HomePage from './Pages/HomePage.vue'
import NavBar from './components/NavBar.vue'
import TopMenu from './components/TopMenu.vue'
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components: {
HomePage,NavBar,TopMenu
  }
}
</script>

<style>

</style>
