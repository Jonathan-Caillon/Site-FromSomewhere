<template>

  <div class="press-container">

    <div class="press-article" v-for="article in articles" :key="article.id">
      <div class="articleBody">
        <img class="article-image" :src="require('../assets/img/'+article.imageName)" alt="">
        <div class="article-txt">
          <div class="article-title">{{ article.title }}</div><br>
          <div class="article-excerpt">{{ article.excerpt }}</div>
          <div class="article-link"><a target="blank" :href="article.link">Lien vers l'article</a></div>
        </div>
      </div>
      <!-- <div class="bloc-modal">
        <div class="overlay" @click="toggleModalOFF"></div>
        <div class="modal">
          <button class="btn-modal" @click="toggleModalOFF">exit</button>
          <div class="modal-body">{{article.body}}</div>
        </div>
      </div> -->
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
    // toggleFull: function(){
    //   if (fullOn = false){
    //     this.innerHTML = '<div class="article-excerpt">{{ article.body }}</div>' ;
    //     fullOn = true ;
    //   } else {
    //     this.innerHTML = '<div class="article-title">{{ article.title }} </div><br><div class="article-excerpt">{{ article.excerpt }}</div>' ;
    //     fullOn = false ;
    //   }
    // },
  },
  created(){
    axios.get(API, { params: { year: "2020" } })
      .then(response => {
        this.articles = response.data
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      });
  },
  // mounted(){
  //   // CHECK IF FOUND AND OFC NOT BECAUSE MOTHERF*CKIN' VUE DOESN'T ALLOW CLASSIC EVENTLISTENERS

  //   let articleNumber = document.querySelectorAll('.article-txt').length ;
  //   console.log ("Nombre d'articles : " + articleNumber);

  //   // TOGGLE FULL

  //   let fullOn = false ;

  //   document.querySelectorAll('.article-txt').forEach(item => {
  //     item.addEventListener('click', event => {
  //       if (fullOn == false){
  //         item.innerHTML = '<div class="article-body">{{ article.body }}</div>' ;
  //         fullOn = true ;
  //       } else {
  //         item.innerHTML = '<div class="article-title">{{ article.title }} </div><br><div class="article-excerpt">{{ article.excerpt }}</div>' ;
  //         fullOn = false ;
  //       }
  //     })
  //   })

  // }
}

</script>

<style scoped>

.press-container{
  height: 100%;
  width: 100%;
  padding-left: 20px;
}

.articleBody{
  display: flex;
  margin-top: 20px;
}

.article-image{
  height: 150px;
  width: 200px;
}

.article-title{
  text-align: center;
  align-items: center;
  justify-content: center;
}

.article-txt{
  height: 150px;
  width: calc(100% - 300px);
  flex-direction: column;
  margin-top: 10px;
  padding-left: 10px;
}

.article-link{
  margin-top: 10px;
  text-align: right;
}

@media (max-width: 850px){
  .articleBody{
    margin-top: 30px;
  }
}

@media (max-width: 750px){
  .articleBody{
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .article-txt {
    width: 100%;
  }
}

</style>