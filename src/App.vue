<template>
  <NavBar logo="ressources/pizza.png"></NavBar>
  <router-view/>
  <Footer name="Pizzeria Margherita"></Footer>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
export default {
  components:{
    NavBar,
    Footer
  }
}
</script>

<style lang="scss">
/* POLICE PAR DEFAUT */
*{
  font-family: 'EB Garamond', serif;
}
</style>
