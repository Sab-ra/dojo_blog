<template>
  <h1>Realtime Posts List</h1>
  <div v-for="post in posts" :key="post.id">
    {{ post.title }}
  </div>
</template>

<script>
import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'

export default {
  setup() {
    const posts = ref( [] )

    projectFirestore.collection( 'posts' )
      .orderBy( 'creationTimestamp', 'desc' )
      .onSnapshot( ( snap ) => {    //setup a realtime listener on a firestore collection
        console.log( snap )
        let docs = snap.docs.map( doc => {
          return{ ...doc.data(), id: doc.id }
        })

        console.log( 'documents: ', docs )

        posts.value = docs
      })
    
    return { posts }
  }
}
</script>

<style>

</style>