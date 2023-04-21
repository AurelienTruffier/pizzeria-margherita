<template>
    <div class="category_button">
      <div class="text_container">
        <h2>{{ title }}</h2>
        <h3>{{ subtitle }}</h3>
      </div>
    </div>
</template>

<script>

export default {
  name: 'CategoryButton',
  props: {
    title: String,
    subtitle: String,
    color: String,
    url: String
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
.category_button{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25vw;
  height: 90%;
  border-radius: 3px;
  background-color: orange;

  .text_container{
    text-align: center;
    h2{
      font-size: 2.5rem;
    }
    h3{
      font-size: 1.5rem;
    }
  }
}
</style>