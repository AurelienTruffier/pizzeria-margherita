<template>
    <div class="categories_row">
      <CategoryButton title="Nos pizzas" subtitle="authentiques" color="#ffb900" @click="ChangeSelected('pizza')"></CategoryButton>
      <CategoryButton title="Nos desserts" subtitle="sucrés" color="#ee4444" @click="ChangeSelected('dessert')"></CategoryButton>
      <CategoryButton title="Nos boissons" subtitle="rafraîchissantes" color="#0096ec" @click="ChangeSelected('boisson')"></CategoryButton>
    </div>
</template>

<script>
import CategoryButton from './CategoryButton.vue';

export default {
  name: 'CategoriesRow',
  props: {

  },
  components: {
    CategoryButton
},
data(){
    return{
      selected: null
    }
  },
  methods:{
    ChangeSelected(newValue){
      this.selected = newValue;
      this.$emit('NewSelected', this.selected);
    }
  }
}
</script>

<style lang="scss" scoped>
.categories_row{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 160px;
  padding: 16px 0;
  background-color: white;
}

@media (max-width: 500px) {
  .categories_row{
    height: 90px;
    padding: 8px 0;
  }
}
</style>