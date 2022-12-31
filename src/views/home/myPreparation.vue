<template>
    <div class="prepare">
        <div class="prepareMenu">
        <el-menu :default-active="viewIndex" class="prepare-menu" @select="handleSelect">
            <el-menu-item index="prepare0">角色属性</el-menu-item>
            <el-menu-item index="prepare1">队伍编成</el-menu-item>
            <el-menu-item index="prepare3">算法仓库</el-menu-item>
        </el-menu>
        </div>
        <div class="prepareView">
            <roleList v-if="viewIndex=='prepare0'"></roleList>
            <groupUp v-if="viewIndex=='prepare1'"></groupUp>
            <algorithmStore v-if="viewIndex=='prepare3'"></algorithmStore>
        </div>
    </div>
    
  </template>
  
  <script lang="ts" setup>
  import {ref} from "vue";
  import roleList from "../preparation/roleList.vue"
  import groupUp from "../preparation/groupUp.vue"
  import algorithmStore from "../preparation/algorithmStore.vue"

  const viewIndex = ref("prepare0")
  const handleSelect = (key:string) =>{
    viewIndex.value = key}
  </script>
  
  <style lang="scss">
  .prepare{
    width: 100%;
    height: 100%;
    .prepareMenu{
        width: 110px;
        height: 100%;
        float: left;
    }
    .prepareView{
        height: 100%;
        display: grid;  
    }
  }
  
  </style>
  