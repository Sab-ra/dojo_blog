import { ref } from 'vue'

const getPostByID = ( id ) => {
  const post = ref( null )
  const error = ref( null )

  const loadParticularPostFromServer = async () => {
    try {
      // simulate delay for real case imitation
      await new Promise( resolve => {
        setTimeout( resolve, 2000 )
      })

      // fetch post data
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