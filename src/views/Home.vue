<template>
  <div class="showblog">
      <h3>博客总览</h3>
      <input type="text" v-model="search" placeholder="搜索">
      <h3 v-if="loading">loading......</h3>
      <div v-for="blog in filteredBlogs" class="single-blog" :key="blog.id">
          <router-link :to="/blog/+blog.id"><h2>{{blog.title}}</h2></router-link>
          <article>
              {{blog.content}}
          </article>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'showblog',
  data(){
      return {
          blogs: [],
          search: '',
          loading: false
      }
  },
  created(){
      this.loading = true;
    //   this.$http.get("https://jsonplaceholder.typicode.com/posts").then(function(data){
    //       this.blogs = data.body.slice(0,10);
    //       console.log(this.blogs);
    //   });
    //  this.$http.get("https://myfirstblog-95474.firebaseio.com/posts.json").then(function(data){
      axios.get("https://myfirstblog-95474.firebaseio.com/posts.json").then((data)=>{
          // this.blogs = data.body.slice(0,10);
          // console.log(data.json());
        //   return data.json()
        return data.data
      }).then((data)=>{
          var blogsArr = [];
          for(var key in data){
              //console.log(data[key]);
              data[key].id = key;
              blogsArr.push(data[key]);
          }
          this.blogs = blogsArr;
          this.loading = false;
      });
  },
  computed:{
      filteredBlogs: function(){
          return this.blogs.filter((blog)=>{
              return blog.title.match(this.search);
          })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
