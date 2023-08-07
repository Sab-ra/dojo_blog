<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <div v-for="tag in tags" v-bind:key="tag">
      <router-link v-bind:to="{ name: 'tag', params: { tag: tag }}">
        #{{ tag }}
      </router-link>
    </div>
  </div>
</template>

<script>
import grabTags from '../composables/grabTags'

export default {
  props: [ "posts" ],
  
  setup( props ) {
    const { tags } = grabTags( props.posts )

    return { tags }
  }
}
</script>

<style>
  .tag-cloud {
    padding: 10px;
  }
  .tag-cloud h3 {
    border-bottom: 1px solid #eee;
    padding: 16px 8px;
    color: #444;
  }
  .tag-cloud a {
    color: #ccc;
    text-decoration: none;
  }
  .tag-cloud a.router-link-active {
    color: #ff8800;
    font-weight: bold;
  }
</style>