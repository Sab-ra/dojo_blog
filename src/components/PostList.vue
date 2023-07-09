<template>
  <div class="post-list">
    <div v-for="post in posts" v-bind:key="post.id">
      <h3>{{ post.title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'posts' ],
  setup( props ) {
    console.log( props.posts )
  }
}
</script>

<style>

</style>