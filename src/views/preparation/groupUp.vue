<template>
  <el-container>
    <el-aside>
      <el-row>
        <div>筛选：</div>
        <el-select v-model="filiter.camp" clearable placeholder="选择阵营" style="width:100px">
          <el-option v-for="item in campList" :key="item" :label="item" :value="item"></el-option>
        </el-select>
        <el-select v-model="filiter.occupation" clearable placeholder="选择职业" style="width:100px">
          <el-option v-for="item in occupationName" :key="item" :label="item" :value="item"></el-option>
        </el-select>
      </el-row>
      <el-row class="showRole">
        <div v-for="e in roleList" :key="e.code" @click="selectRole(e.code)">
          <el-card class="gallery" :body-style="{ padding: '1px' }">
            <img :src="e.img" />
            <div style="font-size:small" class="desc">{{ e.name }}</div>
          </el-card>
        </div>
      </el-row>
    </el-aside>
    <el-main>
      <div style="Text-align:left;">点击你要更改的编队人员再点击你要添加的人形即可完成编队,双击退出编队</div>
      <div v-for="e in groupList" :key="e.index">
        <el-row>
          <div style="font-size:medium;width: 100px;">{{ e.name }}</div>
          <div v-for="(code, k) of e.group" :key="k" @click="selectGroupSite(e.index, k)">
            <el-card class="gallery" :body-style="{ padding: '1px' }">
              <img :src=getImg(code) />
              <div style="font-size:small" class="desc">{{ getRoleName(code) }}</div>
            </el-card>
          </div>
          <el-button @click="deleteGroup(e.index)">X</el-button>
        </el-row>
      </div>
      <el-button @click="addNewGroup">新增编队</el-button>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { occupationName } from "../../enum/Chinese";
import { friendCamp } from "../../utils/otherDataUtils"
import { roleListUtil } from "../tsUtils/roleInfo/function"

import { groupListUtil } from "../tsUtils/groupInfo/function"
import { getImg, getRoleName } from '../tsUtils/groupInfo/data'

const campList = friendCamp()
const { roleList, filiter } = roleListUtil()
const { groupList, addNewGroup, deleteGroup } = groupListUtil()
const target = ref({group:NaN,isolation:""})

const selectRole = (k: string) => {
  //点击角色
  if (target.value.isolation != ""){
    for (let i in groupList.value[target.value.group].group){
      if(groupList.value[target.value.group].group[i] == k){
        groupList.value[target.value.group].group[i] = ""
      }
    }
    groupList.value[target.value.group].group[target.value.isolation] = k
  }
};

const selectGroupSite = (index: number, isolation: string) => {
  //点击编队位置
  if(target.value.group == index && target.value.isolation == isolation){
    groupList.value[target.value.group].group[target.value.isolation] = ""
  }else{
    target.value.group = index
  target.value.isolation = isolation
  }
  
}

</script>
<style scoped>
.el-aside {
  text-align: center;
  line-height: 20px;
  width: 300px;

}

.el-main {
  line-height: 22px;
  --el-main-padding: 5px
}

body>.el-container {
  margin-bottom: 40px;
}

.el-form-item {
  margin-bottom: 1px;
}

.gallery {
  text-align: center;
  width: 70px;
  height: 90px;
}

.gallery:hover {
  border: 1px solid #777;
  background-color: aqua;
}

.gallery img {

  width: 40px;
  height: 65px
}
</style>
  