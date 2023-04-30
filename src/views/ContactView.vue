<template>
  <div class="contact">
    <div class="blur_container">
      <div class="contact_container">
        <div class="title_container">
          <h2>Nous contacter</h2>
        </div>
        <form>
          <a href="mailto:pizzeria-margherita@mail.fr">Contactez-nous !</a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ContactView',
  components: {
    
  }
}
</script>

<style lang="scss">
$title_color: #ffffff;

.contact{
  height: auto;
  min-height: calc(100vh - 75px - 50px);
  background-image: url('../../public/ressources/pexels-antonius-ferret-6223172.jpg');
  background-size: cover;
  background-position: center;

  .blur_container{
    box-sizing: border-box;
    padding: 12px;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(1px);
    .contact_container{
      .title_container{
      padding: 32px 0;
      text-align: center;
      }
      h2{
        font-size: 6rem;
        color: $title_color;
      }
      form{
        display: flex;
        justify-content: center;
        align-items: center;
        a{
          font-size: 7rem;
          text-decoration: none;
          color: $title_color;
        }
      }
    }
  }
}
@media (max-width: 700px) {
  .contact{
    .blur_container{
      .title_container{
        padding: 12px 0;
        h2{
          font-size: 2rem;
        }
        form{
          a{
            font-size: 2rem !important;
          }
        }
      }
    }
  }
}
</style>
