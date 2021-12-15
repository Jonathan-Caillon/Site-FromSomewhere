import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
const express = require("express");
const mongoose = require("mongoose");
const app = express();
createApp(App).use(router).mount("#app");

app.set("view engine", "vue");
