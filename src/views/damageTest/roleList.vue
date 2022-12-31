<template>
    <div>筛选策略</div>
    <div class="damageRoleView">
      <div class="aim">
          <img :src="roleImageEnum[aimRole]">
          <div class="desc">{{aimRole}}|{{occupationEnum[roleOccupationEnum[aimRole]].name}}</div>
      </div>
      <div  class="roleList">
        <div class="gallery" 
            v-for="(e) in roleData" 
            :key="e.code"
            @click="selectRole(e.code)">
            <img :src="roleImageEnum[e.code]">
            <div class="desc">{{e.name}}|{{occupationEnum[roleOccupationEnum[e.code]].name}}</div>
        </div>
      </div>
    </div>
    
</template>
  
  <script setup>
  import { ref, watch, watchEffect,defineProps,defineEmits } from "vue";
  import {LocalFileAdreess} from "../../enum/LocalFileAdreess"
  import occupationEnum from "../../enum/occupation"
  import roleImageEnum from "../../enum/roleImage"
  import roleOccupationEnum from "../../enum/roleOccupation"

  const props = defineProps({
    modelValue: {
    type: Object
  }
});
  const roleData = ref({})//本地存储的角色属性数据
  const aimRole = ref("ZANGYIN")//页面本体存储的角色 TODO
  const emits = defineEmits(['update:modelValue'])
  let localInfoData = localStorage.getItem(LocalFileAdreess.ROLE_INFO)
  let localRole = localStorage.getItem(LocalFileAdreess.DAMAGE_TEST_SINGLE_ROLE)
  if (localInfoData === null ){
    localStorage.setItem(LocalFileAdreess.ROLE_INFO,JSON.stringify({}))
  }
  if (localRole === null){
    localStorage.setItem(LocalFileAdreess.DAMAGE_TEST_SINGLE_ROLE,"ZANGYIN")
    localRole = "ZANGYIN"
  }
  aimRole.value = localRole

  roleData.value = JSON.parse(localInfoData)


  const selectRole = (k) =>{
    aimRole.value = k
  }

  const clickSave = () =>{
    console.log("确定测试角色",aimRole.value)
    emits('update:modelValue',aimRole.value)
    localStorage.setItem(LocalFileAdreess.DAMAGE_TEST_SINGLE_ROLE,aimRole.value)
  }
  


  </script>
  
  <style lang="scss" scoped>
  .damageRoleView{
    width: 100%;
    height: 100%;
    display: inline;
    .aim{
      width: 20%;
      float: left;
    }
    .roleList{
    width: 80%;
    height: 100%;
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    
    .gallery {
    max-width: 130px;
    max-height: 160px;
    margin: 5px;
    border: 1px solid #ccc;
    height: 180px;
    }
    .gallery:hover {
    border: 1px solid #777;
    background-color: aqua;
    }
    .gallery img {
    width: 100%;
    height: 80%;
    }
    .desc {
    padding: 3px;
    text-align: center;
    }
  }
  }
    
  </style>