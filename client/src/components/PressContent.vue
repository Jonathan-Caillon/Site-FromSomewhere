<template>

  <div class="press-container">

    <div class="press-article" v-for="article in articles" :key="article.id" @click="toggleModalON">
      <div class="articleBody">
        <img class="article-image" :src="require('../assets/img/'+article.imageName)" alt="">
        <div class="article-txt">
          <div class="article-title">{{ article.title }} </div><br>
          <div class="article-excerpt">{{ article.excerpt }}</div>
        </div>
      </div>
      <div class="bloc-modal">
        <div class="overlay" @click="toggleModalOFF"></div>
        <div class="modal">
          <button class="btn-modal" @click="toggleModalOFF">exit</button>
          <div class="modal-body">{{article.body}}</div>
        </div>
      </div>
    </div> 

  </div>

</template>

<script>

import axios from 'axios';

const API = '/api/press/';


export default {
  name: "PressContent",
  components: {

  },
  data(){
    return {
      articles: [],
    }
  },
  methods: {
    toggleModalON: function(){
      document.querySelector(".bloc-modal").style.display = "flex"
    },
    toggleModalOFF: function(){
      document.querySelector(".bloc-modal").style.display = "none"
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
      });
  }
}

// MODAL



</script>

<style scoped>

.press-container{
  margin-left: 25vw;
}

.articleBody{
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

.bloc-modal{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: none;
  justify-content: center;
  align-items: center;
}

.overlay{
  background: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.modal{
  background: #f1f1f1;
  padding: 50px;
  position: fixed;
  top: 30%;
}

.btn-modal{
  position: absolute;
  top: 10px;
  right: 10px;
}

</style>