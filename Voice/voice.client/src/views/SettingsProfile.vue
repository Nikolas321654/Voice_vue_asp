<script></script>

<template>
  <div class="wrapper">
    <div class="user_content">
      <p>User</p>
      <div class="userInfo">
        <p>Name: </p>
        <p>Last name:  </p>
      </div>
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

  .userInfo {
    height: 100px;
    display: flex;
    flex-direction: column;
    padding: 15px;
  }

  .message {
    border: 1px solid lightgray;
    height: 100px;
    min-width: 90%;
  }

  button:hover {
    color: aliceblue;
    background-color: dimgrey;
  }
</style>
