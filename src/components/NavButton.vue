<template>
    <button class="nav_button" role="button" @click="ChangeRoute">
        {{ title }}
    </button>
</template>

<script>
import router from '@/router';

export default {
  name: 'NavButton',
  props: {
    title: String,
    url: String
  },
  methods:{
    ChangeRoute:function(){
      //change de page
      router.push(this.url);
    }
  }
}
</script>

<style lang="scss" scoped>
$text-color: #ffffff;
$background-color: #111111;
.nav_button{
    width: 150px;
    height: 60px;
    outline: none;
    border: none;
    border-radius: 9999px;
    cursor: pointer;
    margin: 0 9px;
    font-size: 1.2rem;
    font-weight: 700;
    background-color: rgb(140, 30, 30);
    color: $text-color;
    transition: background-color 0.2s linear;
}
.nav_button:hover{
    background-color: $background-color;
}

@media (max-width: 800px) {
    .nav_button{
      width: 130px;
      font-size: 1.1rem;
    }
}
</style>