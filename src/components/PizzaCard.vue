<template>
    <div class="pizza_card">
      <div class="title_container">
        <h3>{{ title }}</h3>
      </div>
      <div class="grid_container">
        <div v-for="pizza in this.$store.state.pizzaMenu" :key = "pizza.name" class="pizza_box">
          <div class="info_container">
            <h4>{{ pizza.name }}</h4>
            <p>{{ pizza.ingredients }}</p>
          </div>
          <div class="price_container">
            <table>
              <thead>
                <th>Classique</th>
                <th>Grande</th>
              </thead>
              <tr>
                <td>{{ pizza.classique }} €</td>
                <td>{{ pizza.grande }} €</td>
              </tr>
            </table>
          </div>
          <div class="vegetarien_container">
            <img v-if="pizza.vegetarien" src="ressources/leaf.png" alt="Pizza végétarienne">
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'PizzaCard',
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
$pizza-box-height: 120px;
$title-color: rgb(0, 60, 30);
$pizza-name-color: rgb(140, 30, 30);
$price-name-color: rgb(0, 60, 30);
.pizza_card{
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
  .grid_container{
    display: grid;
    grid-template-columns: 50% 50%;
    .pizza_box{
      display: flex;
      height: $pizza-box-height;
      border: dashed 1px $border-color;
      .info_container{
        box-sizing: border-box;
        display: flex;
        width: 60%;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 24px;
        h4{
          font-size: 2rem;
          color: $pizza-name-color;
        }
        p{
          font-size: 1.2rem;
        }
      }
      .price_container{
        display: flex;
        width: 30%;
        justify-content: center;
        align-items: center;
        table{
          text-align: center;
          thead th{
            font-size: 1.15rem;
            color: $price-name-color;
            padding: 6px;
          }
          tr td{
            font-size: 1.1rem;
          }
        }
      }
      .vegetarien_container{
        display: flex;
        width: 10%;
        height: 100%;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
@media (max-width: 900px) {
  .pizza_card 
    .grid_container{
      .pizza_box{
        .info_container{
          h4{
            font-size: 1.25rem;
          }
          p{
            font-size: 1rem;
          }
        }
      .price_container {
        width: 22%;
        table thead th{
          font-size: 0.9rem;
          padding: 2px;
        }
      }
      .vegetarien_container{
        width: 18%;
      }
    }
  }
}
@media (max-width: 700px) {
  .pizza_card{
    .grid_container{
      grid-template-columns: 100%;
    }
  }
}
</style>