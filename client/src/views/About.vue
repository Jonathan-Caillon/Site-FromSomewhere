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
      <label for="gameBody">Body</label>
      <br />
      <textarea v-model="gameBody" cols="30" rows="10"></textarea>
      <br />
      <br />
      <label for="image">Background</label>
      <br />
      <input id="image" type="file" name="image" />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
    <br />
    <h1>Press content</h1>
    <br />
    <form @submit.prevent="postPress">
      <input type="text" v-model="pressTitle" />
      <br />
      <br />
      <ckeditor
        :editor="editor"
        v-model="editorData"
        :config="editorConfig"
      ></ckeditor>
      <p><input id="postPress" type="submit" value="Submit" /></p>
    </form>
    <form @submit.prevent="postMeta">
      <label for="metacritique">Metacritique</label>
      <br />
      <input type="text" v-model="metacritique" />
      <br />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
const axios = require("axios");
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-vue";
export default {
  data() {
    return {
      title: "",
      gameBody: "",
      PressArticle: "",
      pressTitle: "",
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        // The configuration of the editor.
      },
      metacritique: [{ premier }, { deux }, { trois }],
    };
  },
  components: {
    ckeditor: CKEditor.component,
  },
  // mounted() {
  //   axios
  //     .get("http://localhost:9000/api/press")
  //     .then((response) => {
  //       this.PressArticle = response.data[0].body;
  //       const test = document.querySelector("#article");
  //       test.innerHTML = this.PressArticle;
  //     })

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
      formData.append("gameBody", this.gameBody);
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
    postPress() {
      axios
        .post("http://localhost:9000/api/press", {
          title: this.pressTitle,
          body: this.editorData,
        })
        .then((res) => {
          location.reload();
        });
    },
    postMeta() {
      axios
        .put("http://localhost:9000/api/game/61c4749c7e449b86b6d3ccf5", {
          metacritique: this.metacritique,
        })
        .then((res) => {
          location.reload();
        });
    },
  },
};
</script>
