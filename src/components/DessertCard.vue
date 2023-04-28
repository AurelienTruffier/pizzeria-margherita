<template>
    <div class="dessert_card">
      <div class="title_container">
        <h3>{{ title }}</h3>
      </div>
      <div v-for="dessert in this.$store.state.dessertMenu" :key = "dessert.name" class="dessert_box">
        <div class="info_container">
          <h4>{{ dessert.name }}</h4>
          <p>{{ dessert.description }}</p>
        </div>
        <div class="price_container">
          <p>{{ dessert.price }} €</p>
        </div>
        <div class="image_container">
          <img :src="dessert.image" alt="">
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'DessertCard',
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
$dessert-box-height: 300px;
$dessert-mobile-box-height: 250px;
$title-color: rgb(0, 60, 30);
$dessert-name-color: rgb(0, 60, 30);
.dessert_card{
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
  }
  .dessert_box{
    display: flex;
    height: $dessert-box-height;
    justify-content: space-between;
    align-items: center;
    border: dashed 1px $border-color;
    padding: 0px 24px 0px 32px;
    .info_container{
      width: 50%;
      h4{
        font-size: 3rem;
        transform: translate(16px, -40px);
        color: $dessert-name-color;
      }
      p{
        font-size: 1.6rem;
      }
    }
    .price_container{
      display: flex;
      width: 18%;
      height: 100%;
      justify-content: center;
      align-items: center;
      p{
        font-size: 2.5rem;
      }
    }
    .image_container{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32%;
      height: 100%;

      img{
        width: 85%;
        border-radius: 3px;
      }
    }
  }
}
@media (max-width: 900px){
  .dessert_card{
    .dessert_box{
      .info_container{
        h4{
          font-size: 2.3rem;
        }
        p{
          font-size: 1.3rem;
        }
      }
      .price_container{
        p{
          font-size: 2.2rem;
        }
      }
    }
  }
}
@media (max-width: 600px){
  .dessert_card{
    .dessert_box{
      height: $dessert-mobile-box-height;
      padding: 0px 6px 0px 12px;
      .info_container{
        width: 45%;
        h4{
          font-size: 1.8rem;
          transform: translate(0, 0);
        }
        p{
          font-size: 1.1rem;
        }
      }
      .price_container{
        p{
          font-size: 1.3rem;
        }
      }
      .image_container{
      width: 37%;

      img{
        width: 95%;
      }
    }
    }
  }
}
</style>