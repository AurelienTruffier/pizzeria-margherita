<template>
  <div class="pizzeria">
    <div class="blur_container">
      <div class="title_container">
        <h2>Notre restaurant</h2>
      </div>
      <div class="description_container">
        <p>La Pizzeria Margherita est une pizzeria qui offre une expérience gastronomique exceptionnelle. Située au cœur de la ville, cette pizzeria est célèbre pour ses pizzas délicieuses et authentiques préparées à partir d'ingrédients frais de qualité supérieure. Avec une ambiance élégante et sophistiquée, la Pizzeria Margherita est le lieu idéal pour une soirée romantique, une rencontre d'affaires ou une sortie entre amis.</p>
      </div>
      <div class="horaire_container">
        <div class="title_container">
          <h3>Nos horaires</h3>
        </div>
        <div class="hours_container">
          <div class="week">
            <h4>Mardi au vendredi</h4>
            <p>10h-22h</p>
          </div>
          <div class="week-end">
            <h4>Samedi et dimanche</h4>
            <p>10h-23h</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PizzeriaView',
  components: {
    
  }
}
</script>

<style lang="scss">
$title_color: #ffffff;
$description-background-color: rgba(230, 225, 190, 0.8);

.pizzeria{
  height: calc(100vh - 75px - 50px);
  min-height: calc(100vh - 75px - 50px);
  background-image: url('../../public/ressources/pexels-max-avans-5056625.jpg');
  background-size: cover;
  background-position: center;

  .blur_container{
    box-sizing: border-box;
    padding: 12px;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(1px);
    .title_container{
      padding: 8px 0 16px 0;
      text-align: center;
      h2{
        font-size: 5rem;
        color: $title_color;
      }
    }
    .description_container{
      display: flex;
      width: 80%;
      height: 33%;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      padding: 12px 24px;
      border-radius: 12px;
      background-color: $description-background-color;
      p{
        font-size: 1.5rem;
      }
    }
    .horaire_container{
      display: flex;
      width: 80%;
      height: 30%;
      flex-direction: column;
      justify-content: space-around;
      align-items: space-around;
      margin: 0 auto;
      margin-top: 12px;
      padding: 12px;
      border-radius: 12px;
      background-color: $description-background-color;
      .title_container{
        height: 20px;
        h3{
          font-size: 2.5rem;
          text-align: center;
          line-height: 20px;
        }
      }
      .hours_container{
        display: flex;
        justify-content: center;
        align-items: center;
        .week{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 50%;
          height: 100%;
          h4{
            font-size: 2rem;
            text-align: center;
          }
          p{
            font-size: 1.4rem;
          }
        }
        .week-end{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 50%;
          height: 100%;
          h4{
            font-size: 2rem;
            text-align: center;
          }
          p{
            font-size: 1.4rem;
          }
        }
      }
    }
  }
}

@media (max-width: 900px){
  .pizzeria{
    .blur_container{
      .title_container{
        padding: 16px 0;
        h2{
          font-size: 5rem;
        }
      }
      .description_container{
        width: auto;
        padding: 12px;
        p{
          font-size: 1.3rem;
        }
      }
      .horaire_container{
        width: auto;
        .hours_container{
          .week{
            h4{
              font-size: 1.7rem;
            }
            p{
              font-size: 1.3rem;
            }
          }
          .week-end{
            h4{
              font-size: 1.7rem;
            }
            p{
              font-size: 1.3rem;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 700px){
  .pizzeria{
    .blur_container{
      .title_container{
        padding: 12px 0;
        h2{
          font-size: 3rem;
        }
      }
      .description_container{
        padding: 10px;
        p{
          font-size: 0.95rem;
        }
      }
      .horaire_container{
        .hours_container{
          .week{
            h4{
              font-size: 1.4rem !important;
            }
            p{
              font-size: 1.3rem !important;
            }
          }
          .week-end{
            h4{
              font-size: 1.4rem;
            }
            p{
              font-size: 1.3rem !important;
            }
          }
        }
      }
    }
  }
}
</style>
