<template>
  <div class="create">
    <form @submit.prevent="submitPost">
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

    const addTag = async () => {
      if( !tags.value.includes( tag.value )) {
        tag.value = tag.value.replace( /\s/, '' ) // replace any spaces with empty string
        tags.value.push( tag.value )
      }
      tag.value = '' // clear the tag field for the next tag input
    }

    const submitPost = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value
      }

      await fetch( 'http://localhost:3000/posts', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify( post )
      })
    }

    return { title, body, tag, tags, addTag, submitPost }
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
  label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ffaa00;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ( -1.5deg )
  }
  button {
    display: block;
    margin-top: 30px;
    background: #ff8800;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px;
    border-radius: 6px;
  }
  .pill {
    display: inline-block;
    margin: 10px 10px 0px 0px;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
  }
</style>