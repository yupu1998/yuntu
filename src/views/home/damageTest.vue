<template>
    <div class="damageTest">
        <div class="damageTestMenu">
        <el-menu :default-active="viewIndex" class="damageTest-menu" @select="handleSelect">
            <el-menu-item index="0">打靶</el-menu-item>
            <el-menu-item index="1">模拟战斗</el-menu-item>
        </el-menu>
        </div>
        <div class="damageTestView">
            <simpleDamageTarget v-if="viewIndex==0"></simpleDamageTarget>
        </div>
    </div>
    
  </template>
  
  <script lang="ts" setup>
  import {ref} from "vue";
  import simpleDamageTarget from "../damageTest/simpleDamageTarget.vue"


  const viewIndex = ref(0)

  const handleSelect = (key:number) =>{
    viewIndex.value = key}



  </script>
  
  <style lang="scss">
  .damageTest{
    width: 100%;
    height: 100%;
    .damageTestMenu{
        width: 110px;
        height: 100%;
        float: left;
    }
    .damageTestView{
        height: 100%;
        display: grid;  
    }
  }
  
  </style>
  