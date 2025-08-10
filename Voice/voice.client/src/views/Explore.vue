<script></script>

<template>
  <div class="wrapper">
    <div>
      <p>What are you looking for ?</p>
      <div class="message-block">
        <input class="message" type="text" />
        <button>Find</button>
      </div>
    </div>
    <div class="content"></div>
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

  p {
    display: flex;
    justify-content: center;
  }

  .message-block {
    display: block;
    height: 100px;
    display: flex;
    flex-direction: column;
  }

  .message {
    display: block;
    border: 1px solid lightgray;
    min-width: 90%;
  }

  button:hover {
    color: aliceblue;
    background-color: dimgrey;
  }
</style>
