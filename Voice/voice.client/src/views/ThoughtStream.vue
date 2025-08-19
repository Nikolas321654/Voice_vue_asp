<script setup>
  import { ref } from 'vue';

  let inputText = ref('');
  let messages = ref([]);

  function readMessage() {
    if (inputText.value.length <= 0) {
      alert("Its empty. Enter your`s thinks");
      return;
    } 

    postMessage(inputText.value);
    inputText.value = '';
  }

  function postMessage(messageFromUser) {
  fetch('https://localhost:7021/api/Message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ message: messageFromUser })
  })
    .then(response => response.json())
    .then(data => showMessages(data))
    .catch(error => console.log(error));
  }

  function showMessages(messageArr) {
    messages.value = messageArr;
  }
</script>

<template>    
  <div class="wrapper">
    <div>
      <p class="title">What`s happening?</p>
      <div class="input-block">
        <input type="text" v-model="inputText" />
        <button class="send-button" @click="readMessage">Post</button>
      </div>
    </div>
    <div class="content">
      <a class="message" v-for="message in messages">
        {{ message }}
      </a>
    </div>
  </div>
</template>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
  }

  button {
    border: 1px solid lightgray;
  }

  title {
    display: flex;
    justify-content: center;
  }

  input {
    height: 100px;
  }

  .input-block {
    display: block;
    height: 100px;
    display: flex;
    flex-direction: column;
  }

  .message {
    font-size: 14px;
    padding: 10px;
  }

  button:hover {
    color: aliceblue;
    background-color: dimgrey;
  }
</style>
