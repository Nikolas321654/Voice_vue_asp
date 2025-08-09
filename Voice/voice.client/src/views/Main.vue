<script setup>
  import { computed, ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  function OpenSettings() {
    router.push('/settings');
  }

</script>

<template>
  <div class="wrapper">
    <div class="main">
      <div class="tool_panel">
        <div class="logo">
          <img src="../public/hooli_icon.png" alt="" />
        </div>
        <div class="buttons_panel">
          <button class="explore-button">Explore</button>
          <button class="bookmarks-button">Bookmarks</button>
          <button class="profile-button" @click="OpenSettings">Profile</button>
          <button class="about-button">About</button>
        </div>
      </div>
      <div class="main_content">
        <router-view></router-view>
      </div>
   </div>
  </div>
</template>

<style scoped>
  .main {
    display: flex;
    flex-direction: row;
    height: 100%;
    padding-left: 800px;
  }

  .buttons_panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  button {
    margin-top: 30px;
    width: fit-content;
    font-size: 20px;
    height: 30px;
    border: none;
    border-radius: 20px;
    background-color: transparent;
  }

  .content {
      
  }

  button:hover {
    background-color: lightgray;
    transition: 80ms linear;
  }

  .tool_panel {
    width: 10%;
    height: 100%;
  }
</style>
