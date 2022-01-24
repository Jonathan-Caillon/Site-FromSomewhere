<template>

  <div class="press-container">
    <div class="press-nav">
      <button @click="req2020">2020</button>
      <button @click="req2021">2021</button>
      <button @click="reqAll">TOUS</button>
    </div>
    <div class="articles-container">
      <div class="press-article" v-for="article in articles" :key="article.id">
        <div class="articleBody">
          <img class="article-image" :src="require('../assets/img/'+article.imageName)" alt="">
          <div class="article-txt">
            <div class="article-title">{{ article.title }}</div><br>
            <div class="article-excerpt">{{ article.excerpt }}</div>
            <div class="article-link"><a target="blank" :href="article.link">Lien vers l'article</a></div>
          </div>
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
    req2020: function(){
      axios.get(API)
      .then(response => {
        this.articles = Object.values(response.data).filter((user) =>
            user.date.includes(2020)
          )
      })
    },
    req2021: function(){
      axios.get(API)
      .then(response => {
        this.articles = Object.values(response.data).filter((user) =>
            user.date.includes(2021)
          )
      })
    },
    reqAll: function(){
      axios.get(API)
      .then(response => {
        this.articles = response.data
      })
    }
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
    axios.get(API)
      .then(response => {
        this.articles = response.data
      })
      .catch(error => {
        console.log(error)
      });
  },
  // mounted(){
  //   // CHECK IF FOUND AND OFC NOT BECAUSE MOTHERF*CKIN' VUE

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

.press-nav {
  border-bottom: solid black 1px;
  height: 50px;
  display: flex;
  justify-content: center;
}

button {
  width: 200px;
  height: 50px;
  background-color: black;
  color: white;
  cursor: pointer;
  border: 0;
  font-size: 1.5rem;
}

button:not(:last-child){
  margin-right: 30px;
}

.press-container{
  height: 100%;
  width: 100%;
}

.articles-container{
  width: 100%;
  padding: 0 20%;
}

.articleBody{
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

 .article-image{
    width: 150px;
    height: 150px;
    margin-right: 50px;
  }

.article-title{
  text-align: center;
  align-items: center;
  justify-content: center;
}

.article-txt{
  height: 100%;
  width: calc(100% - 150px);
  flex-direction: column;
  margin-top: 10px;
  padding: 0 20px;
}

.article-link{
  margin-top: 10px;
  text-align: right;
}

@media (max-width: 1000px){
  button{
    width: 100px;
  }
  button:not(:last-child){
  margin-right: 15px;
  }

  .articles-container{
    padding: 0 15%;
  }
}

@media (max-width: 1000px){
  .articleBody{
    margin-top: 30px;
  }
}

@media (max-width: 500px){
  .articleBody{
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .articles-container{
    padding: 0 10%;
  }
  .article-txt {
    width: 100%;
    padding: 0;
  }
  .article-image{
    margin: 0;
    width: 200px;
    height: 200px;
  }
}

@media (max-width: 500px){
  .articles-container{
    padding: 0 5%;
  }
}

</style>