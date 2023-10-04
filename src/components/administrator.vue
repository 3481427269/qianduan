<template>
    <div class="a_box">
      <h2>管理表白</h2>
      <el-input v-model="searchText" placeholder="请输入搜索内容"></el-input>
      <el-table :data="filteredTableData" height="250" style="width: 100%">
        <el-table-column prop="name" label="姓名" width="180" />
        <el-table-column prop="content" label="表白内容" />
        <el-table-column label="操作" width="200">
          <template #default="{ row }">
          <el-button type="text" @click="deleteRow(row)">删除</el-button>
        </template>
        </el-table-column>
      </el-table>
    </div>
  </template>
  <script lang="ts" setup>
import { ElMessage, ElMessageBox, ElNotification } from "element-plus";
import { ref, computed, nextTick ,} from "vue";
  const tableData = ref([
    {
      id: 1,
      name: "Tom",
      content: "喜欢ximo",
    },
    {
      id: 2,
      name: "Tom",
      content: "喜欢菜部",
    },
    {
        id: 3,
      name: "Tom",
      content: "喜欢派大星",
    },
    {
        id: 4,
      name: "Tom",
      content: "喜欢鲨鱼",
    },
    {
        id: 5,
      name: "Tom",
      content: "喜欢五花肉",
    },
    {
        id: 6,
      name: "Tom",
      content: "喜欢Tincy",
    },
    {
        id: 7,
      name: "Tom",
      content: "喜欢猛男",
    },
  ]);
  const searchText = ref("");
//computed函数接收一个回调函数作为参数，该回调函数用于定义计算属性的计算逻辑。
//在回调函数中，我们可以直接使用 ref、reactive、computed 等响应式数据并进行操作，而不需要手动追踪依赖或者手动触发更新。
const filteredTableData = computed(() => {
  if (!searchText.value) {
    return tableData.value;
  }
  return tableData.value.filter(item => {
    return (
      item.name.includes(searchText.value) ||
      item.content.includes(searchText.value)
    );
  });
});

const deleteRow = (row: { id: number; }) => {
  const index = tableData.value.findIndex((item) => item.id === row.id);
  if (index !== -1) {
    tableData.value.splice(index, 1);
    nextTick(() => {
      ElMessage.success("删除成功");
    });
  }
};
  </script>
  <style>
.a_box{
    margin-left: 330px;
    width: 800px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
}

</style>