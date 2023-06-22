<template>
  <div class="home">
    home
    <p ref="paragraph">My name is {{ name }} and my age is {{ age }}</p>
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


    let name = 'mario'
    let age = 40

    const handleClick = () => {
      name = 'luigi'
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
