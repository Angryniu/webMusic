<template>
    <el-container>
        <el-header>
            <yun-header></yun-header>
        </el-header>
        <el-main>
            主要类容
        </el-main>
        <el-footer>
            尾部
        </el-footer>
    </el-container>
</template>

<script lang="ts" setup>
import YunHeader from "@/components/layouts/YunHeader.vue"
</script>

<style lang='scss' scoped>
@import "@/assets/css/var.scss";
@import "@/assets/css/global.scss";

.el-container {
  min-height: calc(100% - 60px);
}
.el-header {
  padding: 0;
}
.el-main {
  padding-left: 0;
  padding-right: 0;
}
</style>