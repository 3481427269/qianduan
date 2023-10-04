<template>
  <el-scrollbar height="400px">
    <p v-for="(item, index) in items" :key="index" class="scrollbar-demo-item">
      <div v-if="!item.isEditing">{{ item.content }}</div>
      <el-input v-else v-model="item.content"></el-input>
      <el-button class="buttom_" type="primary" @click="_delete(index)">删除</el-button>
      <el-button @click="toggleEditing(item,index)">修改</el-button>
     </p>
  </el-scrollbar>
</template>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 800px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
  margin-left: 300px;
}

.scrollbar-demo-item div{
  display:flex;
  justify-content:center;
  align-items:center;
  height:100%;
  width:100%;
}

</style>



<script lang="ts" setup>
import { ElMessage, ElMessageBox, ElNotification } from "element-plus";
import {ref , onMounted, h} from "vue";
import contextService from "../apis/contextService.ts";
import userStore from "../stores/userStore.ts";
import userService from "../apis/userService";
const newUserStore = userStore();
const responseData = ref("");
onMounted(async () => {
        // 发送 GET 请求
        const response = await contextService.show(userStore.name);
        responseData.value = response.data;
        items.value.push({ content: responseData.value, isEditing: false });
    });

const items = ref([
  { content: "我喜欢ximo", isEditing: false },
  { content: "我喜欢蔡部", isEditing: false },
  { content: "我喜欢木木酱", isEditing: false },
]);

const _delete = async (index: number) => {
  items.value.splice(index, 1);
  ElNotification({
      title: "删除成功",
      message: h("i", { style: "color: teal" }, "小子,封心锁爱"),
    });
    await contextService.delete_(newUserStore.userSession.name, index);
};


const toggleEditing = async (item: { isEditing: boolean; content: string},index: number) => {
  item.isEditing = !item.isEditing;
  ElNotification({
    title: "修改",
    message: h("i", { style: "color: teal" }, "小子,汗流浃背了吧"),
  });
  await contextService.update_(newUserStore.userSession.name,index,item.content);

};

</script>
<style scoped>
</style>