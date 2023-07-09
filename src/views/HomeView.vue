<template>
  <div class="home">
    <h1>Home</h1>
    <PostList v-bind:posts="posts" />
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import { computed, ref, watch, watchEffect } from 'vue'

export default {
  name: 'HomeView',
  components: { PostList },
  setup() {
    const posts = ref{ [
      { title: "Welcome to the blog", 
        body: "Lorem impsum",
        id: 1 
      },
      { title: "top 5 css tips",
        body: "Lorem impsum fuck",
        id: 2
      },
    ]}

    return{ posts }
  }
  
}
</script>
