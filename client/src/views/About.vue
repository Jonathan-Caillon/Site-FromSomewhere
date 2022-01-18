<template>
  <div class="about">
    <h1>Game content</h1>
    <!-- Form post Game -->
    <img src="..\assets\img\2022-01-13T13-32-38.647Z-NUTNUT.png" alt="" />
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
      <label for="gameTitle">Date</label>
      <br />
      <input type="text" v-model="gameDate" />
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
    <!-- Form post Press article -->
    <br />
    <h1>Press content</h1>
    <br />
    <form @submit.prevent="postPress">
      <label for="pressTitle">PressTitle</label>
      <br />
      <input type="text" v-model="pressTitle" />
      <br />
      <br />
      <label for="pressExcerpt">PressExcerpt</label>
      <br />
      <input type="text" v-model="pressExcerpt" />
      <br />
      <br />
      <ckeditor
        :editor="editor"
        v-model="editorData"
        :config="editorConfig"
      ></ckeditor>
      <p><input id="postPress" type="submit" value="Submit" /></p>
    </form>
    <br />

    <!-- Metacritique -->
    <form @submit.prevent="postMeta">
      <label for="metacritique">Metacritique</label>
      <br />
      <input type="text" v-model="metacritique" />
      <br />
      <button type="submit">Submit</button>
    </form>
    <br />
    <div class="meta">
      <header class="metaheader">
        <h1>Metacritique</h1>
        <form id="new-task-form">
          <input
            type="text"
            name="new-author-input"
            id="new-author-input"
            placeholder="author?"
          />
          <input
            type="text"
            name="new-task-input"
            id="new-task-input"
            placeholder="What do you have planned?"
          />
          <input type="submit" id="new-task-submit" value="Add task" />
        </form>
      </header>
      <main>
        <section class="task-list">
          <h2>Metacritique</h2>

          <div id="tasks">
            <!-- <div class="task">
					<div class="content">
						<input 
							type="text" 
							class="text" 
							value="A new task"
							readonly>
					</div>
					<div class="actions">
						<button class="edit">Edit</button>
						<button class="delete">Delete</button>
					</div>
				</div> -->
          </div>
        </section>
      </main>
    </div>
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
      gameDate: "",
      metacritique: "",
      PressArticle: "",
      pressTitle: "",
      pressExcerpt: "",
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        // The configuration of the editor.
      },
    };
  },
  components: {
    ckeditor: CKEditor.component,
  },
  mounted() {
    axios
      .get("/api/game/")
      .then((response) => {
        console.log(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const author = document.querySelector("#new-author-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const task = input.value;
      const author_task = author.value;
      const task_el = document.createElement("div");
      task_el.classList.add("task");

      const task_content_el = document.createElement("div");
      task_content_el.classList.add("content");

      task_el.appendChild(task_content_el);

      const author_input_el = document.createElement("input");
      author_input_el.classList.add("text");
      author_input_el.classList.add("author");
      author_input_el.type = "text";
      author_input_el.value = author_task;
      author_input_el.setAttribute("readonly", "readonly");

      task_content_el.appendChild(author_input_el);
      const task_input_el = document.createElement("input");
      task_input_el.classList.add("text");
      task_input_el.classList.add("metacrit");
      task_input_el.type = "text";
      task_input_el.value = task;
      task_input_el.setAttribute("readonly", "readonly");

      task_content_el.appendChild(task_input_el);

      const task_actions_el = document.createElement("div");
      task_actions_el.classList.add("actions");

      const task_edit_el = document.createElement("button");
      task_edit_el.classList.add("edit");
      task_edit_el.innerText = "Edit";

      const task_delete_el = document.createElement("button");
      task_delete_el.classList.add("delete");
      task_delete_el.innerText = "Delete";

      task_actions_el.appendChild(task_edit_el);
      task_actions_el.appendChild(task_delete_el);

      task_el.appendChild(task_actions_el);

      list_el.appendChild(task_el);

      input.value = "";
      author.value = "";
      task_edit_el.addEventListener("click", (e) => {
        if (task_edit_el.innerText.toLowerCase() == "edit") {
          task_edit_el.innerText = "Save";
          task_input_el.removeAttribute("readonly");
          author_input_el.removeAttribute("readonly");
          author_input_el.focus();
        } else {
          task_edit_el.innerText = "Edit";
          author_input_el.setAttribute("readonly", "readonly");
          task_input_el.setAttribute("readonly", "readonly");
        }
      });

      task_delete_el.addEventListener("click", (e) => {
        list_el.removeChild(task_el);
      });
    });
  },
  methods: {
    postUser() {
      let formData = new FormData();
      let imagefile = document.querySelector("#image");
      formData.append("image", imagefile.files[0]);
      let gameTitle = document.querySelector("#gameTitle");
      formData.append("gameTitle", gameTitle.files[0]);
      formData.append("title", this.title);
      formData.append("gameBody", this.gameBody);
      formData.append("gameDate", this.gameDate);
      axios
        .post("/api/game", formData, {
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
        .post("api/press", {
          title: this.pressTitle,
          body: this.editorData,
        })
        .then((res) => {
          location.reload();
        });
    },
    postMeta() {
      axios
        .put("/api/game/61d48a71f1d92547602f4563", {
          metacritique: this.metacritique,
        })
        .then((res) => {
          location.reload();
        });
    },
  },
};
</script>
<style>
* {
  margin: 0;
  box-sizing: border-box;
  font-family: "Fira sans", sans-serif;
}

.meta {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: #fff;
  background-color: #374151;
}

.metaheader {
  padding: 2rem 1rem;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}

.metaheader h1 {
  font-size: 2.5rem;
  font-weight: 300;
  color: #6b7280;
  margin-bottom: 1rem;
}

#new-task-form {
  display: flex;
}

input,
button {
  appearance: none;
  outline: none;
  background: none;
}

#new-task-input {
  flex: 1 1 0%;
  background-color: #1f2937;
  padding: 1rem;
  border-radius: 1rem;
  margin-right: 1rem;
  color: #eee;
  font-size: 1.25rem;
}

#new-task-input::placeholder {
  color: #6b7280;
}

