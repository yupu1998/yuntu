<template>
    <div class="damageTest">
        <div class="damageTestMenu">
        <el-menu :default-active="viewIndex" class="damageTest-menu" @select="handleSelect">
            <el-menu-item index="0">单人打靶</el-menu-item>
            <el-menu-item index="1">多人打靶</el-menu-item>
            <el-menu-item index="2">模拟战斗</el-menu-item>
        </el-menu>
        </div>
        <div class="damageTestView">
            <singleRole v-if="viewIndex==0"></singleRole>
        </div>
    </div>
    
  </template>
  
  <script lang="ts" setup>
  import {ref} from "vue";
  import singleRole from "../damageTest/SingleRole.vue"

  const viewIndex = ref(0)
  const handleSelect = (key:number) =>{
    viewIndex.value = key}
  </script>
  
  <style lang="scss">
  .damageTest{
    width: 100%;
    height: 100%;
    .damageTestMenu{
        width: 15%;
        height: 100%;
        float: left;
    }
    .damageTestView{
        width: 85%;
        height: 100%;
        display: grid;  
    }
  }
  
  </style>
  