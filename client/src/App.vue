<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/Press">Press</router-link>
  </div>
  <router-view />
</template>

<style>

body {
  font-family: "ErasUltra";
  height: 100vh;
  margin: 0;
}

#nav {
  position: fixed;
  left: 0;
  top: 0;
  width: 20vw;
  height: 100vh;
  padding-top: 5vh;
  z-index: 9;
  background-color: rgb(24, 24, 24);
  display: flex;
  flex-direction: column;
  text-align: center;
}

#nav a {
  font-weight: bold;
  font-size: 2rem;
  text-decoration: none;
  color: white;
  margin-bottom: 10vh;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
