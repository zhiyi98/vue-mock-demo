<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <router-view />
    <button @click="getClick">getClick</button>
    <button @click="postClick">postClick</button>

    <div v-for="(item, index) in getData" :key="index">
      <div v-if="index < 4">
        <div>
          <h2>{{ item.id }}</h2>
          <h2>{{ item.title }}</h2>
          <h2>{{ item.name }}</h2>
          <h2>{{ item.emial }}</h2>
          <h2>{{ item.paraprath }}</h2>
          <h2>{{ item.url }}</h2>
          <h2>{{ item.word }}</h2>
          <a href="#">
            <img :src="item.image" alt="">
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import mock from "../mock/mock.js";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      getData: [],
      postData: [],
    };
  },
  methods: {
    getClick() {
      axios.get("/get").then((res) => {
        console.log(res);
        this.getData = res.data;
      });
    },
    postClick() {
      axios.post("/post").then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
