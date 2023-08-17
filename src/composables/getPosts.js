import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getPosts = () => {
  const posts = ref( [ ] )
  const error = ref( null )

  const loadDataFromServer = async () => {
    try {
      const getResponseFromSpecificCollection = await projectFirestore.collection( 'posts' ).get()
      console.log( getResponseFromSpecificCollection )
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