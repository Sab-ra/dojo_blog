<template>
  <div class="home">
    <h1>Home</h1>
    
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue'

export default {
  name: 'HomeView',

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
