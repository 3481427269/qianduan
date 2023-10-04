<script setup lang="ts">
import { ref } from "vue";
import router from "../routers";
import userStore from "../stores/userStore.ts";
import loginStore from "../stores/loginStore.ts";
import {storeToRefs} from "pinia";

const newUserStore = userStore();
const newLoginStore = loginStore();
const { loginSession } = storeToRefs(newLoginStore);
const { userSession } = storeToRefs(newUserStore);
const isName = localStorage.getItem("name");
const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const pushToLogin = () => {
  router.push("/Login");
};

const pushToSign = () => {
  router.push("/Sign");
};

const pushToOut = () => {
  localStorage.clear();
  sessionStorage.clear();
  loginSession.value = false;
  userSession.value = {
    name: "未登录",
    username: "未登录",
    sex: "未登录",
    major: "未登录",
  };
  router.push("/Login");
};

const pushToAdd = () => {
  router.push("/Add");
};

const pushToShow = () => {
  router.push("/Show");
};
const pushToCommunity = ()=>{
  router.push("/community");
}
</script>

<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo menu"
      mode="horizontal"
      :ellipsis="false"
       @select="handleSelect"
  >
    <el-menu-item index="0"><div class="flex items-center">
      <span class="text-large font-600 mr-3"> 表白墙系统 </span>
    </div></el-menu-item>
    <div class="flex-grow" />
    <el-sub-menu index="2">
      <template #title>cancanworld</template>
      <el-menu-item index="2-1" @click="pushToAdd">我要表白</el-menu-item>
      <el-menu-item index="2-2" @click="pushToShow">查看表白</el-menu-item>
      <el-menu-item index="2-3" @click="pushToCommunity">社区</el-menu-item> 
    </el-sub-menu>
    <div class="button_div">
      <div class="button" v-show="!loginSession" :key="1">
        <el-button type="primary" @click="pushToLogin" >登录</el-button>
        <el-button class="ml-2" @click="pushToSign" >注册</el-button>
      </div>
      <div v-show="loginSession" :key="2">
        <div style="display: flex ; flex-direction:row">
          <p>亲爱的{{isName}},欢迎回来&ensp;&ensp;</p>
          <el-button class="ml-2 button" @click="pushToOut" >退出</el-button>
        </div>
      </div>
    </div>
  </el-menu>
</template>

<style scoped>
.flex-grow {
  flex-grow: 1;
}

.menu {
  position: fixed;
  left: 2%;
  right: 2%;
  top: 2%;
}

.button_div {
  position: relative;
}

.button {
  margin-top: 12px;
}
</style>