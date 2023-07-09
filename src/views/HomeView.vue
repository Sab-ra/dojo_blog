<template>
  <div class="home">
    <h1>Home</h1>
    <PostList v-if="showposts" v-bind:posts="posts" />
    <button @click="showposts = !showposts">toggle posts</button>
    <button @click="posts.pop()">delete post</button>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import { computed, ref, watch, watchEffect } from 'vue'

export default {
  name: 'HomeView',
  components: { PostList },
  setup() {
    const posts = ref( [
      { title: "Welcome to the blog", 
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        id: 1 
      },
      { title: "top 5 css tips",
        body: "Lorem impsum fuck",
        id: 2
      }
    ])

    const showposts = ref( true )
    
    return{ posts, showposts }
  }
  
}
</script>
