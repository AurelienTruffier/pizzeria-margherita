<template>
    <div class="boisson_card">
      <div class="title_container">
        <h3>{{ title }}</h3>
      </div>
      <div v-for="boisson in this.$store.state.boissonMenu.softs" :key = "boisson.name" class="boisson_box">
        <div class="info_container">
          <h4>{{ boisson.name }}</h4>
        </div>
        <div class="price_container">
          <p>{{ boisson.price }} €</p>
        </div>
      </div>
      <div class="title_container">
        <h4>Nos cocktails</h4>
      </div>
      <div v-for="boisson in this.$store.state.boissonMenu.cocktails" :key = "boisson.name" class="boisson_box">
        <div class="info_container">
          <h4>{{ boisson.name }}</h4>
          <p>{{ boisson.description }}</p>
        </div>
        <div class="price_container">
          <p>{{ boisson.price }} €</p>
        </div>
      </div>
      <div class="title_container">
        <h4>Nos bières</h4>
      </div>
      <div v-for="boisson in this.$store.state.boissonMenu.bieres" :key = "boisson.name" class="boisson_box">
        <div class="info_container">
          <h4>{{ boisson.name }}</h4>
          <p>{{ boisson.description }}</p>
        </div>
        <div class="price_container">
          <p>{{ boisson.price }} €</p>
        </div>
      </div>
      <div class="title_container">
        <h4>Nos boissons chaudes</h4>
      </div>
      <div v-for="boisson in this.$store.state.boissonMenu.chaudes" :key = "boisson.name" class="boisson_box">
        <div class="info_container">
          <h4>{{ boisson.name }}</h4>
          <p>{{ boisson.description }}</p>
        </div>
        <div class="price_container">
          <p>{{ boisson.price }} €</p>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'BoissonCard',
  props: {
    title: String
  },
  components: {

  },
  data(){
    return{
        
    }
  }
}
</script>

<style lang="scss" scoped>
$background-color: #fbf9d8;
$border-color: #aaaaaa;
$boisson-box-height: 70px;
$title-color: rgb(0, 60, 30);
$boisson-name-color: rgb(140, 30, 30);
.boisson_card{
  width: 100%;
  height: auto;
  background-color: $background-color;
  .title_container{
    height: 100px;
    line-height: 100px;
    h3{
      text-align: center;
      font-size: 3rem;
      color: $title-color;
    }
    h4{
      text-align: center;
      font-size: 2.5rem;
      color: $title-color;
    }
  }
  .boisson_box{
    display: flex;
    height: $boisson-box-height;
    justify-content: center;
    align-items: center;
    border: dashed 1px $border-color;
    .info_container{
      display: flex;
      width: 40%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      h4{
        font-size: 2rem;
        color: $boisson-name-color;
      }
      p{
        font-size: 1.3rem;
      }
    }
    .price_container{
      display: flex;
      width: 40%;
      justify-content: center;
      align-items: center;
      height: 100%;
      p{
        font-size: 2rem;
      }
    }
  }
}
</style>