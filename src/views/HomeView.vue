<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <div v-for="name in names" v-bind:key="name">{{ name }}</div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'

export default {
  name: 'HomeView',

  setup() {
    const search = ref( '' )
    const names = ref( [ 'mario', 'youshi', 'luigi', 'toad', 'bowzer', 'kamila', 'koopa', 'peach' ] )

    return {
      names,
      search
    }

  }
  
}
</script>
