<template>

  <div v-if="error">{{ error }}</div> 

  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="deletePost" class="delete">Delete post</button>
  </div>

  <div v-else>
      <AwaitSpinner />
  </div>

</template>

<script>
import getPostByID from '../composables/getPostById'
import AwaitSpinner from '../components/AwaitSpinnier.vue'
import { useRoute, useRouter } from 'vue-router'
import { projectFirestore } from '@/firebase/config'

export default {
  props: [ 'id' ],
  components: { AwaitSpinner },

  setup( props ) {
    const rout = useRoute()
    const router = useRouter()
    console.log( rout )

    const { post, error, loadParticularPostFromServer } = getPostByID( rout.params.id )

    loadParticularPostFromServer()

    const deletePost = async () => {
      await projectFirestore.collection( 'posts' )
        .doc( props.id )
        .delete()

      router.push( '/' )
    }

    return { post, error, deletePost }
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
  button.delete {
    margin: 10px auto;
  }
</style>