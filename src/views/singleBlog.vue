<template>
    <div id="singleblog">
        <h1>{{blog.title}}</h1>
        <p>{{blog.content}}</p>
        <p>作者：{{blog.author}}</p>
        <h5>类别:<span v-for="cate in blog.categories" :key="cate">    {{cate}}</span></h5>
    </div>
</template>
<script>
import axios from 'axios'
    export default{
        name: 'singleblog',
        data(){
            return {
                id: this.$route.params.id,
                blog:{}
            }
        },
        created(){
        //    this.$http.get('https://myfirstblog-95474.firebaseio.com/posts/'+this.id+'.json')
            axios.get('https://myfirstblog-95474.firebaseio.com/posts/'+this.id+'.json')
            .then((data)=>{
                // this.blog = data.body;
                this.blog = data.data
            })
        }
    }
</script>
<style>
    
</style>