<template>
  <div class="home">
    home
    <p>My name is {{ name }} and my age is {{ age }}</p>
  </div>
  <button @click="handleClick">
    Click Me!
  </button>
  <input type="text" v-model="name">
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
      name.value = 'luigi'
      age.value = 133
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
