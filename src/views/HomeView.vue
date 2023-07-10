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
import { computed, ref, watch, watchEffect } from 'vue'

export default {
  name: 'HomeView',
  components: { PostList },
  setup() {
    const posts = ref( [ ] )
    const error = ref( null )

    const loadDataFromServer = async () => {
      try {
        let data = await fetch( 'http://localhost:3000/post' )
        if( !data.ok ) {
          throw Error( 'no data available' )
        }
        posts.value = await data.json()
      }
      catch( err ) {
        error.value = err.message
        console.log( error.value )
      }
      return error
    }

    loadDataFromServer()

    const showposts = ref( true )
    
    return{ posts, showposts, error }
  }
  
}
</script>
