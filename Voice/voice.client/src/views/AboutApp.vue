<script></script>

<template>
  <div class="wrapper">
    <div>
      <p class="title">About app: </p>
      <div class="find-block">
        <a>This application is a social network or posting platform. It allows users to share their opinions, observations, and news in the form of text messages.</a>
        <p class="title" >Author: </p>
        <a href="mailto:kolia.biliavskiy@gmail.com">
          kolia.biliavskiy@gmail.com
        </a>
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

  a {
    font-size: 20px;
  }

  button {
    border: 1px solid lightgray;
  }

  .title {
    color: darkslategray;
    font-size: 25px;
    font-weight: 600; 
  }
  .find-block {
    height: 100px;
    display: flex;
    flex-direction: column;
    padding: 15px;
  }

  button:hover {
    color: aliceblue;
    background-color: dimgrey;
  }
</style>
