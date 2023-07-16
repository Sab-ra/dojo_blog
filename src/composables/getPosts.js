import { ref } from 'vue'

const getPosts = () => {
  const posts = ref( [ ] )
  const error = ref( null )

  const loadDataFromServer = async () => {
    try {
      // simulate delay for real case imitation
      await new Promise( resolve => {
        setTimeout( resolve, 2000 )
      })

      // fetch post data
      let data = await fetch( 'http://localhost:3000/posts' )
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

  return { posts, error, loadDataFromServer }
}

export default getPosts