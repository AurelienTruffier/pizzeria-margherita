<template>
  <div class="menu">
    <CategoriesRow @NewSelected="ChangeMenu"></CategoriesRow>
    <div class="menu_container">
      <PizzaCard v-if="this.selected=='pizza'" title="Nos pizzas"></PizzaCard>
      <DessertCard v-if="this.selected=='dessert'" title="Nos desserts"></DessertCard>
      <!-- <MenuCard v-if="this.selected=='boisson'" title="Nos boissons"></MenuCard> -->
    </div>
  </div>
</template>

<script>
import CategoriesRow from '@/components/CategoriesRow.vue';
import PizzaCard from '@/components/PizzaCard.vue';
import DessertCard from '@/components/DessertCard.vue';

export default {
  name: 'MenuView',
  components: {
    CategoriesRow,
    PizzaCard,
    DessertCard
  },
  data(){
    return{
      selected: 'pizza' //pizza par défaut
    }
  },
  methods:{
    ChangeMenu(data){
      this.selected= data;
      console.log(data);
    }
  }
}
</script>

<style lang="scss" scoped>
.menu{
  min-height: calc(100vh - 75px - 50px);
  .menu_view{
    padding: 9px;
  }
}
</style>
