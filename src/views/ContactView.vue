<template>
  <div class="contact">
    <div class="blur_container">
      <div class="contact_container">
        <div class="title_container">
          <h2>Nous contacter</h2>
        </div>
        <div class="main_container">
          <p>Par mail à <span><a href="mailto:pizzeria-margherita@mail.fr">pizzeria-margherita@mail.fr</a></span> ou alors par téléphone au <span>01-23-45-67-89.</span></p>
        </div>
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
$links-color: rgb(140, 30, 30);
$container-background-color: rgba(230, 225, 190, 0.8);

.contact{
  height: calc(100vh - 75px - 50px);
  min-height: calc(100vh - 75px - 50px);
  background-image: url('../../public/ressources/pexels-antonius-ferret-6223172.jpg');
  background-size: cover;
  background-position: center;

  .blur_container{
    box-sizing: border-box;
    padding: 12px;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(4px);
    .contact_container{
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .title_container{
        padding: 32px 0;
        text-align: center;
        h2{
        font-size: 6rem;
        color: $title_color;
      }
      }
      .main_container{
        display: flex;
        width: 75%;
        height: 60%;
        justify-content: center;
        align-items: center;
        padding: 12px;
        border-radius: 12px;
        background-color: $container-background-color;
        p{
          font-size: 2.8rem;
          text-align: center;
          span{
          font-size: 3.3rem;
          text-decoration: none;
          color: $links_color;
            a{
              font-size: 3.3rem;
              text-decoration: none;
              color: $links-color;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 800px) {
  .contact{
    .blur_container{
      .contact_container{
        .title_container{
          h2{
          font-size: 5rem;
          }
        }
        .main_container{
          width: auto;
          p{
            font-size: 2.3rem;
            text-align: center;
            span{
            font-size: 2.6rem;
            text-decoration: none;
            color: $links_color;
              a{
                font-size: 2.6rem;
                text-decoration: none;
                color: $links-color;
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 500px) {
  .contact{
    .blur_container{
      .contact_container{
        .title_container{
          h2{
          font-size: 4rem;
          }
        }
        .main_container{
          width: auto;
          p{
            font-size: 2rem;
            text-align: center;
            span{
            font-size: 2.2rem;
            text-decoration: none;
            color: $links_color;
              a{
                font-size: 2.2rem;
                text-decoration: none;
                color: $links-color;
              }
            }
          }
        }
      }
    }
  }
}
</style>
