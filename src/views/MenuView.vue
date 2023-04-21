<template>
  <div class="menu">
    <CategoriesRow></CategoriesRow>
  </div>
</template>

<script>
import CategoriesRow from '@/components/CategoriesRow.vue';

export default {
  name: 'MenuView',
  components: {
    CategoriesRow
}
}
</script>

<style lang="scss" scoped>
.menu{
  min-height: calc(100vh - 75px - 50px);
}
</style>
