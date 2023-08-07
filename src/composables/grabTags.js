// Take in an array of posts
// Create a tag-set with no duplicates (sets are arrays with duplicates not allowed)
// Add the tags of each post to the tag-set
// Return a single array of tags based on the tag-set

import { ref } from 'vue'

const grabTags = ( posts ) => {

  const tags = ref( [] )
  const tagSet = new Set()

  posts.forEach( item => {
    item.tags.forEach( tag => tagSet.add( tag ))
  })

  tags.value = [ ...tagSet ]

  return { tags }
}

export default grabTags