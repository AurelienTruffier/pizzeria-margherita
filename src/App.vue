<template>
  <NavBar logo="ressources/pizza.png"></NavBar>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap');

*{
  /* police de base */
  font-family: 'EB Garamond', serif;
}
</style>
