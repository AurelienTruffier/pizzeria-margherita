<template>
    <div class="category_button" :style="{'background-color': color}" role="button">
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
$text-color: #ffffff;
.category_button{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 90%;
  border-radius: 3px;
  cursor: pointer;
  background-color: orange;
  transition: transform 0.2s ease-in-out;

  .text_container{
    color: $text-color;
    text-align: center;
    h2{
      font-size: 2.5rem;
    }
    h3{
      font-size: 1.9rem;
    }
  }
}

.category_button:hover{
  transform: scale(1.05);
}
@media (max-width: 700px) {
  .category_button{
    .text_container{
      h2{
        font-size: 2.3rem;
      }
      h3{
        display: none;
      }
    }
  }
}
@media (max-width: 500px) {
  .category_button{
    .text_container{
      h2{
        font-size: 1.5rem;
      }
    }
  }
}
</style>