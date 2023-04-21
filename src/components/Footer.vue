<template>
    <footer class="footer">
        {{ copyright }}
    </footer>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    name: String
  },
  computed: {
    copyright(){
        const year = new Date().getFullYear();
        return `Copyright © ${year} ${this.name}. Tous droits réservés.`;
    }
  }
}

</script>

<style lang="scss" scoped>
$bg-color: rgb(140, 30, 30);
$text-color: #ffffff;
.footer{
    width: 100%;
    height: 50px;
    font-size: 1.5rem;
    background-color: $bg-color;
    color: $text-color;
    text-align: center;
    line-height: 50px;
}
@media (max-width: 600px){
.footer{
    font-size: 1.1rem;
}
}
@media (max-width: 500px){
.footer{
    font-size: 0.75rem;
}
}
</style>