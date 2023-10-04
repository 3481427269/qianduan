<script setup lang="ts">
import { reactive , h } from "vue";
import { ElNotification } from "element-plus";
import userService from "../apis/userService.ts";
import router from "../routers";

const form = reactive({
  name: "",
  username: "",
  sex: "",
  major: "",
  password: "",
  confirm_password: "",
});

const onSubmit = async () => {
  if (form.username !== ""  && form.password !== "" && form.confirm_password!== "") {
    if (form.password !== form.confirm_password) {
      ElNotification({
        title: "失败",
        message: h("i", { style: "color: teal" }, "两次输入的密码不一致,请重新输入！"),
      });
    }

    const res = await userService.sign(form);

    if (res.data.code === 200 && res.data.msg === "OK") {
      console.log(form);
      ElNotification({
        title: "成功",
        message: h("i", { style: "color: teal" }, "注册成功！"),
      });
      router.push("/login");
    }
    else if (res.data.code === 200504 && res.data.msg === "账号已注册") {
      ElNotification({
        title: "失败",
        message: h("i", { style: "color: teal" }, "账号已注册！"),
      });
    }
    else {
      ElNotification({
        title: "失败",
        message: h("i", { style: "color: teal" }, "注册失败，请检查网络！"),
      });
    }
  }
  else {
    ElNotification({
      title: "失败",
      message: h("i", { style: "color: teal" }, "注册失败，请至少输入完整的姓名、账号和密码！"),
    });
  }
};

const clear = () => {
      form.username= "";
      form.sex= "";
      form.major= "";
      form.password= "";
      form.confirm_password= "";
};
</script>

<template>
  <div class="sign_box">
    <div class="div">
      <div style="text-align: center;">
        <h3>表白墙用户注册</h3>
      </div>
        <el-form-item label="*姓名">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="form.sex" placeholder="请选择您的性别">
          <el-option label="男" value= "男" />
          <el-option label="女" value= "女" />
        </el-select>
      </el-form-item>
      <el-form-item label="专业">
        <el-input v-model="form.major"  />
      </el-form-item>
      <el-form-item label="*账号">
        <el-input v-model="form.username"  />
      </el-form-item>
      <el-form-item label="*密码">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item label="*确认密码">
        <el-input v-model="form.confirm_password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="button">注册</el-button>
        <el-button class="button" @click="clear">清空</el-button>
      </el-form-item>
    </div>
  </div>
</template>

<style scoped>

.button {
  margin: 40px;
  width: 100px;

}
.sign_box {
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  margin-left: 450px;
}
</style>