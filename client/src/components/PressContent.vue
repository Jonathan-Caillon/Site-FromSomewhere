<template>

  <div class="press-container">

    <div class="press-article" v-for="article in articles" :key="article.id" @click="toggleModal">
      <div class="articleBody" @click="showModal">
        <PressModal :reveal="reveal" :toggleModal="toggleModal" />
        <img class="article-image" :src="`/src/assets/img/`+ article.imageName" alt="">
        <div class="article-txt">
          <div class="article-title">{{ article.title }} </div>
          <div class="article-excerpt">{{ article.excerpt }}</div>
        </div>
      </div>

      <!-- MODAL -->

    </div> 

  </div>

</template>

<script>

import axios from 'axios';
import PressModal from '@/components/PressModal.vue';

const API = '/api/press/';

export default {
  name: "PressContent",
  components: {
    PressModal,
  },
  data(){
    return {
      articles: [],
      reveal: false,
    }
  },
  methods: {
    toggleModal: function(){
      this.reveal = !this.reveal
    },
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

// MODAL



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


</style>