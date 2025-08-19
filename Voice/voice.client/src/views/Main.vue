<script setup>
  import { computed, ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
</script>

<template>
  <div class="wrapper"> 
    <div class="main"> 
      <div class="tool_panel">
        <div class="buttons_panel">
          <button class="main_page-button" @click="router.push('/main')">
            <img src="../public/hooli_icon.png" />
          </button>
          <button class="explore-button next_page-button" @click="router.push('/main/explore')">Explore</button>
          <button class="bookmarks-button next_page-button" @click="router.push('/main/bookmarks')">Bookmarks</button>
          <button class="profile-button next_page-button" @click="router.push('/main/profile')">Profile</button>
          <button class="about-button next_page-button" @click="router.push('/main/aboutApp')">About</button>
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
    justify-content: center;
  }

  .wrapper {
    height: 100%;
  }

  .buttons_panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .main_page-button img {
    width: 80px; 
    height: 80px;
  }

  .main_page-button {
    border: none;
    width: 100px;
    height: 85px;
    border-radius: 50px;
    background-color: transparent;
  }

  .main_page-button:hover {
    background-color: lightgray;
  }

  .next_page-button {
    margin-top: 30px;
    width: fit-content;
    font-size: 20px;
    height: 30px;
    border: none;
    border-radius: 20px;
    background-color: transparent;
  }

  .main_content {
    border: 1px solid lightgray;
    width: 500px;
    border-radius: 5px;
  }

  .next_page-button:hover {
    background-color: lightgray;
    transition: 80ms linear;
  }

  .tool_panel {
    width: 10%;
    height: 100%;
  }
</style>
