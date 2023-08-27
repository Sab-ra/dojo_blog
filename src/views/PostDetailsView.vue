<template>

  <div v-if="error">{{ error }}</div> 

  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button>Delete post</button>
  </div>

  <div v-else>
      <AwaitSpinner />
  </div>

</template>

<script>
import getPostByID from '../composables/getPostById'
import AwaitSpinner from '../components/AwaitSpinnier.vue'
import { useRoute } from 'vue-router'

export default {
  props: [ 'id' ],
  components: { AwaitSpinner },

  setup( props ) {
    const rout = useRoute()
    console.log( rout )

    const { post, error, loadParticularPostFromServer } = getPostByID( rout.params.id )

    loadParticularPostFromServer()
    return { post, error }
  }
}
</script>

<style>
  .post {
    max-width: 1200px;
    margin: 0px auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
</style>