<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p ref="name">{{ title }}</p>
    <form @submit.prevent="postUser">
      <label for="nom">name</label>
      <input id="nom" type="text" v-model="nom" />
      <label for="age">age</label>
      <input id="age" type="text" v-model="age" />
      <label for="age">Player</label>
      <input id="age" type="text" v-model="player" />
      <input type="file" v-model="image" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      title: "Test du titre",
      nom: "",
      age: "",
      image: "",
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
  methods: {
    postUser() {
      axios.post("http://localhost:9000/api/users", {
        name: this.nom,
        age: this.age,
      });
    },
  },
};
</script>
