/* eslint-disable */
<template>
  <div id="add">
    <h1>添加博客</h1>
    <form v-if="!submmited">
        <label for="title">博客标题</label>
        <input id="title" type="text" v-model="blog.title">
        <br>
        <label for="content">博客内容</label>
        <br>
        <textarea v-model="blog.content" name="content" id="content" cols="30" rows="10"></textarea>
        <div id="checkboxs">
            <label>vue.js</label>
            <input type="checkbox" v-model="blog.categories" value="vue.js">
            <label>node.js</label>
            <input type="checkbox" v-model="blog.categories" value="node.js">
            <label>react.js</label>
            <input type="checkbox" v-model="blog.categories" value="react.js">
        </div>
        <label>作者：</label>
        <select v-model="blog.author">
            <option disabled></option>
            <option v-for="author in authors" :key="author">
                {{author}}
            </option>
        </select>
        <br>
        <button @click.prevent = 'post'>提交</button>
    </form>
    <div v-if="submmited">
        <h3>发布成功</h3>
    </div>
    <div id="view">
        <p>博客总览</p>
        <h3>博客标题：{{blog.title}}</h3>
        <h5>作者：{{blog.author}}</h5>
        <p>博客内容：</p>
        <p>{{blog.content}}</p>
        <ul>
            归类：
            <li  v-for="cate in blog.categories" :key="cate">
                {{cate}}
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'add',
  data(){
      return {
          blog:{
            title: '',
            content: '',
            categories: [],
            id: Date.now(),
            author: ''
          },
          authors: ['001','002','003'],
          submmited: false
      }
  },
  methods: {
      //https://jsonplaceholder.typicode.com/posts
      post: function(){
          axios.post("/posts.json",this.blog)
          .then(()=>{
              this.submmited = true;
          });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
textarea,
input{
    outline: none;
}
hr{
    height: 5px;
    background-color: black;
}
</style>
