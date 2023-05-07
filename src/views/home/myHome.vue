<template>
  <div class="context">
    <div class="wrapper">
      <el-menu :default-active="isdisplay" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="home0">战前准备</el-menu-item>
        <el-menu-item index="home1">伤害测试</el-menu-item>
        <el-menu-item index="home2">抗压测试</el-menu-item>
        <el-menu-item index="home3">普通模式</el-menu-item>
        <el-menu-item index="home4">大地图模式</el-menu-item>
        <el-menu-item index="home5">关于</el-menu-item>
        <el-menu-item index="home6">测试页面</el-menu-item>
      </el-menu>
    </div>
    <div class="mainView">
      <preparationView v-if="isdisplay == 'home0'"></preparationView>
      <damageTestView v-if="isdisplay == 'home1'"></damageTestView>
      <!-- <TestView v-if="isdisplay == 'home6'"></TestView> -->
      <damageDist v-if="isdisplay == 'home6'"></damageDist>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
} from "vue";
// import TestView from './TestView.vue'
import preparationView from './myPreparation.vue'
import damageTestView from './damageTest.vue'
import damageDist from "@/views/charts/damageDist.vue"

const isdisplay = ref<string>('home0')
const handleSelect = (key: string) => {
  isdisplay.value = key
}


</script>

<style lang="scss">
.context {
  max-width: 1400px;
  max-height: 700px;
  min-width: 1000px;
  min-height: 500px;

  .wrapper {
    width: 100%;
    height: 60px;
  }

  .mainView {
    width: 100%;
    display: grid;
  }
}
</style>