#new-author-input {
  flex: 1 1 0%;
  background-color: #1f2937;
  padding: 1rem;
  border-radius: 1rem;
  margin-right: 1rem;
  color: #eee;
  font-size: 1.25rem;
}

#new-author-input::placeholder {
  color: #6b7280;
}

#new-task-submit {
  color: #ec4899;
  font-size: 1.25rem;
  font-weight: 700;
  background-image: linear-gradient(to right, #ec4899, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  transition: 0.4s;
}

#new-task-submit:hover {
  opacity: 0.8;
}

#new-task-submit:active {
  opacity: 0.6;
}

main {
  flex: 1 1 0%;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}

.task-list {
  padding: 1rem;
}

.task-list h2 {
  font-size: 1.5rem;
  font-weight: 300;
  color: #6b7280;
  margin-bottom: 1rem;
}

#tasks .task {
  display: flex;
  justify-content: space-between;
  background-color: #111827;
  padding: 1rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
}

.task .content {
  flex: 1 1 0%;
}

.task .content .text {
  color: #eee;
  font-size: 1.125rem;
  width: 100%;
  display: block;
  transition: 0.4s;
  border: none;
}

.task .content .text:not(:read-only) {
  color: #ec4899;
}

.task .actions {
  display: flex;
  margin: 0 -0.5rem;
}

.task .actions button {
  cursor: pointer;
  margin: 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 700;
  text-transform: uppercase;
  transition: 0.4s;
}

.task .actions button:hover {
  opacity: 0.8;
}

.task .actions button:active {
  opacity: 0.6;
}

.task .actions .edit {
  background-image: linear-gradient(to right, #ec4899, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: none;
}

.task .actions .delete {
  color: crimson;
  border: none;
}
</style>
