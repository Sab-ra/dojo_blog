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

    let name = 'mario'
    let age = 40

    const handleClick = () => {
      console.log( paragraph, paragraph.value )
      paragraph.value.classList.add( 'test_dinamic_class' )
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
