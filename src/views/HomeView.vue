<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList v-if="showposts" v-bind:posts="posts" />
    </div>
    <div v-else>Loading...</div>
    <button @click="showposts = !showposts">toggle posts</button>
    <button @click="posts.pop()">delete post</button>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import { ref } from 'vue'
import getPosts from '../composables/getPosts'

export default {
  name: 'HomeView',
  components: { PostList },
  setup() {

    const { posts, error, loadDataFromServer } = getPosts() 

    loadDataFromServer()
  
    const showposts = ref( true )
    
    return{ posts, showposts, error }
  }
  
}
</script>
