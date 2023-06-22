<template>
  <div class="home">
    <h1>Home</h1>

    <h2>Refs</h2> 
    <p>{{ ninja_one.name }} -- {{ ninja_one.age }}</p>
    <button @click="updateNinjaOne">
      Update ninja one
    </button>

    <h2>Reactive</h2> 
    <p>{{ ninja_two.name }} -- {{ ninja_two.age }}</p>
    <button @click="updateNinjaTwo">
      Update ninja two
    </button>


  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'HomeView',

  setup() {
    const ninja_one = ref( { name: 'mario', age: 34 } )
    const ninja_two = reactive( { name: 'luigi', age: 35 } )

    const updateNinjaOne = () => {
      ninja_one.value.age = 40
    }

    const updateNinjaTwo = () => {
      ninja_two.age = 90
    }

    return {
      ninja_one,
      ninja_two,
      updateNinjaOne,
      updateNinjaTwo
    }
  }
}
</script>
