<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/Press">Press</router-link>
  </div>
</template>

<script>

export default{
  name: "Navbar",
}

</script>

<style scoped>

#nav {
  padding: 30px;
  width: 20vw;
  height: 100vh;
  padding-top: 5vh;
  background-color: rgb(24, 24, 24);
  display: flex;
  flex-direction: column;
  text-align: center;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 2rem;
  text-decoration: none;
  color: white;
  margin-bottom: 10vh;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>