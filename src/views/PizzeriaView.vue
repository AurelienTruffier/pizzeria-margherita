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
  height: auto;
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
      padding: 32px 0;
      text-align: center;
      h2{
        font-size: 6rem;
        color: $title_color;
      }
    }
    .description_container{
      padding: 18px;
      border-radius: 12px;
      background-color: $description-background-color;
      p{
        font-size: 1.8rem;
      }
    }
    .horaire_container{
      margin-top: 18px;
      padding: 18px;
      border-radius: 12px;
      background-color: $description-background-color;
      .title_container{
        height: 30px;
        h3{
          font-size: 3.2rem;
          text-align: center;
          line-height: 40px;
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
          height: 120px;
          h4{
            font-size: 2.5rem;
            text-align: center;
          }
          p{
            font-size: 2.3rem;
          }
        }
        .week-end{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 50%;
          height: 120px;
          h4{
            font-size: 2.5rem;
            text-align: center;
          }
          p{
            font-size: 2.3rem;
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
        padding: 12px;
        p{
          font-size: 1.6rem;
        }
      }
      .horaire_container{
        .week{
          h4{
            font-size: 1.5rem;
          }
          p{
            font-size: 1.3rem;
          }
        }
        .week-end{
          h4{
            font-size: 1.5rem;
          }
          p{
            font-size: 1.3rem;
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
        padding: 8px;
        p{
          font-size: 1.2rem;
        }
      }
      .horaire_container{
        .title_container{
          h3{
            font-size: 1.5rem;
          }
        }
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
            font-size: 1.4rem !important;
          }
          p{
            font-size: 1.3rem !important;
          }
        }
      }
    }
  }
}
</style>
