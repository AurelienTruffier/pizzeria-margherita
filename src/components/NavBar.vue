<template>
    <nav class="nav_bar">
        <img :src="logo" alt="" id="logo">
        <div class="buttons_container" :class="{active: menu}">
            <NavButton title="Notre carte" url="#"></NavButton>
            <NavButton title="Notre pizzeria" url="#"></NavButton>
            <NavButton title="Nous contacter" url="#"></NavButton>
        </div>
        <img src="ressources/menu.png" alt="Bouton du menu" id="burger_btn" @click="ShowMenu">
    </nav>
</template>

<script>
import NavButton from './NavButton.vue';

export default {
  name: 'NavBar',
  props: {
    logo: String
  },
  components: {
    NavButton
  },
  data(){
    return{
        menu: false
    }
  },
  methods:{
    ShowMenu: function(){
        this.menu=!this.menu;
    }
}
}
</script>

<style lang="scss" scoped>
$bg-color: rgb(140, 30, 30);
.nav_bar{
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 75px;
    background-color: $bg-color;

    #logo{
        height: 64px;
        margin-left: 16px;
    }

    #burger_btn{
        display: none;
        height: 64px;
        margin-left: 16px;
        cursor: pointer;
    }

    .buttons_container.active{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 75px;
        width: 100%;
        background-color: $bg-color;
    }
}

@media (max-width: 600px) {
    .nav_bar{
        .buttons_container{
            display: none;
        }

        #burger_btn{
            display: block;
        }
    }
}
</style>