<template>

  <div class="press-container">

    <div class="press-article" v-for="article in articles" :key="article.id">
      <div class="article-body" @click="popModal">
        <img  class="article-image" src="{{ article.image }}" alt="">
        <div class="article-txt">
          <div class="article-title">{{ article.title }} </div>
          <div class="article-excerpt">{{ article.excerpt }}</div>
        </div>
      </div>

      <!-- MODAL -->

      <div class="modal-body">
        <img  class="modal-image" src="{{ article.image }}" alt="">
        <div class="modal-txt">
          <div class="modal-title">{{ article.title }} </div>
          <div class="modal-article">{{ article.body }}</div>
        </div>
      </div>

    </div> 

  </div>

</template>

<script>
import axios from 'axios';

const API = ('https://jsonplaceholder.typicode.com/posts');

export default {
  name: "PressContent",
    methods: {
    popModal() {
      
    }
  },
  components: {
  },
  data(){
    return {
      articles: []
    }
  },
  created(){
    axios.get(API)
      .then(response => {
        this.articles = response.data
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
}



</script>

<style scoped>

.press-container{
  margin-left: 25vw;
}

.article-body{
  display: flex;
  margin-top: 2%;
  cursor: pointer;
}

.article-image{
  height: 100px;
  width: 100px;
}

.article-txt{
  margin-left: 5%;
  height: 100px;
  flex-direction: column;
}

/* MODAL */

.modal-body{
  display: none;
}

.modal-body-on{
  z-index: 10;
  position: absolute;
  top: 5vh;
  left: 5vw;
  height: 90vh;
  width: 90vw;
  cursor: pointer;
}

</style>