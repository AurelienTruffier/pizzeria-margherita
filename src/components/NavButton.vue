<template>
    <button class="nav_button" role="button">
        {{ title }}
    </button>
</template>

<script>
export default {
  name: 'NavButton',
  props: {
    title: String,
    url: String
  }
}
</script>

<style lang="scss" scoped>
.nav_button{
    width: 160px;
    height: 60px;
    outline: none;
    border: none;
    border-radius: 9999px;
    cursor: pointer;
    margin: 0 12px;
    font-size: 1.3rem;
    font-weight: 700;
    background-color: rgb(140, 30, 30);
    color: #ffffff;
    transition: background-color 0.2s linear;
}
.nav_button:hover{
    background-color: #111111;
}

@media (max-width: 800px) {
    .nav_button{
      width: 130px;
      font-size: 1.15rem;
    }
}
</style>