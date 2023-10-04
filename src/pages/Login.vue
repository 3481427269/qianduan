<template>
  <div class="login-container">
    <login :msg="info" @clear="sonsetinfo"></login>
  </div>
</template>

<script setup lang="ts">
import login from "../components/login.vue";
import { ref } from "vue";

const info = ref("表白墙登录");


const soninfo = ref("");
const sonsetinfo = (value: string) => {
  soninfo.value = value;
  alert(soninfo.value);
};
</script>

<style scoped>
.login-container {
  text-align: center;
}
</style>