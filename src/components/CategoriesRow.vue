<template>
    <div class="categories_row">
      <CategoryButton title="Nos pizzas" subtitle="aaa"></CategoryButton>
      <CategoryButton title="Nos desserts"></CategoryButton>
      <CategoryButton title="Nos boissons"></CategoryButton>
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
  margin: 16px 0;
  background-color: white;
}
</style>