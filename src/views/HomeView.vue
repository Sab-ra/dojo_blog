<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>Search term '{{ search }}'</p>
    <div v-for="name in matching_names" v-bind:key="name">{{ name }}</div>
    <button @click="handleClick">stop watching</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue'

export default {
  name: 'HomeView',

  setup() {
    const search = ref( '' )
    const names = ref( [ 'mario', 'youshi', 'luigi', 'toad', 'bowzer', 'kamila', 'koopa', 'peach' ] )

    const stopWatch = watch( search, () => {
      console.log( "I'm watching your search" )
    })

    const stopEffect = watchEffect( () => {
      console.log( 'Run watchEffect function', search.value )
    })

    const handleClick = () => {
      stopWatch()
      stopEffect()
    }

    const matching_names = computed( () => {
      return names.value.filter( ( name ) => name.includes( search.value ) )
    })

    return {
      names,
      search,
      matching_names,
      handleClick
    }

  }
  
}
</script>
