<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList v-bind:posts="posts_with_tag" />
      <TagCloud v-bind:posts="posts" />
    </div>
    <div v-else>
      <AwaitSpinner />
    </div>
  </div>
</template>

<script>
import AwaitSpinner from '../components/AwaitSpinnier.vue'
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'
import getPosts from '../composables/getPosts'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
  components: { AwaitSpinner, PostList, TagCloud },
  setup() {
    const route = useRoute() 
    const { posts, error, loadDataFromServer } = getPosts()

    loadDataFromServer()

    const posts_with_tag = computed( () => {
      return posts.value.filter( (p) => p.tags.includes( route.params.tag ))
    })

    return { error, posts, posts_with_tag }
  }

}
</script>

<style>

</style>