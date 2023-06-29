<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>Search term '{{ search }}'</p>
    <div v-for="name in matching_names" v-bind:key="name">{{ name }}</div>
  </div>
</template>

<script>
import { computed, ref, watch } from 'vue'

export default {
  name: 'HomeView',

  setup() {
    const search = ref( '' )
    const names = ref( [ 'mario', 'youshi', 'luigi', 'toad', 'bowzer', 'kamila', 'koopa', 'peach' ] )

    watch( search, () => {
      console.log( "I'm watching your search" )
    })

    const matching_names = computed( () => {
      return names.value.filter( ( name ) => name.includes( search.value ) )
    })

    return {
      names,
      search,
      matching_names
    }

  }
  
}
</script>
