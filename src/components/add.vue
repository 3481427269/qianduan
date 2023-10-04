<script setup lang="ts">
import { reactive , h } from "vue";
import contextService from "../apis/contextService.ts";
import userStore from "../stores/userStore.ts";
import { ElNotification } from "element-plus";

const newUserStore = userStore();
// do not use same name with ref
const form = reactive({
  name: newUserStore.userSession.name,
  context:"",
  flag: true,//ture为实名表白,false为匿名表白
});

const onSubmit = async () => {
  if (form.context !== "") {
    const res = await contextService.add(form);

    if (res.data.code === 200 && res.data.msg === "OK") {
      console.log(form);
      ElNotification({
        title: "成功",
        message: h("i", { style: "color: teal" }, "实名表白成功！"),
      });
      clear();
    }else  if (res.data.code === 201 && res.data.msg === "OK") {
      console.log(form);
      ElNotification({
        title: "成功",
        message: h("i", { style: "color: teal" }, "匿名表白成功！"),
      });
      clear();
    }
    else {
      ElNotification({
        title: "失败",
        message: h("i", { style: "color: teal" }, "表白失败，请检查网络！"),
      });
    }
  }
  else {
    ElNotification({
      title: "失败",
      message: h("i", { style: "color: teal" }, "表白失败,请输入表白内容！"),
    });
  }

};
const anonymous = () => {
    form.flag = false;
    ElNotification({
      title: "主打一个暗恋",
      message: h("i", { style: "color: teal" }, "匿名成功"),
    });
  };

const clear = () => {
  form.context="",
  form.flag=true,
  form.name="";
  ElNotification({
      title: "冷静成功",
      message: h("i", { style: "color: teal" }, "别急,让我先急"),
    });
};
</script>

<template>
  <div class="love_box">
    <div style="text-align: center ; margin-left: 90px">
      <h3>开始一场激动人心的表白吧</h3>
    </div>
    <el-form :model="form" label-width="90px">
      <el-form-item label="你想对TA说" >
        <el-input v-model="form.context"  type="textarea"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="button">表白!</el-button>
        <el-button class="button" @click="clear">冷静一下</el-button>
        <el-button class="button" @click="anonymous">我要匿名</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.love_box {
  width: 400px;
  height: 200px;
  margin-left: 420px;
}

.button {
  margin: 10px;
  width: 72px;
}

</style>../apis/contextService.ts