import { projectFirestore } from '@/firebase/config'
import { ref } from 'vue'

const getPostByID = ( id ) => {
  const post = ref( null )
  const error = ref( null )

  const loadParticularPostFromServer = async () => {
    try {
      const getResponseFromPostById = await projectFirestore.collection( 'posts' ).doc( id ).get()
      
      if( !getResponseFromPostById.exists ) {
        throw Error( 'That post does not exist' )
      }
      
      post.value = { ...getResponseFromPostById.data(), id: getResponseFromPostById.id }
      console.log( post.value )
    }
    catch( err ) {
      error.value = err.message
      console.log( error.value )
    }
  }

  return { post, error, loadParticularPostFromServer }
}

export default getPostByID