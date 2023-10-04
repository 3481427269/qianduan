<script setup lang="ts">
import addContacts from "../components/add.vue";
</script>

<template>
    <el-container>
      <el-col :span="16">
        <addContacts />
      </el-col>
    </el-container>
</template>

<style scoped>
.img {
  position: relative;
  left: 80px;
  top: -50px;
}
@media (max-width: 1010px) {
  .img {
    display: none;
  }
}
</style>