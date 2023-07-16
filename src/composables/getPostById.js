import { ref } from 'vue'

const getPostByID = ( id ) => {
  const post = ref( null )
  const error = ref( null )

  const loadParticularPostFromServer = async () => {
    try {
      let data = await fetch( 'http://localhost:3000/posts/' + id )
      if( !data.ok ) {
        throw Error( 'that post does not exist' )
      }
      post.value = await data.json()
    }
    catch( err ) {
      error.value = err.message
      console.log( error.value )
    }
  }

  return { post, error, loadParticularPostFromServer }
}

export default getPostByID