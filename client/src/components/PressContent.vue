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
          <div v-show="this.articleView == false" class="articleCheck article-txt" @click="toggleOn">
            <div class="article-title">{{ article.title }}</div><br>
            <div class="article-excerpt">{{ article.excerpt }}</div>
            <div class="article-link"><a target="blank" :href="article.link">Lien vers l'article</a></div>
          </div>
          <div v-show="this.articleView == true" class="articleCheck article-full" @click="toggleOff">"{{ article.body }}</div>
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
      articleView: [],
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
    },
    // toggleInfo: function (){
    //   let currentArticles = document.querySelectorAll('.articleCheck');
    //   console.log(currentArticles);
    //   currentArticles.forEach(el => {
    //     if (el.articleView == false){
    //       el.articleView = true
    //     }else{
    //       el.articleView = false
    //     }
    //   });
    // },
    toggleOn: function(){
      this.articleView = true
    },
    toggleOff: function(){
      this.articleView = false
    },
  },
  created(){
    axios.get(API)
      .then(response => {
        this.articles = response.data
        articles.forEach(el => {
          el.articleView = false
        })
        console.log(articleView)
      })
      .catch(error => {
        console.log(error)
      });
  },
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

.articleBody a {
  color: #42b983;
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
  cursor: pointer;
}

.article-link{
  margin-top: 10px;
  text-align: right;
}

.article-full{
  max-height: 200px;
  overflow-y: scroll;
  cursor: pointer;
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