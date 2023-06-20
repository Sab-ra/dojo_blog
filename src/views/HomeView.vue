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

export default {
  name: 'HomeView',

  setup() {
    console.log( 'setup' )

    let name = 'mario'
    let age = 40

    const handleClick = () => {
      console.log( 'You clicked me' )
    }

    return {
      name: name,
      age: age,
      handleClick
    }
  }
}
</script>
