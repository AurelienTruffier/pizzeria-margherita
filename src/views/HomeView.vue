<template>
  <div class="home">
    <div class="blur_container">
      <div class="title_container">
      <h1>Pizzeria Margherita</h1>
      <h2>Une expérience culinaire italienne inoubliable !</h2>
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>

<style lang="scss">
$title_color: #ffffff;
.home{
  height: calc(100vh - 75px - 50px);
  background-image: url('../../public/ressources/alan-hardman-SU1LFoeEUkk-unsplash.jpg');
  background-size: cover;
  background-position: center;

  .blur_container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(3px);
    
    .title_container{
    transform: translateY(-50px);
    text-align: center;
    
      h1{
      font-size: 8.5rem;
        padding: 6px;
        color: $title_color;
      }

      h2{
        font-size: 2.5rem;
        color: $title_color;
      }
    }
  }
}
@media (max-width: 700px) {
  .home{
    .blur_container{ 
      .title_container{
      transform: translateY(-50px);     
        h1{
          font-size: 3.5rem;
          padding: 6px;
          color: $title_color;
        }

        h2{
          font-size: 2rem;
          color: $title_color;
        }
      }
    }
}
}
@media (max-width: 500px){
  .home{
    .blur_container{ 
      .title_container{
      transform: translateY(-50px);     
        h1{
          font-size: 2.5rem;
          padding: 6px;
          color: $title_color;
        }

        h2{
          font-size: 1.6rem;
          color: $title_color;
        }
      }
    }
}
}
</style>
