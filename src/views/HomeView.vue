<template>
  <div class="home">
    home
    <p>My name is {{ name }} and my age is {{ age }}</p>
  </div>
  <button @click="handleClick">
    Click Me!
  </button>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HomeView',

  setup() {
    console.log( this )

    const paragraph = ref( null )
    console.log( paragraph, paragraph.value )


    const name = ref( 'mario' )
    const age = ref( 41 )

    const handleClick = () => {
      
    }

    return {
      name: name,
      age: age,
      handleClick,
      paragraph
    }
  }
}
</script>
