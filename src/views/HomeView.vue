<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList v-if="showposts" v-bind:posts="posts" />
      <TagCloud v-bind:posts="posts" />
    </div>
    <div v-else>
      <AwaitSpinnier />
    </div>
    <button @click="showposts = !showposts">toggle posts</button>
    <button @click="posts.pop()">delete post</button>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import TagCloud from '@/components/TagCloud.vue'
import { ref } from 'vue'
import getPosts from '../composables/getPosts'
import AwaitSpinnier from '../components/AwaitSpinnier.vue'

export default {
  name: 'HomeView',
  components: { PostList, AwaitSpinnier, TagCloud },
  setup() {

    const { posts, error, loadDataFromServer } = getPosts() 

    loadDataFromServer()
  
    const showposts = ref( true )
    
    return{ posts, showposts, error }
  }
  
}
</script>

<style>
  .home {
    max-width: 1200px;
    margin: 0px auto;
    padding: 10px;
  }
  .layout {
    display: flex;
    justify-content: space-around;
    gap: 20px; 
  }
</style>