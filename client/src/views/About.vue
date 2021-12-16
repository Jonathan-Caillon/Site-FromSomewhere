<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p ref="name">{{ title }}</p>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      title: "Test du titre",
    };
  },
  mounted() {
    axios
      .get("http://localhost:9000/api/game")
      .then((response) => (this.title = response.data))
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
