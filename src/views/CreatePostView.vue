<template>
  <div class="create">
    <form>
      <label>Title:</label>
      <input v-model="title" type="text" required>
      <label>Content:</label>
      <textarea v-model="body" required></textarea>
      <label>Tags (hit Enter to add a tag)</label>
      <input 
        v-model="tag" 
        type="text"
        @keydown.enter.prevent="addTag"
      >
      <div v-for="tag in tags" v-bind:key="tag" class="pill">
        #{{ tag }}
      </div>
      <button>Add Post</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const title = ref( '' )
    const body = ref( '' )
    const tag = ref( '' )
    const tags = ref( [] )

    const addTag = () => {
      if( !tags.value.includes( tag.value )) {
        tag.value = tag.value.replace( /\s/, '' ) // replace any spaces with empty string
        tags.value.push( tag.value )
      }
      tag.value = '' // clear the tag field for the next tag input
    }

    return { title, body, tag, tags, addTag }
  }
}
</script>

<style>
  form {
    max-width: 480px;
    margin: 0px auto;
    text-align: left;
  }
  input, textarea {
    display: block;
    margin: 10px 0px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
  }
  textarea {
    height: 160px;
  }
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
  }
</style>