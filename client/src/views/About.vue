<template>
  <div class="about">
    <h1>Game content</h1>
    <form
      @submit.prevent="postUser"
      enctype="multipart/form-data"
      method="post"
    >
      <label for="gameTitle">Title</label>
      <br />
      <input type="text" v-model="title" />
      <br />
      <input id="gameTitle" type="file" name="gameTitle" />
      <br />
      <br />
      <label for="image">File</label>
      <br />
      <input id="image" type="file" name="image" />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
    <br />
    <h1>Press content</h1>
    <br />
    <form @submit.prevent="">
      <div name="content" id="editor"></div>
      <p><input type="submit" value="Submit" /></p>
    </form>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      title: "",
    };
  },
  // mounted() {
  //   axios
  //     .get("http://localhost:9000/api/game")
  //     .then((response) => (this.title = response.data))
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
  methods: {
    postUser() {
      let formData = new FormData();
      let imagefile = document.querySelector("#image");
      formData.append("image", imagefile.files[0]);
      let gameTitle = document.querySelector("#gameTitle");
      formData.append("gameTitle", gameTitle.files[0]);
      formData.append("title", this.title);
      axios
        .post("http://localhost:9000/api/game", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          location.reload();
        });
    },
  },
};
</script>
