<template>
  <div class="about">
    <h1>This is an about page</h1>
    <form @submit.prevent="postUser" enctype="multipart/form-data">
      <label for="gameTitle">Title</label>
      <input id="gameTitle" type="file" name="gameTitle" />
      <label for="image">File</label>
      <input id="image" type="file" name="image" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  data() {
    return {
      title: "Titre",
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
      let formData = new FormData();
      let imagefile = document.querySelector("#image");
      formData.append("image", imagefile.files[0]);
      let gameTitle = document.querySelector("#gameTitle");
      formData.append("gameTitle", gameTitle.files[0]);
      axios.post("http://localhost:9000/api/game", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(formData);
    },
  },
};
</script>
