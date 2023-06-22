<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Refs</h2>
        <p>{{ ninja_one.name }} -- {{ ninja_one.age }}</p>
        <button @click="updateNinjaOne">
          Update ninja one
        </button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'HomeView',

  setup() {
    const ninja_one = ref( { name: 'mario', age: 34 } )

    const updateNinjaOne = () => {
      ninja_one.value.age = 40
    }

    return {
      ninja_one,
      updateNinjaOne
    }
  }
}
</script>
