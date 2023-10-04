<template>
  <el-row>
    <el-col :span="16">
      <sign />
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import sign from "../components/sign.vue";
</script>

<style scoped>

@media (max-width: 1010px) {
  .img {
    display: none;
  }
}
</style>