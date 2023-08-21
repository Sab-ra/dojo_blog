import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getPosts = () => {
  const posts = ref( [ ] )
  const error = ref( null )

  const loadDataFromServer = async () => {
    try {
      const getResponseFromSpecificCollection = await projectFirestore.collection( 'posts' ).get()
      
      posts.value = getResponseFromSpecificCollection.docs.map( doc => {
        // console.log( doc.data() )
        return { ...doc.data(), id: doc.id } // brings post objects and add id's that are ON the posts in the DB
      })
    }
    catch( err ) {
      error.value = err.message
      console.log( error.value )
    }
    return error
  }

  return { posts, error, loadDataFromServer }
}

export default getPosts