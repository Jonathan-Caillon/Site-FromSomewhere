import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import CKEditor from "@ckeditor/ckeditor5-vue";
import About from "./views/About.vue";
createApp(App).use(router).mount("#app");
