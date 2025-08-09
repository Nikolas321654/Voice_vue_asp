<script setup>
  import { computed, ref } from 'vue';
  import { useRouter } from 'vue-router';

  const showPassword = ref(false);
  const router = useRouter();
  const counter = ref(0);

  function nextPage() {
    router.push('/main');
  };

</script>

<template>
  <div class="wrapper">
    <div class="messageBlock">
      <h1 class="header">Enter:</h1>
      <input class="textBlock" placeholder="name" type="text" nsame="userName" />
      <input class="textBlock" placeholder="gmail" type="text" name="gmail" />
      <input class="textBlock" placeholder="password" :type="showPassword ? 'text' : 'password'" name="password" />
      <button class="showPassword-button" @click="showPassword = !showPassword">show</button>
      <button class="returnButton" @click="counterMinus">return</button>
      <button @click="nextPage">next</button>
    </div>
  </div>
</template>

<style scoped>

  .wrapper {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .showPassword-button {
    margin-top: 10px;
  }

  .returnButton {
    margin-top: 15px
  }

  .textBlock {
    margin-top: 10px;
    border-radius: 3px;
    height: 20px;
    width: 250px;
  }

  .messageBlock {
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    width: 400px;
    align-items: center;
    background-color: deepskyblue;
    border-radius: 15px;
  }

  .counterTextBlock {
    color: aliceblue;
    width: 75px;
    background-color: deepskyblue;
    border-radius: 20px;
    padding: 7px;
  }

  button {
    width: 100px;
    margin-bottom: 20px;
    border-radius: 15px;
  }

  .header {
    color: aliceblue;
    font-weight: 1000;
  }
</style>
